const morgan = require("morgan");

const skipLog = (req) => {
  const url = req.url;

  if (url.includes("ping")) return true;

  return false;
};

module.exports = (app) => {
  app.use(morgan("short", { skip: skipLog }));
};
