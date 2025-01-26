import { configureStore } from "@reduxjs/toolkit";
import authreducer from './auth-slice'
import AdminListingSlice from './admin/listing-slice'
import AdminOrderSlice from './admin/booking-slice'

import userListingSlice from './user/Listings-slice'

import BookingSlice from './user/Booking-slice'
import userSearchSlice from "./user/Search-slice";

const store=configureStore({
    reducer:{
        auth:authreducer,

        adminListing:AdminListingSlice,
        adminBook:AdminOrderSlice,

        userListing:userListingSlice,
        

        userBook:BookingSlice,
        userSearch:userSearchSlice

    }
})


export default store;