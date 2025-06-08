import Stripe from "stripe";

export const stripe = new Stripe(process.env.REACT_APP_STRIPE_API_KEY!, {
  appInfo: {
    name: "Ignite Shop",
  },
});
