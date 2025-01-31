"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";

const GooglePlacesAutocomplete = dynamic(
  () => import("react-google-places-autocomplete"),
  { ssr: false }
);

function GooglePlace({ selectedAddress, setCoordinates }) {
  const [value, setValue] = useState(null);

  return (
    <div className="flex items-center w-full">
      <MapPin className="text-primary rounded-l-lg h-10 w-12 p-2 bg-slate-400" />
      <GooglePlacesAutocomplete
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}
        selectProps={{
          placeholder: "Search for Properties Address",
          isClearable: true,
          className: "w-full",
          onChange: (place) => {
            const address = place.label; // Extract the formatted address

            selectedAddress(address);  // Pass the formatted address

            geocodeByAddress(address) // Use the formatted address for geocoding
              .then((results) => {
                if (!results.length) throw new Error("No results found");
                return getLatLng(results[0]);
              })
              .then(({ lat, lng }) => {
                setCoordinates({ lat, lng });  // Pass coordinates as an object
              })
              .catch((error) => console.error("Geocoding error:", error));
          },
        }}
      />
    </div>
  );
}

export default GooglePlace;



