"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Image from "next/image";

const Carousel = () => (
  <Swiper
    modules={[Pagination, Navigation, Scrollbar]}
    spaceBetween={10}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    loop={true}
    style={{
      "--swiper-navigation-color": "#fff",
      "--swiper-pagination-color": "#fff",
    }}
    className="h-[200px] sm:h-[400px] md:h-[400px] lg:h-[600px] w-[100vw]"
  >
    <SwiperSlide>
      <div className="relative w-screen h-[200px] sm:h-[400px] md:h-[500px] bg-gray-200">
        <Image
          src="/1.jpg"
          alt="Slide 1"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="relative w-screen h-[200px] sm:h-[400px] md:h-[500px] bg-gray-200">
        <Image
          src="/2.jpg"
          alt="Slide 2"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="relative w-screen h-[200px] sm:h-[400px] md:h-[500px] bg-gray-200">
        <Image
          src="/3.jpg"
          alt="Slide 3"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>
    </SwiperSlide>
  </Swiper>
);

export default Carousel;
