

import CommonForm from "@/components/common/form";
import { bookingFormControls } from "@/config";
import { useState } from "react";
import { confirmBooking } from '../../store/user/Booking-slice';
import { useToast } from "@/hooks/use-toast";
import { useDispatch } from "react-redux";

export const initialState = {
    fullName: "",                
    email: "",                   
    phone: "",                   
    checkInDate: "",             
    checkOutDate: "",            
    roomType: "",               
    numberOfGuests: 1,           
    specialRequests: "",         
    proofOfIdentity: "",        
    identityDocumentNumber: "",
    identityProofFile: null,    
    paymentMethod: "",           
    acceptTerms: false,         
};

export default function Contract() {
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const { toast } = useToast();

    function onSubmit(event) {
        event.preventDefault();

        dispatch(confirmBooking(formData)).then((data) => {
            if (data?.payload?.success) {
                toast({
                    title: data?.payload?.message,
                });
            } else {
                toast({
                    title: data?.payload?.message,
                    variant: "destructive",
                });
            }
        });
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-6 lg:px-8">
            <div className="w-full max-w-lg space-y-8 bg-white shadow-lg rounded-2xl p-6">
                <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
                    Please Fill The Form
                </h1>
                <p className="text-center text-sm text-gray-500 mb-6">
                    We value your information. Kindly fill in the details to confirm your booking.
                </p>
                <CommonForm
                    formControls={bookingFormControls}
                    buttonText={"Submit"}
                    formData={formData}
                    setFormData={setFormData}
                    onSubmit={onSubmit}
                />
            </div>
        </div>
    );
}
