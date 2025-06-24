"use client";
import { Button } from "@/components/ui/button";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

const PartnersSection = () => {
  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[
          {
            image:
              "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?q=80&w=2070&auto=format&fit=crop",
            speed: -20, // efeito mais suave e elegante
          },
        ]}
        className="relative w-full min-h-[60vh] object-top"
      >
        {/* Overlay de gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/20 z-[1]" />

        {/* Conteúdo do formulário */}
        <div className="relative z-[2] w-full py-16 flex items-center max-w-5xl justify-start mx-auto">
          <div className="w-full px-4">
            <form
              action="#"
              method="POST"
              className="flex justify-center items-center"
            >
              <div className=" w-full max-w-xl">
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold text-white"
                    >
                      Nome
                    </label>
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-app-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold text-white"
                    >
                      Sobrenome
                    </label>
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="mt-1 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-app-primary"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-white"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="mt-1 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-app-primary"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="phone-number"
                      className="block text-sm font-semibold text-white"
                    >
                      Telefone
                    </label>
                    <input
                      id="phone-number"
                      name="phone-number"
                      type="tel"
                      autoComplete="tel"
                      className="mt-1 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-app-primary"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-white"
                    >
                      Nos conte um pouco do seu sonho
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-app-primary"
                      defaultValue=""
                    />
                  </div>
                </div>
                <div className="mt-8 flex justify-center w-full">
                  <Button size="lg" className="text-md uppercase">
                    Enviar mensagem
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </ParallaxBanner>
    </ParallaxProvider>
  );
};

export default PartnersSection;
