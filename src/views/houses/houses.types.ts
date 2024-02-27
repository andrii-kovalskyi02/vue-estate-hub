import type { ErrorMessages } from './houses.constants'

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
  numberAddition?: string;
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

type ErrorMessagesKeys = (typeof ErrorMessages)[keyof typeof ErrorMessages]

export type { House, ListingFormData, ErrorMessagesKeys }
