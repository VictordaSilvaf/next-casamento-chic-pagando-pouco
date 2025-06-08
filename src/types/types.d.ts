export interface CardServiceProps {
  id: number;
  name: string;
  price: number;
  stripeId: string;
  image: string;
  description: string;
  category: string;
  isMembership: boolean;
  features: string[];
}
