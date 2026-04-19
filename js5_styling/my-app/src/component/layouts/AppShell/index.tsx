import { useRouter } from "next/router";
import Navbar from "../navbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const disableNavbar = ["/auth/login", "/auth/register"];

  return (
    <div>
      {!disableNavbar.includes(router.pathname) && <Navbar />}
      <main>{children}</main>
    </div>
  );
}