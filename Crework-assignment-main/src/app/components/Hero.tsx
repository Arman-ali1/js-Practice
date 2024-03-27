import React, { useState } from "react";

import { types, data } from "@/utils/constants";
import Pagination from "./Pagination";
interface Question {
  text: string;
  type: string[];
}
const Hero: React.FC = () => {
  const [buttonSelected, setButtonSelected] = useState<string>("All");
  const [page, setPage] = useState<number>(1);

  function handleButtonSelect(type: string): void {
    setButtonSelected(type);
  }

  const filteredData: Question[] = data.filter((question: Question) => {
    if (buttonSelected === "All") {
      return question;
    } else {
      return question.type.includes(buttonSelected);
    }
  });

  return (
    <div className="flex items-center justify-center flex-col  lg:px-24 md:px-10 px-5 py-5 mt-4  md:mt-0 shadow-2xl shadow-blue-700 m-8 rounded-xl">
      <div className="flex items-start justify-center flex-col gap-4">
        {/* Heading */}
        <div className="flex flex-col gap-3">
          <h1 className="font-redhat font-bold md:text-4xl text-[28px] leading-[37.39px] text-transparent  bg-clip-text bg-gradient-to-b from-white via-yellow-200 to-yellow-600 ">
            Product Management Interview Questions
          </h1>
          <p className="font-normal text-base text-white">
            Browse 1000+ questions from top tech companies
          </p>
        </div>

        {/* buttons */}
        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() => (handleButtonSelect("All"), setPage(1))}
            className={
              "font-poppins font-medium text-sm rounded border border-solid border-white  py-2 px-4" +
              (buttonSelected === "All"
                ? " bg-white text-[#1B1919]"
                : " bg-transparent text-white hover:bg-white transition-all duration-300 ease-in-out hover:text-[#1B1919] ")
            }
          >
            All
          </button>
          {types.map((type, index) => {
            return (
              <button
                onClick={() => (setPage(1), handleButtonSelect(type))}
                className={
                  " hover:bg-white transition-all duration-300 ease-in-out hover:text-[#1B1919]  font-poppins font-medium text-sm rounded border border-solid border-white  py-2 px-4 " +
                  (buttonSelected === type
                    ? " bg-white text-[#1B1919]"
                    : "text-white bg-transparent")
                }
                key={index}
              >
                {type}
              </button>
            );
          })}
        </div>

        {/* Questions */}
        <div className="flex  flex-col gap-4 font-poppins">
          {filteredData.length === 0 ? (
            <p className="font-medium text-lg text-white">❌ No result found</p>
          ) : (
            filteredData
              .slice(page * 10 - 10, page * 10)
              .map((question, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <p className="font-medium text-lg text-white">
                    {question.text}
                  </p>
                  <div className="font-inter font-normal text-sm text-[#BDBCBC] flex gap-4">
                    {question.type.map((type, index) => (
                      <p key={index} className="text-[#BDBCBC]">
                        {type}
                      </p>
                    ))}
                  </div>
                </div>
              ))
          )}
        </div>

        {/* Pagination */}
        <div className="gap-[22px] flex md:justify-end justify-center w-full items-center">
          <p className="font-poppins font-normal text-base text-white hidden md:block">
            Showing 1-10 of {filteredData.length} questions
          </p>
          <Pagination
            filteredData={filteredData}
            itemsPerPage={10}
            page={page}
            setPage={setPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
