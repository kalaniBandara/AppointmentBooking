import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
function MassageTab() {
    const [buttonShow, setbuttonShow] = useState(false)
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <>
            <div className="w-full flex flex-col items-center justify-start">
                <div
                    className="w-full flex flex-col ring-2 rounded-lg ring-gr p-2 hover:bg-white transition-all duration-300 hover:cursor-pointer"
                >

                    <div className="w-full flex flex-row items-center justify-start " >
                        <div className="w-5/6 flex flex-col items-start gap-3">
                            <p>30-min Foot Massage</p>
                            <p>Soothe tired feet with a warm foot soak, gentle exfoliation and an invigorating foot and calf massage using organic coconut oil and essential oils.</p>
                        </div>
                        <div className="w-1/6 flex flex-col items-center justify-center">
                            <p>USD 45</p>
                            <p>30 Min</p>
                        </div>
                        <div className="w-20">
                            <input type="radio" name="manicureListValue" id="manicureListValue" onClick={() => setbuttonShow(!buttonShow)} />
                        </div>
                    </div>



                </div>
                {
                    buttonShow && (
                        <>
                            <div className='flex flex-col bg-white my-5 rounded-lg py-5 w-full'>
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
                                    
                                </div>

                            </div>
                            <div className='flex flex-row justify-between w-full'>
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
        </>
    )
}

export default MassageTab