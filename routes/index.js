const express = require("express");
const router = express.Router();

// Virtual database
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Message Board", messages: messages });
});

/* GET form (New Message) page */
router.get("/new", function (req, res, next) {
  res.render("form");
});

/* POST form (New Message) */
router.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
