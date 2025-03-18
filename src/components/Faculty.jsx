import React from "react";
import { assets } from "../assets/assets";

const Faculty = () => {
  return (
    <div>
      <div>
        <p className="text-5xl p-10 m-0 font-bold text-center text-yellow-400 bg-gray-700">
          OUR FACULTY ADVISOR
        </p>
      </div>
      <div className="flex flex-col md:flex-row p-10 justify-around items-center bg-gray-700">
        <div className="bg-gray-700 w-[60%] pb-10 md:pb-0 md:w-[30%] rounded-full">
          <img
            className="rounded-full  shadow-[0_0_20px_5px_rgba(255,255,100,0.6)]"
            src={assets.ArunSir}
            alt=""
          />
        </div>
        <div className="bg-yellow-400 rounded-2xl w-72 md:w-4xl">
          <p className="  text-2xl md:text-5xl pl-3 md:pl-10 pt-3  font-extrabold text-gray-700">
            DR. ARUN KUMAR DUBEY
          </p>
          <p className="  md:text-xl pl-3 md:pl-10 md:pt-2 md:pb-3 font-bold text-gray-700">
            Ph.D, M.Tech(CTA), B.Tech(CSE)
          </p>
          <p className=" pl-3 pr-2 md:pl-10 md:pr-10  pt-2 pb-3 font-medium md:text-xl text-gray-700">
            Enactus BVCOE, established on 2nd November 2015, is the
            Non-Technical chapter of Bharati Vidyapeeth's College of
            Engineering, New Delhi, committed to fostering sustainable social
            impact through entrepreneurial initiatives.
            <br />
            Our past projects include Abhiman, which advocates for manual
            scavengers, Aranyani, promoting hydroponic urban greening, and
            Aarogya, aimed at enhancing menstrual hygiene accessibility.
            <br />
            Currently, we are engaged in Dharti, an initiative empowering
            traditional potters, and Aavarnan, a sustainability-driven project
            focused on recycled stationery and eco-friendly products.
            <br /> As the Faculty Coordinator, I take pride in mentoring
            students in social entrepreneurship, ensuring that Enactus BVCOE
            continues to drive meaningful and lasting change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
