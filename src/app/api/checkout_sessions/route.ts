import { NextResponse } from "next/server";
import { headers } from "next/headers";

import { stripe } from "../../../lib/stripe";

export async function POST(request: Request) {
  try {
    const headersList = await headers();
    const origin = headersList.get("origin");

    // Parse the price_id from the query string
    const { searchParams } = new URL(request.url);
    const priceId = searchParams.get("price_id");

    if (!priceId) {
      return NextResponse.json(
        { error: "Missing price_id parameter" },
        { status: 400 }
      );
    }

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Use the price_id from the query string
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?canceled=true`,
    });
    return NextResponse.redirect(session.url as string, 303);
  } catch (err: Error | unknown) {
    const error = err as { message: string; statusCode?: number };
    return Response.json(
      { error: error.message },
      { status: error.statusCode || 500 }
    );
  }
}
