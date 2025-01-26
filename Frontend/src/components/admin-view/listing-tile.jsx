import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";


export default function AdminListingTile({
    room,
    setFormData,
    setOpenCreateListingDialog,
    setCurrentEditedId,
    handleDelete,}){

        console.log(room,"room");
    return (
        <Card className="w-full max-w-sm mx-auto">
            <div>
                <div className="relative">
                    <img
                        src={room?.image}
                        alt={room?.title}
                        className="w-full h-[300px] object-cover rounded-t-lg"
                    />
                </div>
                <CardContent>
                    <h2 className="text-xl font-bold mb-2 mt-2">{room?.title}</h2>
                    <h4 className="text-lg font-semibold mb-2 mt-2">{room?.place}</h4>
                    <h4 className="text-lg font-semibold mb-2 mt-2">{room?.countries}</h4>
                    <div className="flex justify-between items-center mb-2">
                    <span
                         className={`${
                            room?.bookingPrice > 0 ? "line-through" : ""
                         } text-lg font-semibold text-primary`}
                    >
                        ${room?.price}
                    </span>
                    {room?.bookingPrice > 0 ? (
                    <span className="text-lg font-bold">${room?.bookingPrice}</span>
                     ) : null}
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                    <Button
                         onClick={() => {
                            setOpenCreateListingDialog(true);
                            setCurrentEditedId(room?._id);
                            setFormData(room);
                          }} 
                    >Edit</Button>
                    <Button onClick={() => handleDelete(room?._id)}>Delete</Button>
                </CardFooter>
            </div>
        </Card>
    )
}