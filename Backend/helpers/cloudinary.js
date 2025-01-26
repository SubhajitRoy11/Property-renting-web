const cloudinary = require("cloudinary").v2;
const multer=require("multer")



cloudinary.config({
    cloud_name: "dzoml7pd8",
    api_key: "663123373456939",
    api_secret: "MppW2fv_zQVUdv8Y8WkAgNi1TU0",
})

const storage=new multer.memoryStorage();

async function imageUploadUtil(file){
    const result=await cloudinary.uploader.upload(file,
        {
            resource_type:"auto",
        }
    )

    return result;
}

const upload=multer({storage});

module.exports={upload,imageUploadUtil};