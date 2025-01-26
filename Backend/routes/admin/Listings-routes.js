const express = require("express");

const {handleImageUpload,
    addListing,
    editListing,
    fetchAllListing,
    deleteListing,
}=require("../../controllers/admin/listings-controller")


const { upload } = require("../../helpers/cloudinary");

const router = express.Router();

router.post("/upload-image", upload.single("my_file"), handleImageUpload);
router.post("/add", addListing);
router.put("/edit/:id", editListing);
router.delete("/delete/:id", deleteListing);
router.get("/get", fetchAllListing);

module.exports = router;