import axios, { AxiosResponse } from 'axios';
import { AllProducts, SingleProduct } from '../types/types';
import { collection, getDocs, limit, query, where } from 'firebase/firestore';
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
  id: string;
  name: string;
  description: string;
  image: string;
};

export type Brands = {
  id: number;
  name: string;
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
  const querySnapshot = await getDocs(collection(db, 'products'));

  if (querySnapshot.empty) {
    return [];
  }

  const documents: AllProducts = [];

  querySnapshot.forEach((doc) => {
    documents.push({ id: doc.id, ...doc.data() } as SingleProduct);
  });

  return documents;
}

export async function getCategories(): Promise<Categories> {
  const res: AxiosResponse<Categories> = await axios.get(
    `${BASE_URL}/categories`
  );

  return res.data;
}

export async function getBrands(): Promise<Brands[]> {
  const res: AxiosResponse<Brands[]> = await axios.get(`${BASE_URL}/brands`);

  return res.data;
}

export async function getSingleProduct(
  slug: string
): Promise<SingleProduct | undefined> {
  const itemsRef = collection(db, 'products');

  const q = query(itemsRef, where('slug', '==', slug));

  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return undefined;
  }

  // console.log(querySnapshot.docs[0].data());

  const itemData = querySnapshot.docs[0].data() as SingleProduct;
  return itemData;
}

export async function getPopularProducts(): Promise<AllProducts> {
  const productsRef = collection(db, 'products');

  // Create a query to fetch only 4 documents
  const limitedQuery = query(productsRef, limit(4));
  const querySnapshot = await getDocs(limitedQuery);

  // Process and return the documents
  const products = querySnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      }) as SingleProduct
  );
  return products;
}

export async function getFilterdProducts(category: string) {
  const productsRef = collection(db, 'products');

  let q;

  if (category === 'all') {
    q = query(productsRef);
  } else {
    q = query(productsRef, where('categories', 'array-contains', category));
  }

  const querySnapshot = await getDocs(q);
  const fetchedProducts = querySnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      }) as SingleProduct
  );

  console.log(fetchedProducts);

  return fetchedProducts;
}
