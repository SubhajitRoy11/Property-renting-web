


import ListingFilter from "@/components/user-view/filter";
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup,DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpDownIcon } from "lucide-react";
import { sortOptions } from "@/config";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFilteredListings,fetchListingsDetails, } from "@/store/user/Listings-slice";
import BookingListingTile from "@/components/user-view/room-tile";
import { useSearchParams } from "react-router-dom";
import ListingDetailsDialog from "@/components/user-view/room-details";
import { useToast } from "@/hooks/use-toast"




function createSearchParamsHelper(filterParams) {
    const queryParams = [];
  
    for (const [key, value] of Object.entries(filterParams)) {
      if (Array.isArray(value) && value.length > 0) {
        const paramValue = value.join(",");
  
        queryParams.push(`${key}=${encodeURIComponent(paramValue)}`);
      }
    }
  
    console.log(queryParams, "queryParams");
  
    return queryParams.join("&");
  }

export default function UserListing(){
    const dispatch = useDispatch();
    const { roomList, roomDetails } = useSelector(
        (state) => state.userListing
    );
    
    const { user } = useSelector((state) => state.auth);
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
    const { toast } = useToast();


    const categorySearchParam = searchParams.get("category");


    console.log(user)
    function handleSort(value){
        console.log(value);
        setSort(value);
    }

    function handleFilter(getSectionId, getCurrentOption) {
        let cpyFilters = { ...filters };
        const indexOfCurrentSection = Object.keys(cpyFilters).indexOf(getSectionId);
    
        if (indexOfCurrentSection === -1) {
          cpyFilters = {
            ...cpyFilters,
            [getSectionId]: [getCurrentOption],
          };
        } else {
          const indexOfCurrentOption =
            cpyFilters[getSectionId].indexOf(getCurrentOption);
    
          if (indexOfCurrentOption === -1)
            cpyFilters[getSectionId].push(getCurrentOption);
          else cpyFilters[getSectionId].splice(indexOfCurrentOption, 1);
        }
    
        console.log(cpyFilters);
        setFilters(cpyFilters);
        sessionStorage.setItem("filters", JSON.stringify(cpyFilters));
      }



     
      function handleGetListingDetails(getCurrentListingId) {
        console.log(getCurrentListingId,"id");
        dispatch(fetchListingsDetails(getCurrentListingId));
      }

    //   console.log(getCurrentListingId,"id");


      


    useEffect(()=>{
        dispatch(fetchAllFilteredListings())
    },[dispatch])


    useEffect(() => {
        setSort("price-lowtohigh");
        setFilters(JSON.parse(sessionStorage.getItem("filters")) || {});
      }, [categorySearchParam]);


      useEffect(() => {
        if (filters && Object.keys(filters).length > 0) {
          const createQueryString = createSearchParamsHelper(filters);
          setSearchParams(new URLSearchParams(createQueryString));
        }
      }, [filters]);

      useEffect(() => {
        if (filters !== null && sort !== null)
          dispatch(
            fetchAllFilteredListings({ filterParams: filters, sortParams: sort })
          );
      }, [dispatch, sort, filters]);


      useEffect(() => {
        if (roomDetails !== null) setOpenDetailsDialog(true);
      }, [roomDetails]);

    console.log(roomDetails,"roomDetails");
    console.log(roomList,"roomList");
    
    

    return <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 p-4 md:p-6">
        <ListingFilter filters={filters} handleFilter={handleFilter}/>
        <div className="bg-background w-full rounded-lg shadow-sm">
            <div className="p-4 border-b flex items-center justify-between">
                 <h2 className="text-lg font-extrabold">All Listing</h2>
                 <div className="flex items-center gap-3">
                    <span className="text-muted-foreground">{roomList?.length} Listing</span>
                    <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1"
                        >
                        <ArrowUpDownIcon className="h-4 w-4" />
                        <span>Sort by</span>
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[200px]">
                        <DropdownMenuRadioGroup value={sort} onValueChange={handleSort}>
                            {
                                sortOptions.map((sortItem) => (
                                    <DropdownMenuRadioItem
                                      value={sortItem.id}
                                      key={sortItem.id}
                                    >
                                      {sortItem.label}
                                    </DropdownMenuRadioItem>
                                  ))
                            }
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                 </DropdownMenu>
                 </div>
                 
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {roomList && roomList.length > 0
                ? roomList.map((roomItem) => (
                    <BookingListingTile
                    handleGetListingDetails={handleGetListingDetails}
                    room={roomItem}
                    
                    />
                ))
                : null}
            </div>
        </div>
        <ListingDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        roomDetails={roomDetails}
      />
    </div>;
}