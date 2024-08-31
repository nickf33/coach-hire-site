"use client";

import { useMultiStepform } from "./useMultiStepForm.js";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import CircularProgressIndicator from "./CircularProgressIndicator";

import Personal from "./formSteps/Personal.jsx";
import Additional from "./formSteps/Additional.jsx";
import Summary from "./formSteps/Summary.jsx";
import Trip from "./formSteps/Trip.jsx";

const INITIAL_DATA = {
  name: "",
  email: "",
  phone: "",
  reason: "",
  returnTrip: true,
  location: "",
  pickupDate: "",
  pickupTime: "09:00",
  destination: "",
  returnDate: "",
  returnTime: "09:00",
  luggage: "",
  passengers: "",
  vehicle: "",
  Additional: "",
  termsOfUse: false,
  conditions: false,
};

const MultiStepForm = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  function updateFields(fields) {
    setData((prev) => ({ ...prev, ...fields }));
  }

  const calculateProgress = () => {
    return (currentStepIndex / (steps.length - 1)) * 100;
  };

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepform({
      steps: [
        <Personal key="1" {...data} updateFields={updateFields} />,
        <Trip key="2" {...data} updateFields={updateFields} />,
        <Additional key="3" {...data} updateFields={updateFields} />,
        <Summary key="4" {...data} updateFields={updateFields} />,
      ],
    });

  async function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const serviceId = "service_w0liemi";
      const templateId = "template_nn1p4se";
      const userId = "1uaMooErNJFnellz3";

      const templateParams = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        reason: data.reason,
        returnTrip: data.returnTrip ? "Yes" : "No",
        location: data.location,
        pickupDate: data.pickupDate,
        pickupTime: data.pickupTime,
        destination: data.destination,
        returnDate: data.returnDate,
        returnTime: data.returnTime,
        luggage: data.luggage,
        passengers: data.passengers,
        vehicle: data.vehicle,
        additional: data.Additional,
        termsOfUse: data.termsOfUse ? "Accepted" : "Not Accepted",
        conditions: data.conditions ? "Accepted" : "Not Accepted",
      };

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        userId
      );
      console.log("Email sent successfully:", result.text);
      setSubmissionStatus("success");
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="h-full w-9/10 mx-auto my-8 text-primary">
      <div className="flex w-full items-center justify-between">
        <p className="title__md">Book Your Journey Today</p>
        <CircularProgressIndicator
          progress={calculateProgress()}
          size={60}
          color="#4f46e5"
        />
      </div>

      {submissionStatus === "success" && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative my-4"
          role="alert"
        >
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline">
            {" "}
            Your form has been submitted successfully.
          </span>
        </div>
      )}

      {submissionStatus === "error" && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-4"
          role="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline">
            {" "}
            There was a problem submitting your form. Please try again.
          </span>
        </div>
      )}

      <form onSubmit={onSubmit}>
        <AnimatePresence mode="wait">
          {steps.map(
            (step, index) =>
              index === currentStepIndex && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ stiffness: 1000, damping: 12 }}
                  className="text-xs text-primary min-h-[14rem] mt-4"
                >
                  {step}
                </motion.div>
              )
          )}
        </AnimatePresence>

        <div className="relative bottom-0 mx-auto w-full grid grid-cols-2 gap-8 mt-8">
          <button
            type="button"
            onClick={back}
            className={`text-primary w-full bg-gray-200 text-sm p-3 rounded transition hover:scale-[1.02] hover:shadow focus:shadow-lg focus:scale-[0.99] ${
              isFirstStep ? "opacity-0" : "opacity-100"
            }`}
            disabled={isFirstStep}
          >
            Back
          </button>

          <button
            type="submit"
            className={`w-full text-sm text-white p-3 rounded transition hover:scale-[1.02] hover:shadow focus:shadow-lg focus:scale-[0.99]
            ${
              (isLastStep && !data.conditions) ||
              (isFirstStep && (!data.name || !data.email || !data.phone)) ||
              isSubmitting
                ? "opacity-40 bg-primary cursor-not-allowed"
                : "bg-gradient-to-r from-accentDark via-accent to-accent"
            }`}
            disabled={
              (isLastStep && !data.conditions) ||
              (isFirstStep && (!data.name || !data.email || !data.phone)) ||
              isSubmitting
            }
          >
            {!isLastStep ? "Next" : isSubmitting ? "Submitting..." : "Finish"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
