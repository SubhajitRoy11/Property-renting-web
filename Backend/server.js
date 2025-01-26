const express=require("express");
const app=express();
const mongoose=require("mongoose");
const cookieParser=require('cookie-parser');
const cors=require('cors');
const authRouter=require('./routes/auth/auth-routes')

const adminListingsRouter = require("./routes/admin/Listings-routes");
const adminBookingRouter = require("./routes/admin/bookingDetails-routes");

const userListingsRouter = require("./routes/user/listing-routes");
const userBooking =require("./routes/user/booking-routes")
const userSearchRouter = require("./routes/user/search-routes");


const PORT=process.env.PORT || 5000;

require("dotenv").config();


mongoose.connect(
 process.env.MongoDB_URL
).then(()=>{
    console.log("MongoDB connected Successfully")
}).catch((err)=>{
    console.log(err);
})


app.use(
    cors({
        origin:'http://localhost:5173',
        credentials:true,
        methods: ['GET','POST','DELETE','PUT'],
        allowedHeaders:[
            "Content-Type",
            'Authorization',
            'Cache-Control',
            'Expires',
            'pragma'
        ],
    })
)

app.use(cookieParser());
app.use(express.json());


app.use('/api/auth',authRouter);

app.use("/api/admin/listings", adminListingsRouter);
app.use("/api/admin/booking", adminBookingRouter);

app.use("/api/user/listings", userListingsRouter);
app.use("/api/user/book",userBooking)
app.use("/api/user/search", userSearchRouter);

app.listen(PORT,()=>{
    console.log("Server is running");
})