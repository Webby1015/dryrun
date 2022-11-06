import { Avatar } from "@material-ui/core";
import React from "react";

const Homeright = () => {
  return (
    <section id="profile" className="flex ml-10 mt-8 px-12 w-full h-auto">
      <div className="flex  flex-col py-[6px] px-4 rounded-[10px] mb-2 w-full h-auto">
        <div className="flex flex-row justify-between items-center w-">
          {/* QUESTION CARD */}
          <div className="bg-blue-gradient w-full h-80 rounded-[20px] px-10 py-10">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row ">
                <h2 className="font-poppins font-normal text-[20px] text-black py-2">
                  Question Id :
                </h2>
                <h2 className="font-poppins font-normal text-[20px] text-black px-2 py-2">
                  216
                </h2>
              </div>
              <div className="flex flex-row">
                <h2 className="font-poppins font-normal text-[20px] text-black px-4 py-1">
                  Contributed By:{" "}
                </h2>
                <Avatar
                  className="cursor-pointer"
                  src="https://flxt.tmsimg.com/assets/p18480237_b_v13_ac.jpg"
                />
                <a className="py-2 cursor-pointer px-2">Sanjay Kumar Goswami</a>
              </div>
            </div>

            {/* Question Title */}
            <div className="flex flex-row justify-between">
              <div className="flex flex-col py-4">
                <a className="font-poppins font-semibold cursor-pointer font-normal text-[40px] text-black py-5">
                  Longest Substring Without Repeating Characters
                </a>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row space-x-4">
                    <h3 className="mt-1">Tags:</h3>
                    <a className="px-4  cursor-pointer py-1 rounded-[10px] bg-white ">
                      Array
                    </a>
                    <a className="px-4  cursor-pointer py-1 rounded-[10px] bg-white ">
                      Array
                    </a>
                    <a className="px-4  cursor-pointer py-1 rounded-[10px] bg-white ">
                      Array
                    </a>
                  </div>
                  <div className="flex flex-row space-x-4">
                    <h3 className="mt-1">Avg. Time Taken:</h3>
                    <h3 className="mt-1">20 min.</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homeright;