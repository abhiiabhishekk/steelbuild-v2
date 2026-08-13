"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  navigationItems,
  type NavigationGroup,
  type NavigationItem,
  type NavigationLink,
} from "@/data/navigation";

const DEVELOPMENT_MODE =
  process.env.NODE_ENV === "development";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/STEELBUILDINFRA",
    icon: FaFacebookF,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/steelbuild-infra-projects/",
    icon: FaLinkedinIn,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/steelbuildinfra/",
    icon: FaInstagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@steelbuildinfraprojectsltd",
    icon: FaYoutube,
  },
  {
    label: "Pinterest",
    href: "https://in.pinterest.com/steelbuildinfra/",
    icon: FaPinterestP,
  },
  {
    label: "Twitter X",
    href: "https://www.twitter.com/steelbuildinfra",
    icon: FaXTwitter,
  },
];

function isPathActive(
  pathname: string,
  href: string,
  currentHash: string,
) {
  const [hrefPath, hrefHash] = href.split("#");

  if (hrefPath === "/") {
    return pathname === "/";
  }

  if (hrefHash) {
    return (
      pathname === hrefPath &&
      currentHash === `#${hrefHash}`
    );
  }

  return (
    pathname === hrefPath ||
    pathname.startsWith(`${hrefPath}/`)
  );
}

function PendingBadge() {
  return (
    <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.12em] text-amber-700">
      Coming Soon
    </span>
  );
}

function MenuLink({
  item,
  pathname,
  currentHash,
  compact = false,
}: {
  item: NavigationLink;
  pathname: string;
  currentHash: string;
  compact?: boolean;
}) {
  const pending = item.status === "pending";

  const active = isPathActive(
    pathname,
    item.href,
    currentHash,
  );

  if (pending && !DEVELOPMENT_MODE) {
    return null;
  }

  if (pending) {
    return (
      <div
        className={`cursor-not-allowed rounded-xl border border-dashed border-gray-200 bg-gray-50 opacity-70 ${
          compact ? "px-4 py-3" : "p-4"
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <p className="text-sm font-black text-primary-blue">
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
      className={`group block rounded-xl border transition-all duration-300 ${
        compact
          ? "border-transparent px-4 py-3"
          : "p-4"
      } ${
        active
          ? "border-primary-red/20 bg-primary-red/[0.04]"
          : "border-transparent hover:border-gray-200 hover:bg-[#f8fafc]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <p
          className={`text-sm font-black transition-colors ${
            active
              ? "text-primary-red"
              : "text-primary-blue group-hover:text-primary-red"
          }`}
        >
          {item.label}
        </p>

        <ArrowUpRight
          size={15}
          className="shrink-0 text-gray-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-red"
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

function AboutMegaMenu({
  item,
  pathname,
  currentHash,
}: {
  item: NavigationItem;
  pathname: string;
  currentHash: string;
}) {
  return (
    <div className="w-[880px] overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-[0_30px_90px_rgba(27,63,104,0.18)]">
      <div className="grid grid-cols-[230px_1fr]">
        <div className="relative isolate overflow-hidden bg-primary-blue p-7 text-white">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:46px_46px]" />

          <div className="relative z-10">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary-red">
              Discover Steelbuild
            </p>

            <h2 className="mt-4 text-2xl font-black leading-tight">
              About Our Company
            </h2>

            <p className="mt-4 text-sm font-medium leading-7 text-white/65">
              Explore our journey, leadership, people,
              values and commitment to engineering
              excellence.
            </p>

            <Link
              href="/about"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-black !text-white hover:!text-primary-red"
            >
              Company Overview
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="grid max-h-[calc(100vh-165px)] grid-cols-2 gap-5 overflow-y-auto p-6">
          {item.groups?.map((group) => (
            <div key={group.label}>
              <p className="mb-2 px-2 text-[9px] font-black uppercase tracking-[0.2em] text-primary-red">
                {group.label}
              </p>

              <div className="space-y-1">
                {group.items?.map((child) => (
                  <MenuLink
                    key={child.href}
                    item={child}
                    pathname={pathname}
                    currentHash={currentHash}
                    compact
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductSystemGroup({
  group,
  pathname,
  currentHash,
}: {
  group: NavigationGroup;
  pathname: string;
  currentHash: string;
}) {
  const [open, setOpen] = useState(false);
  const pending = group.status === "pending";

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() =>
          setOpen((current) => !current)
        }
        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-black text-primary-blue transition-colors hover:bg-primary-red hover:text-white"
      >
        <span className="flex items-center gap-2">
          {group.label}

          {pending && DEVELOPMENT_MODE && (
            <span className="h-2 w-2 rounded-full bg-amber-400" />
          )}
        </span>

        <ChevronRight size={16} />
      </button>

      <div
        className={`absolute left-full top-0 ml-2 w-[270px] rounded-2xl border border-gray-200 bg-white p-3 shadow-[0_24px_70px_rgba(27,63,104,0.18)] transition-all duration-200 ${
          open
            ? "visible translate-x-0 opacity-100"
            : "invisible -translate-x-2 opacity-0"
        }`}
      >
        {group.href && (
          <MenuLink
            item={{
              label: `Explore ${group.label}`,
              href: group.href,
              status: group.status,
            }}
            pathname={pathname}
            currentHash={currentHash}
            compact
          />
        )}

        {group.items?.map((child) => (
          <MenuLink
            key={child.href}
            item={child}
            pathname={pathname}
            currentHash={currentHash}
            compact
          />
        ))}
      </div>
    </div>
  );
}

function ProductsMegaMenu({
  item,
  pathname,
  currentHash,
}: {
  item: NavigationItem;
  pathname: string;
  currentHash: string;
}) {
  const standardGroups =
    item.groups?.filter((group) =>
      [
        "Building Solutions",
        "Building Applications",
        "Components & Accessories",
      ].includes(group.label),
    ) ?? [];

  const systemGroups =
    item.groups?.filter((group) =>
      [
        "Mezzanine Systems",
        "Roofing Systems",
        "Cladding Systems",
      ].includes(group.label),
    ) ?? [];

  return (
    <div className="w-[920px] rounded-[28px] border border-gray-200 bg-white p-6 shadow-[0_30px_90px_rgba(27,63,104,0.18)]">
      <div className="grid grid-cols-[1fr_1fr_270px] gap-6">
        {standardGroups
          .slice(0, 2)
          .map((group) => (
            <div key={group.label}>
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                {group.label}
              </p>

              <div className="space-y-1">
                {group.items?.map((child) => (
                  <MenuLink
                    key={child.href}
                    item={child}
                    pathname={pathname}
                    currentHash={currentHash}
                    compact
                  />
                ))}
              </div>
            </div>
          ))}

        <div>
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
            Product Systems
          </p>

          <div className="space-y-1 rounded-2xl bg-[#f8fafc] p-2">
            {systemGroups.map((group) => (
              <ProductSystemGroup
                key={group.label}
                group={group}
                pathname={pathname}
                currentHash={currentHash}
              />
            ))}
          </div>

          {standardGroups[2] && (
            <>
              <p className="mb-3 mt-5 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                Components
              </p>

              <div className="space-y-1">
                {standardGroups[2].items?.map(
                  (child) => (
                    <MenuLink
                      key={child.href}
                      item={child}
                      pathname={pathname}
                      currentHash={currentHash}
                      compact
                    />
                  ),
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function CareersDropdown({
  item,
  pathname,
  currentHash,
}: {
  item: NavigationItem;
  pathname: string;
  currentHash: string;
}) {
  return (
    <div className="w-[370px] rounded-[24px] border border-gray-200 bg-white p-4 shadow-[0_24px_75px_rgba(27,63,104,0.18)]">
      <p className="px-4 pb-3 pt-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
        Careers at Steelbuild
      </p>

      <div className="space-y-1">
        {item.items?.map((child) => (
          <MenuLink
            key={child.href}
            item={child}
            pathname={pathname}
            currentHash={currentHash}
          />
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();

  const [currentHash, setCurrentHash] =
    useState("");

  const [
    openDesktopMenu,
    setOpenDesktopMenu,
  ] = useState<string | null>(null);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [
    openMobileMenu,
    setOpenMobileMenu,
  ] = useState<string | null>(null);

  const headerRef =
    useRef<HTMLElement | null>(null);

  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(
        window.location.hash,
      );
    };

    updateHash();

    window.addEventListener(
      "hashchange",
      updateHash,
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        updateHash,
      );
    };
  }, [pathname]);

  useEffect(() => {
    setOpenDesktopMenu(null);
    setMobileOpen(false);
    setOpenMobileMenu(null);
  }, [pathname]);

  useEffect(() => {
    const closeMenus = (
      event: MouseEvent,
    ) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(
          event.target as Node,
        )
      ) {
        setOpenDesktopMenu(null);
        setMobileOpen(false);
      }
    };

    const closeWithEscape = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        setOpenDesktopMenu(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      closeMenus,
    );

    document.addEventListener(
      "keydown",
      closeWithEscape,
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        closeMenus,
      );

      document.removeEventListener(
        "keydown",
        closeWithEscape,
      );
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-[9999] bg-white shadow-sm"
    >
      <div className="hidden h-9 bg-primary-blue text-white xl:block">
        <div className="mx-auto flex h-full max-w-[1180px] items-center justify-between px-6 text-xs font-bold">
          <a
            href="mailto:info@steelbuildinfra.com"
            className="hover:text-primary-red"
          >
            info@steelbuildinfra.com
          </a>

          <span>
            ISO 9001:2015 Certified Company
          </span>

          <div className="flex items-center gap-4">
            <span>Follow Us:</span>

            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="transition hover:-translate-y-0.5 hover:text-primary-red"
                >
                  <Icon size={15} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative border-b border-gray-100">
        <div className="mx-auto flex h-[86px] max-w-[1180px] items-center justify-between px-5 lg:px-6">
          <Link href="/">
            <Image
              src="/images/logo/logo.png"
              alt="Steelbuild Infra Projects Limited"
              width={165}
              height={56}
              priority
              className="h-[50px] w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-6 text-[15px] font-bold text-gray-800 xl:flex">
            {navigationItems.map((item) => {
              const active = isPathActive(
                pathname,
                item.href,
                currentHash,
              );

              const open =
                openDesktopMenu ===
                item.label;

              if (!item.menuType) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative whitespace-nowrap transition-colors hover:text-primary-red ${
                      active
                        ? "text-primary-red"
                        : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() =>
                    setOpenDesktopMenu(
                      item.label,
                    )
                  }
                  onMouseLeave={() =>
                    setOpenDesktopMenu(null)
                  }
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDesktopMenu(
                        open
                          ? null
                          : item.label,
                      )
                    }
                    className={`inline-flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-primary-red ${
                      active
                        ? "text-primary-red"
                        : ""
                    }`}
                  >
                    {item.label}

                    <ChevronDown
                      size={15}
                      className={`transition-transform ${
                        open
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`absolute left-1/2 top-full pt-6 transition-all duration-200 ${
                      open
                        ? "visible opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                    }`}
                    style={{
                      transform:
                        "translateX(-50%)",
                    }}
                  >
                    {item.menuType ===
                      "about" && (
                      <AboutMegaMenu
                        item={item}
                        pathname={pathname}
                        currentHash={
                          currentHash
                        }
                      />
                    )}

                    {item.menuType ===
                      "products" && (
                      <ProductsMegaMenu
                        item={item}
                        pathname={pathname}
                        currentHash={
                          currentHash
                        }
                      />
                    )}

                    {item.menuType ===
                      "dropdown" && (
                      <CareersDropdown
                        item={item}
                        pathname={pathname}
                        currentHash={
                          currentHash
                        }
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </nav>

          <Link
            href="/request-a-quote"
            className="hidden rounded-xl bg-primary-red px-7 py-4 text-sm font-black !text-white shadow-xl transition hover:-translate-y-1 hover:bg-primary-blue xl:inline-flex"
          >
            Request a Quote
          </Link>

          <button
            type="button"
            onClick={() =>
              setMobileOpen(
                (current) => !current,
              )
            }
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-primary-blue xl:hidden"
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
          >
            {mobileOpen ? (
              <X size={22} />
            ) : (
              <Menu size={23} />
            )}
          </button>
        </div>

        <div
          className={`fixed inset-x-0 bottom-0 top-[86px] overflow-y-auto bg-white p-5 transition-all xl:hidden ${
            mobileOpen
              ? "visible translate-x-0 opacity-100"
              : "invisible translate-x-full opacity-0"
          }`}
        >
          <nav className="space-y-2">
            {navigationItems.map((item) => {
              if (!item.menuType) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex min-h-[54px] items-center rounded-2xl bg-[#f8fafc] px-5 font-black text-primary-blue"
                  >
                    {item.label}
                  </Link>
                );
              }

              const open =
                openMobileMenu ===
                item.label;

              return (
                <div
                  key={item.href}
                  className="overflow-hidden rounded-2xl border border-gray-200"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobileMenu(
                        open
                          ? null
                          : item.label,
                      )
                    }
                    className="flex min-h-[56px] w-full items-center justify-between bg-[#f8fafc] px-5 font-black text-primary-blue"
                  >
                    {item.label}

                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        open
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  {open && (
                    <div className="space-y-2 border-t border-gray-200 p-3">
                      <Link
                        href={item.href}
                        className="block rounded-xl bg-primary-red px-4 py-3 text-sm font-black !text-white"
                      >
                        Explore {item.label}
                      </Link>

                      {item.items?.map(
                        (child) => (
                          <MenuLink
                            key={child.href}
                            item={child}
                            pathname={
                              pathname
                            }
                            currentHash={
                              currentHash
                            }
                            compact
                          />
                        ),
                      )}

                      {item.groups?.map((group) => (
  <div
    key={group.label}
    className="rounded-xl border border-gray-200 bg-white p-3"
  >
    <p className="mb-2 px-1 text-[10px] font-black uppercase tracking-[0.16em] text-primary-red">
      {group.label}
    </p>

    <div className="space-y-1">
      {/* Main system/category page */}
      {group.href && (
        <MenuLink
          item={{
            label: `Explore ${group.label}`,
            href: group.href,
            status: group.status,
          }}
          pathname={pathname}
          currentHash={currentHash}
          compact
        />
      )}

      {/* Child pages */}
      {group.items?.map((child) => (
        <MenuLink
          key={child.href}
          item={child}
          pathname={pathname}
          currentHash={currentHash}
          compact
        />
      ))}
    </div>
  </div>
))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}