// dependencies
var express = require("express");
var burger = require("../models/burger.js");

// create router
var router = express.Router();

// ==============================================================================

// get all routes
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    res.render("index", { burgers: data });
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function (result) {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  burger.updateOne({ devoured: req.body.devoured }, condition, function (result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  burger.deleteOne(condition, function (result) {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// ==============================================================================

// export routes for server.js to use
module.exports = router;
