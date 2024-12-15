import { useSelector, useDispatch } from 'react-redux';

import { CartItem } from '../types/types';
import { RootStateType } from '../redux/store';
import { addToCart, clearCart, removeFromCart } from '../redux/cartSlice';

function useCart() {
  const cart = useSelector((state: RootStateType) => state.cart.cart);
  const dispatch = useDispatch();

  const add = (item: CartItem) => dispatch(addToCart(item));
  const remove = (slug: string) => dispatch(removeFromCart(slug));
  const clear = () => dispatch(clearCart());

  return { cart, addToCart: add, removeFromCart: remove, clearCart: clear };
}

export default useCart;
