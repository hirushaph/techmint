export type HeadingProps = {
  title: string;
  subtitle: string;
};

export type ProductType = {
  id: number;
  image: string;
  name: string;
  price: number;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  brand: string;
  images: Image[];
  variants: Variant[];
  features: Features;
};

type Image = {
  id: number;
  primary: boolean;
  link: string;
};

type Variant = {
  storage: string;
  color: Color;
  price: number;
  stock: number;
};

type Color = {
  name: string;
  hex: string;
};

type Features = {
  display: string;
  processor: string;
  battery: string;
  camera: string;
};
