import { Button } from "../ui/button";
import {Card, CardContent,CardTitle,CardHeader } from "../ui/card";
import { Dialog } from "../ui/dialog";
import { TableBody, TableCell } from "../ui/table";
import { Table, TableHead, TableHeader, TableRow } from "../ui/table";
import AdminBookingDetailsView from "./booking-details";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getAllBookingForAdmin,
    getBookingDetailsForAdmin,
    updateBookingStatus,
} from "@/store/admin/booking-slice";
  import { Badge } from "../ui/badge";



export default function AdminBookingView(){
    const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
    const { orderList, orderDetails } = useSelector((state) => state.adminBook);
    const dispatch = useDispatch();


    function handleFetchOrderDetails(getId) {
        dispatch(getBookingDetailsForAdmin(getId));
      }

    useEffect(() => {
        dispatch(getAllBookingForAdmin());
      }, [dispatch]);

      useEffect(() => {
        if (orderDetails !== null) setOpenDetailsDialog(true);
      }, [orderDetails]);

      console.log(orderDetails,"orderDetails");

    return <Card>
        <CardHeader>
            <CardTitle>All Booking</CardTitle>
        </CardHeader>
        <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                                <TableHead>Booking ID</TableHead>
                                <TableHead>Booking Date</TableHead>
                                <TableHead>Booking Status</TableHead>
                                <TableHead>Booking Price</TableHead>
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
                                    
                                    <TableCell>
                                    <Badge
                                        className={`py-1 px-3 ${
                                        orderItem?.orderStatus === "confirmed"
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
                                        dispatch(updateBookingStatus());
                                        }}
                                    >
                                        <Button
                                        onClick={() =>
                                            handleFetchOrderDetails(orderItem?._id)
                                        }
                                        >
                                        View Details
                                        </Button>
                                        <AdminBookingDetailsView orderDetails={orderDetails} />
                                    </Dialog>
                                    </TableCell>
                                </TableRow>
                                ))
                            : null}
                        </TableBody>
                    </Table>
            </CardContent> 
    </Card>
}