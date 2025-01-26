import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
  isLoading: false,
  orderId: null,
  orderList: [],
  orderDetails: null,     
    
  };



  export const confirmBooking = createAsyncThunk(
    "user/Booking",
  
    async (formData) => {
      const response = await axios.post(
        "http://localhost:5000/api/user/book/booking",
        formData,
        {
          withCredentials: true,
        }
      );
  
      return response.data;
    }
  );

  export const getAllBookingByUserId = createAsyncThunk(
    "/book/getAllBookingByUserId",
    async (userId) => {
      const response = await axios.get(
        `http://localhost:5000/api/user/book/list/${userId}`
      );
  
      return response.data;
    }
  );


  export const getBookingDetails = createAsyncThunk(
    "/book/getBookingDetails",
    async (id) => {
      const response = await axios.get(
        `http://localhost:5000/api/user/book/details/${id}`
      );
  
      return response.data;
    }
  );




  const BookingSlice=createSlice({
    name:'userBook',
    initialState,
    reducers:{
        setUser:(state,action)=>{}
    },
        extraReducers: (builder) => {
          builder
            .addCase(confirmBooking.pending, (state) => {
              state.isLoading = true;
              // state.success = false;
            })
            .addCase(confirmBooking.fulfilled, (state, action) => {
              state.isLoading = false;
              // state.success = true;
              state.orderList = action.payload.data;
              
            })
            .addCase(confirmBooking.rejected, (state, action) => {
              state.isLoading = false;
              // state.success = false;
              
            })
            .addCase(getAllBookingByUserId.pending, (state) => {
              state.isLoading = true;
            })
            .addCase(getAllBookingByUserId.fulfilled, (state, action) => {
              state.isLoading = false;
              state.orderList = action.payload.data;
            })
            .addCase(getAllBookingByUserId.rejected, (state) => {
              state.isLoading = false;
              state.orderList = [];
            })
            .addCase(getBookingDetails.pending, (state) => {
              state.isLoading = true;
            })
            .addCase(getBookingDetails.fulfilled, (state, action) => {
              state.isLoading = false;
              state.orderDetails = action.payload.data;
            })
            .addCase(getBookingDetails.rejected, (state) => {
              state.isLoading = false;
              state.orderDetails = null;
            });
        }
    })


    export const { setUser } = BookingSlice.actions;
    export default BookingSlice.reducer;
