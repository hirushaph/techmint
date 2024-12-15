import { toast } from 'react-toastify';
import useCart from '../hooks/useCart';
import { CartItem, SingleProduct } from '../types/types';
import Button from './Button';

type AddToCartProps = {
  selectedVarient: any;
  product?: SingleProduct;
  quantity: number;
  children: React.ReactNode;
};

function AddToCart({
  selectedVarient,
  product,
  quantity,
  children,
}: AddToCartProps) {
  const { addToCart } = useCart();
  function handleAddToCart() {
    const item: CartItem = {
      slug: product?.slug,
      name: product?.name,
      discount: product?.discount,
      quantity: quantity,
      ...selectedVarient,
    };

    addToCart(item);
    toast.success('Added to cart');
  }
  return (
    <Button onClick={handleAddToCart} disabled={selectedVarient ? false : true}>
      {children}
    </Button>
  );
}

export default AddToCart;
