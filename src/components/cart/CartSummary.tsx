import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, ChevronRight } from 'lucide-react';
import { IProduct } from '@/types/general';

interface CartSummaryProps {
  cartItems: {
    product: IProduct;
    quantity: number;
  }[];
}

export function CartSummary({ }: CartSummaryProps) {
  return (
    <div className="rounded-2xl">
      <h2 className="text-xl font-bold text-foreground mb-4">
        Order Summary
      </h2>

      <div className="space-y-2 mb-4 text-sm">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">
            Items (4)
          </span>
          <span className="font-medium">₹500.00</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Savings</span>
          <span className="font-medium text-green-500">
            -₹129.00
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Shipping</span>
          <div className="text-right">
            <div className="flex items-center gap-2">
              <Badge variant="green" className="text-xs">FREE</Badge>
              <span className="text-cart-price font-medium">₹0.00</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Tax</span>
          <span className="font-medium">₹20.00</span>
        </div>

        <div className="my-4 w-full h-[0.5px] bg-muted-foreground" />

        <div className="flex justify-between items-center text-lg">
          <span className="font-semibold">Total</span>
          <div className="text-right">
            <span className="font-bold text-xl">₹520.00</span>
            <div className="text-xs text-cart-price">
              You save ₹20.00
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4 bg-muted/30 p-3 rounded-lg">
        <ShieldCheck className="w-4 h-4 text-cart-price" />
        <span>Secure checkout with razorpay SSL encryption</span>
      </div>

      <div className="hidden md:block space-y-1">
        <Button className="w-full">
          Proceed to Checkout
          <ChevronRight className="w-4 h-4" />
        </Button>

        <Button variant="outline" className="w-full border" >
          Continue Shopping
        </Button>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border px-4 py-2">
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1">
            Continue Shopping
          </Button>
          <Button className="flex-1">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};