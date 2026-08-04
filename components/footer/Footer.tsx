import FooterTopCTA from "./FooterTopCTA";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071b34] text-white">
      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary-red/20 blur-3xl" />
      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04)_0%,transparent_35%,rgba(0,0,0,0.18)_100%)]" />

      <div className="relative z-10">
        <FooterTopCTA />
        <FooterLinks />
        <FooterBottom />
      </div>
    </footer>
  );
}