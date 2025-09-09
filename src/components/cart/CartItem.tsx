import { Trash2, Minus, Plus, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { IProduct } from '@/types/general';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

interface CartItemProps {
  product: IProduct;
  quantity: number;
}

export function CartItem({ product, quantity }: CartItemProps) {

  const discountedPrice = product.originalPrice * (1 - product.offerPercentage / 100);

  return (
    <div className="rounded-xl p-3 border border-border/50">
      <div className="flex gap-5">

        <div className="relative flex-shrink-0">
          <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted/50">
            <Image
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
              width={100}
              height={100}
            />
          </div>
          {product.offerPercentage > 0 && (
            <Badge variant="green" className="absolute -top-2 -right-2 text-xs bg-green-100" >
              -{product.offerPercentage}%
            </Badge>
          )}
        </div>

        <div className="flex-grow min-w-0">
          <div className="flex flex-col items-start justify-between mb-2">

            <h3 className="font-semibold text-lg text-foreground line-clamp-1">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-1 mb-2">
              {product.description}
            </p>
            <Badge variant="green" className="flex items-center gap-1">
              <Tag className="h-3 w-3" />
              {product.category}
            </Badge>
          </div>
        </div>

      </div>

      <div className="flex items-center justify-between pl-0 md:pl-24">
        <div className="flex items-center gap-3">
          <span className="text-lg font-semibold">
            ₹{discountedPrice.toFixed(2)}
          </span>
          {product.offerPercentage > 0 && (
            <span className="text-xs text-muted-foreground line-through">
              ₹{product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-muted/50 px-2 h-8 rounded-lg border border-border/50">
            <Button
              variant="ghost"
              size="sm"
              className="w-7 h-7 p-0 hover:bg-accent/50 disabled:opacity-50"
            >
              <Minus className="w-2 h-2" />
            </Button>
            <span className="px-2 py-2 text-sm font-semibold min-w-[2rem] text-center">
              {quantity}
            </span>
            <Button
              variant="ghost"
              size="sm"
              className="w-7 h-7 p-0 hover:bg-accent/50"
            >
              <Plus className="w-2 h-2" />
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="p-2 h-7 w-7 text-destructive hover:bg-destructive/10 hover:text-destructive"
          >
            <Trash2 className="w-3 h-3" />
          </Button>
        </div>
      </div>
    </div>
  );
}