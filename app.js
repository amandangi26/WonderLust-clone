if(process.env.NODE_ENV !="prodiution"){
  require('dotenv').config()
}


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;
const Listing = require("./models/listing.js");
// const Review = require("./models/review.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate"); //use to create template layout
// const wrapAsync = require("./utils/wrapAsync.js"); //for catch async error
const expressError = require("./utils/expressError.js"); //for catch async error
// const { listingSchema, reviewSchema } = require("./schema.js"); ///for schema
const session = require("express-session"); //for using session
const MongoStore = require('connect-mongo');///used to upload scssion related data to atlas
const flash = require("connect-flash");
//////////////////////////////////////// for local login signup by passport
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const dbUrl=process.env.ATLASDB_URL;
const secret = process.env.SECRET
//////////////////////////////////////// for local login signup by passport

const store = MongoStore.create({
  mongoUrl:dbUrl,
  crypto: {
    secret: secret
  },
  touchAfter: 24*3600
})//for session store on atlas

store.on("error",(err)=>{
  console.log("Error in mongo session store !", err);
})

const sessionOptions = {
  store,
  secret: secret,
  resave: false,
  saveUninitialized: true,

  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 100, // date for 1 week
    maxAge: 7 * 24 * 60 * 60 * 100, // date for 1 week
    httpOnly: true,
  },
};

app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

/////////for flash messege
app.use(session(sessionOptions));
app.use(flash()); ///asways requise and use flash before rout

//////////////////////////////////////////
///////for login and signup
app.use(passport.initialize()); //use to init passport
app.use(passport.session());
// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));
// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

////////////////////////////////////////

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser=req.user;
  next();
});

/////////////DEMO USER

// app.get("/demouser", async (req, res) => {
//   let fakeUser = new User({
//     email: "amandangi26@gmail.com",
//     username: "aman_dangi26",
//   });

//   let registeredUser = await User.register(fakeUser, "helloworld");

//   console.log(registeredUser);
//   res.send(registeredUser);
// });




const listingsRout = require("./routs/listingRout.js");
const reviewRout = require("./routs/reviewRout.js");
const userRout=require("./routs/userRout.js");
const { error } = require('console');
/////////database connectin////////z

main()
  .then((res) => {
    console.log("your db is connected !");
  })
  .catch((err) => {
    {
      console.log("Database connection error:", err);
    }
  });

async function main() {
  await mongoose.connect(dbUrl);
}

///////////

////////////

////for routs
app.use("/listings", listingsRout);
app.use("/listings/:id/reviews", reviewRout);
app.use("/",userRout)
/////////

///////////more

app.get("/", (req, res) => {
  res.redirect("/listings");
  
});


///////
app.all("*", (req, res, next) => {
  next(new expressError(404, "Page not found ! "));
});


app.use((err, req, res, next) => {
  let { statusCode=500, message = "Something went wrong!"} = err;
  res.status(statusCode).render("error.ejs",{message});
}
);
 

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
