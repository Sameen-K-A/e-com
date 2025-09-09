import { Button } from '@/components/ui/button';

interface CartSummaryProps {
  itemsCount: number;
}

export function CartSummary({ itemsCount }: CartSummaryProps) {
  return (
    <div className="rounded-lg p-1 space-y-4">
      <h2 className="text-lg font-semibold">Order Summary</h2>

      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span>Items ({itemsCount})</span>
          <span>₹847.96</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Shipping</span>
          <span className="text-cart-price">Free</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Tax</span>
          <span>₹84.80</span>
        </div>

        <div className='w-full h-[0.5px] bg-muted-foreground' />

        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span className="text-lg">₹932.76</span>
        </div>
      </div>

      <div className='hidden md:block space-y-2'>
        <Button className="w-full">
          Proceed to Checkout
        </Button>

        <Button variant="outline" className="w-full">
          Continue Shopping
        </Button>
      </div>

      {/* Mobile/Tablet Fixed Bottom Buttons */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 border-t px-4 py-2 flex gap-2 bg-background">
        <Button variant="outline" className="flex-1">
          Continue Shopping
        </Button>
        <Button className="flex-1">
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};