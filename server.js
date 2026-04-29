const express = require('express');
const app = express();
const db = require('./db.js');
require('dotenv').config()
const passport = require("./auth.js")
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//middleware function
const logRequest = (req,res,next) =>{
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}` );
    next();// move to the next phase 
}

app.use(logRequest);

app.use(passport.initialize());

const authentication = passport.authenticate("local",{session:false});

app.get('/',(req,res)=>{
  res.send('welcome to hotel');
  console.log('welcome to hotel');
});

// app.use(logRequest);


// passport.use(new localStrategy(async(USERNAME,PASSWORD,done) =>{
//     //authentication logic here
//     try{
//         console.log('Recived credential ',USERNAME,PASSWORD);
//         const user = await Person.findOne({
//           username:USERNAME
//         })
//         if(!user){
//           return done(null,false,{message:'increament username'});
//         }

//         const isPasswordMatch = user.password === PASSWORD? true : false;
//         if(isPasswordMatch){
//           return done(null,user);
//         }else{
//           return done(null,false, {message:'Incorrect Password.'})
//         }
//     }catch(error){
//         return done(error);
//     }
// }))

// app.use(passport.initialize());



// app.get('/',passport.authenticate('local',{session:false}),(req,res)=>{
//     console.log('welcome to the hotel 🏠');
//     res.send('welcome to the hotel 🏠');
// })


const menuRouter = require('./routes/menuRoutes');
const personRoutes = require('./routes/personRoutes');


app.use('/menu', menuRouter);
app.use('/person',personRoutes);
// console.log("DB URL exists:", !!process.env.DB_URL);


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('✅ Server is running on port:3000')
})