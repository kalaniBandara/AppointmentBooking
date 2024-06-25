/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import LoaderIcon from "react-loader-icon";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

function ManicureTab() {
    const [selectedManicureIndex, setSelectedManicureIndex] = useState(null);
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

    const manicureLists = [
        {
            title: "Quickie Manicure",
            des: "A no-nonsense shape and polish",
            price: "18",
            time: "30"
        },
        {
            title: "Signature Manicure",
            des: "Our classic service includes nail shaping, cuticle care and a massage. Finish off with a fresh coat of polish.",
            price: "35",
            time: "60"
        },
        {
            title: "Polished + Zen Manicure",
            des: "Our all-new “Polished + Zen” service includes everything you love about our Signature service plus a heated eye mask treatment, followed by an aromatherapy pause with Innerfyre’s healing balms, as you recline in your chair, sip on calming chamomile tea and tune into a guided meditation video. It’s the perfect moment where you can get relaxed and be in your own zone.",
            price: "45",
            time: "70"
        },
        {
            title: "Luxe Spa Manicure",
            des: "The full works. Our luxe service includes nail shaping, cuticle care, gentle sea salt exfoliation, organic clay masque and a coconut oil massage. Finish off with a fresh coat of polish.",
            price: "70",
            time: "70"
        },
        {
            title: "Gel Polish Soak Off (Manicure)",
            des: "Safely remove your gel polish (not for Hard Gel or Nail Extensions)",
            price: "20",
            time: "20"
        },
        {
            title: "Little Miss Quickie Manicure",
            des: "A mini manicure service for the little ones, aged 12 years and below only. *Includes four nail stickers.",
            price: "15",
            time: "20"
        },
        {
            title: "Gentlemans Manicure",
            des: "Our classic service just for men, includes nail shaping, cuticle care and a massage. Finish off with a buff shine.",
            price: "40",
            time: "60"
        },
    ];

    async function handleSubmit(event) {
        event.preventDefault();
        if (form.current.email.value === "" || selectedTime === "" || selectedService === "") {
            setsendErrorMassage(true);
        } else {
            setsendMail(true);
            const formData = new FormData(event.target);

            formData.append("access_key", "f16ab170-7bc6-473c-9db1-990dbbb8309c");
            formData.append("subject", "New Manicure Appointment Booking");
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
                <div className="w-full flex flex-col gap-2 manicure-class">
                    {manicureLists.map((manicureList, index) => (
                        <div className="w-full flex flex-row items-center justify-start ring-2 rounded-lg ring-gr p-2 hover:bg-white transition-all duration-300 " key={index}>
                            <div className="w-5/6 flex flex-col items-start gap-3">
                                <p>{manicureList.title}</p>
                                <p>{manicureList.des}</p>
                            </div>
                            <div className="w-1/6 flex flex-col items-center justify-center">
                                <p>USD {manicureList.price}</p>
                                <p>{manicureList.time}</p>
                            </div>
                            <div className="w-20">
                                <input
                                    type="radio"
                                    name="manicureListValue"
                                    id={`manicureListValue${index}`}
                                    checked={selectedManicureIndex === index}
                                    onChange={() => { setSelectedManicureIndex(index); setSelectedService(manicureList.title); setbuttonShow(true); }}
                                />
                            </div>
                        </div>
                    ))}
                    {
                        buttonShow && (
                            <>
                                <div className='flex flex-col bg-white my-5 rounded-lg py-5'>
                                    <div className='py-5 text-left px-5'> SUGGESTED ADD-ONS</div>
                                    <div className='flex flex-wrap items-start justify-start'>
                                        <div className='w-1/2 flex flex-row border-[1px] justify-between p-5'>
                                            <div>Gel Polish Soak Off</div>
                                            <div className='flex flex-row gap-5'>
                                                <label htmlFor="optionA">$20.00<br />
                                                    (+30min)</label>
                                                <input type="radio" id="optionA" name="addon" value="Gel Polish Soak Off" />
                                            </div>
                                        </div>
                                        <div className='w-1/2 flex flex-row border-[1px] p-5 justify-between'>
                                            <div>Nail Art (30 minutes)</div>
                                            <div className='flex flex-row gap-5'>
                                                <label htmlFor="optionB">$30.00 <br />
                                                    (+30min)</label>
                                                <input type="radio" id="optionB" name="addon" value="Nail Art" />
                                            </div>
                                        </div>
                                        <div className='w-1/2 flex flex-row border-[1px] p-5 justify-between items-center'>
                                            <div>Non-Toxic Gel Polish</div>
                                            <div className='flex flex-row gap-5'>
                                                <label htmlFor="optionC">$15.00 <br />
                                                    (+10min)</label>
                                                <input type="radio" id="optionC" name="addon" value="Non-Toxic Gel Polish" />
                                            </div>
                                        </div>
                                        <div className='w-1/2 flex flex-row border-[1px] p-5 justify-between'>
                                            <div>Nail Repair (Per Nail)</div>
                                            <div className='flex flex-row gap-5'>
                                                <label htmlFor="optionD">$35.00 <br />
                                                    (+20min)</label>
                                                <input type="radio" id="optionD" name="addon" value="Nail Repair" />
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
            </div>
        </>
    );
}

export default ManicureTab;
