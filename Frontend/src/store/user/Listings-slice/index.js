import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    isLoading: false,
    roomList: [],
    roomDetails: null,
};

export const fetchAllFilteredListings = createAsyncThunk(
    "/listings/fetchAllListings",
    async ({ filterParams, sortParams }) => {
      console.log(filterParams, "filterParams");
      console.log(sortParams, "sortParams");
  

      const query = new URLSearchParams({
        ...filterParams,
        sortBy: sortParams,
      });

      const result = await axios.get(
        `http://localhost:5000/api/user/listings/get?${query}`
      );
  
      console.log(result,"result");
  
      return result?.data;
    }
)


export const fetchListingsDetails = createAsyncThunk(
    "/listings/fetchListingsDetails",
    async (id) => {
      const result = await axios.get(
        `http://localhost:5000/api/user/listings/get/${id}`
      );
  
      console.log(result);
      return result?.data;
    }
  );

const userListingSlice=createSlice({
    name: "userListing",
    initialState,
    reducers:{
      setListingDetails: (state) => {
        state.roomDetails = null;
      },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAllFilteredListings.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(fetchAllFilteredListings.fulfilled, (state, action) => {
            console.log(action.payload)
            state.isLoading = false;
            state.roomList= action.payload.data;
        })
        .addCase(fetchAllFilteredListings.rejected, (state, action) => {
            state.isLoading = false;
            state.roomList = [];
        })
        .addCase(fetchListingsDetails.pending, (state, action) => {
            state.isLoading = true;
          })
          .addCase(fetchListingsDetails.fulfilled, (state, action) => {
            console.log("API Response for Room Details:", action.payload);
            state.isLoading = false;
            state.roomDetails = action.payload.data;
          })
          .addCase(fetchListingsDetails.rejected, (state, action) => {
            state.isLoading = false;
            state.roomDetails = null;
          });
    }
})

export const { setListingDetails } = userListingSlice.actions;
export default userListingSlice.reducer;