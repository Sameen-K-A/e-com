'use client'

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronRight, Tag } from 'lucide-react';
import { cn } from "@/lib/utils";
import { ROUTE } from '@/constants/routes';
import { useRouter } from 'next/navigation';
import { mockProducts } from '@/constants/mockProducts';
import RatingStars from '../others/RatingStars';
import Image from 'next/image';

export default function ProductOverview() {
  const router = useRouter();
  const productData = mockProducts[0]
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-[100dvh]">
      <div className="container mx-auto p-4 md:p-8">
        <div className="flex items-center gap-2 cursor-default mb-4">
          <span className="text-muted-foreground cursor-pointer" onClick={() => router.push(ROUTE.ALL_PRODUCTS)}>Products</span>
          <span className="text-muted-foreground"><ChevronRight size={12} /></span>
          <span className="text-foreground font-medium">{productData.id}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="space-y-4 col-span-1 lg:col-span-2">
            <div className="overflow-hidden rounded-xl border">
              <div className="relative aspect-square bg-background">
                <Image
                  src={productData.images[selectedImage]}
                  alt={productData.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {productData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    "aspect-square border-2 rounded-lg overflow-hidden transition-all",
                    selectedImage === index
                      ? "border-primary shadow-md"
                      : "border-border hover:border-muted-foreground"
                  )}
                >
                  <Image
                    src={image}
                    alt={`${productData.name} view ${index + 1}`}
                    className="w-full h-full object-contain cursor-pointer"
                    width={20}
                    height={20}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 col-span-1 lg:col-span-3">
            <Badge variant="green" className="flex items-center gap-1">
              <Tag className="h-3 w-3" />
              {productData.category}
            </Badge>
            <h1 className="text-4xl font-bold text-foreground">
              {productData.name}
            </h1>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-semibold text-green-600">
                ₹{(productData.originalPrice * (1 - productData.offerPercentage / 100)).toFixed(2)}
              </div>
              <div className="text-sm text-muted-foreground line-through">
                ₹{productData.originalPrice.toFixed(2)}
              </div>
              <div className="text-sm font-medium text-destructive">
                -{productData.offerPercentage}%
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <RatingStars rating={productData.rating} />
              </div>
              <span className="text-muted-foreground text-sm">
                ({productData.ratingCount} reviews)
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {productData.description}
            </p>
            <div className="space-y-2 pt-4 hidden md:block">
              <Button variant="outline" size="lg" className="w-full">
                Add to Cart
              </Button>
              <Button size="lg" className="w-full">
                Buy Now
              </Button>
            </div>
            <Accordion type="single" collapsible defaultValue="features" className="w-full space-y-2 pt-4">
              <AccordionItem value="features">
                <AccordionTrigger className="text-primary font-medium">
                  Features
                </AccordionTrigger>
                <AccordionContent className="space-y-3">
                  {productData.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      {/* Mobile/Tablet Fixed Bottom Buttons */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 border-t px-4 py-2 flex gap-2 bg-background">
        <Button variant="outline" className="flex-1">Add to Cart</Button>
        <Button className="flex-1">Buy Now</Button>
      </div>
    </div>
  );
}