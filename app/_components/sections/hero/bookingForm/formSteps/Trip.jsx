import React, { useState, useEffect, useCallback } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import {
  CheckboxInput,
  DateInput,
  TimeInput,
  AutocompleteInput,
  StepHeading,
} from "./ResuableInputs";

const libraries = ["places"];

const Trip = ({
  returnTrip,
  location = "",
  pickupDate,
  pickupTime,
  destination,
  returnDate,
  returnTime,
  updateFields,
}) => {
  const [locationAutocomplete, setLocationAutocomplete] = useState(null);
  const [destinationAutocomplete, setDestinationAutocomplete] = useState(null);
  const [pickerColor, setPickerColor] = useState("text-zinc-400");
  const [initialDate, setInitialDate] = useState("");

  const mapKey = process.env.NEXT_PUBLIC_MAP_API_KEY;
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: mapKey,
    libraries,
  });

  const handlePickerChange = () => {
    setPickerColor("text-primary");
  };

  const onLocationChanged = useCallback(() => {
    if (locationAutocomplete !== null) {
      const place = locationAutocomplete.getPlace();
      const formattedAddress =
        place && place.formatted_address ? place.formatted_address : "";
      updateFields({ location: formattedAddress });
    }
  }, [locationAutocomplete, updateFields]);

  const onDestinationChanged = useCallback(() => {
    if (destinationAutocomplete !== null) {
      const place = destinationAutocomplete.getPlace();
      const formattedAddress =
        place && place.formatted_address ? place.formatted_address : "";
      updateFields({ destination: formattedAddress });
    }
  }, [destinationAutocomplete, updateFields]);

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    setInitialDate(`${year}-${month}-${day}`);
  }, []);

  const currentDate = new Date().toISOString().split("T")[0];

  const autocompleteOptions = {
    types: ["geocode"],
    componentRestrictions: { country: "GB" },
  };

  return (
    <>
      <div className="relative flex justify-between items-center">
        <StepHeading stepTitle="About your tip" />
        <div className="inline-block absolute right-0 top-0">
          <CheckboxInput
            label="Return Trip?"
            name="returnTrip"
            checked={returnTrip}
            onChange={(e) => updateFields({ returnTrip: e.target.checked })}
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-8 w-full grid-cols-1">
        <div className="grid gap-5 w-full">
          {isLoaded && (
            <AutocompleteInput
              isFocus={true}
              label="Pickup Details:"
              name="location"
              placeholder=""
              value={location}
              onChange={(value) => updateFields({ location: value })}
              onLoad={setLocationAutocomplete}
              onPlaceChanged={onLocationChanged}
              options={autocompleteOptions}
            />
          )}
          <DateInput
            label="Date:"
            name="pickupDate"
            value={pickupDate || initialDate}
            onChange={(newValue) => {
              updateFields({ pickupDate: newValue.pickupDate });
              handlePickerChange();
            }}
            min={currentDate}
          />
          <TimeInput
            label="Time:"
            name="pickupTime"
            value={pickupTime || "09:00"}
            onChange={(newValue) =>
              updateFields({ pickupTime: newValue.pickupTime })
            }
          />
        </div>
        <div className="grid gap-5 w-full">
          {isLoaded && (
            <AutocompleteInput
              label="Dropoff Details:"
              name="destination"
              value={destination}
              placeholder="Destination"
              onChange={(value) => updateFields({ destination: value })}
              onLoad={setDestinationAutocomplete}
              onPlaceChanged={onDestinationChanged}
              options={autocompleteOptions}
            />
          )}
          <DateInput
            label="Date:"
            name="returnDate"
            value={returnDate || pickupDate || initialDate}
            onChange={(newValue) => {
              updateFields({ returnDate: newValue.returnDate });
              handlePickerChange();
            }}
            disabled={!returnTrip}
            min={currentDate}
          />
          <TimeInput
            label="Time:"
            name="returnTime"
            value={returnTime || "09:00"}
            onChange={(newValue) =>
              updateFields({ returnTime: newValue.returnTime })
            }
            disabled={!returnTrip}
          />
        </div>
      </div>
    </>
  );
};

export default Trip;
