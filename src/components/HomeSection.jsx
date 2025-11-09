import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { images } from "../constants/sliderImg";

function NextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute right-5 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full cursor-pointer transition duration-300"
    >
      <FaChevronRight size={20} />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute left-5 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full cursor-pointer transition duration-300"
    >
      <FaChevronLeft size={20} />
    </div>
  );
}

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: false,
  };



  return (
    <div className="slider-container relative -mx-10 md:-mx-20">
      <Slider {...settings}>
        {images.map((item) => (
          <div key={item.id}>
            <img
              src={item.image}
              alt=""
              className="w-screen h-[40vh] md:h-[85vh]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
