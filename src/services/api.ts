import axios, { AxiosResponse } from 'axios';
import { ProductType } from '../types/types';

const BASE_URL = 'http://localhost:3000';

type Slider = {
  tagline: string;
  title: string;
  description: string;
  image: string;
};

type FeaturedProduct = {
  title: string;
  image: string;
};

type AllProducts = ProductType[];

export type FeaturedProducts = FeaturedProduct[];

export type Sliders = Slider[];

export async function getSliders(): Promise<Sliders> {
  const res: AxiosResponse<Sliders> = await axios.get(`${BASE_URL}/sliders`);

  return res.data;
}

export async function getFeatured(): Promise<FeaturedProducts> {
  const res: AxiosResponse<FeaturedProducts> = await axios.get(
    `${BASE_URL}/featured`
  );

  return res.data;
}

export async function getAllProducts(): Promise<AllProducts> {
  const res: AxiosResponse<AllProducts> = await axios.get(
    `${BASE_URL}/products`
  );

  return res.data;
}
