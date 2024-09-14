import {
  StepHeading,
  NumberInput,
  SelectInput,
  TextareaInput,
} from "./ResuableInputs";

const Additional = ({
  luggage,
  passengers,
  vehicle,
  additional,
  updateFields,
}) => {
  return (
    <div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex justify-between items-center">
        <StepHeading stepTitle="Additional Details" />
      </div>
      <div className="flex gap-8 flex-col">
        <div className="flex gap-8 flex-col sm:w-1/2 w-full">
          <SelectInput
            isFocus={true}
            label="Luggage Required?"
            name="luggage"
            value={luggage}
            onChange={updateFields}
            options={["Yes", "No"]}
          />
          <NumberInput
            label="Number of Passengers"
            name="passengers"
            value={passengers}
            onChange={updateFields}
          />
          <SelectInput
            label="Desired Vehicle Type"
            name="vehicle"
            value={vehicle}
            onChange={updateFields}
            options={["16 Seat Minibus", "Luxury Minibus", "32 Seat Coach"]}
          />
        </div>
        <div className="sm:w-1/2 w-full">
          <TextareaInput
            placeholder="Additional Information"
            name="vehicle"
            value={additional}
            onChange={updateFields}
          />
        </div>
      </div>
    </div>
  );
};

export default Additional;
