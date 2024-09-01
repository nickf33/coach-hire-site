import { Image, PortableTextBlock } from "sanity";

export interface Author {
  _id: string;
  name: string;
  slug: Slug;
  image?: Image;
  bio?: PortableTextBlock[];
}

export interface Category {
  _id: string;
  title: string;
  description?: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: Slug;
  author: Author;
  mainImage?: Image;
  categories: Category[];
  publishedAt: string;
  body: PortableTextBlock[];
}

export interface Slug {
  _type: "slug";
  current: string;
}

// Sanity image type
export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  crop?: {
    _type: "sanity.imageCrop";
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  hotspot?: {
    _type: "sanity.imageHotspot";
    height: number;
    width: number;
    x: number;
    y: number;
  };
}
