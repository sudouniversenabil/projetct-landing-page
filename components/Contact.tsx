import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MessageCircle,
} from "lucide-react";
import {
  contactEmail,
  contactEmailUsername,
  fiverrProfileUrl,
  whatsappNumber,
  whatsappUrl,
} from "../lib/site-config";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-anchor px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#10172a] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="pointer-events-none absolute -right-20 -top-40 h-[28rem] w-[28rem] rounded-full bg-violet-600/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-52 right-1/4 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">
              Let&apos;s build something great
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
              Have an idea? Let&apos;s build it together.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
              Share what you&apos;re looking to create, improve, or fix. We can
              talk through the details and find the right next step.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <a
              href={fiverrProfileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-bold text-ink transition hover:bg-white"
            >
              Hire Me on Fiverr <ArrowRight size={16} />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
            >
              <MessageCircle size={16} /> WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="relative z-10 mt-9 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
              <MessageCircle size={19} />
            </span>
            <span>
              <span className="block text-xs font-semibold">WhatsApp</span>
              <span className="mt-1 block text-xs text-white/55">
                {whatsappNumber}
              </span>
            </span>
            <ArrowUpRight size={15} className="ml-auto text-white/45" />
          </a>

          {contactEmail ? (
            <a
              href={`mailto:${contactEmail}?subject=Web%20development%20inquiry`}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-400/10 text-violet-200">
                <Mail size={19} />
              </span>
              <span>
                <span className="block text-xs font-semibold">Email</span>
                <span className="mt-1 block text-xs text-white/55">
                  {contactEmail}
                </span>
              </span>
              <ArrowUpRight size={15} className="ml-auto text-white/45" />
            </a>
          ) : (
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-400/10 text-violet-200">
                <Mail size={19} />
              </span>
              <span>
                <span className="block text-xs font-semibold">Email</span>
                <span className="mt-1 block text-xs text-white/55">
                  {contactEmailUsername} — full address pending
                </span>
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
