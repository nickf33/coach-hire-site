import {
  StepHeading,
  TextInput,
  EmailInput,
  PhoneInputComponent,
  SelectInput,
} from "./ResuableInputs";

const Personal = ({ name, email, phone, reason, updateFields }) => {
  return (
    <>
      <StepHeading
        stepPara="Tell us a little about your trip and we will supply you a bespoke
          quotation for your needs."
        stepTitle="Your Contact Details"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <TextInput
          label="Name"
          name="name"
          value={name}
          onChange={updateFields}
          required
        />
        <EmailInput
          label="Email"
          name="email"
          value={email}
          onChange={updateFields}
          required
        />
        <PhoneInputComponent
          label="Phone Number"
          name="phone"
          value={phone}
          onChange={updateFields}
          required
        />
        <SelectInput
          label="Reason for Travel"
          name="reason"
          value={reason}
          onChange={updateFields}
          options={["Leisure", "Business", "Education", "Social", "Other"]}
        />
      </div>
    </>
  );
};

export default Personal;
