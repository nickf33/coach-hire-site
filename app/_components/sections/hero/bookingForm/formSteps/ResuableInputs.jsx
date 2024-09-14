import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import "react-phone-number-input/style.css";
import { Autocomplete } from "@react-google-maps/api";

export const formStyles = {
  input:
    "bg-light border pl-6 py-3 text-sm rounded shadow w-full transition focus:shadow-lg focus:border-accent",
  label: "text-xs absolute top-[-0.5rem] left-2 px-2 bg-light",
  stepHeading: "para",
  checkBox:
    "w-4 h-4 text-primary border-2 border-primary rounded checked:bg-accent checked:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-200",
  textarea:
    "w-full h-full text-blue-dark bg-light border-2 border-blue-dark rounded shadow p-4 sm:min-h-20 min-h-40 mt-0 focus:border-accent",
};

/**
 * StepHeading Component
 * Renders a heading for a form step with an optional paragraph.
 * @param {Object} props
 * @param {string} props.stepPara - Optional paragraph text
 * @param {string} props.stepTitle - Title of the step
 */
export const StepHeading = ({ stepPara, stepTitle }) => {
  return (
    <>
      <div className="flex flex-col w-full justify-between items-start pb-2 mb-8 border-b-2">
        {stepPara && <p className="text-sm max-w-96 mb-8">{stepPara}</p>}
        <p className="title__sm mb-4">{stepTitle}:</p>
      </div>
    </>
  );
};

/**
 * TextInput Component
 * Renders a text input field with a label.
 * @param {Object} props
 * @param {string} props.label - Label for the input
 * @param {string} props.name - Name and id for the input
 * @param {string} props.value - Current value of the input
 * @param {function} props.onChange - Function to handle value changes
 * @param {boolean} props.isFocus - Whether this input should be auto-focused
 * @param {string} props.inputStyles - Custom styles for the input
 * @param {string} props.labelStyles - Custom styles for the label
 * @param {boolean} props.required - Whether the input is required
 */
export const TextInput = ({
  label,
  name,
  value,
  onChange,
  isFocus,
  inputStyles = formStyles.input,
  labelStyles = formStyles.label,
  required = false,
  ...props
}) => (
  <div className="relative">
    <label htmlFor={name} className={`${labelStyles}`}>
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <input
      autoFocus={isFocus}
      type="text"
      id={name}
      name={name}
      value={value}
      onChange={(e) => onChange({ [name]: e.target.value })}
      className={`${inputStyles}`}
      required={required}
      {...props}
    />
  </div>
);

/**
 * PhoneInputComponent
 * Renders a phone number input with country selection and validation.
 * @param {Object} props
 * @param {string} props.label - Label for the input
 * @param {string} props.value - Current value of the input
 * @param {function} props.onChange - Function to handle value changes
 * @param {boolean} props.isFocus - Whether this input should be auto-focused
 * @param {string} props.inputStyles - Custom styles for the input
 * @param {string} props.labelStyles - Custom styles for the label
 * @param {boolean} props.required - Whether the input is required
 */
export const EmailInput = ({
  label,
  name,
  value,
  onChange,
  isFocus,
  inputStyles = formStyles.input,
  labelStyles = formStyles.label,
  required = false,
  ...props
}) => (
  <div className="relative">
    <label htmlFor={name} className={`${labelStyles}`}>
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <input
      autoFocus={isFocus}
      type="email"
      id={name}
      name={name}
      value={value}
      onChange={(e) => onChange({ [name]: e.target.value })}
      className={`${inputStyles}`}
      required={required}
      {...props}
    />
  </div>
);

/**
 * SelectInput Component
 * Renders a select dropdown with options.
 * @param {Object} props
 * @param {string} props.label - Label for the select
 * @param {string} props.name - Name and id for the select
 * @param {string} props.value - Current selected value
 * @param {function} props.onChange - Function to handle value changes
 * @param {Array} props.options - Array of option values
 * @param {boolean} props.isFocus - Whether this select should be auto-focused
 * @param {string} props.inputStyles - Custom styles for the select
 * @param {string} props.labelStyles - Custom styles for the label
 * @param {boolean} props.required - Whether the select is required
 */

export const PhoneInputComponent = ({
  label,
  value,
  onChange,
  isFocus,
  inputStyles = formStyles.input,
  labelStyles = formStyles.label,
  required = false,
}) => {
  const [phoneIsFocused, setPhoneIsFocused] = useState(false);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

  const handlePhoneChange = (value) => {
    // Ensure value is not undefined and is a string
    const stringValue = value ? value.toString() : "";

    // Validate phone number
    const parsedPhoneNumber = parsePhoneNumberFromString(stringValue);
    setIsValidPhoneNumber(
      parsedPhoneNumber ? parsedPhoneNumber.isValid() : false
    );

    // Update parent component with the phone number
    onChange({ phone: stringValue });
  };

  return (
    <div
      className={`relative border rounded shadow ${
        phoneIsFocused ? "border-accent shadow-lg" : ""
      }`}
    >
      <label htmlFor="phone" className={`${labelStyles}`}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <PhoneInput
        autoFocus={isFocus}
        id="phone"
        country="uk"
        className={`${inputStyles} border-0`}
        value={value}
        onChange={handlePhoneChange}
        onFocus={() => setPhoneIsFocused(true)}
        onBlur={() => setPhoneIsFocused(false)}
        required={required}
      />
      {!isValidPhoneNumber && (
        <p className="text-red-500">Please enter a valid phone number</p>
      )}
    </div>
  );
};

/**
 * SelectInput Component
 * Renders a select dropdown with options.
 * @param {Object} props
 * @param {string} props.label - Label for the select
 * @param {string} props.name - Name and id for the select
 * @param {string} props.value - Current selected value
 * @param {function} props.onChange - Function to handle value changes
 * @param {Array} props.options - Array of option values
 * @param {boolean} props.isFocus - Whether this select should be auto-focused
 * @param {string} props.inputStyles - Custom styles for the select
 * @param {string} props.labelStyles - Custom styles for the label
 * @param {boolean} props.required - Whether the select is required
 */

export const SelectInput = ({
  label,
  name,
  value,
  onChange,
  options,
  isFocus,
  inputStyles = formStyles.input,
  labelStyles = formStyles.label,
  required = false,
  ...props
}) => (
  <div className="relative">
    <label htmlFor={name} className={`${labelStyles}`}>
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <select
      autoFocus={isFocus}
      id={name}
      name={name}
      value={value}
      onChange={(e) => onChange({ [name]: e.target.value })}
      className={`${inputStyles}`}
      required={required}
      {...props}
    >
      <option value="" disabled hidden></option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

/**
 * CheckboxInput Component
 * Renders a checkbox input with a label.
 * @param {Object} props
 * @param {string} props.label - Label for the checkbox
 * @param {string} props.name - Name and id for the checkbox
 * @param {boolean} props.checked - Whether the checkbox is checked
 * @param {function} props.onChange - Function to handle checked state changes
 * @param {boolean} props.isFocus - Whether this checkbox should be auto-focused
 * @param {string} props.checkBoxStyles - Custom styles for the checkbox
 * @param {string} props.labelClassName - Custom class for the label
 */

export const CheckboxInput = ({
  label,
  name,
  checked,
  onChange,
  isFocus,
  checkBoxStyles = formStyles.checkBox,
  labelClassName = "ml-2 text-sm",
  ...props
}) => (
  <div className="relative flex items-center">
    <div className="relative">
      <input
        autoFocus={isFocus}
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={(e) => {
          if (typeof onChange === "function") {
            onChange(e);
          } else if (
            typeof onChange === "object" &&
            onChange.hasOwnProperty(name)
          ) {
            onChange[name](e.target.checked);
          }
        }}
        className={`${checkBoxStyles} appearance-none cursor-pointer`}
        {...props}
      />
      {checked && (
        <svg
          className="absolute top-[0.5rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white pointer-events-none"
          fill="none"
          stroke="currentColor"
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
    <label htmlFor={name} className={labelClassName}>
      {label}
    </label>
  </div>
);

/**
 * DateInput Component
 * Renders a date input field with a label.
 * Props are similar to TextInput, but type is set to "date".
 */

export const DateInput = ({
  label,
  name,
  value,
  onChange,
  isFocus,
  labelStyles = formStyles.label,
  inputStyles = formStyles.input,
  required = false,
  ...props
}) => (
  <div className="relative">
    <label htmlFor={name} className={`${labelStyles}`}>
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <input
      autoFocus={isFocus}
      type="date"
      id={name}
      name={name}
      value={value}
      onChange={(e) => onChange({ [name]: e.target.value })}
      className={`${inputStyles} pr-4`}
      required={required}
      {...props}
    />
  </div>
);

/**
 * TimeInput Component
 * Renders a time input field with a label.
 * Props are similar to TextInput, but type is set to "time".
 */

export const TimeInput = ({
  label,
  name,
  value,
  onChange,
  isFocus,
  labelStyles = formStyles.label,
  inputStyles = formStyles.input,
  required = false,
  ...props
}) => (
  <div className="relative">
    <label htmlFor={name} className={`${labelStyles}`}>
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <input
      autoFocus={isFocus}
      type="time"
      id={name}
      name={name}
      value={value}
      onChange={(e) => onChange({ [name]: e.target.value })}
      className={`${inputStyles} pr-4`}
      required={required}
      {...props}
    />
  </div>
);

/**
 * NumberInput Component
 * Renders a number input field with a label and min/max constraints.
 * @param {Object} props
 * @param {string} props.label - Label for the input
 * @param {string} props.name - Name and id for the input
 * @param {number} props.value - Current value of the input
 * @param {function} props.onChange - Function to handle value changes
 * @param {boolean} props.isFocus - Whether this input should be auto-focused
 * @param {string} props.labelStyles - Custom styles for the label
 * @param {string} props.inputStyles - Custom styles for the input
 * @param {boolean} props.required - Whether the input is required
 * @param {number} props.min - Minimum allowed value (default: 1)
 * @param {number} props.max - Maximum allowed value (default: 64)
 */

export const NumberInput = ({
  label,
  name,
  value,
  onChange,
  isFocus,
  labelStyles = formStyles.label,
  inputStyles = formStyles.input,
  required = false,
  min = 1,
  max = 64,
  ...props
}) => (
  <div className="relative">
    <label htmlFor={name} className={`${labelStyles}`}>
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <input
      autoFocus={isFocus}
      type="number"
      id={name}
      name={name}
      value={value}
      onChange={(e) => onChange({ [name]: e.target.value })}
      className={`${inputStyles}`}
      required={required}
      min={min}
      max={max}
      {...props}
    />
  </div>
);

/**
 * TextareaInput Component
 * Renders a textarea input.
 * @param {Object} props
 * @param {string} props.placeholder - Placeholder text for the textarea
 * @param {string} props.name - Name and id for the textarea
 * @param {string} props.value - Current value of the textarea
 * @param {function} props.onChange - Function to handle value changes
 * @param {boolean} props.isFocus - Whether this textarea should be auto-focused
 * @param {string} props.textareaStyles - Custom styles for the textarea
 * @param {boolean} props.required - Whether the textarea is required
 */

export const TextareaInput = ({
  placeholder,
  name,
  value,
  onChange,
  isFocus,
  textareaStyles = formStyles.textarea,
  required = false,
  ...props
}) => (
  <textarea
    autoFocus={isFocus}
    id={name}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={(e) => onChange({ [name]: e.target.value })}
    className={`${textareaStyles}`}
    required={required}
    {...props}
  />
);

/**
 * AutocompleteInput Component
 * Renders an input field with Google Places Autocomplete functionality.
 * @param {Object} props
 * @param {string} props.label - Label for the input
 * @param {string} props.name - Name and id for the input
 * @param {string} props.value - Current value of the input
 * @param {function} props.onChange - Function to handle value changes
 * @param {function} props.onLoad - Function called when Autocomplete is loaded
 * @param {function} props.onPlaceChanged - Function called when a place is selected
 * @param {boolean} props.isFocus - Whether this input should be auto-focused
 * @param {string} props.inputStyles - Custom styles for the input
 * @param {string} props.labelStyles - Custom styles for the label
 * @param {boolean} props.required - Whether the input is required
 * @param {Object} props.options - Options for the Autocomplete (e.g., types, componentRestrictions)
 */

export const AutocompleteInput = ({
  label,
  name,
  value,
  onChange,
  onLoad,
  onPlaceChanged,
  isFocus,
  inputStyles = formStyles.input,
  labelStyles = formStyles.label,
  required = false,
  options,
  ...props
}) => (
  <div className="relative">
    <label htmlFor={name} className={labelStyles}>
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <Autocomplete
      onLoad={onLoad}
      onPlaceChanged={onPlaceChanged}
      options={options}
    >
      <input
        autoFocus={isFocus}
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputStyles}
        required={required}
        {...props}
      />
    </Autocomplete>
  </div>
);
