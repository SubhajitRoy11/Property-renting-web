const Listing = require("../../models/Listing");


const getFilteredListings=async(req,res)=>{
    try{
        const { seasons = [], countries = [], sortBy = "price-lowtohigh" } = req.query;

        let filters = {};

        if (seasons.length) {
        filters.seasons = { $in: seasons.split(",") };
        }

        if (countries.length) {
        filters.countries = { $in: countries.split(",") };
        }

        let sort = {};

        switch (sortBy) {
        case "price-lowtohigh":
            sort.price = 1;

            break;
        case "price-hightolow":
            sort.price = -1;

            break;
        case "title-atoz":
            sort.title = 1;

            break;

        case "title-ztoa":
            sort.title = -1;

            break;

        default:
            sort.price = 1;
            break;
    }
    const listings = await Listing.find(filters).sort(sort);


        res.status(200).json({
            success:true,
            data:listings,
        })
        console.log(listings);
    }catch(error){
        console.log(error);
        res.status(500).json({
        success: false,
        message: "Some error occured",
        });
    }
}


const getListingDetails = async (req, res) => {
    try {
      const { id } = req.params;
      const listing = await Listing.findById(id);
  
      if (!listing)
        return res.status(404).json({
          success: false,
          message: "Room not found!",
        });
  
      res.status(200).json({
        success: true,
        data: listing,
      });
    } catch (e) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Some error occured",
      });
    }
  };


module.exports = { getFilteredListings,getListingDetails };