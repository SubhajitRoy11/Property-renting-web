const express = require("express");

const {
  getFilteredListings,
  getListingDetails,
} = require("../../controllers/user/listing-controller");

const router = express.Router();

router.get("/get", getFilteredListings);
router.get("/get/:id", getListingDetails);

module.exports = router;