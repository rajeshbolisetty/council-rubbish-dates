// URL to fetch
const url =
  'https://ccc.govt.nz/services/rubbish-and-recycling/collections/getProperty?ID=';

async function getChristchurchCouncilDates(req, res) {
  try {
    const { addressId } = req.params;

    if (!addressId) throw new Error('address id is invalid');

    // Fetch  data URL
    const response = await fetch(`${url}${addressId}`);

    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    const { address, bins } = data;

    const rubbishDates = bins?.collections || [];

    const output = {
      address,
    };

    rubbishDates.forEach((date) => {
      if (date.material === 'Garbage')
        output.rubbishDate = date.next_planned_date;
      if (date.material === 'Recycle')
        output.recycleDate = date.next_planned_date;
      if (date.material === 'Organic')
        output.foodscrapsDate = date.next_planned_date;
    });

    res.status(200).send(output);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
}

// Export the function to make it accessible in other files
module.exports = {
  getChristchurchCouncilDates,
};
