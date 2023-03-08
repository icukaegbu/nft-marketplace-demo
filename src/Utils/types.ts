export interface NFTHeroCardProps {
  image: string;
  title: string;
  category: string;
  owner?: string;
  ownerAddress?: string;
  description?: string;
  price: number;
}

export interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}