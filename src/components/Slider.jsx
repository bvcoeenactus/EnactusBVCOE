import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import { assets } from "../assets/assets";
import "@coreui/coreui/dist/css/coreui.min.css";

const Slider = () => {
  return (
    <div className="pt-10 pb-10 bg-yellow-200">
      {/* Hashtags Section */}
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white custom-outline">
          #WEALLWIN
        </div>
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white custom-outline">
          #WEALLWIN
        </div>
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white custom-outline">
          #WEALLWIN
        </div>
      </div>
      {/* Carousel Section */}
      <div className="flex justify-center items-center w-full">
        <CCarousel
          controls
          indicators
          dark
          transition="crossfade"
          className="w-[95%] sm:w-[90%] max-w-6xl"
        >
          {[assets.Slider1, assets.Slider2, assets.Slider3, assets.Slider4, assets.Slider5, assets.Slider6, assets.Slider7].map((slide, index) => (
            <CCarouselItem key={index}>
              <CImage
                className="d-block w-full object-cover"
                src={slide}
                alt={`Slide ${index + 1}`}
                style={{ maxHeight: "500px" }}
              />
            </CCarouselItem>
          ))}
        </CCarousel>
      </div>
      {/* Hashtags Section */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white custom-outline">
          #WEALLWIN
        </div>
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white custom-outline">
          #WEALLWIN
        </div>
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white custom-outline">
          #WEALLWIN
        </div>
      </div>
    </div>
  );
};

export default Slider;
