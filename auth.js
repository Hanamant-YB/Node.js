const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const Person = require('./models/Person')


passport.use(new localStrategy(async(USERNAME,PASSWORD,done)=>{
  try{
    // console.log("Recived credentials",USERNAME,PASSWORD);
    const user =  await Person.findOne({username:USERNAME});

    if(!user){
      return done(null,false,{message:"Incorrect Username"});
    }

    const isPassword = await user.comparePassword(PASSWORD);

    if(isPassword){
      return done(null,user);
    }else{
      return done(null,false,{message:"Incorrect Password"});
    }
  }catch(err){
    return done(err);
  }

}));

module.exports = passport;

