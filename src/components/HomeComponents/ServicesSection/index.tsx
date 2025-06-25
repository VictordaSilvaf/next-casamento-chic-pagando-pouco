
import DescriptionSection from "@/components/DescriptionSection";
import TitleSection from "@/components/TitleSection";
import CardService from "./components/CardService";
import { products } from "@/data/products";

const ServicesSection = () => {
  return (
    <div id="services" className="px-6">
      <TitleSection title="Serviços" />
      <DescriptionSection>
        Confira todos os serviços disponíveis para você ter o casamento dos seus sonhos
      </DescriptionSection>

      <div className="mt-[60px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 pb-6">
        {products.map((product) => (
          <CardService key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;