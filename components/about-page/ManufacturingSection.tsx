import Container from "@/components/layout/Container";
import ManufacturingImage from "./ManufacturingImage";
import ManufacturingContent from "./ManufacturingContent";

export default function ManufacturingSection() {
  return (
    <section className="relative overflow-hidden bg-[#fbfcfe] py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(27,63,104,0.06),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(194,17,25,0.06),transparent_35%)]" />

      <Container>
        <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">
          <ManufacturingImage />
          <ManufacturingContent />
        </div>
      </Container>
    </section>
  );
}