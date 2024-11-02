import { Swiper, SwiperSlide } from "swiper/react";
import "./index.scss";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function Carousel() {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="carousel"
      >
        <SwiperSlide>
          <img src="src\component\Images\slide1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\component\Images\slide2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\component\Images\slide3.jpg" alt="" />
        </SwiperSlide>
      </Swiper>

      <div className="thumnails">
        <img
          className="thumnail"
          src="src\component\Images\menu-01.jpg"
          alt=""
        />
        <img
          className="thumnail"
          src="src\component\Images\menu-02.jpg"
          alt=""
        />
        <img
          className="thumnail"
          src="src\component\Images\menu-03.jpg"
          alt=""
        />
        <img
          className="thumnail"
          src="src\component\Images\menu-04.jpg"
          alt=""
        />
        <img
          className="thumnail"
          src="src\component\Images\menu-05.jpg"
          alt=""
        />
        <img
          className="thumnail"
          src="src\component\Images\menu-06.jpg"
          alt=""
        />
        <img
          className="thumnail"
          src="src\component\Images\menu-07.jpg"
          alt=""
        />
        <img
          className="thumnail"
          src="src\component\Images\menu-08.jpg"
          alt=""
        />
      </div>
      <p className="header_text">This is Home Page</p>
    </div>
  );
}
