const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js"); //for catch async error
const expressError = require("../utils/expressError.js"); //for catch async error
// const { listingSchema, reviewSchema } = require("../schema.js"); ///for schema
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner } = require("../middleware.js");
const { validationError } = require("../middleware.js");
const listingController = require("../controllers/listingCont.js");
const multer  = require('multer')
const {storage}=require("../cloudConfig.js")
const upload = multer({storage});


router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    validationError,
    upload.single("listing[image]"),
    wrapAsync(listingController.createListing)
  );
  /////////
// .post(upload.single("listing[image]"),(req,res)=>{
//   console.log(req.file);
//   res.send(req.file)
// })
  router.get("/new", isLoggedIn, listingController.renderNewForm);

////////////
router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    validationError,upload.single("listing[image]"),
    wrapAsync(listingController.editListing)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));
  

///////////

router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

module.exports = router;

// /////// index rout
// router.get(
//   "/",
//   wrapAsync(listingController.index)
// );

////////////new rout

////show rout

// router.get(
//   "/:id",
//   wrapAsync(listingController.showListing)
// );

///////////edit rout

// post req for new listing
///create rout
// router.post(
//   "/",isLoggedIn,
//   validationError,
//   wrapAsync(listingController.createListing)
// );

///////EDIT update rout

// router.put(
//   "/:id",
//   isLoggedIn,
//   isOwner,
//   validationError,
//   wrapAsync(listingController.editListing)
// );

///////delete rout

// router.delete(
//   "/:id",
//   isLoggedIn,
//   isOwner,
//   wrapAsync(listingController.deleteListing)
// );
