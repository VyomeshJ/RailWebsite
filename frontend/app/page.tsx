import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  // Redirect to English homepage
  redirect("/en/home"); // or "/en" if you prefer
}
