"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { galleries } from "@/utils/galleries";
import Gallery from "../Gallery";
import { Autoplay } from "swiper/modules";

export default function SwiperGallery() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={8}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
      centeredSlides={true}
    >
      {galleries.map((gallery, i) => (
        <SwiperSlide key={i}>
          <Gallery title={gallery.title} src={gallery.src} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
