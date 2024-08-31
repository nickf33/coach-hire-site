import MultiStepForm from "./MultiStepForm";

const BookingFormWrap = () => {
  return (
    <>
      <div
        id="booking"
        className="relative z-10 w-4/5 max-w-container border-2 shadow-xl rounded-xl bg-light mx-auto laptop:w-full px-4 sm:px-8"
      >
        <MultiStepForm />
      </div>
    </>
  );
};

export default BookingFormWrap;
