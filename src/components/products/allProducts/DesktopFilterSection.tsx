import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { mockCategories } from "@/constants/mockCategories";

const sortOptions = [
  { id: "newest", name: "Newest to Oldest" },
  { id: "oldest", name: "Oldest to Newest" },
  { id: "name", name: "Name" },
  { id: "price", name: "Price" },
  { id: "rating", name: "Rating" },
];

export default function DesktopFilterSection() {
  return (
    <div className="w-64 hidden lg:flex flex-col pt-28 relative h-screen">
      <div className="p-4 flex-1 overflow-y-auto custom-scrollbar">

        <h3 className="font-semibold mb-3">Sort</h3>
        {sortOptions.map((item) => (
          <div key={item.id} className="flex flex-row items-center gap-2 mb-2">
            <Checkbox defaultChecked={item.id === "newest"} />
            <span className="text-sm font-normal line-clamp-1">{item.name}</span>
          </div>
        ))}

        <h3 className="font-semibold mb-3 mt-10">Category</h3>
        {[{ id: "all", name: "All" }, ...mockCategories].map((item) => (
          <div key={item.id} className="flex flex-row items-center gap-2 mb-2">
            <Checkbox defaultChecked={item.id === "all"} />
            <span className="text-sm font-normal line-clamp-1">{item.name}</span>
          </div>
        ))}
      </div>

      <div className="p-4 flex gap-1 bg-background">
        <Button
          variant="outline"
          className="flex-1 h-8 border border-destructive text-destructive"
        >
          Clear Filter
        </Button>
        <Button className="flex-1 h-8" variant="outline">
          Apply Filter
        </Button>
      </div>
    </div>
  );
};