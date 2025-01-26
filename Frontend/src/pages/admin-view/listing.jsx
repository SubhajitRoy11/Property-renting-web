

import { Button } from "@/components/ui/button";
import {Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Fragment ,useEffect, useState } from "react";
import { addRoomFormElements } from "@/config";
import CommonForm from "@/components/common/form";
import RoomImageUpload from "@/components/admin-view/image-upload";
import { useDispatch, useSelector } from "react-redux";
import { addNewRoom,fetchAllRooms,editRoom,deleteRoom } from "@/store/admin/listing-slice";

import { useToast } from "@/hooks/use-toast"
import AdminListingTile from "@/components/admin-view/listing-tile";





const initialFormData = {
    image: null,
    title: "",
    description: "",
    seasons: "",
    countries: "",
    place:"",
    price: "",
    bookingPrice: "",
    totalStock: "",
    averageReview: 0,
  };





export default function AdminListing(){
    const [openCreateListingDialog, setOpenCreateListingDialog] =useState(false);
    const [formData, setFormData] = useState(initialFormData);
    const [imageFile, setImageFile] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState("");
    const [imageLoadingState, setImageLoadingState] = useState(false);
    const [currentEditedId, setCurrentEditedId] = useState(null);


    const { roomList } = useSelector((state) => state.adminListing);
    const dispatch = useDispatch();
    const { toast } = useToast();
    

    function onSubmit(event){
        event.preventDefault();

        currentEditedId !== null
        ? dispatch(
            editRoom({
              id: currentEditedId,
              formData,
            })
          ).then((data) => {
            console.log(data, "edit");
  
            if (data?.payload?.success) {
              dispatch(fetchAllRooms());
              setFormData(initialFormData);
              setOpenCreateListingDialog(false);
              setCurrentEditedId(null);
            }
          })

        :dispatch(
            addNewRoom({
              ...formData,
              image: uploadedImageUrl,
            })
        ).then((data)=>{
            console.log(data);
            if (data?.payload?.success) {
                dispatch(fetchAllRooms());
                setOpenCreateListingDialog(false);
                setImageFile(null);
                setFormData(initialFormData);
                toast({
                  title: "Room add successfully",
                });
              }
        })
    }

    function handleDelete(getCurrentRoomId) {
        dispatch(deleteRoom(getCurrentRoomId)).then((data) => {
          if (data?.payload?.success) {
            dispatch(fetchAllRooms());
          }
        });
      }
    

    function isFormValid() {
        return Object.keys(formData)
          .filter((currentKey) => currentKey !== "averageReview")
          .map((key) => formData[key] !== "")
          .every((item) => item);
      }

    useEffect(()=>{
        dispatch(fetchAllRooms());
    },[dispatch])

    console.log(roomList,"roomList");
    return (
        <Fragment>
            <div className="mb-5 w-full flex justify-end">
                <Button onClick={() => setOpenCreateListingDialog(true)}>Add new Product</Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                {
                    roomList && roomList.length > 0 ?
                    roomList.map((roomItem)=>(
                    <AdminListingTile
                    setFormData={setFormData}
                    setOpenCreateListingDialog={setOpenCreateListingDialog}
                    setCurrentEditedId={setCurrentEditedId}
                    room={roomItem}
                    handleDelete={handleDelete}
                    />
                    
                ))
                :null    
                }
            </div>
            <Sheet
                 open={openCreateListingDialog}
                 onOpenChange={() => {
                   setOpenCreateListingDialog(false);
                   setCurrentEditedId(null);
                   setFormData(initialFormData);
                 }}
            >
                <SheetContent side="right" className="overflow-auto">
                    <SheetHeader>
                        <SheetTitle>
                            {currentEditedId !== null ? "Edit Room" : "Add New Room"}
                        </SheetTitle>
                    </SheetHeader>
                    <RoomImageUpload
                        imageFile={imageFile}
                        setImageFile={setImageFile}
                        uploadedImageUrl={uploadedImageUrl}
                        setUploadedImageUrl={setUploadedImageUrl}
                        setImageLoadingState={setImageLoadingState}
                        imageLoadingState={imageLoadingState}
                        isEditMode={currentEditedId !== null}
                    />
                        <div className="py-6">
                            <CommonForm
                            onSubmit={onSubmit}
                            formData={formData} 
                            setFormData={setFormData} 
                            formControls={addRoomFormElements}
                            buttonText={currentEditedId !== null ? "Edit" : "Add"}
                            isBtnDisabled={!isFormValid()}
                            />
                        </div>
                </SheetContent>

            </Sheet>
        </Fragment>
    )
}