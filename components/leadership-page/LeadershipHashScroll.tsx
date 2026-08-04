"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LeadershipHashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace("#", "");

      if (!hash) return;

      const target = document.getElementById(hash);

      if (!target) return;

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    /*
     * Leadership page ke animated sections aur images ko render hone ke liye
     * thoda samay diya gaya hai. Iske baad exact message par scroll hoga.
     */
    const firstTimer = window.setTimeout(scrollToHash, 150);
    const secondTimer = window.setTimeout(scrollToHash, 650);

    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.clearTimeout(firstTimer);
      window.clearTimeout(secondTimer);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [pathname]);

  return null;
}