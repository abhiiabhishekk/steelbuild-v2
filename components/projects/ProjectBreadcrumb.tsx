import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Props {
  category: string;
  project: string;
}

export default function ProjectBreadcrumb({
  category,
  project,
}: Props) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-12 flex flex-wrap items-center gap-2 text-sm font-bold"
    >
      <Link
        href="/"
        className="text-gray-500 transition hover:text-primary-red"
      >
        Home
      </Link>

      <ChevronRight size={16} className="text-gray-400" />

      <Link
        href="/projects"
        className="text-gray-500 transition hover:text-primary-red"
      >
        Projects
      </Link>

      <ChevronRight size={16} className="text-gray-400" />

      <span className="text-gray-500">
        {category}
      </span>

      <ChevronRight size={16} className="text-gray-400" />

      <span className="font-black text-primary-blue">
        {project}
      </span>
    </nav>
  );
}