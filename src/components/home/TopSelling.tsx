import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import { mockProducts } from "@/constants/mockProducts";
import Image from "next/image";

export const TopSelling = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">Top Selling</h2>
        <p className="text-muted-foreground text-sm">
          Details with eco-friendly materials
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="grid grid-cols-2 gap-4 col-span-1 sm:col-span-6 lg:col-span-4">
          {mockProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="col-span-1 lg:col-span-4">
          <div className="relative w-full h-72 sm:h-full rounded-2xl overflow-hidden flex flex-col justify-between p-4">

            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?q=80&w=678&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Top Selling Background"
                fill
                className="w-full h-full object-cover opacity-60"
              />
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-2xl font-bold">
                Top Selling Product
              </h3>
              <p className="mt-2 text-sm mb-6">
                Discover our most popular eco-friendly product loved by customers.
              </p>
              <Button className="rounded-full">
                <span>Shop Now</span>
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 col-span-1 sm:col-span-6 lg:col-span-4">
          {mockProducts.slice(4, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
