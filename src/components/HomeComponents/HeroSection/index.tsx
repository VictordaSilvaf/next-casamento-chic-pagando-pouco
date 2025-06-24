import CardHero from "@/components/HomeComponents/HeroSection/components/CardHero";
import Container from "@/components/Container";
import DescriptionSection from "@/components/DescriptionSection";
import TitleSection from "@/components/TitleSection";
import { ChartNoAxesColumnIncreasing, Paperclip } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto flex flex-col items-center py-20 justify-center gap-2">
        <TitleSection title="CASAMENTO CHIC PAGANDO POUCO?" />
        <Container>
          <DescriptionSection>
            Te ensino a organizar um casamento chic, o casamento dos seus
            sonhos, gastando até 50% menos. Clique no botão “Eu vou casar”, que
            está abaixo e vamos juntas fazer o casamento mais incrível que você
            já viu.
          </DescriptionSection>
        </Container>
      </div>

      <Container>
        <div className="flex flex-col text-[#404040]/80 gap-5">
          <p>
            <strong>A verdade é uma só:</strong>
          </p>
          <p>Se você vai casar (ou pretende casar um dia)…</p>
          <p>
            Se você é mãe, madrinha, amiga ou aquela mulher que gosta de estar
            preparada para ajudar…
          </p>
          <p>Você simplesmente NÃO PODE ficar sem isso.</p>
          <p>
            Porque deixa eu te contar: casamento sem organização, sem estratégia
            e sem clareza, é sinônimo de quê?
          </p>
          <p>
            Caos. Ansiedade. Desespero. Escolhas erradas. Desperdício. E, muitas
            vezes, frustração.
          </p>
          <p>
            E aqui, a gente não aceita menos do que um dia absolutamente
            incrível, leve, inteligente e… claro, chiquérrimo.
          </p>
          <p>
            Por isso, nasceu o <strong>CASAMENTO CHIC PAGANDO POUCO —</strong>
          </p>
          <p>
      
            Um guia prático, elegante, sofisticado e super objetivo para
            destravar sua organização, te ensinar como fazer escolhas
            inteligentes, otimizar seus recursos e viver o seu sonho sem
            estresse, sem desperdício e sem aquele drama todo que você vê por
            aí.
          </p>
        </div>
        {/* <div className="flex items-center flex-col sm:flex-row justify-center mt-12 gap-10 sm:gap-0 mb-20">
          <CardHero
            title="PLANEJAMENTO"
            description="Ajudamos você a planejar cada detalhe do seu casamento, desde a escolha do local até os mínimos detalhes da decoração."
          >
            <Paperclip className="text-app-primary size-5" />
          </CardHero>

          <CardHero
            title="ECONOMIA"
            description="Estratégias inteligentes para reduzir custos sem comprometer a qualidade e elegância do seu grande dia."
          >
            <ChartNoAxesColumnIncreasing className="text-app-primary size-5" />
          </CardHero>

          <CardHero
            title="ASSESSORIA"
            description="Suporte completo com fornecedores, negociações e organização para realizar o casamento dos seus sonhos."
          >
            <Paperclip className="text-app-primary size-5" />
          </CardHero>
        </div> */}
      </Container>
    </div>

    // <div>HeroSection</div>
  );
};

export default HeroSection;
