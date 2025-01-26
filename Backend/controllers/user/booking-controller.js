const Booking=require("../../models/Booking");


const userBooking=async(req,res)=>{
    try{
        const {
            fullName,
            email,
            phone,
            checkInDate,
            checkOutDate,
            roomType,
            numberOfGuests,
            specialRequests,
            proofOfIdentity,
            identityDocumentNumber,
            paymentMethod,
            acceptTerms,
        }=req.body;

        

        const booking = new Booking({
            fullName,
            email,
            phone,
            checkInDate,
            checkOutDate,
            roomType,
            numberOfGuests,
            specialRequests,
            proofOfIdentity,
            identityDocumentNumber,
            // identityProofFile, 
            paymentMethod,
            acceptTerms,
          });

          await booking.save();
          res.status(200).json({
            success:true,
            message:"Data Submitted successfully",
            
        })

    }catch(e){
        console.log(e);
        res.status(500).json({
        success: false,
        message: "Error",
        });
    }
}


const getAllBookingByUser = async (req, res) => {
    try {
      const { userId } = req.params;
  
      const book = await Booking.find({ userId });
  
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
  
  const getBookingDetails = async (req, res) => {
    try {
      const { id } = req.params;
  
      const book = await Booking.findById(id);
  
      if (!book) {
        return res.status(404).json({
          success: false,
          message: "Booking not found!",
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


module.exports={userBooking,getAllBookingByUser,getBookingDetails}