const express = require("express");

const {
    getAllBookingOfAllUsers,
    getBookingDetailsForAdmin,
    updateBookingStatus,
} = require("../../controllers/admin/bookingDetails-controller");

const router = express.Router();

router.get("/get", getAllBookingOfAllUsers);
router.get("/details/:id", getBookingDetailsForAdmin);
router.put("/update/:id", updateBookingStatus);

module.exports = router;