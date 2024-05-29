/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Tab } from "@headlessui/react";
import "./App.css";
import SpecialsTab from "./SpecialsTab";
import ManicureTab from "./ManicureTab";
import PedicureTab from "./PedicureTab";
import MassageTab from "./MassageTab";

function App() {
  const [count, setCount] = useState(2);
  const [selectedOption, setSelectedOption] = useState("just me");
  const [specials, setspecials] = useState(true)
  const [manicure, setmanicure] = useState(false)
  const [pedicure, setpedicure] = useState(false)
  const [massage, setmassage] = useState(false)





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



  // {
  //   title: "",
  //   des: "",
  //   price: "",
  //   time: ""
  // },




  return (
    <>
      <section className="py-10">
        <div className="flex flex-col items-start justify-start bg-primary p-5 gap-5 rounded-2xl container">
          <p>Location</p>
          <div className="w-full h-10 border-spacing-1 bg-white rounded-2xl"></div>

          <div className="w-full h-10 border-spacing-1 bg-white flex flex-row items-center justify-center gap-8 py-10 rounded-2xl">
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
                  <div className="w-10 h-10"><button onClick={DecrementFun} className="bg-primary text-2xl w-10 h-10 rounded-full hover:drop-shadow-lg hover:ring-2 hover:ring-primary hover:bg-white transition-all duration-300">-</button></div>

                  <p>{count}</p>
                  <div className="w-10 h-10">
                    {count == 4 ? (
                      <></>
                    ) : (

                      <button onClick={IncrementFun} className="bg-primary text-2xl w-10 h-10 rounded-full hover:drop-shadow-lg hover:ring-2 hover:ring-primary hover:bg-white transition-all duration-300">+</button>

                    )}</div>
                </div>
              )}
            </div>
          </div>
          {selectedOption == "2above" && (
            <div className="  border-spacing-1 bg-[#fff] rounded-2xl">
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
                              : "text-blue-100 hover:bg-white/[0.12] hover:text-gr"
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
                          <ul class="flex flex-wrap items-start justify-start w-full">
                            <li class="w-full md:w-1/3 flex flex-col items-start p-3 ">
                              <label for="first_name">First Name:</label>
                              <input type="text" id="first_name" name="first_name" required className="border-[1px] p-2 w-full"/>
                            </li>
                            <li class="w-full md:w-1/3 flex flex-col items-start p-3">
                              <label for="last_name">Last Name:</label>
                              <input type="text" id="last_name" name="last_name" required className="border-[1px] p-2 w-full"/>
                            </li>
                            <li class="w-full md:w-1/3 flex flex-col items-start p-3">
                              <label for="email">Email:</label>
                              <input type="email" id="email" name="email" required className="border-[1px] p-2 w-full"/>
                            </li>
                            <li class="w-full md:w-1/3 flex flex-col items-start p-3">
                              <label for="date_of_birth">Date of Birth:</label>
                              <input type="date" id="date_of_birth" name="date_of_birth" required className="border-[1px] p-2 w-full"/>
                            </li>
                            <li class="w-full md:w-1/3 flex flex-col items-start p-3">
                              <label for="gender">Gender:</label>
                              <select id="gender" name="gender" required className="border-[1px] p-2 w-full">
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                              </select>
                            </li>
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
            <div className="w-full flex flex-row items-center justify-evenly gap-5">
              <div
                className={`${specials ? "bg-white" : ""} w-1/4 h-14 cursor-pointer flex flex-col items-center justify-center ring-2 ring-white uppercase rounded-2xl`}
                onClick={Specials}

              >
                Specials
              </div>
              <div className={`${manicure ? "bg-white" : ""} w-1/4 h-14 cursor-pointer flex flex-col items-center justify-center ring-2 ring-white uppercase rounded-2xl`} onClick={Manicure} >
                Manicure
              </div>
              <div className={`${pedicure ? "bg-white" : ""} w-1/4 h-14 cursor-pointer flex flex-col items-center justify-center ring-2 ring-white uppercase rounded-2xl`} onClick={Pedicure} >
                Pedicure
              </div>
              <div className={`${massage ? "bg-white" : ""} w-1/4 h-14 cursor-pointer flex flex-col items-center justify-center ring-2 ring-white uppercase rounded-2xl`} onClick={Massage} >
                Massage
              </div>
            </div>
          </div>
          {/* Specials Section */}
          {specials &&
            <SpecialsTab />
          }
          {manicure &&
            <ManicureTab />
          }
          {pedicure &&
            <PedicureTab />
          }
          {massage &&
            <MassageTab />
          }


        </div>
      </section>
    </>
  );
}

export default App;
