"use client";

import {
  useEffect,
  useMemo,
  useState,
  type MouseEvent,
} from "react";
import {
  ChevronDown,
  ChevronRight,
  ListTree,
} from "lucide-react";

import type { SanityContentBlock } from "@/types/sanityBlog";

type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

type PortableTextChild = {
  _type?: string;
  text?: string;
};

type PortableTextHeading = {
  _type?: string;
  style?: string;
  children?: PortableTextChild[];
};

type BlogTableOfContentsProps = {
  content?: SanityContentBlock[];
  mobileAccordion?: boolean;
};

const createHeadingId = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const getHeadingText = (
  block: PortableTextHeading,
): string =>
  (block.children ?? [])
    .map((child) =>
      typeof child.text === "string" ? child.text : "",
    )
    .join("")
    .trim();

export default function BlogTableOfContents({
  content,
  mobileAccordion = false,
}: BlogTableOfContentsProps) {
  const [activeId, setActiveId] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const headings = useMemo<TocItem[]>(() => {
    if (!content?.length) {
      return [];
    }

    return content.reduce<TocItem[]>((items, item) => {
      const block = item as PortableTextHeading;

      if (
        block._type !== "block" ||
        (block.style !== "h2" && block.style !== "h3")
      ) {
        return items;
      }

      const text = getHeadingText(block);

      if (!text) {
        return items;
      }

      const id = createHeadingId(text);

      if (!id) {
        return items;
      }

      items.push({
        id,
        text,
        level: block.style === "h2" ? 2 : 3,
      });

      return items;
    }, []);
  }, [content]);

  useEffect(() => {
    if (headings.length === 0) {
      return;
    }

    const elements = headings
      .map((heading) =>
        document.getElementById(heading.id),
      )
      .filter(
        (element): element is HTMLElement =>
          Boolean(element),
      );

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              first.boundingClientRect.top -
              second.boundingClientRect.top,
          );

        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-120px 0px -65% 0px",
        threshold: [0, 0.1, 0.5, 1],
      },
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [headings]);

  const handleClick = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();

    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    const headerOffset = 135;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", `#${id}`);
    setActiveId(id);

    if (mobileAccordion) {
      setMobileOpen(false);
    }
  };

  if (headings.length < 2) {
    return null;
  }

  const tocList = (
    <ol className="space-y-1">
      {headings.map((heading, index) => {
        const active = activeId === heading.id;

        return (
          <li
            key={`${heading.id}-${index}`}
            className={
              heading.level === 3 ? "pl-5" : ""
            }
          >
            <a
              href={`#${heading.id}`}
              onClick={(event) =>
                handleClick(event, heading.id)
              }
              aria-current={
                active ? "location" : undefined
              }
              className={`group flex items-start gap-3 rounded-xl px-3 py-3 text-sm transition-all duration-300 ${
                active
                  ? "bg-primary-red/10 text-primary-red"
                  : "text-gray-600 hover:bg-primary-blue/[0.045] hover:text-primary-blue"
              }`}
            >
              <span
                className={`mt-0.5 flex h-6 min-w-6 items-center justify-center rounded-lg text-[9px] font-black ${
                  active
                    ? "bg-primary-red text-white"
                    : "bg-primary-blue/[0.07] text-primary-blue"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span
                className={`flex-1 leading-6 ${
                  heading.level === 2
                    ? "font-black"
                    : "text-[13px] font-bold"
                }`}
              >
                {heading.text}
              </span>

              <ChevronRight
                size={15}
                className={`mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-1 ${
                  active
                    ? "text-primary-red"
                    : "text-gray-300"
                }`}
              />
            </a>
          </li>
        );
      })}
    </ol>
  );

  if (mobileAccordion) {
    return (
      <nav
        aria-label="Table of contents"
        className="overflow-hidden rounded-[24px] border border-gray-200 bg-white shadow-[0_18px_50px_rgba(27,63,104,0.08)]"
      >
        <button
          type="button"
          onClick={() =>
            setMobileOpen((current) => !current)
          }
          aria-expanded={mobileOpen}
          className="flex w-full items-center justify-between gap-4 bg-primary-blue p-5 text-left"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
              <ListTree size={21} />
            </div>

            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.22em] text-primary-red">
                Article Navigation
              </p>

              <h2 className="mt-1 text-xl font-black text-white">
                Table of Contents
              </h2>

              <p className="mt-1 text-xs font-bold text-white/60">
                {mobileOpen
                  ? "Tap to collapse"
                  : "Tap to expand"}
              </p>
            </div>
          </div>

          <ChevronDown
            size={22}
            className={`shrink-0 text-white transition-transform duration-300 ${
              mobileOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`grid transition-all duration-300 ${
            mobileOpen
              ? "grid-rows-[1fr]"
              : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="max-h-[420px] overflow-y-auto p-4">
              {tocList}
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      aria-label="Table of contents"
      className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-[0_20px_60px_rgba(27,63,104,0.08)]"
    >
      <div className="bg-primary-blue p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-red text-white">
          <ListTree size={22} />
        </div>

        <p className="mt-5 text-[10px] font-black uppercase tracking-[0.23em] text-primary-red">
          Article Navigation
        </p>

        <h2 className="mt-2 text-2xl font-black text-white">
          Table of Contents
        </h2>
      </div>

      <div className="max-h-[480px] overflow-y-auto p-4">
        {tocList}
      </div>
    </nav>
  );
}