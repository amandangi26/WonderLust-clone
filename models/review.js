const mongoose=require("mongoose");
const moment = require('moment');



const reviewSchema=new mongoose.Schema({

    comment:{
        type:String,
        required:true
    },

    rating:{
        type:Number,
        min:1,
        max:5,
        required:true
        
    },

    createdAt:{
        type :String,
        default:moment(Date.now()).format('DD-MM-YYYY')

    },

    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

    

});

const Review=mongoose.model("Review",reviewSchema);

module.exports=Review;