import React from "react";

const heroItem = [
  {
    id: 1,
    title: "WendesDay",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2ZmMjEyZmYtOGM4YS00YTNhLWE3ZDMtNzQxM2RhNjBlODIyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 2,
    title: "Citadel",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW8Npz3iMoLQaw0tteQ4UzLhjIfpvp3JyfHg&s",
  },
  {
    id: 3,
    title: "Avatar",
    image:
      "https://image.tmdb.org/t/p/original/k2i3TOiRvlXSZ1S1J05xgEoUPGA.jpg",
  },
  {
    id: 4,
    title: `Cua1rolans
    Galaxy`,
    image:
      "https://i0.wp.com/leonardmaltin.com/wp-content/uploads/2017/05/Guardians-of-the-Galaxy-Vol-2-wallpaper.jpg?fit=1600%2C800&ssl=1",
  },
];

function Hero() {
  return (
    <div>
      <div className="w-full h-[100vh]">
        <img
          src="https://wallpaperswide.com/download/marvels_spiderman-wallpaper-3000x2000.jpg"
          className="
        w-full object-cover h-[100vh]"
          alt=""
        />
        <div className="w-full absolute bottom-[600px]">
          <h1 className="flex justify-center text-[red] text-7xl text-extrabold">
            Spider-Man
          </h1>
          <h3 className="text-[#fff] flex justify-center text-5xl font-normal">
            No way Home
          </h3>
        </div>
        <div
          className="w-full flex justify-center absolute bottom-[550px] text-3xl
        text-[#FFFFFF] gap-5"
        >
          <span className="">CBFS:U/A</span>
          <span>Action</span>
          <span>Adventure</span>
          <span>2h 28m</span>
        </div>
        <div
          className="w-[400px] left-[650px]
        text-[#FFFF] text-center flex justify-center absolute bottom-[470px]"
        >
          <p>
            When a spell goes wrong, dangerous foes from other worlds start to
            appear, forcing Peter to discover what it truly means to be
            Spider-Man.
          </p>
        </div>
        <div
          className="w-full flex justify-center  absolute 
        gap-[20px] bottom-[400px]"
        >
          <button className="w-[206px] h-[54px] bg-[#FFFFFF33] rounded-[30px] text-[#FFFFFF]">
            Watch Now
          </button>
          <button className="w-[206px] h-[54px] bg-[#FFFFFF33] rounded-[30px] text-[#FFFF]">
            More Info
          </button>
        </div>
        <div
          className="w-full flex justify-center  absolute 
        gap-[20px] bottom-[100px]"
        >
          {heroItem.map((item) => (
            <div key={item.id} className="w-[200px] h-[200px] m-[20px]">
              <img src={item.image} alt="" 
              className="w-[138px] h-[178px] object-cover rounded-[10px]"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
