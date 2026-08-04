"use client";

import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { HERO_SLIDES } from "@/data/hero-slides";

import "swiper/css";
import "swiper/css/effect-fade";

type HeroSliderProps = {
  onSlideChange: (index: number) => void;
  onSwiperReady: (swiper: SwiperType) => void;
};

export default function HeroSlider({
  onSlideChange,
  onSwiperReady,
}: HeroSliderProps) {
  return (
    <div className="absolute inset-0">
      <Swiper
        modules={[Autoplay, EffectFade, Keyboard]}
        effect="fade"
        loop
        keyboard={{ enabled: true }}
        speed={1500}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        onSwiper={onSwiperReady}
        onSlideChange={(swiper) => onSlideChange(swiper.realIndex)}
        className="h-full w-full"
      >
        {HERO_SLIDES.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={slide.id === 1}
                  fetchPriority={slide.id === 1 ? "high" : "auto"}
                  quality={90}
                  sizes="100vw"
                  className={`object-cover object-center transition-transform duration-[9000ms] ease-linear ${
                    isActive ? "scale-[1.045]" : "scale-100"
                  }`}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}