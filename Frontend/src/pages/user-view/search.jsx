



import ListingDetailsDialog from "@/components/user-view/room-details";
import BookingListingTile from "@/components/user-view/room-tile";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast"


import {
  getSearchResults,
  resetSearchResults,
} from "@/store/user/Search-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

function SearchProducts() {
  const [keyword, setKeyword] = useState("");
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { searchResults } = useSelector((state) => state.userSearch);
  const { roomDetails } = useSelector((state) => state.userListing);

  const { user } = useSelector((state) => state.auth);


  const { toast } = useToast();
  useEffect(() => {
    if (keyword && keyword.trim() !== "" && keyword.trim().length > 3) {
      setTimeout(() => {
        setSearchParams(new URLSearchParams(`?keyword=${keyword}`));
        dispatch(getSearchResults(keyword));
      }, 1000);
    } else {
      setSearchParams(new URLSearchParams(`?keyword=${keyword}`));
      dispatch(resetSearchResults());
    }
  }, [keyword]);

  

  useEffect(() => {
    if (roomDetails !== null) setOpenDetailsDialog(true);
  }, [roomDetails]);

  console.log(searchResults, "searchResults");

  return (
    <div className="container mx-auto md:px-6 px-4 py-8">
      <div className="flex justify-center mb-8">
        <div className="w-full flex items-center">
          <Input
            value={keyword}
            name="keyword"
            onChange={(event) => setKeyword(event.target.value)}
            className="py-6"
            placeholder="Search Rooms..."
          />
        </div>
      </div>
      {!searchResults.length ? (
        <h1 className="text-5xl font-extrabold">No result found!</h1>
      ) : null}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {searchResults.map((item) => (
          <BookingListingTile
            
            room={item}
            
          />
        ))}
      </div>
      <ListingDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        roomDetails={roomDetails}
      />
    </div>
  );
}

export default SearchProducts;