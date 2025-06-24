import TitleSection from "@/components/TitleSection";
import Subtitle from "@/components/Subtitle";

const HeroSection = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto flex flex-col items-center py-20 justify-center gap-2">
        <TitleSection title="CASAMENTO CHIC PAGANDO POUCO" />


        <div className="relative w-full mt-20">
          <div className="flex justify-center items-center flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 w-full">
            {[
              {
                title: "CASAMENTOS *ÚNICOS*",
                description:
                  "Transformamos sonhos em realidade com nossa experiência em planejamento de casamentos únicos e memoráveis.",
              },
              {
                title: "PLANEJAMENTO *COMPLETO*",
                description:
                  "Do início ao fim, cuidamos de cada detalhe do seu casamento. Desde a escolha do local até a decoração, música e buffet, tudo é personalizado de acordo com seu estilo.",
              },
              {
                title: "MOMENTOS *INESQUECÍVEIS*",
                description:
                  "Nosso objetivo é criar momentos mágicos que ficarão guardados para sempre na memória. Cada casamento é único e merece uma celebração especial.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="w-[20rem] xl:w-[23rem] h-[20rem] xl:h-[23rem] px-[2%] aspect-square border border-app-primary rounded-full bg-white z-[1] flex justify-center flex-col items-center text-center"
              >
                <Subtitle className="mb-[25px]" text={item.title} />
                <p className="text-sm md:text-base text-black">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Linha no meio - visível apenas no desktop */}
          <div className="hidden lg:block absolute w-2/3 left-1/2 -translate-x-1/2 h-[2px] bg-app-primary top-1/2 -translate-y-1/2"></div>
          <div className="block lg:hidden absolute h-2/3 top-1/2 -translate-x-1/2 w-[2px] bg-app-primary left-1/2 -translate-y-1/2"></div>
        </div>


        {/* <div className="">
                    <Subtitle className="mb-[25px]" text="CASAMENTOS ÚNICOS" />
                    <Text
                        className="w-full max-w-2xl"
                        text="Criamos experiências únicas e memoráveis para o seu dia especial. Nossa equipe está comprometida em tornar seu casamento exatamente como você sempre sonhou."
                    />
                </div>

                <div className="">
                    <Subtitle className="mb-[25px]" text="PLANEJAMENTO COMPLETO" />
                    <Text
                        className="w-full max-w-2xl"
                        text="Do início ao fim, cuidamos de cada detalhe do seu casamento. Desde a escolha do local até a decoração, música e buffet, tudo é personalizado de acordo com seu estilo."
                    />
                </div>

                <div className="">
                    <Subtitle className="mb-[25px]" text="MOMENTOS INESQUECÍVEIS" />
                    <Text
                        className="w-full max-w-2xl"
                        text="Nosso objetivo é criar momentos mágicos que ficarão guardados para sempre na memória. Cada casamento é único e merece uma celebração especial."
                    />
                </div> */}

      </div>


    </div>

    // <div>HeroSection</div>
  );
};

export default HeroSection;
