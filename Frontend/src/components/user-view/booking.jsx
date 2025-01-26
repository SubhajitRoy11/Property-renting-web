import { Button } from "../ui/button";
import {Card, CardContent,CardTitle,CardHeader } from "../ui/card";
import { Dialog } from "../ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import BookingDetails from "./booking-details";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getAllBookingByUserId,
    getBookingDetails,
   
  } from "@/store/user/Booking-slice";
  import { Badge } from "../ui/badge";



export default function UserBooking(){
    const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { orderList, orderDetails } = useSelector((state) => state.userBook);


    function handleFetchOrderDetails(getId) {
        dispatch(getBookingDetails(getId));
      }

    useEffect(() => {
        dispatch(getAllBookingByUserId(user?.id));
      }, [dispatch]);


      useEffect(() => {
        if (orderDetails !== null) setOpenDetailsDialog(true);
      }, [orderDetails]);

      console.log(orderDetails, "orderDetails");

    return (
        <Card>
            <CardHeader>
                    <CardTitle>Orders History</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                                <TableHead>Order ID</TableHead>
                                <TableHead>Order Date</TableHead>
                                <TableHead>Order Status</TableHead>
                                <TableHead>Order Price</TableHead>
                                <TableHead>
                                    <span className="sr-only">Details</span>
                                </TableHead>
                        </TableRow>
                    </TableHeader>
                        <TableBody>
                        {orderList && orderList.length > 0
                            ? orderList.map((orderItem) => (
                                <TableRow>
                                    <TableCell>{orderItem?._id}</TableCell>
                                    {/* <TableCell>{orderItem?.orderDate.split("T")[0]}</TableCell> */}
                                    <TableCell>
                                    <Badge
                                        className={`py-1 px-3 ${
                                        orderItem?.orderStatus === "delivered"
                                            ? "bg-green-500"
                                            : orderItem?.orderStatus === "rejected"
                                            ? "bg-red-600"
                                            : "bg-black"
                                        }`}
                                    >
                                        {orderItem?.orderStatus}
                                    </Badge>
                                    </TableCell>
                                    <TableCell>${orderItem?.totalAmount}</TableCell>
                                    <TableCell>
                                    <Dialog
                                        open={openDetailsDialog}
                                        onOpenChange={() => {
                                        setOpenDetailsDialog(false);
                                        
                                        }}
                                    >
                                        <Button
                                        onClick={() =>
                                            handleFetchOrderDetails(orderItem?._id)
                                        }
                                        >
                                        View Details
                                        </Button>
                                        <BookingDetails orderDetails={orderDetails} />
                                    </Dialog>
                                    </TableCell>
                                </TableRow>
                                ))
                            : null}
                        </TableBody>
                    </Table>
            </CardContent>   
        </Card>
    )
}