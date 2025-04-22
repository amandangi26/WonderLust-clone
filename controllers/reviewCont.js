const Review = require("../models/review.js");
const Listing = require("../models/listing.js");




module.exports.createReview=async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    console.log(listing);
    let { review } = req.body;
    review.author=req.user._id;
    console.log(review); //woking
    let reviewObj = new Review(review);
    await reviewObj.save();
    listing.reviews.push(reviewObj);
    await listing.save();
    console.log("review saved");
    req.flash("success","Review Created Successfully !");
    res.redirect(`/listings/${listing._id}`);
  }

  async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    console.log(listing);
    let { review } = req.body;
    console.log(review); //woking
    let reviewObj = new Review(review);
    await reviewObj.save();
    listing.review.push(reviewObj);
    await listing.save();
    console.log("review saved");
    res.redirect(`/listings/${listing._id}`);
  }



module.exports.deleteReview=async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    console.log("Review Deleted!");
    req.flash("success","Review Deleted Successfully !");
    res.redirect(`/listings/${id}`);
  }