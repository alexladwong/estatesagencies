"use client";
import GooglePlace from '@/app/_components/GooglePlace';
import { Button } from '@/components/ui/button'
import { supabase } from '@/utils/supabase/client';
import { useUser } from '@clerk/nextjs';
import React from 'react'
import { useState } from 'react'



function AddNewListing() {
    const [selectedAddress, setSelectedAddress] = useState();
    const [coordinates, setCoordinates] = useState();
    const { user } = useUser();

    const nextHandler = async () => {
        console.log(selectedAddress, coordinates);

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
            console.log("New Data Added, ", data);
        }
        if (error) {
            console.log("An Error Happened While submitting the Data, ", error);
        }
    };

    return (
        <div className="mt-10 md:mx-56 lg:mx-80">
            <div className="p-10 flex flex-col gap-5 items-center justify-center">
                <h2 className="font-bold text-2xl">Add New List</h2>
                <div className="w-full p-10 px-28 rounded-lg border shadow-xl flex flex-col gap-5 ">
                    <h2 className="text-gray-500 font-sans p-2">Enter The Place You Want to List to</h2>
                    <GooglePlace 
                        selectedAddress={(value) => setSelectedAddress(value)}
                        setCoordinates={(value) => setCoordinates(value)}
                    />
                    <Button
                        disabled={!selectedAddress || !coordinates }
                        onClick={nextHandler}
                    >Next</Button>
                </div>
            </div>
        </div>
    );
}

export default AddNewListing;

