export interface HomepageData {
  title?: string;
  welcomeText?: string;
  driverText?: string;
  sponsor?: string;
  sponsorText?: string;
  socialText?: string;
  Test?: string;
}

export interface Carousel {
  images: Array<Image>;
}

export interface Article {
  title: string;
  content: string;
  image: Image;
  published_at: string;
}

export interface Driver {
  id: number;
  name: string;
  description: string;
  Wohnort: string;
  Hardware: string;
  iRating: number;
  Rolle: string;
  image: Image;
}

export interface Sponsor {
  id: number;
  name: string;
  description: string;
  link: string;
  logo: Image;
}

export interface Image {
  id?: number;
  name?: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: {
    small?: ImageFormat;
    medium?: ImageFormat;
    thumbnail?: ImageFormat;
  }
  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
  url: string;
}

export interface ImageFormat {
  ext?: string;
  url?: string;
  hash?: string;
  mime?: string;
  name?: string;
  path?: string;
  size?: number;
  width?: number;
  height?: number;
}
