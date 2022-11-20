const express=require("express");
const app=express();
const path=require("path");
const port=process.env.PORT ||3000;


//set meddle ware
//set static file
const hbs=require("hbs");
const staticPath=path.join(__dirname,"../public");
const templetsPath=path.join(__dirname,"../templets/views");
const partialsPath=path.join(__dirname,"../templets/partials");
console.log(templetsPath);
console.log(staticPath);
// const hbs=require("hbs");
app.set('view engine',"hbs");
 app.use(express.static(staticPath));
 
 app.set("views",templetsPath);
 hbs.registerPartials(partialsPath);


app.get("",(req,res)=>{
    res.render("index")
});
app.get("/about",(req,res)=>{
    res.render('about');
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.get("*",(req,res)=>{

    res.render('error404');
})
app.listen(port,()=>{
    console.log(`surver run on the port at ${port}`)
})