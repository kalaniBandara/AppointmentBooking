/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
import React, { useState, useRef } from "react";
import LoaderIcon from "react-loader-icon";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

function ManicureTab() {
  const [selectedManicureIndex, setSelectedManicureIndex] = useState(null);
  const [buttonShow, setButtonShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [sendMail, setSendMail] = useState(false);
  const [sendMessage, setSendMessage] = useState(false);
  const [sendErrorMessage, setSendErrorMessage] = useState(false);
  const form = useRef();
  const [selectedService, setSelectedService] = useState("");

  const waxingLists = [
    {
      title: "Eyebrows",   
    },
    {
      title: "Lips",    
    },
    {
      title: "Eyebrows & Lips",
    },
    {
      title: "Neck & cheeks",
    },
    {
      title: "Under Arms",   
    },
    {
      title: "Arms &Hands",  
    },
    {
      title: "Back",   
    },
    {
      title: "Brazilian",   
    },
    {
      title: "Stomach",    
    },
    {
      title: "Full Legs",
    },
    {
      title: "Lower Legs",
    },
    {
      title: "Full Body wax",   
    },
    {
      title: "Full Body wax with brazilian",  
    },
    {
      title: "Clean up facial",   
    },
    {
      title: "Gold Facial",  
    },
    {
      title: "Arbutine",   
    },
  ];

  async function handleSubmit(event) {
    event.preventDefault();
    if (!form.current.email.value || !selectedTime || !selectedService) {
      setSendErrorMessage(true);
      return;
    }

    setSendMail(true);
    const formData = new FormData(event.target);

    const formattedTime = new Date(`1970-01-01T${selectedTime}:00`).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    formData.append("access_key", "f16ab170-7bc6-473c-9db1-990dbbb8309c");
    formData.append("subject", "New Manicure Appointment Booking");
    formData.append("service", selectedService);
    formData.append("date", selectedDate);
    formData.append("time", formattedTime);
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
      setSendMessage(true);
      setSendErrorMessage(false);
      setSendMail(false);
      form.current.reset();
      setSelectedTime(""); // Reset selected time
      setSelectedDate(""); // Reset selected date
    } else {
      setSendMessage(false);
      setSendErrorMessage(true);
      setSendMail(false);
    }
  }

  return (
    <div className="w-full flex flex-col items-center justify-start">
      <div className="w-full flex flex-col gap-2 manicure-class">
        
        {waxingLists.map((manicureList, index) => (
          <div
            className="w-full flex flex-row items-center justify-between ring-2 rounded-lg ring-gr p-2 hover:bg-white transition-all duration-300 cursor-pointer"
            key={index}
          >
            <div className=" flex flex-col items-start gap-3">
              <p>{manicureList.title}</p>
           
            </div>
            {/* <div className="w-1/6 flex flex-col items-center justify-center">
              <p>USD {manicureList.price}</p>
              <p>{manicureList.time}</p>
            </div> */}
            
              <input
                type="radio"
                name="manicureListValue"
                id={`manicureListValue${index}`}
                checked={selectedManicureIndex === index}
                className="w-5 h-5"
                onChange={() => {
                  setSelectedManicureIndex(index);
                  setSelectedService(manicureList.title);
                  setButtonShow(true);
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
              <div className="flex flex-row items-start justify-between text-left gap-5">
                <label>
                  Your Name:
                  <input
                    type="text"
                    name="name"
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
                  Mobile Number:
                  <input
                    type="number"
                    name="mobile Number"
                    required
                    className=" p-2 w-full rounded-lg ring-1"
                  />
                </label>
              </div>
              <div className="flex flex-row justify-between w-full gap-5">
                <div className="w-1/2 flex flex-col items-start ">
                  <h2>Select Date</h2>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                    className=" p-2 w-full rounded-lg ring-1"
                  />
                </div>
                <div className="w-1/2 flex flex-col items-start ">
                  <h2>Select Time</h2>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    required
                    className=" p-2 w-full rounded-lg ring-1"
                  />
                </div>
              </div>
              <div className="flex flex-col ">
                <div>
                  {sendMail ? (
                    <button
                      type="submit"
                      className="flex flex-row items-center gap-2 font-Poppins font-medium text-white rounded-full bg-primary py-3 px-6"
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
                {sendMessage && (
                  <h3 className="bg-[#64ff64] p-3 border-l-2 text-xs border-l-green">
                    Email has been sent successfully. Thank You!
                  </h3>
                )}
                {sendErrorMessage && (
                  <h3 className="bg-[#ff5f20] p-3 text-white border-l-2 text-xs border-l-primary">
                    Please fill the form again. Thank You!
                  </h3>
                )}
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default ManicureTab;
