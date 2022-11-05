import { Avatar } from "@material-ui/core";
import React from "react";

const Home = () => {
  return (
    <section id="home" className="flex flex-row py-6">
      <section id="profile" className="flex-0.3 flex justify-center w-100">
        <div className="flex flex-col items-center py-[6px] px-4 bg-profile-gradient rounded-[10px] mb-2 w-96 h-96">
            <span  className="pt-10 font-poppins font-normal cursor-pointer text-[20px] text-white">My Profile</span>
          <div className="flex flex-column justify-self-auto">
            <div className="px-10 py-5 items-center">
              <Avatar
                className="avatar"
                style={{ height: "200px", width: "200px" }}
                sizes="xxl"
                src="https://flxt.tmsimg.com/assets/p18480237_b_v13_ac.jpg"
              />
              
            </div>
            
          </div>
          <span className="pt-5 font-poppins font-normal cursor-pointer text-[20px] text-white">Lucifer</span>
        </div>
      </section>
      <section id="quesion" className="flex-1 flex justify-center items-start">
        hghj
      </section>
    </section>
  );
};

export default Home;