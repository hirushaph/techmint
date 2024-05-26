import axios, { AxiosResponse } from 'axios';

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
