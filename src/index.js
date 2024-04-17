const express = require("express");
const setupLogging = require("./middleware/logging.js");
const setupCors = require("./middleware/cors.js");
const app = express();
const port = 3000;
const {
  getAucklandCouncilDates,
} = require("./controllers/auckland-council.js");

setupLogging(app);
setupCors(app);

// Create a router for API routes with base path '/api'
const apiRouter = express.Router();
app.use("/api", apiRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

// Graceful shutdown
process.on("SIGINT", () => {
  console.log("Received SIGINT. Shutting down gracefully...");
  server.close(() => {
    console.log("Server has been shut down.");
    process.exit(0);
  });
});

apiRouter.get("/auckland-council-dates/:addressId", getAucklandCouncilDates);

app.listen(port, () => console.log(`server listening on port ${port}!`));
