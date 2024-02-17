/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Tab } from "@headlessui/react";
import "./App.css";

function App() {
  const [count, setCount] = useState(2);
  const [selectedOption, setSelectedOption] = useState("just me");

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
  return (
    <>
      <section>
        <div className="flex flex-col items-start justify-start bg-[#a8a3a3]  p-5 gap-5">
          <p>Location</p>
          <div className="w-full h-10 border-spacing-1 bg-[#fff]"></div>

          <div className="w-full h-10 border-spacing-1 bg-[#fff] flex flex-row items-center justify-center gap-8">
            <div className="basis-1/2">
              <label for="book-type">
                I would like to book an appointment for:
              </label>
              <select
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
            <div className="w-full  border-spacing-1 bg-[#fff]">
              <div className="w-full max-w-md px-2 py-16 sm:px-0">
                <Tab.Group>
                  <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                    {[...Array(count)].map((_, index) => (
                      <Tab
                        key={index}
                        className={({ selected }) =>
                          classNames(
                            "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                            "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                            selected
                              ? "bg-white text-blue-700 shadow"
                              : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                          )
                        }
                      >
                        Guest {index +1}
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
                        hello
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default App;
