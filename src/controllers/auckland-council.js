const cheerio = require("cheerio");
const { Response } = require("express");

// URL to fetch
const url =
  "https://www.aucklandcouncil.govt.nz/rubbish-recycling/rubbish-recycling-collections/Pages/collection-day-detail.aspx?an=";

// Function to fetch HTML content asynchronously
async function getAucklandCouncilDates(req, res) {
  try {
    const { addressId } = req.params;

    if (!addressId) throw error("address id is invalid");

    // Fetch HTML content from the URL
    const response = await fetch(`${url}${addressId}`);

    // Check if the request was successful
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Return the response text as HTML
    const responseText = await response.text();

    const $ = cheerio.load(responseText);

    const addressBlock = $(".m-b-2");
    const collectionInfo = $(".collectionDayDate");

    // RUBBISH INFO
    const rubbishInfo = collectionInfo.eq(0);
    const rubbishDate = rubbishInfo.find("strong").text();

    // FOODSCRAPS INFO
    const foodscrapsInfo = collectionInfo.eq(1);
    const foodscrapsDate = foodscrapsInfo.find("strong").text();

    // RECYCLE INFO
    const recycleInfo = collectionInfo.eq(2);
    const recycleDate = recycleInfo.find("strong").text();

    // ADDRESS INFO
    const address = addressBlock.eq(0).text();

    res.send({
      rubbishDate,
      recycleDate,
      foodscrapsDate,
      address,
    });
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
}

// Export the function to make it accessible in other files
module.exports = {
  getAucklandCouncilDates,
};
