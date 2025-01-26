const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema(
  {
    image: String,
    title: String,
    description: String,
    seasons: String,
    countries: String,
    place: String,
    price: Number,
    bookingPrice: Number,
    totalStock: Number,
    averageReview: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Listing", ListingSchema);