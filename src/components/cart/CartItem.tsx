import { Trash2, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { IProduct } from '@/types/general';
import Image from 'next/image';

interface CartItemProps {
  product: IProduct;
  quantity: number;
}

export function CartItem({ product, quantity }: CartItemProps) {
  const discountedPrice = product.originalPrice * (1 - product.offerPercentage / 100);

  return (
    <div className="flex gap-4 p-3 bg-cart-item border rounded-lg">
      <div className="w-20 h-20 flex-shrink-0">
        <Image
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover rounded-md"
          height={100}
          width={100}
        />
      </div>

      <div className="flex-grow">
        <h3 className="font-semibold text-foreground line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
          {product.description}
        </p>

        <div className="flex items-center gap-2 mt-2">
          <span className="font-semibold">
            ${discountedPrice.toFixed(2)}
          </span>
          {product.offerPercentage > 0 && (
            <span className="text-xs text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col items-end gap-3">
        <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/5 p-1">
          <Trash2 className="w-3 h-3" />
        </Button>

        <div className="flex items-center gap-1 rounded-md">
          <Button variant="outline" size="icon" className="w-8 h-8 p-0">
            <Minus className="w-3 h-3" />
          </Button>
          <span className="px-2 py-1 text-sm font-medium min-w-[2rem] text-center">
            {quantity}
          </span>
          <Button variant="outline" size="icon" className="w-8 h-8 p-0">
            <Plus className="w-3 h-3" />
          </Button>
        </div>
      </div>
    </div>
  );
}