"use client";

import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";
import {
  Autoplay,
  EffectFade,
  Keyboard,
} from "swiper/modules";
import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

export type HeroSlide = {
  id: string | number;

  image: string;

  eyebrow: string;
  title: string;
  description: string;

  primaryButtonText?: string;
  primaryButtonLink?: string;

  secondaryButtonText?: string;
  secondaryButtonLink?: string;
};

type HeroSliderProps = {
  slides: HeroSlide[];
  onSlideChange: (index: number) => void;
  onSwiperReady: (swiper: SwiperType) => void;
};

export default function HeroSlider({
  slides,
  onSlideChange,
  onSwiperReady,
}: HeroSliderProps) {
  return (
    <div className="absolute inset-0">
      <Swiper
        modules={[
          Autoplay,
          EffectFade,
          Keyboard,
        ]}
        effect="fade"
        loop={slides.length > 1}
        keyboard={{
          enabled: true,
        }}
        speed={1500}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        onSwiper={onSwiperReady}
        onSlideChange={(swiper) =>
          onSlideChange(swiper.realIndex)
        }
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  fetchPriority={
                    index === 0
                      ? "high"
                      : "auto"
                  }
                  quality={90}
                  sizes="100vw"
                  className={`object-cover object-center transition-transform duration-[9000ms] ease-linear ${
                    isActive
                      ? "scale-[1.045]"
                      : "scale-100"
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