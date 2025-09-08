import { FaStar } from "react-icons/fa";

export default function RatingStars({ rating }: { rating: number }) {
  return Array.from({ length: 5 }, (_, i) => (
    <FaStar
      key={i}
      className={`w-4 h-4 ${i < rating ? "text-warning fill-amber-500" : "text-muted-foreground"}`}
    />
  ));
};