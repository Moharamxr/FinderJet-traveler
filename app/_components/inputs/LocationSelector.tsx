import React, { useState } from "react";
import ItemTypesModal from "./ItemTypesModal";
import { locationOptions } from "@/app/_data/static-data";

const LocationSelector = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [additionalDetails, setAdditionalDetails] = useState<string>("");

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
  };

  return (
    <div className="p-5 w-full">
      <ItemTypesModal
        label="Location of Lost Item"
        options={locationOptions}
        placeholder="Select a location"
        onSelect={handleLocationSelect}
      />

      {selectedLocation && (
        <div className="mt-4">
          <label className="block mb-2 text-subtitle font-medium">
            Additional Location Details
          </label>
          <input
            type="text"
            placeholder="E.g., Near Gate 10 or On table at the restaurant"
            value={additionalDetails}
            onChange={(e) => setAdditionalDetails(e.target.value)}
            className="w-full p-2 border border-border rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default LocationSelector;
