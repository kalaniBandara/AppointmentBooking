import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import LoaderIcon from "react-loader-icon";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

function MassageTab() {
    const [buttonShow, setbuttonShow] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState("");
    const [sendMail, setsendMail] = useState(false);
    const [sendMassage, setsendMassage] = useState(false);
    const [sendErrorMassage, setsendErrorMassage] = useState(false);
    const form = useRef();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    async function handleSubmit(event) {
        event.preventDefault();
        if (form.current.email.value === "" || selectedTime === "") {
            setsendErrorMassage(true);
        } else {
            setsendMail(true);
            const formData = new FormData(event.target);

            formData.append("access_key", "f16ab170-7bc6-473c-9db1-990dbbb8309c");
            formData.append("subject", "New Massage Appointment Booking");
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
                <div
                    className="w-full flex flex-col ring-2 rounded-lg ring-gr p-2 hover:bg-white transition-all duration-300 hover:cursor-pointer"
                >
                    <div className="w-full flex flex-row items-center justify-start">
                        <div className="w-5/6 flex flex-col items-start gap-3">
                            <p>30-min Foot Massage</p>
                            <p>Soothe tired feet with a warm foot soak, gentle exfoliation and an invigorating foot and calf massage using organic coconut oil and essential oils.</p>
                        </div>
                        <div className="w-1/6 flex flex-col items-center justify-center">
                            <p>USD 45</p>
                            <p>30 Min</p>
                        </div>
                        <div className="w-20">
                            <input type="radio" name="service" value="30-min Foot Massage" onClick={() => setbuttonShow(!buttonShow)} />
                        </div>
                    </div>
                </div>
                {
                    buttonShow && (
                        <>
                            <div className='flex flex-col bg-white my-5 rounded-lg py-5 w-full'>
                                <div className='py-5 text-left px-5'>SUGGESTED ADD-ONS</div>
                                <div className='flex flex-wrap items-start justify-start'>
                                    <div className='w-1/2 flex flex-row border-[1px] justify-between p-5'>
                                        <div>Callus Treatment</div>
                                        <div className='flex flex-row gap-5'>
                                            <label htmlFor="optionA">$20<br />
                                                (+30min)</label>
                                            <input type="radio" id="optionA" name="addon" value="Callus Treatment" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form ref={form} onSubmit={handleSubmit} className='flex flex-col w-full'>
                                <div className='flex flex-row justify-between w-full'>
                                    <div className='w-1/2'>
                                        <h2>Select Date</h2>
                                        <DatePicker
                                            selected={selectedDate}
                                            onChange={handleDateChange}
                                            dateFormat="Pp"
                                            name="date"
                                        />
                                    </div>
                                    <div className='w-1/2'>
                                        <h2>Select Time</h2>
                                        <label>
                                            <input type="radio" name="time" value="3:00 PM" onChange={() => setSelectedTime("3:00 PM")} className='mx-5' />
                                            3:00 PM
                                        </label>
                                        <br />
                                        <label>
                                            <input type="radio" name="time" value="4:00 PM" onChange={() => setSelectedTime("4:00 PM")} className='mx-5' />
                                            4:00 PM
                                        </label>
                                        <br />
                                        <label>
                                            <input type="radio" name="time" value="5:00 PM" onChange={() => setSelectedTime("5:00 PM")} className='mx-5' />
                                            5:00 PM
                                        </label>
                                    </div>
                                </div>
                                <div className='flex flex-col mt-5'>
                                    <label>
                                        Your Email:
                                        <input type="email" name="email" required className="border-[1px] p-2 w-full" />
                                    </label>
                                </div>
                                <div className='flex flex-col mt-5'>
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
                                                className="flex flex-row items-center gap-2 font-Poppins font-medium text-white rounded-full bg-pink py-3 px-6"
                                            >
                                                Submit
                                                <div className="w-5 h-5 text-white">
                                                    <PaperAirplaneIcon />
                                                </div>
                                            </button>
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-col mt-5">
                                    {sendMassage && (
                                        <h3 className="bg-green50 p-3 text-white border-l-2 text-xs border-l-green">
                                            Email has been sent successfully. Thank You!
                                        </h3>
                                    )}
                                    {sendErrorMassage && (
                                        <h3 className="bg-pink50 p-3 text-white border-l-2 text-xs border-l-pink">
                                            Please fill the form again. Thank You!
                                        </h3>
                                    )}
                                </div>
                            </form>
                        </>
                    )
                }
            </div>
        </>
    );
}

export default MassageTab;
