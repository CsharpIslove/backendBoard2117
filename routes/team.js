const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.render("team.ejs"))
    .post((req, res) => res.send("POST"));
    router.route("/")
    .get((req, res) => res.render("board.ejs"))
module.exports = router;