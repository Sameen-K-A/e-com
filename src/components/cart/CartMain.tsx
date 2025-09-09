import { CartItem } from './CartItem';
import { CartSummary } from './CartSummary';
import { mockProducts } from '@/constants/mockProducts';

const cartItems = [
  { product: mockProducts[0], quantity: 2 },
  { product: mockProducts[1], quantity: 1 },
  { product: mockProducts[2], quantity: 1 },
  { product: mockProducts[3], quantity: 3 },
];

export function CartMain() {
  return (
    <div className="container p-4 md:p-8">
      <div className="flex items-center gap-2 mb-4">
        <h1 className="text-xl font-bold">My Cart</h1>
        <span className="text-muted-foreground">({cartItems.length} items)</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-2">
          {cartItems.map((item) => (
            <CartItem
              key={item.product.id}
              product={item.product}
              quantity={item.quantity}
            />
          ))}
        </div>

        <div className="lg:col-span-1">
          <CartSummary itemsCount={cartItems.length} />
        </div>
      </div>
    </div>
  );
}