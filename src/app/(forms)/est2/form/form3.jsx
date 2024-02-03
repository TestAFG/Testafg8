"use client"
import React, { useState } from "react";
import LengthForm from "./lengthForm";
import TypeForm from "./typeform";
import LuxuryForm from "./luxury";
import SummaryPage from "./Summary-page";
function Form3() {
  const [page, setPage] = useState(0);
  const [showSummary,SetShowSummary] = useState(false)
  const [formData, setFormData] = useState({
    length:"",
    type:"",
    package:""
  });

  const FormTitles = ["Select the size", "Choose rooms", "Other"];

  const PageDisplay = () => {
    if (page === 0) {
      return <LengthForm formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <TypeForm formData={formData} setFormData={setFormData} />;
    } else {
      return <LuxuryForm formData={formData} setFormData={setFormData} />;
    }
  };
  if(showSummary){
    return(
      <div className="h-screen w-screen flex flex-col items-center justify-center">
      <SummaryPage length={formData.length} packageType={formData.package} type={formData.type}/>
      </div>
    )
  }
  return (
    <div className="form min-h-screen">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer flex space-x-4">
          <button
          className="h-1/2 rounded-lg px-8 font-semibold bg-blue-300 hover:bg-white hover:border-black hover:border transition-colors "
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
          className="h-1/2 rounded-lg px-8 font-semibold bg-blue-300 hover:bg-white hover:border-black hover:border transition-colors "
            onClick={() => {
              if (page === FormTitles.length - 1) {
                console.log(formData);
                SetShowSummary(true)
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form3;