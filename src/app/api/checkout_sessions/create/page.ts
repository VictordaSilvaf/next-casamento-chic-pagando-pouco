// pages/api/checkout-sessions/create.ts
import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil",
});
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { cartItems, returnUrl } = req.body;
    // Map cart items to the Stripe line_items format
    const line_items = cartItems.map(
      (item: {
        name: string;
        image: string;
        price: number;
        quantity: number;
      }) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
              images: [item.image],
            },
            unit_amount: item.price * 100, // TODO: Price should be retrieved from db
          },
          quantity: item.quantity,
        };
      }
    );
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${returnUrl}`,
    });
    res.status(200).json({ sessionId: session.id });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
