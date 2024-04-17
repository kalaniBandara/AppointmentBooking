/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Tab } from "@headlessui/react";
import "./App.css";

function App() {
  const [count, setCount] = useState(2);
  const [selectedOption, setSelectedOption] = useState("just me");
  const [specials, setspecials] = useState(true)
  const [manicure, setmanicure] = useState(false)
  const [pedicure, setpedicure] = useState(false)
  const [massage, setmassage] = useState(false)
  const [buttonShow, setbuttonShow] = useState(false)
  const [showSpecilssecOne, setshowSpecilssecOne] = useState(false)
  const [showSpecilssecTwo, setshowSpecilssecOneTwo] = useState(false)
  const [showSpecilssecThr, setshowSpecilssecOneThr] = useState(false)
  const [showSpecilssecFo, setshowSpecilssecOneFo] = useState(false)
  const [showSpecilssecFi, setshowSpecilssecOneFi] = useState(false)
  const [manicureValue, setmanicureValue] = useState("");
  const [pedicureValue, setpedicureValue] = useState("");
  const [massValue, setmassValue] = useState("");
  // Function to handle change in the select element
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    if (selectedOption == "2above") {
      setCount(2);
    }
  };

  function IncrementFun() {
    if (count < 4) {
      setCount(count + 1);
    }
  }
  function DecrementFun() {
    if (count <= 4 && count > 2) {
      setCount(count - 1);
    }
  }
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  function Specials() {
    setspecials(true)
    setmanicure(false)
    setpedicure(false)
    setmassage(false)
  }
  function Manicure() {
    setspecials(false)
    setmanicure(true)
    setpedicure(false)
    setmassage(false)
  }
  function Pedicure() {
    setspecials(false)
    setmanicure(false)
    setpedicure(true)
    setmassage(false)
  }
  function Massage() {
    setspecials(false)
    setmanicure(false)
    setpedicure(false)
    setmassage(true)
  }

  function secOne() {
    setshowSpecilssecOne(!showSpecilssecOne)
    setshowSpecilssecOneTwo(false)
    setshowSpecilssecOneThr(false)
    setshowSpecilssecOneFo(false)
    setshowSpecilssecOneFi(false)
  }
  function secTwo() {
    setshowSpecilssecOne(false)
    setshowSpecilssecOneTwo(!showSpecilssecTwo)
    setshowSpecilssecOneThr(false)
    setshowSpecilssecOneFo(false)
    setshowSpecilssecOneFi(false)
  }
  function secTh() {
    setshowSpecilssecOne(false)
    setshowSpecilssecOneTwo(false)
    setshowSpecilssecOneThr(!showSpecilssecThr)
    setshowSpecilssecOneFo(false)
    setshowSpecilssecOneFi(false)
  }
  function secFo() {
    setshowSpecilssecOne(false)
    setshowSpecilssecOneTwo(false)
    setshowSpecilssecOneThr(false)
    setshowSpecilssecOneFo(!showSpecilssecFo)
    setshowSpecilssecOneFi(false)
  }
  function secFi() {
    setshowSpecilssecOne(false)
    setshowSpecilssecOneTwo(false)
    setshowSpecilssecOneThr(false)
    setshowSpecilssecOneFo(false)
    setshowSpecilssecOneFi(!showSpecilssecFi)
  }
  // {
  //   title: "",
  //   des: "",
  //   price: "",
  //   time: ""
  // },
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
      <section>
        <div className="flex flex-col items-start justify-start bg-[#D2AF86] p-5 gap-5">
          <p>Location</p>
          <div className="w-full h-10 border-spacing-1 bg-[#fff]"></div>

          <div className="w-full h-10 border-spacing-1 bg-[#fff] flex flex-row items-center justify-center gap-8 py-1">
            <div className="basis-1/2">
              <label for="book-type" class="pr-5">
                I would like to book an appointment for:
              </label>
              <select class="border-solid border-2 border-black-600 rounded w-3/12 pl-2 py-1"
                name="book-type"
                id="book-type"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value="justMe">Just Me</option>
                <option value="2above">2-4 Guest</option>
              </select>
            </div>

            <div className="basis-1/2">
              {selectedOption == "2above" && (
                <div className="flex flex-row items-center justify-center gap-5">
                  <button onClick={DecrementFun}>-</button>
                  <p>{count}</p>
                  {count == 4 ? (
                    <></>
                  ) : (
                    <button onClick={IncrementFun}>+</button>
                  )}
                </div>
              )}
            </div>
          </div>
          {selectedOption == "2above" && (
            <div className="  border-spacing-1 bg-[#fff]">
              <div className=" px-2 py-16 sm:px-0">
                <Tab.Group>
                  <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                    {[...Array(count)].map((_, index) => (
                      <Tab
                        key={index}
                        className={({ selected }) =>
                          classNames(
                            "rounded-lg py-2.5 text-sm font-medium leading-5 w-44",
                            "ring-[#D2AF86]/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                            selected
                              ? "bg-white text-blue-700 shadow"
                              : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                          )
                        }
                      >
                        Guest {index + 1}
                      </Tab>
                    ))}
                  </Tab.List>
                  <Tab.Panels className="mt-2">
                    {[...Array(count)].map((_, index) => (
                      <Tab.Panel
                        key={index}
                        className={classNames(
                          "rounded-xl bg-white p-3",
                          "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                        )}
                      >
                        <form>
                          <ul>
                            Lahiru Bada
                          </ul>
                        </form>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>
          )}
          {/* services */}
          <div className="w-full flex flex-col items-center justify-start">
            <div className="w-full flex flex-row items-center justify-center">
              <div
                className={`${specials ? "bg-white" : ""} w-1/4 h-14 cursor-pointer flex flex-col items-center justify-center border-[1px] uppercase`}
                onClick={Specials}

              >
                Specials
              </div>
              <div className={`${manicure ? "bg-white" : ""} w-1/4 h-14 cursor-pointer flex flex-col items-center justify-center border-[1px] uppercase`} onClick={Manicure} >
                Manicure
              </div>
              <div className={`${pedicure ? "bg-white" : ""} w-1/4 h-14 cursor-pointer flex flex-col items-center justify-center border-[1px] uppercase`} onClick={Pedicure} >
                Pedicure
              </div>
              <div className={`${massage ? "bg-white" : ""} w-1/4 h-14 cursor-pointer flex flex-col items-center justify-center border-[1px] uppercase`} onClick={Massage} >
                Massage
              </div>
            </div>
          </div>
          {/* Specials Section */}
          {specials &&
            <div className="w-full flex flex-col items-center justify-start">
              <div
                className="w-full flex flex-col"
              >
                <div className="w-full flex flex-row items-center justify-start border-[1px]">
                  <div className="w-20"><div className="cursor-pointer" onClick={secOne}>Top</div></div>
                  <div className="w-5/6 flex flex-col items-start gap-3">
                    <p>Signature Manicure & Pedicure Combo</p>
                    <p>Book in for a Signature Manicure & Signature Pedicure at the same time, and enjoy a combo price of $75. T&C's apply</p>
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
                className="w-full flex flex-col"
              >
                <div className="w-full flex flex-row items-center justify-start border-[1px]">
                  <div className="w-20"><div className="cursor-pointer" onClick={secTwo}>Top</div></div>
                  <div className="w-5/6 flex flex-col items-start gap-3">
                    <p>Luxe Spa Manicure & Pedicure Combo</p>
                    <p>Book in for a Luxe Spa Manicure & Luxe Spa Pedicure at the same time, and enjoy a combo price of $150 . T&C's apply.</p>
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
                className="w-full flex flex-col"
              >
                <div className="w-full flex flex-row items-center justify-start border-[1px]">
                  <div className="w-20"><div className="cursor-pointer" onClick={secTh}>Top</div></div>
                  <div className="w-5/6 flex flex-col items-start gap-3">
                    <p>Gentleman's Manicure & Pedicure Combo</p>
                    <p>Book in for a Gentleman's Manicure & Signature Pedicure at the same time, and enjoy a combo price of $85 T&C's apply</p>
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
                className="w-full flex flex-col"
              >
                <div className="w-full flex flex-row items-center justify-start border-[1px]">
                  <div className="w-20"><div className="cursor-pointer" onClick={secFo}>Top</div></div>
                  <div className="w-5/6 flex flex-col items-start gap-3">
                    <p>SPArty Package for 5 pax</p>
                    <p>This package is for a group of 5 and it includes our Luxe Spa Combo for that special person and our Signature Combo for 4 guests plus drinks and snacks. Perfect for birthday parties, bridal and baby showers and other special occasions. Contact us to book!</p>
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
                className="w-full flex flex-col"
              >
                <div className="w-full flex flex-row items-center justify-start border-[1px]">
                  <div className="w-20"><div className="cursor-pointer" onClick={secFi}>Top</div></div>
                  <div className="w-5/6 flex flex-col items-start gap-3">
                    <p>Welcome Offer</p>
                    <p>Enjoy 20% off your first visit! Select your preferred services and enter promo code “TNSFIRST” upon check-out. ✨ Strictly valid for base services and for first-time customers only. Not valid on combo prices and add-on services. Not valid on group bookings. Online bookings only. T&C’s apply.</p>
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
          }
          {manicure &&
            <div className="w-full flex flex-col items-center justify-start">
              <div
                className="w-full flex flex-col"
              >
                {manicureLists.map((manicureList, index) => (
                  <div className="w-full flex flex-row items-center justify-start border-[1px]" key={index}>
                    <div className="w-5/6 flex flex-col items-start gap-3">
                      <p>{manicureList.title}</p>
                      <p>{manicureList.des}</p>
                    </div>
                    <div className="w-1/6 flex flex-col items-center justify-center">
                      <p>USD {manicureList.price}</p>
                      <p>{manicureList.time}</p>
                    </div>
                    <div className="w-20">
                      <input type="radio" name="manicureListValue" id="manicureListValue" onClick={() => setbuttonShow(!buttonShow)}/>
                    </div>
                  </div>
                ))}


              </div>
            </div>
          }
          {pedicure &&
            <div className="w-full flex flex-col items-center justify-start">
              <div
                className="w-full flex flex-col"
              >
                {pedicureLists.map((pedicureList, index) => (
                  <div className="w-full flex flex-row items-center justify-start border-[1px]" key={index}>
                    <div className="w-5/6 flex flex-col items-start gap-3">
                      <p>{pedicureList.title}</p>
                      <p>{pedicureList.des}</p>
                    </div>
                    <div className="w-1/6 flex flex-col items-center justify-center">
                      <p>USD {pedicureList.price}</p>
                      <p>{pedicureList.time} Min</p>
                    </div>
                    <div className="w-20">
                      <input type="radio" name="manicureListValue" id="manicureListValue"  onClick={() => setbuttonShow(!buttonShow)}/>
                    </div>
                  </div>
                ))}


              </div>
            </div>
          }
          {massage &&
            <div className="w-full flex flex-col items-center justify-start">
              <div
                className="w-full flex flex-col"
              >

                <div className="w-full flex flex-row items-center justify-start border-[1px]" >
                  <div className="w-5/6 flex flex-col items-start gap-3">
                    <p>30-min Foot Massage</p>
                    <p>Soothe tired feet with a warm foot soak, gentle exfoliation and an invigorating foot and calf massage using organic coconut oil and essential oils.</p>
                  </div>
                  <div className="w-1/6 flex flex-col items-center justify-center">
                    <p>USD 45</p>
                    <p>30 Min</p>
                  </div>
                  <div className="w-20">
                    <input type="radio" name="manicureListValue" id="manicureListValue" onClick={() => setbuttonShow(!buttonShow)}/>
                  </div>
                </div>



              </div>
            </div>
          }
          {
            buttonShow && (
              <>
                <div className="w-full flex flex-row items-center justify-center">
                  <button type="button" className="bg-[#fff] px-5 py-2 rounded-md">Save and Continue</button>
                </div>
                <div className="w-full flex flex-row items-end justify-end">
                  <button type="button " className="bg-[#fff] px-5 py-2 rounded-md">Add Another Service</button>
                </div>
              </>
            )
          }

        </div>
      </section>
    </>
  );
}

export default App;
