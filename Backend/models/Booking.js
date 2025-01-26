const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
  },
  roomType: {
    type: String,
    required: true,
    enum: ["single", "double", "suite", "cottage"],
  },
  numberOfGuests: {
    type: Number,
    required: true,
    min: 1,
  },
  specialRequests: {
    type: String,
    trim: true,
  },
  proofOfIdentity: {
    type: String,
    required: true,
    enum: ["passport", "driversLicense", "nationalId"],
  },
  identityDocumentNumber: {
    type: String,
    required: true,
    unique: true,
  },
  // identityProofFile: {
  //   type: String, 
  //   // required: true,
  // },
  paymentMethod: {
    type: String,
    required: true,
    enum: ["creditCard", "debitCard", "paypal", "bankTransfer"],
  },
  status: { type: String, enum: ["pending", "rejected", "confirmed"], default: "pending" },
  // acceptTerms: {
  //   type: Boolean,
  //   // required: true,
  //   default: false
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
