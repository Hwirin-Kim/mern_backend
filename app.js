const express = require("express");
const bodyParser = require("body-parser");

const placeRoutes = require("./routes/places-routes");

const app = express();

app.use("/api/places", placeRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "알수없는 오류 발생" });
});

app.listen(5000);
