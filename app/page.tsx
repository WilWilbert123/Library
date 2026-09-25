import { redirect } from "next/navigation";

export default function Home() {
  // Redirect root to dashboard (middleware will handle unauthenticated redirect to login)
  redirect("/dashboard");
}
