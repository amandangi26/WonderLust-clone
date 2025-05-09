// ////joi is used for schema validation
const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.object().allow("", null),
    price: Joi.number().required().min(1),
    location: Joi.string().required(),
    country: Joi.string().required(),
  })
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});
