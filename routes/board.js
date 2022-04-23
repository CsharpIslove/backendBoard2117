const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.render(__dirname + "/views/board.ejs"))
    router.route("/home")
    .get((req, res) => res.render(__dirname + "/views/index.ejs"))
module.exports = router;