import Container from "@/components/layout/Container";

const items = [
  "ISO 9001:2015 Certified",
  "700+ Projects Delivered",
  "50,000 MT Annual Manufacturing Capacity",
  "Pan India Execution",
];

export default function AnnouncementBar() {
  return (
    <div className="hidden h-8 bg-primary-blue text-white lg:block">
      <Container className="flex h-full items-center justify-between text-xs font-bold">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </Container>
    </div>
  );
}