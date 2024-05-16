const express = require('express');
const setupLogging = require('./middleware/logging.js');
const setupCors = require('./middleware/cors.js');
const app = express();
const port = 3000;
const {
  getAucklandCouncilDates,
} = require('./controllers/auckland-council.js');
const {
  getChristchurchCouncilDates,
} = require('./controllers/christchurch-council.js');

setupLogging(app);
setupCors(app);

// Create a router for API routes with base path '/api'
const apiRouter = express.Router();
app.use('/api', apiRouter);

// Error handling middleware
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

apiRouter.get('/auckland-council-dates/:addressId', getAucklandCouncilDates);
apiRouter.get(
  'c:addressId',
  getChristchurchCouncilDates
);

app.listen(port, () => console.log(`server listening on port ${port}!`));
