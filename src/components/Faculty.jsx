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
      <div className=" bg-gray-700 ">
        <div className="max-w-8xl p-10 m-auto place-items-center">
          <div className="w-[95%] md:w-[85%] ">
            <div>
              <div className="bg-gray-700 border border-gray-300 rounded-lg overflow-hidden shadow-lg mb-12">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/2 ">
                    <img src={assets.ArunSir} alt="" />
                  </div>

                  <div className="md:w-1/2 p-[12px] md:p-[35px] md:pt-11 md:pb-11 bg-yellow-400 text-gray-700">
                    <div className=" border-l-4 border-yellow-400 md:pl-4">
                      <p className=" leading-relaxed text-2xl md:text-4xl font-bold text-gray-700">
                        DR. ARUN KUMAR DUBEY
                      </p>
                      <p className=" leading-relaxed md:text-xl font-bold text-gray-700">
                        Ph.D, M.Tech(CTA), B.Tech(CSE)
                      </p>
                      <p className=" leading-relaxed text-sm font-medium md:text-lg text-gray-700">
                        Enactus BVCOE, established on 2nd November 2015, is the
                        Non-Technical chapter of Bharati Vidyapeeth's College of
                        Engineering, New Delhi, committed to fostering
                        sustainable social impact through entrepreneurial
                        initiatives.
                        <br />
                        Our past projects include Abhiman, which advocates for
                        manual scavengers, Aranyani, promoting hydroponic urban
                        greening, and Aarogya, aimed at enhancing menstrual
                        hygiene accessibility.
                        <br />
                        Currently, we are engaged in Dharti, an initiative
                        empowering traditional potters, and Aavarnan, a
                        sustainability-driven project focused on recycled
                        stationery and eco-friendly products.
                        <br /> As the Faculty Coordinator, I take pride in
                        mentoring students in social entrepreneurship, ensuring
                        that Enactus BVCOE continues to drive meaningful and
                        lasting change.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
