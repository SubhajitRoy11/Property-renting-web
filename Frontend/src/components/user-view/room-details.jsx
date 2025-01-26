

import { StarIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { Separator } from "../ui/separator";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { setListingDetails } from "@/store/user/Listings-slice";


const capitalizeWords = (str) => {
  if (!str) return "";
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

function ListingDetailsDialog({ open, setOpen, roomDetails }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const handleDialogClose = () => {
    setOpen(false);
    dispatch(setListingDetails(null)); 
  };

  useEffect(() => {
    if (!open) {
      dispatch(setListingDetails(null)); 
    }
  }, [open, dispatch]);

  return (
    <Dialog open={open} onOpenChange={handleDialogClose}>
      <DialogContent className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:p-12 max-w-[90vw] sm:max-w-[80vw] lg:max-w-[70vw]">
        
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <img
            src={roomDetails?.image}
            alt={roomDetails?.title}
            className="aspect-square w-full object-cover"
          />
        </div>

        
        <div>
          
          <h1 className="text-4xl font-bold text-gray-800">
            {capitalizeWords(roomDetails?.title)}
          </h1>

         
          {roomDetails?.seasons && (
            <p className="text-md font-medium text-gray-600 mt-4">
              <strong>Seasons:</strong> {capitalizeWords(roomDetails?.seasons)}
            </p>
          )}

          
          {roomDetails?.countries && (
            <p className="text-md font-medium text-gray-600 mt-2">
              <strong>Available In:</strong> {capitalizeWords(roomDetails?.countries)}
            </p>
          )}

          
          <p className="text-lg text-muted-foreground mt-4">
            {roomDetails?.description}
          </p>

          
          <div className="flex items-center justify-between mt-6">
            <p
              className={`text-2xl font-semibold ${
                roomDetails?.bookingPrice > 0
                  ? "line-through text-gray-400"
                  : "text-primary"
              }`}
            >
              ${roomDetails?.price}
            </p>
            {roomDetails?.bookingPrice > 0 && (
              <p className="text-3xl font-bold text-primary">
                ${roomDetails?.bookingPrice}
              </p>
            )}
          </div>

          
          {roomDetails?.rating && (
            <div className="flex items-center mt-4 gap-1">
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  className={`h-5 w-5 ${
                    index < roomDetails?.rating
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm text-gray-600 ml-2">
                {roomDetails?.rating} / 5
              </span>
            </div>
          )}

          
          <div className="mt-8">
            {roomDetails?.totalStock === 0 ? (
              <Button
                className="w-full bg-gray-300 cursor-not-allowed"
                disabled
              >
                Room Not Available
              </Button>
            ) : (
              <Button
                className="w-full bg-primary hover:bg-primary-dark text-white"
                onClick={() => navigate("/user/contract")}
              >
                Book Now
              </Button>
            )}
          </div>
          <Separator className="my-8" />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ListingDetailsDialog;
