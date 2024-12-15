import { useEffect, useState } from 'react';
import { CartItem } from '../types/types';

function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(function () {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function addToCart(item: CartItem) {
    setCart((prevCart: CartItem[]) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.sku === item.sku
      );

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.sku === item.sku
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        return [...prevCart, item];
      }
    });
  }

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return { cart, addToCart, removeFromCart, clearCart };
}

export default useCart;
