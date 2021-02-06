import express = require("express");
import getGeneralPaces from "./pace-calculator";
var app = express();
app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("pugindex", { title: "Pug", message: "Hello there" });
});

app.get("/calc", (req, res) => {
  const mins = Number.parseInt(req.query.minutes as string) ?? 0;
  const secs = Number.parseInt(req.query.seconds as string) ?? 0;
  const list = getGeneralPaces(mins, secs);
  res.render("pugindex", { list: list, minutes: mins, seconds: secs });
});

app.listen(3000, function () {
  console.log("App listening on port 3000");
});
