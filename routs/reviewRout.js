const express = require("express");
const router = express.Router({ mergeParams: true });
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js"); //for catch async error
const expressError = require("../utils/expressError.js"); //for catch async error
const Listing = require("../models/listing.js");
const {validateReview} =require("../middleware.js");
const {isLoggedIn,isOwner}=require("../middleware.js");
const {isReviewAuthor}=require("../middleware.js");
const reviewController=require("../controllers/reviewCont.js")


////////create reviewes rout

router.post(
  "/",isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview)
);
/////////delete rout for review
router.delete(
  "/:reviewId",isLoggedIn,isReviewAuthor,
  wrapAsync(reviewController.deleteReview)
);
module.exports = router;
