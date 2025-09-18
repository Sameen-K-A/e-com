import CategoryList from "@/components/categories/CategoriesList";
import HeaderBar from "@/components/others/HeaderBar";

export default function Page() {
  return (
    <div className="min-h-[100dvh] pt-15 md:pt-10">
      <div className="container p-4 md:p-8 mx-auto space-y-6">
        <HeaderBar
          heading="Categories"
          breadcrump="categories"
        />
        <h3>Explore by Categories</h3>
        <CategoryList />
      </div>
    </div>
  )
}