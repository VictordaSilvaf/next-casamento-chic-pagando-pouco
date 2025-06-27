"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";
import TypewriterText from "@/components/typewriterText";
import Image from "next/image";
import ImgBanner1 from '../../../../public/imagens/banner/banner1.webp'
import ImgBanner2 from '../../../../public/imagens/banner/banner2.jpeg'
import ImgBanner3 from '../../../../public/imagens/banner/banner3.jpg'
import ImgBanner4 from '../../../../public/imagens/banner/banner4.jpg'
import ImgBanner5 from '../../../../public/imagens/banner/banner5.jpg'
import ImgBanner6 from '../../../../public/imagens/banner/banner6.jpg'



const slides = [
  {
    id: 1,
    title: "Eternizando momentos especiais com amor",
    image: ImgBanner1,
  },
  {
    id: 2,
    title: "Celebrando o amor e a união",
    image: ImgBanner2,
  },
  {
    id: 3,
    title: "O dia mais feliz das suas vidas",
    image: ImgBanner3,
  },
  {
    id: 4,
    title: "Histórias de amor merecem ser contadas",
    image: ImgBanner4,
  },
  {
    id: 5,
    title: "Momentos únicos, memórias eternas",
    image: ImgBanner5,
  },
  {
    id: 6,
    title: "Seu casamento dos sonhos realizado",
    image: ImgBanner6,
  },
];

const Banner = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div
      id="home"
      className="w-full h-[100vh] bg-app-bg-secondary relative justify-center items-center flex pt-[70px]"
    >
      <div className="flex flex-col gap-4 justify-center items-center relative z-[15] w-[80%]">
        <div className="flex flex-col gap-4 border-t border-b py-4 line-clamp-1 min-h-[80px] font-sifonn uppercase">
          <TypewriterText text={slides[currentSlide]?.title ?? " "} />
        </div>

        <div className="flex flex-row gap-3">
          <button className="flex flex-col h-6 px-4 py-3 overflow-hidden group justify-center items-center pt-8">
            <span className="text-lg font-medium transform transition-transform duration-200 group-hover:-translate-y-8 text-app-typography-secondary font-satisfy">
              Portfolio
            </span>
            <span className="text-lg font-medium transform transition-transform duration-200 translate-y-7 group-hover:-translate-y-7 text-app-typography-secondary font-satisfy">
              Portfolio
            </span>
          </button>
          <button className="flex flex-col h-6 px-4 py-3 overflow-hidden group justify-center items-center pt-8">
            <span className="text-lg font-medium transform transition-transform duration-200 group-hover:-translate-y-8 text-app-typography-secondary font-satisfy">
              Contato
            </span>
            <span className="text-lg font-medium transform transition-transform duration-200 translate-y-7 group-hover:-translate-y-7 text-app-typography-secondary font-satisfy">
              Contato
            </span>
          </button>
        </div>

        <SocialMedias />
      </div>

      <div
        className="embla overflow-hidden w-full h-full absolute top-0 left-0"
        ref={emblaRef}
      >
        <div className="embla__container flex w-full h-full">
          {slides.map((slide) => (
            <div
              className="embla__slide flex-[0_0_100%] min-w-0 w-full h-full"
              key={slide.id}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-top"
                fill
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="w-full h-full bg-black/30"></div>
      </div>

      <div className="absolute -bottom-8 left-0 max-w-[600px] w-full h-[350px] z-10 overflow-hidden">
        <video
          src="/assets/videos/10ec8ec96bcf402ea1660ce0c728d575.webm"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-contain pointer-events-none"
        />
      </div>
    </div>
  );
};

function SocialMedias() {
  return (
    <div className="flex flex-row gap-1.5">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <a
              href="https://www.facebook.com/profile.php?id=1000881111111111111"
              className="bg-black/40 aspect-square w-7 h-7 justify-center items-center flex group"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                color="var(--color-app-primary)"
                className="group-hover:opacity-75 duration-700 group-hover:scale-110"
              />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Facebook</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <a
              href="https://www.instagram.com/profile.php?id=1000881111111111111"
              className="bg-black/40 aspect-square w-7 h-7 justify-center items-center flex group"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                color="var(--color-app-primary)"
                className="group-hover:opacity-75 duration-700 group-hover:scale-110"
              />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Instagram</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <a
              href="https://www.youtube.com/profile.php?id=1000881111111111111"
              className="bg-black/40 aspect-square w-7 h-7 justify-center items-center flex group"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                color="var(--color-app-primary)"
                className="group-hover:opacity-75 duration-700 group-hover:scale-110"
              />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Youtube</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <a
              href="https://wa.me/1000881111111111111"
              className="bg-black/40 aspect-square w-7 h-7 justify-center items-center flex group"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                color="var(--color-app-primary)"
                className="group-hover:opacity-75 duration-700 group-hover:scale-110"
              />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Whatsapp</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <a
              href="https://www.linkedin.com/profile.php?id=1000881111111111111"
              className="bg-black/40 aspect-square w-7 h-7 justify-center items-center flex group"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                color="var(--color-app-primary)"
                className="group-hover:opacity-75 duration-700 group-hover:scale-110"
              />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Linkedin</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default Banner;
