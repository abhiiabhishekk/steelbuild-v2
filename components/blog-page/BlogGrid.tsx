"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";
import { motion } from "framer-motion";
import {
  BookOpen,
  Filter,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

import Container from "@/components/layout/Container";
import BlogCard from "@/components/blog-page/BlogCard";
import type { SanityBlogListItem } from "@/types/sanityBlog";

const BLOGS_PER_PAGE = 9;

type CategoryFilter = "All" | string;

type BlogGridProps = {
  blogs: SanityBlogListItem[];
};

type SortOption =
  | "Latest"
  | "Oldest"
  | "Title A–Z";

function getPublishedTime(
  publishedAt?: string,
): number {
  if (!publishedAt) {
    return 0;
  }

  const timestamp = new Date(
    publishedAt,
  ).getTime();

  return Number.isNaN(timestamp)
    ? 0
    : timestamp;
}

export default function BlogGrid({
  blogs,
}: BlogGridProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] =
    useState("");

  const [
    activeCategory,
    setActiveCategory,
  ] =
    useState<CategoryFilter>("All");

  const [sortBy, setSortBy] =
    useState<SortOption>("Latest");

  const [
    visibleCount,
    setVisibleCount,
  ] = useState(BLOGS_PER_PAGE);

  const categories =
    useMemo<CategoryFilter[]>(
      () => [
        "All",

        ...Array.from(
          new Set(
            blogs
              .map(
                (blog) =>
                  blog.category,
              )
              .filter(
                (
                  category,
                ): category is string =>
                  Boolean(
                    category,
                  ),
              ),
          ),
        ),
      ],
      [blogs],
    );

  const updateUrl = useCallback(
    (
      nextSearch: string,
      nextCategory: CategoryFilter,
    ) => {
      const params =
        new URLSearchParams(
          searchParams.toString(),
        );

      const trimmedSearch =
        nextSearch.trim();

      if (trimmedSearch) {
        params.set(
          "search",
          trimmedSearch,
        );
      } else {
        params.delete("search");
      }

      if (
        nextCategory !== "All"
      ) {
        params.set(
          "category",
          nextCategory,
        );
      } else {
        params.delete(
          "category",
        );
      }

      const queryString =
        params.toString();

      router.replace(
        queryString
          ? `/blog?${queryString}`
          : "/blog",
        {
          scroll: false,
        },
      );
    },
    [
      router,
      searchParams,
    ],
  );

  /*
   * URL → component state
   * Browser refresh, back aur forward navigation par bhi chalega.
   */
  useEffect(() => {
    const urlSearch =
      searchParams.get(
        "search",
      ) ?? "";

    const urlCategory =
      searchParams.get(
        "category",
      );

    const validCategory =
      urlCategory &&
      categories.includes(
        urlCategory,
      )
        ? urlCategory
        : "All";

    setSearch(urlSearch);

    setActiveCategory(
      validCategory,
    );

    setVisibleCount(
      BLOGS_PER_PAGE,
    );
  }, [
    categories,
    searchParams,
  ]);

  const filteredBlogs =
    useMemo(() => {
      const query = search
        .trim()
        .toLowerCase();

      const result =
        blogs.filter(
          (blog) => {
            const categoryMatch =
              activeCategory ===
                "All" ||
              blog.category ===
                activeCategory;

            const title =
              blog.title ?? "";

            const excerpt =
              blog.excerpt ?? "";

            const category =
              blog.category ?? "";

            const tags =
              blog.tags ?? [];

            const searchMatch =
              !query ||
              title
                .toLowerCase()
                .includes(query) ||
              excerpt
                .toLowerCase()
                .includes(query) ||
              category
                .toLowerCase()
                .includes(query) ||
              tags.some(
                (tag) =>
                  tag
                    .toLowerCase()
                    .includes(
                      query,
                    ),
              );

            return (
              categoryMatch &&
              searchMatch
            );
          },
        );

      return [
        ...result,
      ].sort(
        (
          first,
          second,
        ) => {
          if (
            sortBy ===
            "Oldest"
          ) {
            return (
              getPublishedTime(
                first.publishedAt,
              ) -
              getPublishedTime(
                second.publishedAt,
              )
            );
          }

          if (
            sortBy ===
            "Title A–Z"
          ) {
            return (
              first.title ??
              ""
            ).localeCompare(
              second.title ??
                "",
            );
          }

          return (
            getPublishedTime(
              second.publishedAt,
            ) -
            getPublishedTime(
              first.publishedAt,
            )
          );
        },
      );
    }, [
      activeCategory,
      blogs,
      search,
      sortBy,
    ]);

  const visibleBlogs =
    filteredBlogs.slice(
      0,
      visibleCount,
    );

  const hasMore =
    visibleCount <
    filteredBlogs.length;

  const handleSearchChange = (
    value: string,
  ) => {
    setSearch(value);

    setVisibleCount(
      BLOGS_PER_PAGE,
    );

    updateUrl(
      value,
      activeCategory,
    );
  };

  const clearSearch = () => {
    setSearch("");

    setVisibleCount(
      BLOGS_PER_PAGE,
    );

    updateUrl(
      "",
      activeCategory,
    );
  };

  const handleCategoryChange = (
    category: CategoryFilter,
  ) => {
    setActiveCategory(
      category,
    );

    setVisibleCount(
      BLOGS_PER_PAGE,
    );

    updateUrl(
      search,
      category,
    );
  };

  const resetFilters = () => {
    setSearch("");

    setActiveCategory(
      "All",
    );

    setSortBy(
      "Latest",
    );

    setVisibleCount(
      BLOGS_PER_PAGE,
    );

    router.replace(
      "/blog",
      {
        scroll: false,
      },
    );
  };

  return (
    <section
      id="latest-articles"
      className="relative scroll-mt-28 overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 34,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin:
              "-100px",
          }}
          transition={{
            duration: 0.65,
          }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.32em] text-primary-red">
            <BookOpen
              size={15}
            />

            Latest Articles
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Explore the Steelbuild Knowledge Library
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Search and explore practical knowledge covering
            Pre-Engineered Buildings, industrial construction,
            manufacturing, roofing systems and project execution.
          </p>
        </motion.div>

        <motion.div
          id="blog-search"
          initial={{
            opacity: 0,
            y: 28,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="relative z-10 mt-14 scroll-mt-28 rounded-[30px] border border-gray-200 bg-[#f8fafc] p-5 shadow-[0_18px_55px_rgba(27,63,104,0.07)] md:p-7"
        >
          <div className="grid gap-5 lg:grid-cols-[1fr_240px]">
            <div className="relative">
              <Search
                size={21}
                className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-primary-red"
              />

              <input
                type="search"
                value={search}
                onChange={(
                  event,
                ) =>
                  handleSearchChange(
                    event
                      .target
                      .value,
                  )
                }
                placeholder="Search by article title, category or topic..."
                className="min-h-[58px] w-full rounded-2xl border border-gray-200 bg-white py-4 pl-14 pr-12 text-base font-semibold text-primary-blue outline-none transition-all duration-300 placeholder:font-medium placeholder:text-gray-400 focus:border-primary-red focus:ring-4 focus:ring-primary-red/10"
              />

              {search && (
                <button
                  type="button"
                  onClick={
                    clearSearch
                  }
                  aria-label="Clear blog search"
                  className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-gray-400 transition hover:bg-primary-red hover:text-white"
                >
                  <X
                    size={17}
                  />
                </button>
              )}
            </div>

            <div className="relative">
              <SlidersHorizontal
                size={19}
                className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-primary-red"
              />

              <select
                value={sortBy}
                onChange={(
                  event,
                ) => {
                  setSortBy(
                    event
                      .target
                      .value as SortOption,
                  );

                  setVisibleCount(
                    BLOGS_PER_PAGE,
                  );
                }}
                className="min-h-[58px] w-full appearance-none rounded-2xl border border-gray-200 bg-white py-4 pl-14 pr-5 text-base font-black text-primary-blue outline-none transition-all duration-300 focus:border-primary-red focus:ring-4 focus:ring-primary-red/10"
              >
                <option value="Latest">
                  Latest Articles
                </option>

                <option value="Oldest">
                  Oldest Articles
                </option>

                <option value="Title A–Z">
                  Title A–Z
                </option>
              </select>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="mr-1 inline-flex items-center gap-2 text-sm font-black text-primary-blue">
              <Filter
                size={17}
                className="text-primary-red"
              />

              Categories
            </div>

            {categories.map(
              (category) => {
                const active =
                  category ===
                  activeCategory;

                return (
                  <button
                    key={
                      category
                    }
                    type="button"
                    onClick={() =>
                      handleCategoryChange(
                        category,
                      )
                    }
                    aria-pressed={
                      active
                    }
                    className={`rounded-full border px-4 py-2.5 text-xs font-black transition-all duration-300 ${
                      active
                        ? "border-primary-red bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.2)]"
                        : "border-gray-200 bg-white text-primary-blue hover:border-primary-red/30 hover:text-primary-red"
                    }`}
                  >
                    {
                      category
                    }
                  </button>
                );
              },
            )}
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-gray-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold text-gray-500">
                Showing{" "}

                <span className="text-primary-blue">
                  {
                    visibleBlogs.length
                  }
                </span>{" "}

                of{" "}

                <span className="text-primary-blue">
                  {
                    filteredBlogs.length
                  }
                </span>{" "}

                articles
              </p>

              {(search ||
                activeCategory !==
                  "All") && (
                <p className="mt-2 text-xs font-semibold text-gray-400">
                  {search && (
                    <>
                      Search:{" "}

                      <span className="font-black text-primary-red">
                        “
                        {
                          search
                        }
                        ”
                      </span>
                    </>
                  )}

                  {search &&
                    activeCategory !==
                      "All" && (
                      <span className="mx-2">
                        •
                      </span>
                    )}

                  {activeCategory !==
                    "All" && (
                    <>
                      Category:{" "}

                      <span className="font-black text-primary-blue">
                        {
                          activeCategory
                        }
                      </span>
                    </>
                  )}
                </p>
              )}
            </div>

            {(search ||
              activeCategory !==
                "All" ||
              sortBy !==
                "Latest") && (
              <button
                type="button"
                onClick={
                  resetFilters
                }
                className="inline-flex items-center gap-2 text-sm font-black text-primary-red transition hover:text-primary-blue"
              >
                <X
                  size={16}
                />

                Reset Filters
              </button>
            )}
          </div>
        </motion.div>

        {visibleBlogs.length >
        0 ? (
          <div className="relative z-10 mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {visibleBlogs.map(
              (
                blog,
                index,
              ) => (
                <BlogCard
                  key={
                    blog.id
                  }
                  blog={
                    blog
                  }
                  index={
                    index
                  }
                />
              ),
            )}
          </div>
        ) : (
          <motion.div
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="relative z-10 mt-12 rounded-[30px] border border-gray-200 bg-white p-10 text-center shadow-[0_18px_55px_rgba(27,63,104,0.07)]"
          >
            <Search
              size={38}
              className="mx-auto text-primary-red"
            />

            <h3 className="mt-5 text-2xl font-black text-primary-blue">
              No Articles Found
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm font-medium leading-7 text-gray-500">
              Try another keyword or category to explore relevant
              Steelbuild articles.
            </p>

            <button
              type="button"
              onClick={
                resetFilters
              }
              className="mt-7 rounded-2xl bg-primary-red px-7 py-4 font-black !text-white transition hover:bg-primary-blue"
            >
              View All Articles
            </button>
          </motion.div>
        )}

        {hasMore && (
          <motion.div
            initial={{
              opacity: 0,
              y: 22,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="relative z-10 mt-14 flex justify-center"
          >
            <button
              type="button"
              onClick={() =>
                setVisibleCount(
                  (
                    current,
                  ) =>
                    Math.min(
                      current +
                        BLOGS_PER_PAGE,

                      filteredBlogs.length,
                    ),
                )
              }
              className="inline-flex min-h-[58px] items-center justify-center rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue"
            >
              Load More Articles
            </button>
          </motion.div>
        )}
      </Container>
    </section>
  );
}