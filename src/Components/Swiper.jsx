import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";

const api_key = "api_key=9b702a6b89b0278738dab62417267c49";
const main_url = "https://api.themoviedb.org/3";
const api_url = main_url + "/discover/movie?sort_by=popularity.desc&" + api_key;
const img_url = "https://image.tmdb.org/t/p/w500";
const searchUrl = main_url + "/search/movie?" + api_key;

export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(api_url)
      .then((response) => response.json())
      .then((data) => setData(data.results))
      .catch((error) => console.error("Error:", error));
    console.log(data);
  }, []);
  return (
    <div className="w-[1200px] ">
      <Swiper 
        spaceBetween={10}
        slidesPerView={6}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full "
      >
        {data.map((movie) => (
          <div key={movie.id} className="">
            <SwiperSlide>
              <img
                src={img_url + movie.poster_path}
                alt=""
                className="w-[251px] h-[171px] object-cover"
              />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};
