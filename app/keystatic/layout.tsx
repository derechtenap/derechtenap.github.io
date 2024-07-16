import { showAdminUI } from "keystatic.config";
import KeystaticApp from "./keystatic";
import { notFound } from "next/navigation";

export default function RootLayout() {
  // Prevent access to the admin dashboard in production
  if (!showAdminUI) {
    notFound();
  }

  return <KeystaticApp />;
}
