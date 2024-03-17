import { useState } from "react";
import { data } from "./data";
import jeremy from "./assets/image-jeremy.png";
import ellipsis from "./assets/icon-ellipsis.svg";

function App() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("daily");

  return (
    <main className="flex items-center justify-center min-h-screen bg-[#0d1323]">
      <div className="w-full max-w-[850px] min-h-[450px] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] flex flex-col md:flex-row gap-5 p-10 lg:p-0">
        <div className="relative flex-grow-0 flex-shrink-0 ">
          <div className="bg-[#5746ea] w-full lg:w-[220px] rounded-[10px] flex flex-col justify-between h-full">
            <div className="p-6">
              <img
                src={jeremy}
                alt="jeremy icon"
                className="w-[60px] h-[60px] border-white border-[2px] rounded-full mb-[30px]"
              />
              <p className="text-[#aea5ff]">Report for</p>
              <h2 className="text-white text-[32px]">
                Jeremy <br></br>Robson
              </h2>
            </div>
            <div className="flex flex-row lg:flex-col justify-between gap-3 items-start p-6 bg-[#1d204b] text-white rounded-br-[10px] rounded-bl-[10px]">
              <button
                onClick={() => setSelectedTimeframe("daily")}
                className={`text-[#aea5ff] hover:text-white ${
                  selectedTimeframe === "daily" ? "text-white" : ""
                }`}
              >
                Daily
              </button>
              <button
                onClick={() => setSelectedTimeframe("weekly")}
                className={`text-[#aea5ff] hover:text-white ${
                  selectedTimeframe === "weekly" ? "text-white" : ""
                }`}
              >
                Weekly
              </button>
              <button
                onClick={() => setSelectedTimeframe("monthly")}
                className={`text-[#aea5ff] hover:text-white ${
                  selectedTimeframe === "monthly" ? "text-white" : ""
                }`}
              >
                Monthly
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-grow">
          {data.map((single) => (
            <div className="flex flex-col h-full" key={single.id}>
              {/* Top */}
              <div
                className={`relative ${single.color} h-[50px] md:h-[50px] rounded-tl-[10px] rounded-tr-[10px]`}
              >
                <img
                  src={single.image}
                  alt={single.title}
                  className="w-[50px] absolute right-4"
                />
              </div>
              {/* Bottom */}
              <div className="bg-[#1d204b] rounded-br-[10px] rounded-bl-[10px] z-[50] py-3 px-5 text-white flex-grow">
                <div className="flex justify-between items-center text-[14px] py-3">
                  <p>{single.title}</p>
                  <img
                    src={ellipsis}
                    alt="ellipsis"
                    className="w-[13px] cursor-pointer"
                  />
                </div>
                <div>
                  <h3 className="text-[1.5rem] md:text-[34px]">
                    {single.timeframes[selectedTimeframe].current}hrs
                  </h3>
                  <p className="text-[14px] font-light text-[#aea5ff]">
                    {selectedTimeframe === "daily" ? "Last Day " : ""}
                    {selectedTimeframe === "weekly" ? "Last Week " : ""}
                    {selectedTimeframe === "monthly" ? "Last Month " : ""}
                    {single.timeframes[selectedTimeframe].previous}hrs
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
