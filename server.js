const express = require("express");
const app = express()
const ejs = require('ejs')
const port = 3000;
app.set('view engine', 'ejs')
app.use("/", require("./routes/index"));
app.use("/board", require("./routes/board"));
app.use("/home", require("./routes/index"));
app.use("/team", require("./routes/team"));
app.use("/myBoards", require("./routes/myBoards"));
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);
