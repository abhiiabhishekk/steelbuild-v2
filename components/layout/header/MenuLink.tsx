import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { NavigationLink } from "@/data/navigation";
import { isPathActive } from "./navigation-utils";

const DEVELOPMENT_MODE =
  process.env.NODE_ENV === "development";

type MenuLinkProps = {
  item: NavigationLink;
  pathname: string;
  currentHash: string;
  compact?: boolean;
  onNavigate?: () => void;
};

function PendingBadge() {
  return (
    <span className="shrink-0 rounded-full bg-amber-100 px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.12em] text-amber-700">
      Coming Soon
    </span>
  );
}

export default function MenuLink({
  item,
  pathname,
  currentHash,
  compact = false,
  onNavigate,
}: MenuLinkProps) {
  const pending = item.status === "pending";

  const active = isPathActive(
    pathname,
    currentHash,
    item.href,
  );

  if (pending && !DEVELOPMENT_MODE) {
    return null;
  }

  if (pending) {
    return (
      <div
        aria-disabled="true"
        className={`cursor-not-allowed rounded-xl border border-dashed border-gray-200 bg-gray-50 opacity-65 ${
          compact ? "px-4 py-3" : "p-4"
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <p className="text-sm font-black leading-5 text-primary-blue">
            {item.label}
          </p>

          <PendingBadge />
        </div>

        {!compact && item.description && (
          <p className="mt-2 text-xs font-medium leading-5 text-gray-500">
            {item.description}
          </p>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className={`group block rounded-xl border transition-all duration-300 ${
        compact
          ? "px-4 py-3"
          : "p-4"
      } ${
        active
          ? "border-primary-red/25 bg-primary-red/[0.055]"
          : "border-transparent hover:border-gray-200 hover:bg-[#f8fafc]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <p
          className={`text-sm font-black leading-5 transition-colors duration-300 ${
            active
              ? "text-primary-red"
              : "text-primary-blue group-hover:text-primary-red"
          }`}
        >
          {item.label}
        </p>

        <ArrowUpRight
          size={15}
          className={`shrink-0 transition-all duration-300 ${
            active
              ? "text-primary-red"
              : "text-gray-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-red"
          }`}
        />
      </div>

      {!compact && item.description && (
        <p className="mt-2 text-xs font-medium leading-5 text-gray-500">
          {item.description}
        </p>
      )}
    </Link>
  );
}