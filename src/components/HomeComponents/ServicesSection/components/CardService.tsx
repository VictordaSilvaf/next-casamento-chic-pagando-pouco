import { Button } from "@/components/ui/button";
import type { CardServiceProps } from "@/types/types";
import { CheckIcon } from "lucide-react";

function CardService(product: Readonly<CardServiceProps>) {
  return (
    <div
      key={product.id}
      className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
    >
      <div>
        <h3 id={product.id.toString()} className="text-base/7 font-semibold text-app-primary">
          {product.name}
        </h3>
        <div className="mt-4 flex items-baseline gap-x-2">
          <span className="text-5xl font-semibold tracking-tight text-gray-900">R$ {(product.price / 100).toFixed(2).replace('.', ',')}</span>
        </div>
        <p className="mt-6 text-base/7 text-gray-600">{product.description}</p>
        <ul role="list" className="mt-10 space-y-4 text-sm/6 text-gray-600">
          {product.features.map((feature) => (
            <li key={feature} className="flex gap-x-3">
              <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-app-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <form action="/create-checkout-session" method="POST">
        <Button className="mt-3" type="submit">
          Comprar agora
        </Button>
      </form>

    </div>
  );
};

export default CardService;
