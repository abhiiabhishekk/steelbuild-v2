
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

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
    href: "https://www.instagram.com/steelbuildinfraprojects/",
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
    <span className="shrink-0 rounded-full bg-amber-100 px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.12em] text-amber-700">
      Coming Soon
    </span>
  );
}

function MenuLink({
  item,
  pathname,
  currentHash,
  compact = false,
  onNavigate,
}: {
  item: NavigationLink;
  pathname: string;
  currentHash: string;
  compact?: boolean;
  onNavigate?: () => void;
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
        aria-disabled="true"
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
      onClick={onNavigate}
      className={`group block rounded-xl border transition-all duration-300 ${
        compact ? "px-4 py-3" : "p-4"
      } ${
        active
          ? "border-primary-red/20 bg-primary-red/[0.04]"
          : "border-transparent hover:border-gray-200 hover:bg-[#f8fafc]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <p
          className={`text-sm font-black leading-5 transition-colors ${
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
  onNavigate,
}: {
  item: NavigationItem;
  pathname: string;
  currentHash: string;
  onNavigate: () => void;
}) {
  return (
    <div className="w-[880px] overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-[0_30px_90px_rgba(27,63,104,0.18)]">
      <div className="grid grid-cols-[230px_1fr]">
        <div className="relative isolate overflow-hidden bg-primary-blue p-7 text-white">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:46px_46px]" />

          <div className="relative z-10">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#c21119]">
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
              onClick={onNavigate}
                className="group mt-7 inline-flex items-center gap-2 text-sm font-black !text-white transition-colors hover:!text-[#c21119]"
            >
              Company Overview
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="grid max-h-[calc(100vh-165px)] grid-cols-2 gap-5 overflow-y-auto p-6">
          {item.groups?.map((group) => (
            <div key={group.label}>
              <p className="mb-2 px-4 text-sm font-black uppercase tracking-[0.12em] text-primary-red">
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
                    onNavigate={onNavigate}
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
  onNavigate,
}: {
  group: NavigationGroup;
  pathname: string;
  currentHash: string;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const pending = group.status === "pending";

  if (pending && !DEVELOPMENT_MODE) {
    return null;
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
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
        className={`absolute left-full top-0 z-20 ml-2 w-[270px] rounded-2xl border border-gray-200 bg-white p-3 shadow-[0_24px_70px_rgba(27,63,104,0.18)] transition-all duration-200 ${
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
            onNavigate={onNavigate}
          />
        )}

        {group.items?.map((child) => (
          <MenuLink
            key={child.href}
            item={child}
            pathname={pathname}
            currentHash={currentHash}
            compact
            onNavigate={onNavigate}
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
  onNavigate,
}: {
  item: NavigationItem;
  pathname: string;
  currentHash: string;
  onNavigate: () => void;
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
        {standardGroups.slice(0, 2).map((group) => (
          <div key={group.label}>
            <p className="mb-3 px-4 text-sm font-black uppercase tracking-[0.12em] text-primary-red">
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
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          </div>
        ))}

        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.12em] text-primary-red">
            Product Systems
          </p>

          <div className="space-y-1 rounded-2xl bg-[#f8fafc] p-2">
            {systemGroups.map((group) => (
              <ProductSystemGroup
                key={group.label}
                group={group}
                pathname={pathname}
                currentHash={currentHash}
                onNavigate={onNavigate}
              />
            ))}
          </div>

          {standardGroups[2] && (
            <>
              <p className="mb-3 mt-5 px-4 text-sm font-black uppercase tracking-[0.12em] text-primary-red">
                Components
              </p>

              <div className="space-y-1">
                {standardGroups[2].items?.map((child) => (
                  <MenuLink
                    key={child.href}
                    item={child}
                    pathname={pathname}
                    currentHash={currentHash}
                    compact
                    onNavigate={onNavigate}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function StandardDropdown({
  item,
  pathname,
  currentHash,
  onNavigate,
}: {
  item: NavigationItem;
  pathname: string;
  currentHash: string;
  onNavigate: () => void;
}) {
  const heading =
    item.label === "Careers"
      ? "Careers at Steelbuild"
      : "Steelbuild Solutions";

  return (
    <div className="w-[370px] rounded-[24px] border border-gray-200 bg-white p-4 shadow-[0_24px_75px_rgba(27,63,104,0.18)]">
      <p className="px-4 pb-3 pt-2 text-sm font-black uppercase tracking-[0.12em] text-primary-red">
        {heading}
      </p>

      <div className="space-y-1">
        {item.items?.map((child) => (
          <MenuLink
            key={child.href}
            item={child}
            pathname={pathname}
            currentHash={currentHash}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </div>
  );
}


function InvestorsMegaMenu({
  item,
  pathname,
  currentHash,
  onNavigate,
}: {
  item: NavigationItem;
  pathname: string;
  currentHash: string;
  onNavigate: () => void;
}) {
  const investorLinks =
    item.items?.filter(
      (child) => child.href !== "/investors",
    ) ?? [];

  const leftColumn = investorLinks.slice(0, 7);
  const rightColumn = investorLinks.slice(7);

  return (
    <div className="w-[880px] overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-[0_30px_90px_rgba(27,63,104,0.18)]">
      <div className="grid grid-cols-[230px_1fr]">
        {/* LEFT PANEL — EXACTLY MATCHING ABOUT */}

        <div className="relative isolate overflow-hidden bg-primary-blue p-7 text-white">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:46px_46px]" />

          <div className="relative z-10">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#c21119]">
              Investor Information
            </p>

            <h2 className="mt-4 text-2xl font-black leading-tight">
              Investor Relations
            </h2>

            <p className="mt-4 text-sm font-medium leading-7 text-white/65">
              Access corporate announcements,
              financial reports, governance
              documents and official investor
              disclosures.
            </p>

            <Link
              href="/investors"
              onClick={onNavigate}
              className="group mt-7 inline-flex items-center gap-2 text-sm font-black !text-white transition-colors hover:!text-[#c21119]"
            >
              Investor Relations
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* RIGHT PANEL — SAME STYLING AS ABOUT */}

        <div className="grid max-h-[calc(100vh-165px)] grid-cols-2 gap-5 overflow-y-auto p-6">
          <div>
            <p className="mb-2 px-4 text-sm font-black uppercase tracking-[0.12em] text-primary-red">
              Corporate Information
            </p>

            <div className="space-y-1">
              {leftColumn.map((child) => (
                <MenuLink
                  key={child.href}
                  item={child}
                  pathname={pathname}
                  currentHash={currentHash}
                  compact
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 px-4 text-sm font-black uppercase tracking-[0.12em] text-primary-red">
              Disclosures & Resources
            </p>

            <div className="space-y-1">
              {rightColumn.map((child) => (
                <MenuLink
                  key={child.href}
                  item={child}
                  pathname={pathname}
                  currentHash={currentHash}
                  compact
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();

  const [currentHash, setCurrentHash] =
    useState("");

  const [openDesktopMenu, setOpenDesktopMenu] =
    useState<string | null>(null);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [openMobileMenu, setOpenMobileMenu] =
    useState<string | null>(null);

  const headerRef = useRef<HTMLElement | null>(null);

  const closeDesktopMenu = () =>
    setOpenDesktopMenu(null);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenMobileMenu(null);
  };

  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash);
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
    const closeOnOutsideClick = (
      event: MouseEvent,
    ) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(
          event.target as Node,
        )
      ) {
        closeDesktopMenu();
        closeMobileMenu();
      }
    };

    const closeOnEscape = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        closeDesktopMenu();
        closeMobileMenu();
      }
    };

    document.addEventListener(
      "mousedown",
      closeOnOutsideClick,
    );

    document.addEventListener(
      "keydown",
      closeOnEscape,
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        closeOnOutsideClick,
      );

      document.removeEventListener(
        "keydown",
        closeOnEscape,
      );
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-[9999] bg-white shadow-sm"
    >
      {/* ORIGINAL TOP BAR */}

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

      {/* ORIGINAL CENTERED MAIN HEADER */}

      <div className="relative border-b border-gray-100">
        <div className="mx-auto flex h-[86px] max-w-[1180px] items-center justify-between gap-5 px-5 lg:px-6">
          {/* LOGO: ORIGINAL SIZE AND POSITION */}

          <Link
            href="/"
            className="shrink-0"
            onClick={() => {
              closeDesktopMenu();
              closeMobileMenu();
            }}
          >
            <Image
              src="/images/logo/logo.png"
              alt="Steelbuild Infra Projects Limited"
              width={165}
              height={56}
              priority
              className="h-[50px] w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav
            aria-label="Main navigation"
            className="hidden min-w-0 flex-1 items-center justify-center gap-4 text-[15px] font-bold text-gray-800 xl:flex"
          >
            {navigationItems.map((item) => {
              const active = isPathActive(
                pathname,
                item.href,
                currentHash,
              );

              const open =
                openDesktopMenu === item.label;

              if (!item.menuType) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeDesktopMenu}
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
                  className="relative shrink-0"
                  onMouseEnter={() =>
                    setOpenDesktopMenu(item.label)
                  }
                  onMouseLeave={() =>
                    setOpenDesktopMenu(null)
                  }
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() =>
                      setOpenDesktopMenu(
                        open ? null : item.label,
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
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Keep mega menus within header area */}

                  <div
                    className={`absolute top-full z-30 pt-6 transition-all duration-200 ${
                      item.menuType === "about"
                        ? "left-[-250px]"
                        : item.menuType === "products"
                          ? "left-[-340px]"
                          : item.label === "Investors"
                            ? "right-[-140px]"
                            : "left-1/2 -translate-x-1/2"
                    } ${
                      open
                        ? "visible opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                    }`}
                  >
                    {item.menuType === "about" && (
                      <AboutMegaMenu
                        item={item}
                        pathname={pathname}
                        currentHash={currentHash}
                        onNavigate={closeDesktopMenu}
                      />
                    )}

                    {item.menuType === "products" && (
                      <ProductsMegaMenu
                        item={item}
                        pathname={pathname}
                        currentHash={currentHash}
                        onNavigate={closeDesktopMenu}
                      />
                    )}

                    {item.menuType === "dropdown" &&
                      item.label === "Investors" && (
                        <InvestorsMegaMenu
                          item={item}
                          pathname={pathname}
                          currentHash={currentHash}
                          onNavigate={closeDesktopMenu}
                        />
                      )}

                    {item.menuType === "dropdown" &&
                      item.label !== "Investors" && (
                        <StandardDropdown
                          item={item}
                          pathname={pathname}
                          currentHash={currentHash}
                          onNavigate={closeDesktopMenu}
                        />
                      )}
                  </div>
                </div>
              );
            })}
          </nav>

          {/* ORIGINAL REQUEST A QUOTE BUTTON */}

          <Link
            href="/request-a-quote"
            className="hidden shrink-0 rounded-xl bg-primary-red px-7 py-4 text-sm font-black !text-white shadow-xl transition hover:-translate-y-1 hover:bg-primary-blue xl:inline-flex"
          >
            Request a Quote
          </Link>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            onClick={() =>
              setMobileOpen((current) => !current)
            }
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 text-primary-blue xl:hidden"
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={22} />
            ) : (
              <Menu size={23} />
            )}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}

        <div
          className={`fixed inset-x-0 bottom-0 top-[86px] overflow-y-auto bg-white p-5 transition-all xl:hidden ${
            mobileOpen
              ? "visible translate-x-0 opacity-100"
              : "invisible translate-x-full opacity-0"
          }`}
        >
          <nav
            aria-label="Mobile navigation"
            className="space-y-2"
          >
            {navigationItems.map((item) => {
              if (!item.menuType) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="flex min-h-[54px] items-center rounded-2xl bg-[#f8fafc] px-5 font-black text-primary-blue"
                  >
                    {item.label}
                  </Link>
                );
              }

              const open =
                openMobileMenu === item.label;

              return (
                <div
                  key={item.href}
                  className="overflow-hidden rounded-2xl border border-gray-200"
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() =>
                      setOpenMobileMenu(
                        open ? null : item.label,
                      )
                    }
                    className="flex min-h-[56px] w-full items-center justify-between bg-[#f8fafc] px-5 font-black text-primary-blue"
                  >
                    {item.label}

                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {open && (
                    <div className="space-y-2 border-t border-gray-200 p-3">
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="block rounded-xl bg-primary-red px-4 py-3 text-sm font-black !text-white"
                      >
                        Explore {item.label}
                      </Link>

                      {item.items?.map((child) => (
                        <MenuLink
                          key={child.href}
                          item={child}
                          pathname={pathname}
                          currentHash={currentHash}
                          compact
                          onNavigate={closeMobileMenu}
                        />
                      ))}

                      {item.groups?.map((group) => (
                        <div
                          key={group.label}
                          className="rounded-xl border border-gray-200 bg-white p-3"
                        >
                          <p className="mb-2 px-1 text-[10px] font-black uppercase tracking-[0.16em] text-primary-red">
                            {group.label}
                          </p>

                          <div className="space-y-1">
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
                                onNavigate={closeMobileMenu}
                              />
                            )}

                            {group.items?.map((child) => (
                              <MenuLink
                                key={child.href}
                                item={child}
                                pathname={pathname}
                                currentHash={currentHash}
                                compact
                                onNavigate={closeMobileMenu}
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

          <div className="mt-6 border-t border-gray-200 pt-5">
            <Link
              href="/request-a-quote"
              onClick={closeMobileMenu}
              className="group flex min-h-[58px] w-full items-center justify-center gap-3 rounded-2xl bg-primary-red px-6 py-4 text-base font-black !text-white shadow-[0_16px_35px_rgba(194,17,25,0.22)] transition-all duration-300 hover:bg-primary-blue"
            >
              Request a Quote

              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <p className="mt-3 text-center text-xs font-medium leading-5 text-gray-500">
              Discuss your upcoming PEB or industrial
              project with our team.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}