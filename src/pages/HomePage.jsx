import React from "react";

import table from "../assets/video.png";
import VideoSlider from "./../components/SliderComponent";

const HomePage = () => {
  return (
    <main className="overflow-x-hidden">
      <div className="mb-16">
        <div className="flex  container mx-auto">
          <div className="basis-4/5 py-16">
            <h1 className="text-5xl px-16 mb-4">
              <span className="text-blue-20 xs:text-center ">So</span> Video
            </h1>
            <p className="px-16 xs:w-64 text-lg xs:w-96 md:w-full ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              explicabo similique pariatur veniam quaerat corrupti impedit?
              Aliquam veritatis reprehenderit ex?
            </p>
          </div>
          <div className="relative right-8   z-1 ">
            <img
              className="relative   xs:min-w-32 xs:left-[-100px] xs:top-64 sm:top-20 sm:right-0 sm:w-96 "
              src={table}
              alt="table with food"
            />
          </div>
        </div>
      </div>
      <VideoSlider />
    </main>
  );
};

export default HomePage;
