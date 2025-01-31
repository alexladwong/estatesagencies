"use client";
import GooglePlace from '@/app/_components/GooglePlace';
import { Button } from '@/components/ui/button'
import { supabase } from '@/utils/supabase/client';
import { useUser } from '@clerk/nextjs';
import React from 'react'
import { useState } from 'react'
import { toast } from "sonner"
import { Loader } from "lucide-react";





function AddNewListing() {
    const [selectedAddress, setSelectedAddress] = useState();
    const [coordinates, setCoordinates] = useState();
    const { user } = useUser();
    const [loader, setLoader] = useState(false);
    const nextHandler = async () => {
            setLoader(true);

        // Use the actual variables, not string literals
        const { data, error } = await supabase
            .from('listing')
            .insert([
                { 
                    address: selectedAddress,  // Use the state variable here
                    coordinates: coordinates,  // Use the state variable here
                    createdBy: [user?.primaryEmailAddress.emailAddress],  // Ensure this value is valid
                },
            ])
            .select();

        if (data) {
            setLoader(false);
            console.log("New Data Added, ", data);
            toast("Event has been created.")

        }
        if (error) {
            setLoader(false);
            console.log("An Error Happened While submitting the Data, ", error);
            toast("An Error Occurred in the Server. Try again later...", error)


        }
    };

    return (
        <div className="mt-10 md:mx-2 lg:mx-4 sm:w-full md:w-auto">
            <div className="p-10 flex flex-col gap-5 items-center justify-center">
                <h2 className="font-bold text-2xl">Add New List</h2>
                <div className="w-full p-5 sm:p-10 sm:px-2 md:px-8 rounded-lg border shadow-xl flex flex-col gap-5">
                    <h2 className="text-gray-500 font-sans p-2">Enter The Place You Want to List to</h2>
                    <GooglePlace 
                        selectedAddress={(value) => setSelectedAddress(value)}
                        setCoordinates={(value) => setCoordinates(value)}
                    />
                    <Button
                        disabled={!selectedAddress || !coordinates || loader }
                        onClick={nextHandler}
                    >
                        {loader?<Loader className="animate-spin" />:'Next'}
                        </Button>
                </div>
            </div>
        </div>
    );
}

export default AddNewListing;

