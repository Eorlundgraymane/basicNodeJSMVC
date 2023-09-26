const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const ejs = require('ejs');

const database = require("./database/database");
const relation = require("./database/relation");
const masterRouter = require("./routers/masterRouter");

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json({ extended: true }));

app.set('views','views');
app.set('view-engine',ejs);

app.use(masterRouter);

database.sync().then(() => {
    app.listen(PORT, (req, res) => {
        console.log("YOMS is Online!");
    });
})