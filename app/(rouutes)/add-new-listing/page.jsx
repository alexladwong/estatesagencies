import GooglePlace from '@/app/_components/GooglePlace'
import { Button } from '@/components/ui/button'
import React from 'react'



function AddNewListing() {
  return (
    <div className="mt-10 md:mx-56 lg:mx-80">
        <div className="p-10 flex flex-col gap-5 items-center justify-center">
            <h2 className="font-bold text-2xl">Add New List</h2>
            <div className="w-full p-10 px-8 rounded-lg border shadow-xl 
            flex flex-col gap-5 ">
                <h2 className="text-gray-500 font-sans p-2">Enter The Place You Want to List to</h2>
                <GooglePlace />
                <Button>Next</Button>
            </div>
        </div>
    </div>
  )
}

export default AddNewListing