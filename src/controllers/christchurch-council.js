// URL to fetch
const url =
  'https://ccc.govt.nz/services/rubbish-and-recycling/collections/getProperty?ID=';

async function getChristchurchCouncilDates(req, res) {
  try {
    const { addressId } = req.params;

    if (!addressId) throw new Error('address id is invalid');

    // Fetch HTML content from the URL
    const response = await fetch(`${url}${addressId}`);

    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    console.log(JSON.stringify(response, null, 2));

    res.sendStatus(200);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
}

// Export the function to make it accessible in other files
module.exports = {
  getChristchurchCouncilDates,
};
