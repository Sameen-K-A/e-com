import { mockProducts } from "@/constants/mockProducts";
import ProductCard from "../ProductCard";
import DesktopFilterSection from "./DesktopFilterSection";

export default function AllProductsMain() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto">
        <div className="flex">
          <DesktopFilterSection />
          <div className="flex-1 p-4 md:p-8 mt-20">
            <div className="grid gap-2 md:gap-5 grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
              {mockProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};