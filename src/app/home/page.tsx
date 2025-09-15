import FAQSection from "@/components/home/FAQs";
import { TopSelling } from "@/components/home/TopSelling";

export default function Home() {
  return (
    <div className="space-y-5">
      <div className="min-h-[100dvh] flex justify-center items-center">
        Home Page
      </div>
      <TopSelling />
      <FAQSection />
    </div>
  )
}