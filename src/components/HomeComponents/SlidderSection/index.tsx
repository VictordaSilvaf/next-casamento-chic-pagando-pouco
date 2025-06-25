"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1745503288223-47645e960468?q=80&w=1974&auto=format&fit=crop",
    title: "CASAMENTOS INESQUECÍVEIS",
    description:
      "Transformamos sonhos em realidade com nossa experiência em planejamento de casamentos únicos e memoráveis.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    title: "MOMENTOS ESPECIAIS",
    description:
      "Cada detalhe é cuidadosamente planejado para criar memórias que durarão para sempre.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
    title: "CELEBRANDO O AMOR",
    description:
      "Especialistas em criar celebrações únicas que refletem a personalidade de cada casal.",
  },
];

const SlidderSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-10 mt-14">
      <div
        data-aos="fade-right"
        className="col-span-4 relative overflow-hidden"
      >
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {slides.map((slide, index) => (
              <div key={index} className="embla__slide flex-[0_0_100%] min-w-0">
                <Image
                  className="object-cover w-full h-[450px]"
                  src={slide.image}
                  alt={slide.title}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Controles do carrossel */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 pr-0.5 -translate-y-1/2 flex justify-center items-center bg-black/50 hover:bg-black/80 text-app-primary size-10 rounded-full transition-colors"
        >
          <ChevronLeftIcon className="size-6" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 pl-0.5 -translate-y-1/2 flex justify-center items-center bg-black/50 hover:bg-black/80 text-app-primary size-10 rounded-full transition-colors"
        >
          <ChevronRightIcon className="size-6" />
        </button>
      </div>
      <div
        data-aos="fade-left"
        className="flex flex-col bg-gray-100 col-span-6 px-11 py-10 justify-between"
      >
        <div className="flex flex-col gap-y-6 text-black text-start justify-between">
          <p>
            Eu te ensino a organizar um{" "}
            <span className="font-semibold">casamento chic</span> — o{" "}
            <span className="font-semibold text-app-primary">
              casamento dos seus sonhos
            </span>{" "}
            — gastando até{" "}
            <span className="text-app-primary font-semibold">50% menos</span>.
            Basta clicar no botão{" "}
            <span className="font-semibold text-app-primary">
              “Eu vou casar”
            </span>
            , aqui embaixo, e vamos juntas planejar o{" "}
            <span className="font-semibold">casamento mais incrível</span> que
            você já viu na vida.
          </p>

          <p>
            A verdade é uma só: se você vai{" "}
            <span className="font-semibold">casar</span> (ou pretende{" "}
            <span className="font-semibold">casar</span> um dia), se é{" "}
            <span className="font-semibold">mãe</span>,{" "}
            <span className="font-semibold">madrinha</span>,{" "}
            <span className="font-semibold">amiga</span> ou aquela mulher que
            ama estar preparada para ajudar… Você simplesmente{" "}
            <span className="text-app-primary font-semibold">NÃO PODE</span>{" "}
            ignorar isso. Porque, deixa eu te contar,{" "}
            <span className="font-semibold">casamento sem organização</span>,
            sem <span className="font-semibold">estratégia</span> e sem{" "}
            <span className="font-semibold">clareza</span> é sinônimo de quê?{" "}
            <span className="font-semibold">Caos</span>.{" "}
            <span className="font-semibold">Ansiedade</span>.{" "}
            <span className="font-semibold">Desespero</span>.{" "}
            <span className="font-semibold">Escolhas erradas</span>.{" "}
            <span className="font-semibold">Desperdício</span>. E, muitas vezes,{" "}
            <span className="font-semibold">frustração</span>. E aqui, a gente
            não aceita nada menos do que um dia absolutamente{" "}
            <span className="font-semibold">incrível</span>,{" "}
            <span className="font-semibold">leve</span>,{" "}
            <span className="font-semibold">inteligente</span> e — claro —{" "}
            <span className="font-semibold">chiquíssimo</span>.
          </p>

          <p>
            É exatamente por isso que nasceu o{" "}
            <span className="text-app-primary font-semibold">
              Casamento Chic Pagando Pouco
            </span>{" "}
            — um <span className="font-semibold">guia prático</span>,{" "}
            <span className="font-semibold">elegante</span> e{" "}
            <span className="font-semibold">super objetivo</span>, feito pra{" "}
            <span className="font-semibold">destravar sua organização</span>, te
            ensinar a fazer{" "}
            <span className="font-semibold">escolhas inteligentes</span>,{" "}
            <span className="font-semibold">otimizar seus recursos</span> e
            viver o seu <span className="font-semibold">sonho</span> sem{" "}
            <span className="font-semibold">estresse</span>, sem{" "}
            <span className="font-semibold">desperdícios</span> e sem aquele{" "}
            <span className="font-semibold">drama todo</span> que você vê por
            aí.
          </p>

          <div className="flex w-full justify-center">
            <Button
              className="mt-8 bg-app-primary hover:bg-app-primary/80 font-semibold uppercase font-sifonn animate-bounce"
              size="3xl"
            >
              Eu quero meu casamento chic
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidderSection;
