const express = require('express');
const path = require('path');
//const hbs = require('hbs');
const app  = express();
const dir = path.join(__dirname ,"../public");
const views = path.join(__dirname , "../views");
app.use(express.static(dir));
app.set('view engine', 'hbs')
app.set('views', views);
const port = process.env.PORT || 4000;


app.use(express.static(views));
app.get("", (req,res) => {
res.render('index');
})

app.listen(port , () => {
     console.log("server has started on port "  +  port);
})