/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LoaderIcon from "react-loader-icon";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

function ColorChange() {
  const [buttonShow, setbuttonShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [sendMail, setsendMail] = useState(false);
  const [sendMassage, setsendMassage] = useState(false);
  const [sendErrorMassage, setsendErrorMassage] = useState(false);
  const form = useRef();
  const [selectedService, setSelectedService] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  const ColorChangeLists = [
    {
      title: "French Colour OPI Gel",
    },
    {
      title: "French Colour OPI Nail Polish",
    },
    {
      title: "OPI Gel Colour",
    },
    {
      title: "OPI Nail Polish",
    },
    {
      title: "French Colour Non Gel",
    },
    {
      title: "French Colour Non Nail Polish",
    },
    {
      title: "Non Gel Colour",
    },
    {
      title: "Non Nail Polish",
    },
   
  ];



  async function handleSubmit(event) {
    event.preventDefault();
    if (
      form.current.email.value === "" ||
      selectedTime === "" ||
      selectedService === ""
    ) {
      setsendErrorMassage(true);
    } else {
      setsendMail(true);
      const formData = new FormData(event.target);

      formData.append("access_key", "f16ab170-7bc6-473c-9db1-990dbbb8309c");
      formData.append("subject", "New Pedicure Appointment Booking");
      formData.append("service", selectedService);
      formData.append("date", selectedDate.toLocaleDateString());
      formData.append("time", selectedTime);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        setsendMassage(true);
        setsendErrorMassage(false);
        setsendMail(false);
        form.current.reset();
        setSelectedTime(""); // Reset selected time
      } else {
        setsendMassage(false);
        setsendErrorMassage(true);
        setsendMail(false);
      }
    }
  }

  return (
    <>
      <div className="w-full flex flex-col items-center justify-start">
        <div className="w-full flex flex-col gap-2">
          
          {ColorChangeLists.map((pedicureList, index) => (
            <div
              className="w-full flex flex-row items-center justify-between ring-2 rounded-lg ring-gr p-2 hover:bg-white transition-all duration-300 hover:cursor-pointer"
              key={index}
            >
              <div className="w-5/6 flex flex-col items-start gap-3">
                <p>{pedicureList.title}</p>
              </div>

              <input
                type="radio"
                name="pedicureService"
                value={pedicureList.title}
                className="w-5 h-5"
                onClick={() => {
                  setbuttonShow(true);
                  setSelectedService(pedicureList.title);
                }}
              />
            </div>
          ))}
          
          {buttonShow && (
            <>
              <form
                ref={form}
                onSubmit={handleSubmit}
                className="flex flex-col w-full gap-5 bg-white p-5 rounded-md"
              >
                <div className="flex flex-row justify-between w-full gap-5">
                  <div className="w-1/2 flex flex-col items-start ">
                    <h2>Select Date</h2>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      className=" p-2 w-full rounded-lg ring-1"
                    />
                  </div>
                  <div className="w-1/2 flex flex-col items-start ">
                    <h2>Select Date</h2>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      required
                      className=" p-2 w-full rounded-lg ring-1"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-between text-left gap-5">
                  <label>
                    Your Email:
                    <input
                      type="email"
                      name="email"
                      required
                      className=" p-2 w-full rounded-lg ring-1"
                    />
                  </label>
                  <label>
                    Your Email:
                    <input
                      type="email"
                      name="email"
                      required
                      className=" p-2 w-full rounded-lg ring-1"
                    />
                  </label>
                  <label>
                    Your Email:
                    <input
                      type="email"
                      name="email"
                      required
                      className=" p-2 w-full rounded-lg ring-1"
                    />
                  </label>
                </div>
                <div className="flex flex-col ">
                  <div>
                    {sendMail ? (
                      <button
                        type="submit"
                        className="flex flex-row items-center gap-2 font-Poppins font-medium text-white rounded-full bg-darkBlack py-3 px-6"
                        disabled
                      >
                        Sending
                        <div className="w-5 h-5 text-white">
                          <LoaderIcon type={"bars"} color={"white"} size={25} />
                        </div>
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="flex flex-row items-center gap-2 font-Poppins font-medium text-white rounded-full bg-primary py-3 px-6"
                      >
                        Submit
                        <div className="w-5 h-5 text-white">
                          <PaperAirplaneIcon />
                        </div>
                      </button>
                    )}
                  </div>
                </div>
                <div className="flex flex-col">
                  {sendMassage && (
                    <h3 className="bg-green50 p-3 text-white border-l-2 text-xs border-l-green">
                      Email has been sent successfully. Thank You!
                    </h3>
                  )}
                  {sendErrorMassage && (
                    <h3 className="bg-primary50 p-3 text-white border-l-2 text-xs border-l-primary">
                      Please fill the form again. Thank You!
                    </h3>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ColorChange;
