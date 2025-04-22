const mongoose=require('mongoose');
const initData=require("./data2.js");
const Listing=require("../models/listing.js");

/////////database connectin////////

main().then((res)=>{
    console.log("DataBase connected");
})
.catch((err)=>{{
    console.log(err);
}});


async function main(){
await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
console.log("db connected");
}


async function initDB(){
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj,owner:'666b1b545a4ad800efff26cb',}));
    await Listing.insertMany(initData.data);
    console.log("done");

}

initDB();

