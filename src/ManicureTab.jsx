/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
function ManicureTab() {
    const [selectedManicureIndex, setSelectedManicureIndex] = useState(null);
    const [buttonShow, setbuttonShow] = useState(false)
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
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
    return (
        <>
            <div className="w-full flex flex-col items-center justify-start">
                <div
                    className="w-full flex flex-col gap-2 manicure-class"
                    onClick={() => setSelectedManicureIndex(index)}
                >
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
                                    onChange={() => setSelectedManicureIndex(index)}
                                    onClick={() => setbuttonShow(!buttonShow)}

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
                                        <div className='w-1/2 flex flex-row border-[1px] p-5 justify-between p-5 justify-between'>
                                            <div>Gel Polish Soak Off</div>
                                            <div className='flex flex-row gap-5'>
                                                <label for="optionA">$20.00<br />
                                                    (+30min)</label>
                                                <input type="radio" id="optionA" name="options" value="A" />
                                            </div>
                                        </div>
                                        <div className='w-1/2 flex flex-row border-[1px] p-5 justify-between'>
                                            <div>Nail Art (30 minutes)</div>
                                            <div className='flex flex-row gap-5'>
                                                <label for="optionB">$30.00 <br />
                                                    (+30min)</label>
                                                <input type="radio" id="optionB" name="options" value="B" />
                                            </div>
                                        </div>
                                        <div className='w-1/2 flex flex-row border-[1px] p-5 justify-between items-center'>
                                            <div>Non-Toxic Gel Polish</div>
                                            <div className='flex flex-row gap-5'>
                                                <label for="optionC">$15.00 <br />
                                                    (+10min)</label>
                                                <input type="radio" id="optionC" name="options" value="C" />

                                            </div>
                                        </div>
                                        <div className='w-1/2 flex flex-row border-[1px] p-5 justify-between'>
                                            <div>Nail Repair (Per Nail)</div>
                                            <div className='flex flex-row gap-5'>
                                                <label for="optionD">$35.00 <br />
                                                    (+20min)</label>
                                                <input type="radio" id="optionD" name="options" value="d" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='flex flex-row justify-between'>
                                    <div className='w-1/2'> <h2>Select Date </h2>
                                        <DatePicker
                                            selected={selectedDate}
                                            onChange={handleDateChange}

                                            dateFormat="Pp"
                                        /></div>
                                    <div className='w-1/2'>

                                        <h2>Select Time </h2>
                                        <label for="optionA">3:00 PM</label>
                                        <input type="radio" id="optionA" name="options" value="A" className='mx-5' />
                                        <br />


                                        <label for="optionB">4:00 PM</label>
                                        <input type="radio" id="optionB" name="options" value="B" className='mx-5'/>
                                        <br />


                                        <label for="optionC">5:00 PM</label>
                                        <input type="radio" id="optionC" name="options" value="C" className='mx-5'/>
                                    </div>
                                </div>
                            </>
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default ManicureTab