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

type Image = {
  id: number;
  primary: boolean;
  link: string;
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

export type AllProducts = SingleProduct[];
export type SingleProduct = {
  id: string;
  rating: string;
  slug: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  discount: number;
  currency: string;
  stock: number;
  image: string;
  variants: Variants[];
  features: string[];
  specifications: Specifications;
  warranty: string;
  returnPolicy: string;
  deliveryOptions: string[];
  categories: string[];
};

type Category = {
  categoryId: string;
  categoryName: string;
};

export type CartItem = {
  id: string;
  name: string;
  slug: string;
  discount: number;
  quantity: number;
} & Variants;

type Variants = {
  color: string;
  hex: string;
  storage: string;
  price: number;
  sku: string;
  images: string[];
};

type Specifications = {
  display: string;
  resolution: string;
  processor: string;
  ram: string;
  battery: string;
  camera: Camera;
  os: string;
  dimensions: string;
  weight: string;
};

type Camera = {
  rear: string;
  front: string;
};
