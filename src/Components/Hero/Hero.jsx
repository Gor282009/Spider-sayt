import React from "react";

function Hero() {
  return (
    <div>
      <div className="w-full h-[100vh]">
        <img
          src="https://gtwallpaper.org/sites/default/files/wallpaper/174988/spider-man-no-way-home-4k-movie-mcu-wallpapers-174988-1091625-6053040.png"
          className="
        w-full object-cover h-[100vh]"
          alt=""
        />
      </div>
      <div className="w-full relative bottom-[50px]">
        <button className="text-[#FFFF]">Watch More</button>
        <button className="text-[#FFFF] ">More Info</button>
      </div>
    </div>
  );
}

export default Hero;
