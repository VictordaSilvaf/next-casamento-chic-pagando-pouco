"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import axios from "axios";
import toast from "react-hot-toast";

const PartnersSection = () => {
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loadingButton, setLoadingButton] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoadingButton(true);
    try {
      await axios.post("/api/send_email/sendEmail", {
        name,
        lastName,
        email,
        phone,
        message,
      });

      toast.success("E-mail enviado com sucesso!");

      setName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
      

    } catch (error) {
      console.log(error);
    } finally {
      setLoadingButton(false);
    }
  };

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
              onSubmit={handleSubmit}
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
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
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="mt-1 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-app-primary"
                      defaultValue=""
                    />
                  </div>
                </div>
                <div className="mt-8 flex justify-center w-full">
                  <Button
                    disabled={loadingButton}
                    type="submit"
                    size="lg"
                    className="text-md uppercase"
                  >
                    {loadingButton ? "Enviando..." : "Enviar mensagem"}
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
