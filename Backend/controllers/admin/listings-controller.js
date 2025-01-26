const { imageUploadUtil } = require("../../helpers/cloudinary");
const Listing = require("../../models/Listing");

const handleImageUpload = async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const url = "data:" + req.file.mimetype + ";base64," + b64;
    const result = await imageUploadUtil(url);

    res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error occured",
    });
  }
};


//add a new room
const addListing = async (req, res) => {
  try {
    const {
      image,
      title,
      description,
      seasons,
      countries,
      place,
      price,
      bookingPrice,
      totalStock,
      averageReview,
    } = req.body;

    console.log(averageReview, "averageReview");

    const newlyCreatedListing = new Listing({
      image,
      title,
      description,
      seasons,
      countries,
      place,
      price,
      bookingPrice,
      totalStock,
      averageReview,
    });

    await newlyCreatedListing.save();
    res.status(201).json({
      success: true,
      data: newlyCreatedListing,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occured",
    });
  }
};


const fetchAllListing = async (req, res) => {
  try {
    const listOfListing = await Listing.find({});
    res.status(200).json({
      success: true,
      data: listOfListing,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occured",
    });
  }
};



//edit a Listing
const editListing = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      image,
      title,
      description,
      seasons,
      countries,
      place,
      price,
      bookingPrice,
      totalStock,
      averageReview,
    } = req.body;

    let findListing = await Listing.findById(id);
    if (!findListing)
      return res.status(404).json({
        success: false,
        message: "Listing not found",
      });

    findListing.title = title || findListing.title;
    findListing.description = description || findListing.description;
    findListing.seasons = seasons || findListing.seasons;
    findListing.countries = countries || findListing.countries;
    findListing.place = place || findListing.place;
    findListing.price = price === "" ? 0 : price || findListing.price;
    findListing.bookingPrice =
    bookingPrice=== "" ? 0 : bookingPrice || findListing.bookingPrice;
    findListing.totalStock = totalStock || findProduct.totalStock;
    findListing.image = image || findListing.image;
    findListing.averageReview = averageReview || findListing.averageReview;

    await findListing.save();
    res.status(200).json({
      success: true,
      data: findListing,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occured",
    });
  }
};


//delete a Listing
const deleteListing = async (req, res) => {
  try {
    const { id } = req.params;
    const listing = await Listing.findByIdAndDelete(id);

    if (!listing)
      return res.status(404).json({
        success: false,
        message: "Listing not found",
      });

    res.status(200).json({
      success: true,
      message: "Listing delete successfully",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occured",
    });
  }
};




module.exports={
    handleImageUpload,
    addListing,
    fetchAllListing,
    editListing,
    deleteListing,
}