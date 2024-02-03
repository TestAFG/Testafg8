import React from "react";
import "./est.css";
import Form from "@/app/(forms)/est/form/form1";
import { Urbanist } from "next/font/google";
const urbanist = Urbanist({
  weight: ["400", "300", "500", "600", "200"],
  subsets: ["latin"],
});
function MultiStepForm() {
  return (
    <>
      <div className={`App ${urbanist.className}`}>
        <Form />
      </div>
    </>
  );
}

export default MultiStepForm;
