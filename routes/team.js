const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.render(__dirname + "/views/team.ejs"))
    .post((req, res) => res.send("POST"));
    router.route("/")
    .get((req, res) => res.render(__dirname + "/views/board.ejs"))
module.exports = router;