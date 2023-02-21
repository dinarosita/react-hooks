
import React from "react";
import CustomHookPageAbout from "./CustomHookPageAbout"
import UseLocalStoragePage from "./UseLocalStoragePage";
import UseUpdateLoggerPage from "./UseUpdateLoggerPage";

export default function ExperimentalPage() {
  return (
    <main>
      <CustomHookPageAbout />
      <UseLocalStoragePage />
      <UseUpdateLoggerPage />
    </main>
  );
}