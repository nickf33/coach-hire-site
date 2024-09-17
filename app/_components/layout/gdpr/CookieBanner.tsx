"use client";

import Link from "next/link";
import { getLocalStorage, setLocalStorage } from "@/app/lib/storageHelper";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Suspense } from "react";

type CookiePreferences = {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);
    setCookieConsent(storedCookieConsent);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (cookieConsent !== null) {
      const newValue = cookieConsent ? "granted" : "denied";

      window.gtag("consent", "update", {
        analytics_storage: newValue,
      });

      setLocalStorage("cookie_consent", cookieConsent);

      // For Testing
      console.log("Cookie Consent: ", cookieConsent);
    }
  }, [cookieConsent]);

  const handleConsent = (consent: boolean) => {
    setCookieConsent(consent);
  };

  const handleManagePreferences = () => {
    setShowPreferences(!showPreferences);
  };

  const handlePreferenceChange = (key: keyof CookiePreferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSavePreferences = () => {
    // Save preferences logic here
    setCookieConsent(true);
    setShowPreferences(false);
  };

  if (isLoading || cookieConsent !== null) {
    return null;
  }

  return (
    <Suspense>
      <div className="fixed rounded-xl bg-primary bottom-0 mx-auto my-10 py-3 w-3/5 max-w-[34rem] left-10 right-auto px-4 z-[9999]">
        <div className="text-white p-2">
          <Link href="/cookie-policy">
            <h2>
              We use <span className="font-bold text-accent">cookies</span> on
              our site.
            </h2>
          </Link>
          <p className="text-xs mt-4 mr-4">
            This website utilises cookies to enable essential site functionality
            and analytics. You may change your settings at any time or accept
            the default settings. You may close this banner to continue with
            only essential cookies.
          </p>
        </div>
        <div className="flex items-start justify-between gap-4 rounded-lg py-2 md:flex-row xs:flex-col flex-row">
          <div className="flex justify-between gap-5 xs:flex-row sm:w-60 w-full flex-col">
            <button
              type="button"
              className="rounded-md border border-secondary bg-secondary px-4 py-2 w-full text-sm text-white transition hover:bg-zinc-800 hover:border-white"
              onClick={() => handleConsent(false)}
            >
              Decline All
            </button>
            <button
              type="button"
              className="rounded-md bg-accent px-4 py-2 text-sm text-white transition border w-full border-accent hover:bg-transparent hover:border"
              onClick={() => handleConsent(true)}
            >
              Accept All
            </button>
          </div>
          <button
            type="button"
            className="rounded-md border border-secondary bg-secondary px-4 py-2 text-sm text-white sm:w-40 w-full transition hover:bg-zinc-800 hover:border-white"
            onClick={handleManagePreferences}
          >
            {showPreferences ? "Hide" : ""} Preferences
          </button>
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${showPreferences ? "max-h-96" : "max-h-0"}`}
        >
          <div className="text-white">
            <h3 className="font-semibold my-4">Cookie Preferences</h3>
            <hr className="mb-4" />
            {(Object.keys(preferences) as Array<keyof CookiePreferences>).map(
              (key) => (
                <div
                  key={key}
                  className="flex items-center justify-between mb-4"
                >
                  <label htmlFor={key} className="text-sm flex-grow">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <ToggleSwitch
                    isOn={preferences[key]}
                    toggleSwitch={() => handlePreferenceChange(key)}
                    disabled={key === "necessary"}
                  />
                </div>
              )
            )}
            <button
              type="button"
              onClick={handleSavePreferences}
              className="mt-2 rounded-md bg-accent px-4 py-2 text-sm text-white transition border border-accent hover:bg-transparent hover:border"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

const ToggleSwitch = ({
  isOn,
  toggleSwitch,
  disabled,
}: {
  isOn: boolean;
  toggleSwitch: () => void;
  disabled?: boolean;
}) => {
  return (
    <div
      className="toggle-switch"
      onClick={disabled ? undefined : toggleSwitch}
    >
      <motion.div
        className="toggle-switch-handle"
        animate={{
          backgroundColor: isOn ? "#23B798" : "#bbbbbb",
        }}
        style={{
          width: "40px",
          height: "20px",
          borderRadius: "17px",
          padding: "3px",
          display: "flex",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.6 : 1,
        }}
      >
        <motion.div
          animate={{
            x: isOn ? 20 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
          style={{
            width: "14px",
            height: "14px",
            borderRadius: "14px",
            backgroundColor: "#ffffff",
          }}
        />
      </motion.div>
    </div>
  );
};
