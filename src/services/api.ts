import axios, { AxiosResponse } from 'axios';
import { AllProducts, SingleProduct } from '../types/types';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from './firebase';

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

export type Category = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export type Categories = Category[];

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
  try {
    const querySnapshot = await getDocs(collection(db, 'products'));

    if (querySnapshot.empty) {
      return [];
    }

    const documents: AllProducts = [];

    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() } as SingleProduct);
    });

    return documents;
  } catch (error) {
    throw error;
  }
}

export async function getCategories(): Promise<Categories> {
  const res: AxiosResponse<Categories> = await axios.get(
    `${BASE_URL}/categories`
  );

  return res.data;
}

export async function getSingleProduct(id: string): Promise<SingleProduct> {
  const res: AxiosResponse<SingleProduct> = await axios.get(
    `${BASE_URL}/products/${id}`
  );

  return res.data;
}
