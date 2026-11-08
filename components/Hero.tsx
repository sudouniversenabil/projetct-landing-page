import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Database,
  Layers3,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { fiverrProfileUrl } from "../lib/site-config";

const promises = [
  { icon: Layers3, label: "Responsive by design" },
  { icon: Code2, label: "Clean, modern code" },
  { icon: ShieldCheck, label: "Quality checked" },
];

export default function Hero({
  fiverrUrl = fiverrProfileUrl,
}: {
  fiverrUrl?: string;
}) {
  return (
    <section
      id="home"
      className="section-anchor hero-glow relative overflow-hidden bg-[#10172a] px-5 pb-20 pt-32 text-white sm:px-8 sm:pb-24 sm:pt-36 lg:px-12 lg:pb-28 lg:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/75">
            <Sparkles size={14} className="text-lime" />
            Web development, made straightforward
          </div>
          <h1 className="max-w-3xl text-[2.75rem] font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-[4.25rem]">
            Your next website,
            <br className="hidden sm:block" /> built to{" "}
            <span className="text-lime">move business forward.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
            Full-stack websites, thoughtful interfaces, and dependable
            integrations—built around your goals, your customers, and your next
            big idea.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={fiverrUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-white"
            >
              Hire Me on Fiverr <ArrowRight size={17} />
            </a>
            <a
              href={fiverrUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
            >
              View My Fiverr Profile <ArrowUpRight size={16} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
            >
              Explore Services <ArrowDown size={16} />
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-5">
            {promises.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 text-xs font-medium text-white/65"
              >
                <Icon size={15} className="text-lime" /> {label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem]">
          <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-transparent to-emerald-300/10 blur-2xl" />
          <div className="relative rounded-[1.6rem] border border-white/15 bg-[#161f35]/90 p-3 shadow-2xl shadow-black/30 sm:p-4">
            <div className="flex items-center justify-between border-b border-white/10 px-3 pb-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-[#ff8170]" />
                  <span className="h-2 w-2 rounded-full bg-[#ffd36f]" />
                  <span className="h-2 w-2 rounded-full bg-lime" />
                </div>
                <span className="ml-2 font-mono text-[10px] text-white/45">
                  project-preview.jsx
                </span>
              </div>
              <span className="rounded-md border border-white/10 px-2 py-1 font-mono text-[9px] text-white/45">
                LIVE PREVIEW
              </span>
            </div>
            <div className="grid min-h-[19rem] grid-cols-[3.1rem_1fr] overflow-hidden pt-4 sm:min-h-[22rem]">
              <div className="flex flex-col items-center gap-5 border-r border-white/10 pt-2 font-mono text-[10px] text-white/25">
                <span>01</span><span>02</span><span>03</span><span>04</span>
                <span>05</span><span>06</span><span>07</span>
              </div>
              <div className="px-4 pb-5 sm:px-6">
                <div className="font-mono text-[11px] leading-6">
                  <p className="text-violet-300">
                    <span className="text-white/35">{"<"}</span>Site
                    <span className="text-sky-300">Header</span>
                    <span className="text-white/35"> {"/>"}</span>
                  </p>
                  <p className="pl-4 text-white/55">
                    <span className="text-fuchsia-300">title</span>=
                    <span className="text-lime">&quot;Your next idea&quot;</span>
                  </p>
                  <p className="pl-4 text-white/55">
                    <span className="text-fuchsia-300">responsive</span>=
                    <span className="text-orange-200">{"{true}"}</span>
                  </p>
                  <p className="text-violet-300">
                    <span className="text-white/35">{"<"}</span>/Site
                    <span className="text-sky-300">Header</span>
                    <span className="text-white/35"> {">"}</span>
                  </p>
                </div>
                <div className="mt-5 rounded-xl border border-white/10 bg-[#10172a] p-4 sm:p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-lime/15 text-lime">
                      <Braces size={15} />
                    </div>
                    <span className="flex items-center gap-1 rounded-full bg-emerald-400/10 px-2 py-1 text-[9px] font-medium text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      Build preview
                    </span>
                  </div>
                  <p className="mt-4 text-lg font-semibold tracking-tight text-white sm:text-xl">
                    Your business,
                    <br />
                    <span className="text-lime">beautifully online.</span>
                  </p>
                  <p className="mt-2 max-w-xs text-[10px] leading-4 text-white/45 sm:text-xs">
                    A fast, responsive experience that turns visitors into
                    customers.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="rounded-full bg-lime px-3 py-1.5 text-[9px] font-bold text-ink">
                      Get started
                    </span>
                    <span className="rounded-full border border-white/15 px-3 py-1.5 text-[9px] text-white/65">
                      Learn more
                    </span>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    { icon: Zap, text: "Fast" },
                    { icon: Check, text: "Reliable" },
                    { icon: Database, text: "Connected" },
                  ].map(({ icon: Icon, text }) => (
                    <div
                      key={text}
                      className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] py-2 text-[9px] text-white/55 sm:text-[10px]"
                    >
                      <Icon size={12} className="text-lime" /> {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-2 rounded-xl border border-white/10 bg-[#1d2942] px-4 py-3 shadow-xl sm:-left-7">
            <p className="text-[10px] text-white/50">Built for every screen</p>
            <p className="mt-1 text-xs font-semibold text-white">Mobile · Tablet · Desktop</p>
          </div>
          <div className="absolute -right-2 top-10 flex items-center gap-2 rounded-xl border border-white/10 bg-[#1d2942] px-3 py-2.5 shadow-xl sm:-right-6">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-400/15 text-violet-200">
              <Code2 size={14} />
            </span>
            <span className="text-[10px] font-medium text-white/80">
              React + Next.js
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
