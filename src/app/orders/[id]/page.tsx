import ProductDetailsMain from "@/components/orders/OrderDetailsMain";

export default function OrderDetails() {
  return (
    <div className="min-h-[100dvh] pt-15 md:pt-10">
      <div className="container p-4 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold">Order Details</h3>
        <ProductDetailsMain />
      </div>
    </div>
  );
}