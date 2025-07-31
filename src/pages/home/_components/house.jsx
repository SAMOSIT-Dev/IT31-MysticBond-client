import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import shield from "../../../assets/images/house_shield.png";
import Basilisk from "../../../assets/images/Basilisk.png";
import Giffin from "../../../assets/images/Giffin.png";
import Kitsune from "../../../assets/images/Kitsune.png";
import Leviathan from "../../../assets/images/Leviathan.png";
import Phoenix from "../../../assets/images/Phoenix.png";
import Qilin from "../../../assets/images/Qilin.png";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import RevealOnScrollAnimation from "../../../components/RevealOnScrollAnimation";

const houses = [
  { name: "Phoenix", shield_src: shield, mascot_src: Phoenix },
  { name: "Griffin", shield_src: shield, mascot_src: Giffin },
  { name: "Qilin", shield_src: shield, mascot_src: Qilin },
  { name: "Leviathan", shield_src: shield, mascot_src: Leviathan },
  { name: "Basilisk", shield_src: shield, mascot_src: Basilisk },
  { name: "Kitsune", shield_src: shield, mascot_src: Kitsune },
];

export default function House() {
  const [activeIndex, setActiveIndex] = useState(1);
  const swiperRef = useRef(null);

  return (
    <section className="bg-black relative pt-20 pb-40 overflow-hidden flex flex-col">
      {/* ขอบดำ - Gradient Overlays */}
      <div className="pointer-events-none absolute inset-0 z-20">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r lg:from-black lg:via-black/70 lg:to-transparent" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l lg:from-black lg:via-black/70 lg:to-transparent" />
      </div>

      {/* Header */}
      <div className="text-white text-center relative z-10 flex flex-col items-center mb-8 px-5 md:px-20">
        <h1 className="font-inria-serif font-bold text-6xl xl:text-7xl mb-5 tracking-wider">
          Houses
        </h1>
        <RevealOnScrollAnimation>
          <p className="text-base lg:text-xl xl:text-2xl font-light leading-relaxed px-4">
            สัมผัสกับพลังแห่งเวทมนตร์ที่ซ่อนอยู่ในตัวเรา ที่รอให้น้อง ๆ
            ค้นพบตัวตน และบทบาทที่แท้จริงในโลกใบใหม่นี้
            ผ่านพลังของสัตว์ในตำนานทั้ง 6 ตน
          </p>
        </RevealOnScrollAnimation>
      </div>

      {/* House Container Dekstop */}
      <div className="hidden md:flex items-center justify-center relative z-10 pt-20 pb-20">
        <div className="w-full h-full flex justify-evenly items-center">
          {houses.map((house, index) => (
            <div className="p-4 md:p-2 relative flex flex-col justify-center items-center">
              <div className="w-full flex justify-center items-center relative">
                <img
                  className="absolute z-0 w-30 h-30 lg:h-40 lg:w-40 object-contain opacity-80"
                  src={house.shield_src}
                  alt="shield"
                />
                <img
                  className={`relative z-10 ${
                    house.name === "Qilin"
                      ? "md:max-w-[110px] md:h-40 h-50 xl:h-60 xl:max-w-[200px] object-contain scale-130"
                      : " md:max-w-[110px] lg:max-w-[200px] object-contain xl:max-w-[300px]"
                  } 
                  hover:rotate-15 transition-all duration-300 md:h-40 h-50 xl:h-60`}
                  src={house.mascot_src}
                  alt={house.name}
                />
              </div>
              <h3 className="text-2xl mt-4 text-center font-inria-serif text-white">
                {house.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* House Carousel Container mobile */}
      <div className="md:hidden flex items-center justify-center relative z-10 pt-20">
        <div className="w-full max-w-7xl mx-auto px-4">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            initialSlide={1}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1.5,
              slideShadows: false,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            modules={[EffectCoverflow]}
            className="w-full h-80 py-4"
            ref={swiperRef}
          >
            {houses.map((house, index) => (
              <SwiperSlide
                key={index}
                className="!w-72 !h-80 flex items-center justify-center"
              >
                <div
                  className={`
                  flex flex-col items-center justify-center w-full h-full 
                  transition-all duration-500 ease-out 
                  ${
                    activeIndex === index
                      ? "scale-110 opacity-100"
                      : "scale-90 opacity-60"
                  }
                  hover:scale-105
                `}
                >
                  {/* House Card Container */}
                  <div className="relative w-100 lg:w-52 h-56 lg:h-60 flex items-center justify-center">
                    {/* Mascot - Main Image (Large) */}
                    <div className="relative w-full lg:w-44 h-full lg:h-44 flex items-center justify-center z-20">
                      <img
                        src={house.mascot_src}
                        alt={house.name}
                        className="w-full h-full object-contain "
                      />
                    </div>

                    {/* Shield Background (Smaller, behind mascot) */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] lg:w-32 h-[80%] lg:h-32 flex items-center justify-center z-10 opacity-80">
                      <img
                        src={house.shield_src}
                        alt="Shield"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* House Name */}
                  <h3
                    className={`
                    text-2xl mt-4 text-center font-inria-serif font-normal
                    transition-all duration-300
                    ${activeIndex === index ? "text-white" : "text-white/80"}
                  `}
                  >
                    {house.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-20 space-x-3">
            {houses.map((_, index) => (
              <button
                key={index}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300 
                  ${
                    activeIndex === index
                      ? "bg-white scale-125 shadow-[0_0_15px_rgba(255,255,255,0.7)]"
                      : "bg-white/30 hover:bg-white/50 hover:scale-110"
                  }
                `}
                onClick={() => {
                  if (swiperRef.current && swiperRef.current.swiper) {
                    swiperRef.current.swiper.slideToLoop(index);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
