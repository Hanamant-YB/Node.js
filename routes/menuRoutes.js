const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem')
router.post('/', async(req,res) => {
  try{
        const data = req.body;

        const newItem = new MenuItem(data);

        const response = await newItem.save();
        console.log('data saved')
        res.status(200).json(response);
  }
  catch(error){
        console.log(error);
        res.status(500).json(
          {
            error:'Internal server error'
          }
        )
  }
})

router.get('/',async(req,res)=>{
      try{
        const data = await MenuItem.find();
        console.log('data fetched')
        res.status(200).json(data);
      }
      catch(error){
        console.log(error);
        res.status(500).json({
          error:'internal server error'
        })
      }
})

router.get('/:tasteType',async(req,res)=>{
    try{
        const tasteType = req.params.tasteType;
        if(tasteType == "sour" || tasteType == "sweet" || tasteType == "spicy"){
            const response = await MenuItem.find({taste:tasteType});
            console.log('data fetched');
            res.status(200).json(response);
        }else{
            console.log("invalid tastes and those are not defined");
            res.status(404).json({
                error:"invalid tastes and those are not defined"
            })
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({
          error:'internal server error'
        })
    }
})
module.exports = router;