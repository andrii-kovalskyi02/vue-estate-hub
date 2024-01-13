export interface House {
  id: number;
  image: string;
  price: number;
  rooms: {
    bedrooms: number;
    bathrooms: number;
  };
  size: number;
  description: string;
  location: {
    city: string;
    houseNumber: number;
    houseNumberAddition: string | null;
    street: string;
    zip: string;
  };
  createdAt: string;
  constructionYear: number;
  hasGarage: boolean;
  madeByMe: boolean;
}
