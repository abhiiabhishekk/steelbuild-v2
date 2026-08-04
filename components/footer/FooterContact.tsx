import Link from "next/link";

export default function FooterContact() {
  return (
    <div className="rounded-[28px] border border-white/5 bg-white/[0.04] p-7 backdrop-blur-xl">
      <h3 className="text-sm font-black uppercase tracking-[0.25em] text-white">
        Contact
      </h3>

      <div className="mt-6 space-y-5 text-sm leading-7 text-white/70">
        <p>
          <strong className="text-white">Corporate Office</strong>
          <br />
          Delhi, India
        </p>

        <p>
          <strong className="text-white">Manufacturing Units</strong>
          <br />
          Sonipat, Haryana
        </p>

        <p>
          <strong className="text-white">Email</strong>
          <br />
          <Link href="mailto:info@steelbuildinfra.com" className="hover:text-primary-red">
            info@steelbuildinfra.com
          </Link>
        </p>

        <p>
          <strong className="text-white">Website</strong>
          <br />
          <Link href="https://steelbuildinfra.com" className="hover:text-primary-red">
            steelbuildinfra.com
          </Link>
        </p>
      </div>
    </div>
  );
}