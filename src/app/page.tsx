import Banner from "@/components/HomeComponents/Banner";
import AchievementsSection from "@/components/HomeComponents/AchievementsSection";
import HeroSection from "@/components/HomeComponents/HeroSection";
// import Menu from "@/components/HomeComponents/Menu";
import SlidderSection from "@/components/HomeComponents/SlidderSection";
import ServicesSection from "@/components/HomeComponents/ServicesSection";
// import DepoinmentsSection from "@/components/HomeComponents/DepoinmentsSection";
import PartnersSection from "@/components/HomeComponents/PartnersSection";
import BlogGallery from "@/components/HomeComponents/BlogGallery";
// import CTASection from "@/components/HomeComponents/CTASection";
import Footer from "@/components/HomeComponents/Footer";
import TitleSection from "@/components/TitleSection";
import DescriptionSection from "@/components/DescriptionSection";
import PartnersLogo from "@/components/HomeComponents/PartnersLogo";
// import PlansSection from "@/components/HomeComponents/PlansSection";
import Menu from "@/components/HomeComponents/Menu";
import AboutSection from "@/components/HomeComponents/AboutSection";
import { Toaster } from 'react-hot-toast'

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden relative bg-white">
      <Toaster position="top-center" reverseOrder={false} />
      <Menu />

      <Banner />

      <HeroSection />

      {/* Fotos de decoracao */}
      <SlidderSection />

      {/* <CTASection /> */}
      <AchievementsSection />

      {/* Colocar todos os detalhes nessa seção */}
      <ServicesSection />

      {/* + (altura) tamanho, 4 items e deixar igual o site: https://vendatodosantodia.com.br/stories10x/?conversion=ppt-s10x&utm_source=ig-org&utm_medium=bio-ig&utm_campaign=bio-ig&utm_content=s10x-bio */}
      {/* <DepoinmentsSection /> */}

      {/* Sobre a grace, texto na laterla e imagem no lado oposto */}

      <BlogGallery />

      <PartnersLogo />

      {/* <PlansSection /> */}

      <AboutSection />

      <div className="min-h-[50vh] w-full bg-white">
        <div className="max-w-7xl mx-auto pb-10">
          <TitleSection title="Fale conosco" />
          <DescriptionSection>
            Fale conosco para tirar suas dúvidas e agendar seu casamento
          </DescriptionSection>
        </div>
        <PartnersSection />
      </div>

      <Footer />
    </div>
  );
}
