var express = require("express");
var router = express.Router();
var deviceServices = require("../services/devicesService");

router.get("/", function(req, res, next) {
  var sensors = deviceServices.getSensors();
  res.render("index", { title: "Blog", sensors: sensors });
});

module.exports = router;