import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    roomList: [],
};

export const addNewRoom = createAsyncThunk(
    "/listing/addnewRoom",
    async (formData) => {
      const result = await axios.post(
        "http://localhost:5000/api/admin/listing/add",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      console.log(result.data)
      return result?.data;
    }
  );


  export const fetchAllRooms = createAsyncThunk(
    "/listing/fetchAllRooms",
    async () => {
      const result = await axios.get(
        "http://localhost:5000/api/admin/listing/get"
      );
  
      return result?.data;
    }
  );


  export const editRoom = createAsyncThunk(
    "/listing/editRoom",
    async ({ id, formData }) => {
      const result = await axios.put(
        `http://localhost:5000/api/admin/listing/edit/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      return result?.data;
    }
  );


  export const deleteRoom = createAsyncThunk(
    "/listing/deleteRoom",
    async (id) => {
      const result = await axios.delete(
        `http://localhost:5000/api/admin/listing/delete/${id}`
      );
  
      return result?.data;
    }
  );

const AdminListingSlice=createSlice({
    name: "adminListing",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAllRooms.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchAllRooms.fulfilled, (state, action) => {
            console.log(action.payload)
          state.isLoading = false;
          state.roomList = action.payload.data;
        })
        .addCase(fetchAllRooms.rejected, (state, action) => {
          state.isLoading = false;
          state.roomList = [];
        });
    }
})

export default AdminListingSlice.reducer;
