

import { Card, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {countriesOptionsMap,  seasonsOptionsMap } from "@/config";
import { useNavigate } from "react-router-dom";


export default function BookingListingTile({room,handleGetListingDetails,handleAddtoCart}){
    const navigate = useNavigate();

    return (
        <Card className="w-full max-w-sm mx-auto">
            <div onClick={() => handleGetListingDetails(room?._id)}>
                <div className="relative">
                     <img
                        src={room?.image}
                        alt={room?.title}
                        className="w-full h-[300px] object-cover rounded-t-lg"
                    />
                    
                </div>
                <CardContent  className="p-4">
                    <h2 className="text-xl font-bold mb-2">{room?.title}</h2>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-[16px] text-muted-foreground">
                            {seasonsOptionsMap[room?.seasons]}
                        </span>
                        <span className="text-[16px] text-muted-foreground">
                            {countriesOptionsMap[room?.countries]}
                        </span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                        <span
                        className={`${
                            room?.bookingPrice > 0 ? "line-through" : ""
                        } text-lg font-semibold text-primary`}
                        >
                        ${room?.price}
                        </span>
                        {room?.bookingPrice > 0 ? (
                        <span className="text-lg font-semibold text-primary">
                            ${room?.bookingPrice}
                        </span>
                        ) : null}
                    </div>
                </CardContent>
                
            </div>
            <CardFooter>
                {room?.totalStock === 0 ? (
                    <Button className="w-full opacity-60 cursor-not-allowed">
                        Out Of Stock
                    </Button>
                    ) : (
                    <Button
                        
                        className="w-full"
                        onClick={()=>{
                            navigate("/user/contract");
                        }}
                    >
                        Book
                    </Button>
                )}
            </CardFooter>
        </Card>
    )
}