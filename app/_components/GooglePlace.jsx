"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";

const GooglePlacesAutocomplete = dynamic(() => import("react-google-places-autocomplete"), { ssr: false });

function GooglePlace() {
  const [value, setValue] = useState(null);

  return (
    <div className="flex items-center w-full ">
      <MapPin className="text-primary rounded-l-lg h-10 w-12 p-2 bg-slate-400" />
      <GooglePlacesAutocomplete
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}
        selectProps={{
          placeholder:"Search for Properties Address",
          isClearable:true,
          className: 'w-full',
          onChange:(place)=>{
            console.log(place);
          }
      }}
      />
    </div>
  );
}

export default GooglePlace;
