"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/footer/Footer";
import FloatingQuickActions from "@/components/common/FloatingQuickActions";

type AppLayoutShellProps = {
  children: React.ReactNode;
};

export default function AppLayoutShell({
  children,
}: AppLayoutShellProps) {
  const pathname = usePathname();

  const isStudioRoute =
    pathname === "/studio" || pathname.startsWith("/studio/");

  if (isStudioRoute) {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
      <FloatingQuickActions />
    </>
  );
}