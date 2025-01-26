const express = require("express");

const { searchListing } = require("../../controllers/user/search-controller");

const router = express.Router();

router.get("/:keyword", searchListing);

module.exports = router;