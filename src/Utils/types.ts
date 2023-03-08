export interface NFTHeroCardProps {
  image: string;
  title: string;
  category: string;
  owner?: string;
  ownerAddress?: string;
  description?: string;
  price: number;
}