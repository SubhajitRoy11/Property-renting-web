const Booking = require("../../models/Booking");

const getAllBookingOfAllUsers = async (req, res) => {
  try {
    const book = await Booking.find({});

    if (!book.length) {
      return res.status(404).json({
        success: false,
        message: "No Booking found!",
      });
    }

    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

const getBookingDetailsForAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const Book = await Booking.findById(id);

    if (!Book) {
      return res.status(404).json({
        success: false,
        message: "Booking not found!",
      });
    }

    res.status(200).json({
      success: true,
      data: Book,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

const updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const book = await Booking.findById(id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Booking not found!",
      });
    }

    await Booking.findByIdAndUpdate(id, { status });

    res.status(200).json({
      success: true,
      message: "Booking status is updated successfully!",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

module.exports = {
  getAllBookingOfAllUsers,
  getBookingDetailsForAdmin,
  updateBookingStatus,
};