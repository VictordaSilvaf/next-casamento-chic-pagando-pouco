import { stripe } from "@/lib/stripe"


export const checkoutAction = async (stripeId: string) => {
  const url = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: stripeId,
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
  });
  return url.url;
};