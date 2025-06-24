import Container from "@/components/Container";
import TitleSection from "@/components/TitleSection";

export default function AboutSection() {
  return (
    <div
      id="about"
      className="max-w-7xl mx-auto flex flex-col items-center py-20 justify-center gap-2"
    >
      <TitleSection title="Grace G. Natividade" />

      <Container>
        <div className="grid grid-cols-2 gap-4 items-start">
          <div className="h-full w-full bg-neutral-400 rounded overflow-hidden">
            <img src="/imagens/about/grace1.jpg" className="object-cover object-center h-full w-full" alt="Grace G. Natividade" />
          </div>
          <div className="flex flex-col  gap-5 text-black text-md text-justify">
            <p>
              <span className="text-5xl">N</span>a certidão, Grace Natividade. No coração, Grace G. Natividade —
              onde esse “G” carrega muito mais do que uma letra: é uma homenagem
              viva a Ana Gonçalves, sua mãe, sua referência, seu alicerce, sua
              inspiração. O sobrenome que não consta no papel, mas que está
              gravado na alma, na história e no legado que constrói todos os dias.
            </p>

            <p>
              E se tem algo que define Grace, é paixão por criar, planejar e
              executar eventos que fazem história. Uma mente inquieta, movida por
              desafios, alucinada por detalhes, tendências, inovação e, acima de
              tudo, resultados. Uma mulher que respira planejamento, mas vive para
              realizar — e que acredita que eventos são mais do que encontros; são
              experiências capazes de gerar conexão, transformação e impacto real.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 items-center">
          <div className="flex flex-col  gap-5 text-black text-justify">
            <p>
              De poucos e bons amigos, daquelas que escolhem qualidade em tudo:
              nas relações, no trabalho, nos projetos e, claro, nos detalhes.
              Porque onde alguns veem apenas flores, ela enxerga composição
              estética; onde veem um palco, ela vê narrativa; onde muitos veem um
              coffee break, ela vê uma oportunidade de encantar, surpreender e
              gerar memória afetiva.
            </p>
            <p>
              Formação? Sólida. Gestão de Eventos pela Universidade Anhembi
              Morumbi e, atualmente, Marketing na Fundação Getúlio Vargas (FGV) —
              porque entender de estratégia, mercado e comportamento é tão
              essencial quanto saber desenhar um projeto de cenografia impecável.
              Carrega também a chancela de Claudia Matarazzo, referência nacional
              em etiqueta, protocolo e cerimonial, com quem se especializou em
              Cerimonial e Planejamento de Eventos.
            </p>
          </div>
          <div className="h-full w-full bg-neutral-400 rounded overflow-hidden">
            <img src="/imagens/about/grace2.jpg" className="object-cover object-center h-full w-full" alt="Grace G. Natividade" />
          </div>
        </div>
        <div className="flex flex-col  gap-5 text-black mt-6 text-justify">
          <p>
            A carreira de Grace G. Natividade não começou por acaso — começou
            com propósito. Teve um divisor de águas quando trabalhou ao lado do
            renomado Catedrático Flávio Romero Macau, na Conquistar
            Desenvolvimento Humano, quando foi responsável pela área comercial e
            pela produção de todos os treinamentos e eventos da consultoria,
            especializada em Treinamentos Vivenciais ao Ar Livre. Ali, descobriu
            que não basta entregar eventos — é preciso entregar transformação,
            gerar experiências que fiquem na história de quem participa.
          </p>
        </div>
      </Container>
    </div>
  );
}
