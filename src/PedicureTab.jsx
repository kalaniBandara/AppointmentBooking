/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
function PedicureTab() {
    const [buttonShow, setbuttonShow] = useState(false)
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const handleDateChange = (date) => {
        setSelectedDate(date);
    }
    const pedicureLists = [
        {
            title: "Quickie Pedicure",
            des: "A no-nonsense shape and polish",
            price: "18",
            time: "30"
        },
        {
            title: "Signature Pedicure",
            des: "Our classic service includes nail shaping, cuticle care, foot scrub and a massage. Finish off with a fresh coat of polish.",
            price: "35",
            time: "60"
        },
        {
            title: "Polished + Zen Pedicure",
            des: "Our all-new “Polished + Zen” service includes everything you love about our Signature service plus a heated eye mask treatment, followed by an aromatherapy pause with Innerfyre’s healing balms, as you recline in your chair, sip on calming chamomile tea and tune into a guided meditation video. It’s the perfect moment where you can get relaxed and be in your own zone.",
            price: "55",
            time: "70"
        },
        {
            title: "Gel Polish Soak Off (Pedicure)",
            des: "Safely remove your gel polish (not for Hard Gel or Nail Extensions)",
            price: "70",
            time: "70"
        },
        {
            title: "Little Miss Quickie Pedicure",
            des: "A mini pedicure service for the little ones, aged 12 years and below only. *Includes four nail stickers.",
            price: "20",
            time: "20"
        },
        {
            title: "Luxe Spa Pedicure",
            des: "The full works. Our luxe service includes nail shaping, cuticle care, gentle sea salt exfoliation, organic clay masque and a coconut oil massage. Finish off with a fresh coat of polish. Also includes callus & heel treatment (if needed).",
            price: "15",
            time: "20"
        },
        {
            title: "Gentlemans Pedicure",
            des: "Our classic service just for men, includes nail shaping, cuticle care, foot scrub and a massage. Finish off with a buff shine.",
            price: "40",
            time: "60"
        },
        {
            title: "Callus & Heel Treatment",
            des: "A highly-effective foot scrub and treatment to remove thick and stubborn calluses (Not suitable for use if you are pregnant, diabetic or have poor circulation due to any illness.)",
            price: "40",
            time: "60"
        },
    ];
    return (
        <>
            <div className="w-full flex flex-col items-center justify-start">
                <div
                    className="w-full flex flex-col gap-2"
                >
                    {pedicureLists.map((pedicureList, index) => (
                        <div className="w-full flex flex-row items-center justify-start ring-2 rounded-lg ring-gr p-2 hover:bg-white transition-all duration-300 hover:cursor-pointer" key={index}>
                            <div className="w-5/6 flex flex-col items-start gap-3">
                                <p>{pedicureList.title}</p>
                                <p>{pedicureList.des}</p>
                            </div>
                            <div className="w-1/6 flex flex-col items-center justify-center">
                                <p>USD {pedicureList.price}</p>
                                <p>{pedicureList.time} Min</p>
                            </div>
                            <div className="w-20">
                                <input type="radio" name="manicureListValue" id="manicureListValue" onClick={() => setbuttonShow(!buttonShow)} />
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
                                            <div>Callus Treatment</div>
                                            <div className='flex flex-row gap-5'>
                                                <label for="optionA">$202500<br />
                                                    (+30min)</label>
                                                <input type="radio" id="optionA" name="options" value="A" />
                                            </div>
                                        </div>
                                        <div className='w-1/2 flex flex-row border-[1px] p-5 justify-between'>
                                            <div>Gel Polish Soak Off</div>
                                            <div className='flex flex-row gap-5'>
                                                <label for="optionB">$30.00 <br />
                                                    (+30min)</label>
                                                <input type="radio" id="optionB" name="options" value="B" />
                                            </div>
                                        </div>
                                        <div className='w-1/2 flex flex-row border-[1px] p-5 justify-between items-center'>
                                            <div>Nail Art (30 minutes)</div>
                                            <div className='flex flex-row gap-5'>
                                                <label for="optionC">$15.00 <br />
                                                    (+10min)</label>
                                                <input type="radio" id="optionC" name="options" value="C" />

                                            </div>
                                        </div>
                                        <div className='w-1/2 flex flex-row border-[1px] p-5 justify-between'>
                                            <div>Non-Toxic Gel Polish</div>
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
                                        <input type="radio" id="optionB" name="options" value="B" className='mx-5' />
                                        <br />


                                        <label for="optionC">5:00 PM</label>
                                        <input type="radio" id="optionC" name="options" value="C" className='mx-5' />
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

export default PedicureTab