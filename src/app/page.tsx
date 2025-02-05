"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/home.css";
import Image from "next/image"; // Importing the Next.js Image component

const sliderData = [
  { image: "/maldives.jpg", place: "Maldives" },
  { image: "/switzerland.jpg", place: "Switzerland" },
  { image: "/tokyo.jpg", place: "Tokyo, Japan" },
  { image: "/dubai.jpg", place: "Dubai, UAE" },
  { image: "/paris.jpg", place: "Paris, France" },
];

export default function Home() {
  return (
    <main className="home">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="home-slider"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index} className="slide">
            <Image
              src={slide.image}
              alt={slide.place}
              className="slide-img"
              width={500}
              height={300}
            />
            <div className="slide-text">{slide.place}</div>
          </SwiperSlide>
        ))}
      </Swiper>

      <h2>Explore Beautiful Destinations</h2>
      <p>Discover the world's most stunning locations!</p>
    </main>
  );
}
