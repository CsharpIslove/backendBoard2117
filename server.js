// const express = require("express");
// const app = express();
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');
// const ejs = require('ejs');
// const port = 3000;
//
//
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
//
// const UserRoute = require('./routes/User')
// app.use('/user',UserRoute)
//
// const dbConfig = require('./config/database.config.js');
// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// mongoose.connect(dbConfig.url, {
//     useNewUrlParser: true
// }).then(() => {
//     console.log("Database Connected Successfully!!");
// }).catch(err => {
//     console.log('Could not connect to the database', err);
//     process.exit();
// });
//
//
//


// app.use("/", require("./routes/index"));
// app.use("/board", require("./views/board.ejs"));
// app.use("/home", require("./routes/index"));
// app.use("/team", require("./routes/team"));
// app.use("/myBoards", require("./routes/myBoards"));
// app.use("/find", require("./routes/find"));
// app.use("/update", require("./routes/update"));
// app.use("/delete", require("./routes/delete"));
//
// app.listen(port, () =>
//     console.log(`App listening at http://localhost:${port}`)
// );
const express = require('express');
const bodyParser = require('body-parser');
const ejs=require('ejs')
const methodOverride = require('method-override')
const swaggerUi = require('swagger-ui-express')
swaggerDocument = require('./swagger.json');
const app = express();
//const port = 3000
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')
app.use('/user', require('./routes/User'))
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const {router} = require("express/lib/application");
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Database Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});
const connectDB = require('./server/database/connection')
connectDB();

app.use("/", require("./routes/index"));
// app.get('/', (req, res) => {
//     res.render('index');
// });
app.use('/board', require('./routes/board'))
// app.get('/board', (req, res) => {
//     res.render('board');
// });
app.use("/myBoards", require("./routes/myBoards"));
// app.get('/myBoards', (req, res) => {
//     res.render('myBoards');
// });
app.use("/team", require("./routes/team"));
// app.get('/team', (req, res) => {
//     res.render('team');
// });
app.use("/home", require("./routes/index"));
// app.get('/home', (req, res) => {
//     res.render('index');
// });
app.use("/results", require("./routes/results"));
// app.get('/results', (req, res) => {
//     res.render('/views/results');
// });
app.use("/find", require("./routes/find"));
// app.get('/find', (req, res) => {
//     res.render('find');
// });
app.use("/update", require("./routes/update"));
// app.get('/update', (req, res) => {
//     res.render('update');
// });
app.use("/delete", require("./routes/delete"));
// app.get('/delete', (req, res) => {
//     res.render('delete');
// });


let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}


app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
});