const express=require("express");

const {userBooking,getAllBookingByUser,getBookingDetails}=require("../../controllers/user/booking-controller")
const router = express.Router();

router.post("/booking",userBooking);
router.get("/list/:userId", getAllBookingByUser);
router.get("/details/:id", getBookingDetails);


module.exports=router;