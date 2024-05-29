/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'

function SpecialsTab() {
    const [showSpecilssecOne, setshowSpecilssecOne] = useState(false)
    const [showSpecilssecTwo, setshowSpecilssecOneTwo] = useState(false)
    const [showSpecilssecThr, setshowSpecilssecOneThr] = useState(false)
    const [showSpecilssecFo, setshowSpecilssecOneFo] = useState(false)
    const [showSpecilssecFi, setshowSpecilssecOneFi] = useState(false)
    
    const [arrowDirection, setArrowDirection] = useState({
        secOne: false,
        secTwo: false,
        secTh: false,
        secFo: false,
        secFi: false,
    });

    function toggleArrow(section) {
        setArrowDirection((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    }
    function secOne() {
        setshowSpecilssecOne(!showSpecilssecOne);
        setshowSpecilssecOneTwo(false);
        setshowSpecilssecOneThr(false);
        setshowSpecilssecOneFo(false);
        setshowSpecilssecOneFi(false);
        toggleArrow("secOne");
    }
    function secTwo() {
        setshowSpecilssecOne(false);
        setshowSpecilssecOneTwo(!showSpecilssecTwo);
        setshowSpecilssecOneThr(false);
        setshowSpecilssecOneFo(false);
        setshowSpecilssecOneFi(false);
        toggleArrow("secTwo");
    }
    function secTh() {
        setshowSpecilssecOne(false);
        setshowSpecilssecOneTwo(false);
        setshowSpecilssecOneThr(!showSpecilssecThr);
        setshowSpecilssecOneFo(false);
        setshowSpecilssecOneFi(false);
        toggleArrow("secTh");
    }
    function secFo() {
        setshowSpecilssecOne(false);
        setshowSpecilssecOneTwo(false);
        setshowSpecilssecOneThr(false);
        setshowSpecilssecOneFo(!showSpecilssecFo);
        setshowSpecilssecOneFi(false);
        toggleArrow("secFo");
    }
    function secFi() {
        setshowSpecilssecOne(false);
        setshowSpecilssecOneTwo(false);
        setshowSpecilssecOneThr(false);
        setshowSpecilssecOneFo(false);
        setshowSpecilssecOneFi(!showSpecilssecFi);
        toggleArrow("secFi");
    }
    return (
        <>
            <div className="w-full flex flex-col items-center justify-start rounded-lg p-1 gap-2">
                <div
                    className="w-full flex flex-col ring-2 rounded-lg ring-gr p-2 hover:bg-white transition-all duration-300"
                >
                    <div className="w-full flex flex-row items-center justify-start ">
                        <div className="w-20">
                            <div className="cursor-pointer" onClick={secOne}>
                                {arrowDirection.secOne ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}
                            </div>
                        </div>
                        <div className="w-5/6 flex flex-col items-start gap-3">
                            <p className="font-bold">Signature Manicure & Pedicure Combo</p>
                            <p className="font-light text-left">Book in for a Signature Manicure & Signature Pedicure at the same time, and enjoy a combo price of $75. T&C's apply</p>
                        </div>
                        <div className="w-1/6 flex flex-col items-center justify-center">
                            <p>75</p>
                            <p>120</p>
                        </div>
                    </div>
                    {showSpecilssecOne && <div
                        className="text-left ml-16"
                    >
                        This Package Includes:
                        <li>Signature Manicure</li>
                        <li>Signature Pedicure</li>
                    </div>}
                </div>
                <div
                    className="w-full flex flex-col ring-2 rounded-lg ring-gr p-2 hover:bg-white transition-all duration-300"
                >
                    <div className="w-full flex flex-row items-center justify-start ">
                        <div className="w-20"><div className="cursor-pointer" onClick={secTwo}>
                            {arrowDirection.secTwo ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            )}</div></div>
                        <div className="w-5/6 flex flex-col items-start gap-3">
                            <p>Luxe Spa Manicure & Pedicure Combo</p>
                            <p className="font-light text-left">Book in for a Luxe Spa Manicure & Luxe Spa Pedicure at the same time, and enjoy a combo price of $150 . T&C's apply.</p>
                        </div>
                        <div className="w-1/6 flex flex-col items-center justify-center">
                            <p>150</p>
                            <p>165</p>
                        </div>
                    </div>
                    {showSpecilssecTwo && <div
                        className="text-left ml-16"
                    >
                        This Package Includes:
                        <li>Luxe Spa Manicure</li>
                        <li>Luxe Spa Pedicure</li>
                    </div>}
                </div>
                <div
                    className="w-full flex flex-col ring-2 rounded-lg ring-gr p-2 hover:bg-white transition-all duration-300"
                >
                    <div className="w-full flex flex-row items-center justify-start ">
                        <div className="w-20"><div className="cursor-pointer" onClick={secTh}>
                            {arrowDirection.secTh ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            )}
                        </div></div>
                        <div className="w-5/6 flex flex-col items-start gap-3">
                            <p>Gentleman's Manicure & Pedicure Combo</p>
                            <p className="font-light text-left">Book in for a Gentleman's Manicure & Signature Pedicure at the same time, and enjoy a combo price of $85 T&C's apply</p>
                        </div>
                        <div className="w-1/6 flex flex-col items-center justify-center">
                            <p>85</p>
                            <p>120</p>
                        </div>
                    </div>
                    {showSpecilssecThr && <div
                        className="text-left ml-16"
                    >
                        This Package Includes:
                        <li>Gentlemans Manicure</li>
                        <li>Gentlemans Pedicure</li>
                    </div>}
                </div>
                <div
                    className="w-full flex flex-col ring-2 rounded-lg ring-gr p-2 hover:bg-white transition-all duration-300"
                >
                    <div className="w-full flex flex-row items-center justify-start ">
                        <div className="w-20"><div className="cursor-pointer" onClick={secFo}>
                            {arrowDirection.secFo ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            )}
                        </div></div>
                        <div className="w-5/6 flex flex-col items-start gap-3">
                            <p>SPArty Package for 5 pax</p>
                            <p className="font-light text-left">This package is for a group of 5 and it includes our Luxe Spa Combo for that special person and our Signature Combo for 4 guests plus drinks and snacks. Perfect for birthday parties, bridal and baby showers and other special occasions. Contact us to book!</p>
                        </div>
                        <div className="w-1/6 flex flex-col items-center justify-center">
                            <p>495</p>
                            <p>120</p>
                        </div>
                    </div>
                    {showSpecilssecFo && <div
                        className="text-left ml-16"
                    >
                        This Package Includes:
                        <li>Luxe Spa Manicure</li>
                        <li>Luxe Spa Pedicure</li>
                        <li>Signature Manicur</li>
                        <li>Signature Pedicur</li>
                    </div>}
                </div>
                <div
                    className="w-full flex flex-col ring-2 rounded-lg ring-gr p-2 hover:bg-white transition-all duration-300 "
                >
                    <div className="w-full flex flex-row items-center justify-start ">
                        <div className="w-20"><div className="cursor-pointer" onClick={secFi}>
                            {arrowDirection.secFi ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            )}
                        </div></div>
                        <div className="w-5/6 flex flex-col items-start gap-3">
                            <p>Welcome Offer</p>
                            <p className="font-light text-left">Enjoy 20% off your first visit! Select your preferred services and enter promo code “TNSFIRST” upon check-out. ✨ Strictly valid for base services and for first-time customers only. Not valid on combo prices and add-on services. Not valid on group bookings. Online bookings only. T&C’s apply.</p>
                        </div>
                        <div className="w-1/6 flex flex-col items-center justify-center">
                            <p>0</p>
                            <p>120</p>
                        </div>
                    </div>
                    {showSpecilssecFi && <div
                        className="text-left ml-16"
                    >
                        This Package Includes:
                        <li>Gentlemans Manicure</li>
                        <li>Gentlemans Pedicure</li>
                        <li>Luxe Spa Manicure</li>
                        <li>Luxe Spa Pedicure</li>
                        <li>Signature Manicure</li>
                        <li>Signature Pedicure</li>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default SpecialsTab;
