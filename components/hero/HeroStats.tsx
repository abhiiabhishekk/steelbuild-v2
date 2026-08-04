import { SITE } from "@/constants/site";

const stats = [
  { value: SITE.stats.projects, label: "Projects Delivered" },
  { value: SITE.stats.capacity, label: "Annual Capacity" },
  { value: SITE.stats.units, label: "Manufacturing Units" },
  { value: "ISO 9001:2015", label: "Certified Company" },
];

export default function HeroStats() {
  return (
    <div className="absolute bottom-8 left-1/2 z-30 hidden w-full max-w-6xl -translate-x-1/2 px-6 lg:block">
      <div className="hero-stats grid grid-cols-4 overflow-hidden rounded-[28px]">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border-r border-white/10 px-8 py-6 last:border-r-0"
          >
            <p className="text-3xl font-black tracking-tight text-white">
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-medium text-white/70">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}