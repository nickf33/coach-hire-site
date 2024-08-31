import React from "react";
import PropTypes from "prop-types";
import { StepHeading } from "./ResuableInputs";

const formStyles = {
  input:
    "bg-light border pl-6 py-3 text-sm rounded shadow w-full transition focus:shadow-lg focus:border-accent",
  label: "text-xs absolute top-[-0.5rem] left-2 px-2 bg-light",
  stepHeading: "text-sm font-bold mb-4",
  checkBox:
    "w-4 h-4 text-primary border-2 border-primary rounded checked:bg-accent checked:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-200",
  textarea:
    "w-full h-full text-blue-dark bg-light border-2 border-blue-dark rounded shadow p-4 min-h-20 mt-0 focus:border-accent",
};

const SummarySection = ({ title, children }) => (
  <div className="relative w-full shadow rounded-lg px-2 py-4 my-4 bg-white border-2 border-blue-dark">
    <div className="w-9/10 mx-auto">
      <h4 className="text-left font-bold mb-2">{title}</h4>
      <hr className="my-1" />
      <div
        className="grid grid-cols-2
     mx-auto text-left text-xs tablet:grid-cols-1"
      >
        {children}
      </div>
    </div>
  </div>
);

const SummaryItem = ({ label, value }) => (
  <p className="my-1 flex flex-col">
    <strong>{label}: </strong>
    {value || <span className="text-red-500">Not Entered</span>}
  </p>
);

const CheckboxInput = ({ label, name, checked, onChange }) => (
  <div className="flex">
    <div className="relative mt-0.5">
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={onChange}
        className={formStyles.checkBox}
      />
      {checked && (
        <svg
          className="w-3 h-3 text-accent absolute top-[10%] left-[10%]"
          fill="none"
          stroke="white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      )}
    </div>
    <label htmlFor={name} className="text-xs items-center ml-4">
      {label}
    </label>
  </div>
);

const Summary = ({
  name,
  email,
  phone,
  reason,
  location,
  pickupDate,
  pickupTime,
  destination,
  returnDate,
  returnTime,
  luggage,
  passengers,
  vehicle,
  additional,
  termsOfUse,
  conditions,
  updateFields,
}) => {
  return (
    <>
      <StepHeading
        stepPara="Thank you for completing the contact form. Please check your details to get in touch and we will be back with your tailored quotation."
        stepTitle="Your Trip Details:"
      />
      <div className="mx-auto sw-4/5">
        <SummarySection title="Your Details">
          <SummaryItem label="Name" value={name} />
          <SummaryItem label="Email" value={email} />
          <SummaryItem label="Phone" value={phone} />
          <SummaryItem label="Reason" value={reason} />
        </SummarySection>

        <SummarySection title="Trip Details">
          <SummaryItem label="Pickup Point" value={location} />
          <SummaryItem
            label="Pickup Date/Time"
            value={`${pickupDate} - ${pickupTime}`}
          />
          <SummaryItem label="Drop Off Point" value={destination} />
          <SummaryItem
            label="Drop Off Date/Time"
            value={`${returnDate} - ${returnTime}`}
          />
        </SummarySection>

        <SummarySection title="Additional Information">
          <SummaryItem label="Luggage" value={luggage} />
          <SummaryItem label="Passengers" value={passengers} />
          <SummaryItem label="Vehicles" value={vehicle} />
          <SummaryItem label="Additional Info" value={additional} />
        </SummarySection>

        <div className="shadow rounded-lg py-4 flex flex-col justify-start items-start my-4 bg-white border-2 border-blue-dark">
          <div className="w-9/10 mx-auto">
            <CheckboxInput
              label="I would like to receive updates and special offers from Triangle Travel"
              name="termsOfUse"
              checked={termsOfUse}
              onChange={(e) => updateFields({ termsOfUse: e.target.checked })}
            />
            <hr className="w-full text-primary my-4" />
            <CheckboxInput
              label={
                <>
                  I have read and agree to the Triangle Travel{" "}
                  <a href="#" className="underline hover:text-blue-dark">
                    terms of use
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline hover:text-blue-dark">
                    booking terms and conditions
                  </a>
                </>
              }
              name="conditions"
              checked={conditions}
              onChange={(e) => updateFields({ conditions: e.target.checked })}
            />
          </div>
        </div>
      </div>
    </>
  );
};

Summary.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  reason: PropTypes.string,
  location: PropTypes.string,
  pickupDate: PropTypes.string,
  pickupTime: PropTypes.string,
  destination: PropTypes.string,
  returnDate: PropTypes.string,
  returnTime: PropTypes.string,
  luggage: PropTypes.string,
  passengers: PropTypes.string,
  vehicle: PropTypes.string,
  additional: PropTypes.string,
  termsOfUse: PropTypes.bool,
  conditions: PropTypes.bool,
  updateFields: PropTypes.func.isRequired,
};

export default Summary;
