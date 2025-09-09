import { CartItem } from './CartItem';
import { CartSummary } from './CartSummary';
import { mockProducts } from '@/constants/mockProducts';

const cartItems = [
  { product: mockProducts[0], quantity: 2 },
  { product: mockProducts[1], quantity: 1 },
  { product: mockProducts[2], quantity: 1 },
];

export function CartMain() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-4 md:p-8">

        <div className="mb-6">
          <h1 className="text-xl font-bold text-foreground">Shopping Cart</h1>
          <p className="text-muted-foreground text-sm">
            {cartItems.length} items in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="xl:col-span-8">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <CartItem
                  key={item.product.id}
                  product={item.product}
                  quantity={item.quantity}
                />
              ))}
            </div>
          </div>

          <div className="xl:col-span-4">
            <CartSummary cartItems={cartItems} />
          </div>
        </div>
      </div>
    </div>
  );
}