const Listing=require("./models/listing")
const expressError = require("./utils/expressError"); //for catch async error
const {listingSchema} = require("./schema.js"); ///for schema
const {reviewSchema} = require("./schema.js"); ///for schema validation
const Review = require("./models/review.js");


module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
      req.session.redirectUrl=req.originalUrl;
        req.flash('error', 'You must be signed !');
        return res.redirect("/login");
      }
      next()
}

module.exports.saveRedirectUrl=(req,res,next)=>{

  if(req.session.redirectUrl){
  res.locals.redirectUrl=req.session.redirectUrl
}
next();

}


module.exports.isOwner=async(req,res,next)=>{
  const { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing.owner.equals(res.locals.currUser._id)) {
  req.flash("error", "You are not the owner of this listing")
   return res.redirect(`/listings/${id}`)
   
  }
  next();
}


///it is a function for joi schema validation///
module.exports.validationError= function (req, res, next) {
  let { error } = listingSchema.validate(req.body); ///it is for joi schema validation///

  if (error) {
    throw new expressError(400, error.details[0].message);
  } else {
    next();
  }
};

//it is a function for review schema validation useing joi///
module.exports.validateReview= function (req, res, next) {
  let { error } = reviewSchema.validate(req.body); ///it is for joi schema validation///

  if (error) {
    throw new expressError(400, error.details[0].message);
  } else {
    next();
  }
};

// for review owner check
module.exports.isReviewAuthor=async(req,res,next)=>{
  const { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
  if (!review.author.equals(res.locals.currUser._id)) {
  req.flash("error", "You are not the owner of this review")
   return res.redirect(`/listings/${id}`)
   
  }
  next();
}