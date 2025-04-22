const mongoose=require("mongoose");
const Review=require("./review.js")
const User =require("./user.js");

const Schema= mongoose.Schema;

const listingSchema=new Schema({
    title:{
        type:String,
        required:[true,"Please provide a title for the listing."]
    },
    description: {
       type: String,
       required:true
    },
    image:{
           url:{
            type: String,
            set: (value) => value === "" ? "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : value,
            default: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

           },
           filename:String
    },
    price:{
       type: Number,
       min: [1, "Price must be positive number."],
       required:true

    },
    location:{
        type:String,
        required:true

    },
    country:{
        type:String,
        required:true
        
    },
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review"
        }
    ],
   owner:{
    type:Schema.Types.ObjectId,
    ref:"User",
    required:true
   },
   geometry:{
    type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ['Point'], // 'location.type' must be 'Point'
        required: true
      },
      coordinates: {
        type: [Number],
        required: true
      }
   }

});
////for deleting reviews on post of listing deletion

listingSchema.post("findOneAndDelete",async(listing)=>{
    if (listing) {
        await Review.deleteMany({_id:{$in:listing.reviews}});
        console.log("all reviews deleted for this listing"); 
    }

});

const Listing=mongoose.model("Listing",listingSchema);
module.exports = Listing;

