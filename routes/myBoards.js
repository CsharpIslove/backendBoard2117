const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.render(__dirname + "/views/myBoards.ejs"))
    router.route("/home")
    .get((req, res) => res.render(__dirname + "/views/index.ejs"))
module.exports = router;