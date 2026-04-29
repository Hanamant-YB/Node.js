const mongoose = require('mongoose');
const bcrypt  = require('bcrypt');
//this is person schema created
const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        // required:false
        type:Number
    },
    work:{
        type:String,
        enum:['chef', 'waiter', 'manager'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,

    },
    salary:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        requird:true
    }
});

personSchema.pre('save',async function(){
    const person = this;

    if(!person.isModified('password')){
        return next()
    }
    try{
        // const salt = "this is salt";// we can do this also our own salt but it may guess by hacker so that we use generation by crypt
        const salt = await bcrypt.genSalt(10);
        //convert that plain string into hashed 
        const hashedpassword = await bcrypt.hash(person.password, salt)
        person.password = hashedpassword;
        next();
    }catch(err){
        // next(err);
        // throw err
    }
});

personSchema.methods.comparePassword = async function(candidatePassword){

    try{
        const isMatched = await bcrypt.compare(candidatePassword, this.password);

        return isMatched;
    }catch(err){
        // next(err);
        throw err;
    }
}

//hanamant = ksjdfsdfsdhfoihfoius;
//login = abhi;

//ksjdfsdfsdhfoihfoius ---> extract the salt only from this 
//extracted salt + abhi ---> again hased then ---> dfhhfiuewifghewrgfiwegwg;
// now compare both (ksjdfsdfsdhfoihfoius === dfhhfiuewifghewrgfiwegwg)   this is it works

//create person model  
const Person = mongoose.model('Person',personSchema);
module.exports = Person;