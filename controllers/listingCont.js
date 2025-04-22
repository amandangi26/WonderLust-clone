const Listing = require("../models/listing.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
  // res.send(`<h1>started......</h1>`);
  const allListings = await Listing.find({});
  // console.log(allListings);
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  // console.log(listing);
  if (!listing) {
    req.flash("error", "Listing does not exist !");
    res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing does not exist !");
    res.redirect("/listings");
  }

  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_250,w_350");
  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.createListing = async (req, res) => {
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();
  console.log(response.body.features[0].geometry);
  // if (!req.body.listing) {
  //   throw new expressError(400, "Please Send valid data !");
  // }

  let url = req.file.path;
  let filename = req.file.filename;
  console.log(url, " ", filename);
  let listing = req.body.listing;
  listing.owner = req.user._id;
  listing.image = { url, filename };
  listing.geometry = response.body.features[0].geometry;
  let saveListing = await Listing.create(listing); //or we can do== new Listing(listing).save();
  req.flash("success", "New Listing Created !");
  console.log(saveListing);

  res.redirect("/listings");
};

module.exports.editListing = async (req, res) => {
  // if (!req.body.listing) {
  //   throw new expressError(400, "Please Send valid data !");
  // }

  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();
  console.log(response.body.features[0].geometry);

  const { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(
    id,
    { ...req.body.listing },
    { runValidators: true }
  );
  listing.geometry = response.body.features[0].geometry;
  await listing.save();
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    let image = { url, filename };
    listing.image = image;
    await listing.save();
  }
  req.flash("success", "Listing Updated Successfully !");
  res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  let deleted = await Listing.findByIdAndDelete(id);
  console.log(deleted);
  req.flash("success", "Listing Deleted Successfully !");
  res.redirect("/listings");
};
