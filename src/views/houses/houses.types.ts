import type { ErrorMessages, Order } from './houses.constants'

interface House {
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

interface ListingFormData {
  streetName: string;
  houseNumber: string;
  houseNumberAddition?: string;
  zip: string;
  city: string;
  price: string;
  size: string;
  hasGarage: boolean | undefined;
  bedrooms: string;
  bathrooms: string;
  constructionYear: string;
  description: string;
}

interface Criteria {
  price: number;
  street?: string;
}

type ErrorMessagesKeys = (typeof ErrorMessages)[keyof typeof ErrorMessages]

type OrderKeys = (typeof Order)[keyof typeof Order]

export type { House, ListingFormData, Criteria, ErrorMessagesKeys, OrderKeys }
