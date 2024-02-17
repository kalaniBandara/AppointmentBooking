/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(2);
  const [selectedOption, setSelectedOption] = useState("just me");

  // Function to handle change in the select element
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
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
        </div>
      </section>
    </>
  );
}

export default App;
