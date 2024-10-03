const url =
  'https://api.hcc.govt.nz/FightTheLandFill/get_Collection_Dates?address_string=';

async function getHamiltonCouncilDates(req, res) {
  try {
    const { address_string } = req.query;

    if (!address_string) throw new Error('address_string is invalid');

    const response = await fetch(`${url}${address_string}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    const { Address, RedBin, YellowBin } = data[0];

    const output = {
      address: Address,
    };

    output.rubbishDate = RedBin;
    output.recycleDate = YellowBin;

    res.status(200).send(output);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
}

module.exports = {
  getHamiltonCouncilDates,
};
