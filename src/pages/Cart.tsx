import { MdDelete } from 'react-icons/md';
import useCart from '../hooks/useCart';
import { toast } from 'react-toastify';
import { getSubTotal } from '../utils/helpers';

function Cart() {
  const { cart, removeFromCart } = useCart();
  console.log(cart);

  const shippingCost = cart.length === 0 ? 0 : 1.99;
  const subTotal = getSubTotal(cart);

  function handleDelete(slug: string) {
    removeFromCart(slug);
    toast.success('Item Deleted');
  }
  return (
    <div className='container mx-auto px-4'>
      <h1 className='mb-4 mt-4 text-2xl font-semibold'>Cart</h1>
      <div className='grid grid-cols-custom-cart gap-12 pt-4'>
        <div>
          {cart.length === 0 && <div>No Items Found</div>}
          {cart.map((item) => (
            <div
              key={item.slug}
              className='mb-2 flex items-center justify-between rounded-md bg-gray-100 px-3 py-2'
            >
              {/* Details */}
              <div className='flex items-center justify-start gap-2'>
                <img src={item.images[0]} alt='' width={80} height={80} />
                <div>
                  <h2 className='text-md font-semibold'>{item.name}</h2>
                  <p className='text-sm text-dark-600'>Color : {item.color}</p>
                  <p className='text-sm font-semibold text-blue-600'>
                    {item.price * item.quantity} $
                  </p>
                </div>
              </div>
              {/* Actions */}
              <div className='flex gap-4'>
                <p>Quantity : {item.quantity}</p>
                <button onClick={() => handleDelete(item.slug)}>
                  <MdDelete
                    className='transition hover:text-red-500'
                    size={24}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className='rounded-md bg-dark-100 px-4 py-4'>
            <h1 className='text-md mb-4 font-semibold'>Cart Summary</h1>
            <div className='mb-2 flex justify-between'>
              <span>Subtotal</span>
              <span>{subTotal} $</span>
            </div>
            <div className='mb-3 flex justify-between'>
              <span>Shipping fee</span>
              <span>{shippingCost} $</span>
            </div>
            <div className='flex justify-between border-t border-dark-300 pt-4'>
              <span className='font-semibold'>Total</span>
              <span className='font-semibold'>{subTotal + shippingCost} $</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
