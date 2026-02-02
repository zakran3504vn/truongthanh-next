import { redirect } from "next/navigation";

export default function Home() {
  // Fallback: middleware sẽ tự detect locale, nhưng nếu bypass middleware thì mặc định về /vi
  redirect("/vi");
}
