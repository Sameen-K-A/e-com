import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import RatingStars from "../others/RatingStars";
import { IProduct } from "@/types/general";
import Image from "next/image";
import Link from "next/link";
import { ROUTE } from "@/constants/routes";

interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discountedPrice = product.originalPrice * (1 - product.offerPercentage / 100);

  return (
    <Link href={ROUTE.PRODUCT_DETAILS(product.id)}>
      <div className="group relative overflow-hidden border rounded-md transition-all duration-300 cursor-pointer">
        <Button
          variant="outline"
          size="icon"
          className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <Heart className="w-4 h-4" />
        </Button>

        <div className="aspect-square overflow-hidden relative">
          <Image
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover rounded-md transition-opacity duration-300 group-hover:opacity-0"
            width={100}
            height={100}
          />
          <Image
            src={product.images[1]}
            alt={`${product.name} hover`}
            className="w-full h-full object-cover rounded-md absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            width={100}
            height={100}
          />
        </div>

        <div className="p-3 md:p-4 space-y-2">
          <h3 className="font-semibold text-sm md:text-lg line-clamp-1 leading-tight">
            {product.name}
          </h3>

          <div className="flex items-center gap-0.5">
            <RatingStars rating={product.rating} />
          </div>

          <div className="flex items-center gap-2">
            <div className="text-sm font-semibold">
              ₹{discountedPrice.toFixed(2)}
            </div>
            <div className="text-xs text-muted-foreground line-through">
              ₹{product.originalPrice.toFixed(2)}
            </div>
            <div className="text-xs font-medium text-destructive">
              -{product.offerPercentage}%
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};