import { ROUTE } from "@/constants/routes";
import { redirect } from "next/navigation";

export default function Default() {
  redirect(ROUTE.HOME);
}