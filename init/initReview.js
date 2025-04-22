const mongoose = require('mongoose');
const Review=require("../models/review.js");




/////////database connectin////////

main().then((res)=>{
    console.log("DataBase connected");
})
.catch((err)=>{{
    console.log(err);
}});


async function main(){
await mongoose.connect("mongodb://127.0.0.1:27017/review");
console.log("db connected");
}





// Sample review data
const sampleReviews = [
    { review: "Great product, loved it!", rating: 5 },
    { review: "Could be better, but it's okay.", rating: 3 },
    { review: "Not satisfied with the quality.", rating: 2 },
    { review: "Amazing service!", rating: 5 },
    { review: "Average experience, nothing special.", rating: 3 }
];

// Function to insert sample data into the database
async function insertSampleData() {
    try {
        // Insert each review document into the database
        await Review.insertMany(sampleReviews);
        console.log("Sample data inserted successfully.");
    } catch (err) {
        console.error("Error inserting sample data:", err);
    }
}

// Call the function to insert sample data
insertSampleData();
