import {
  ArrowUpRight,
  Blocks,
  Braces,
  Bug,
  Code2,
  Database,
  Layers3,
  LayoutTemplate,
  PanelsTopLeft,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: Blocks,
    title: "Full-Stack Web Development",
    description:
      "Complete web applications with polished frontends, dependable backends, and all the pieces connected.",
  },
  {
    icon: PanelsTopLeft,
    title: "Frontend Development",
    description:
      "Fast, accessible interfaces that look sharp and feel effortless on every screen.",
  },
  {
    icon: Braces,
    title: "Backend Development",
    description:
      "Robust server-side features, business logic, and secure integrations tailored to your project.",
  },
  {
    icon: Code2,
    title: "React.js Development",
    description:
      "Reusable React components and interactive experiences built around your users.",
  },
  {
    icon: Layers3,
    title: "Next.js Development",
    description:
      "Production-ready Next.js websites and apps with SEO-friendly pages and snappy performance.",
  },
  {
    icon: Database,
    title: "API Development & Integration",
    description:
      "Connect your tools or build custom APIs to keep your product data flowing smoothly.",
  },
  {
    icon: Database,
    title: "Database Integration",
    description:
      "Organize and connect your app to a database that fits your product and its data.",
  },
  {
    icon: Bug,
    title: "Website Bug Fixing",
    description:
      "Track down layout, functionality, and browser issues and get your site working properly.",
  },
  {
    icon: Smartphone,
    title: "Responsive Website Design",
    description:
      "Adapt your existing design or fresh concept into a consistent mobile-to-desktop experience.",
  },
];

export default function Services({
  fiverrUrl,
}: {
  fiverrUrl: string;
}) {
  return (
    <section
      id="services"
      className="section-anchor px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
              Services
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
              The right development help,{" "}
              <span className="text-slate-400">right when you need it.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-600">
            From a quick fix to a complete product build, get practical
            development support shaped around your goals.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className="group flex min-h-[15rem] flex-col rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm shadow-slate-900/[0.02] transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-white hover:shadow-xl hover:shadow-violet-950/[0.06] sm:p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-slate-400">
                  0{index + 1}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700 transition group-hover:bg-violet-700 group-hover:text-white">
                  <Icon size={19} strokeWidth={1.8} />
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold tracking-tight">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {description}
              </p>
              <a
                href={fiverrUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 pt-5 text-xs font-semibold text-violet-700 transition group-hover:text-violet-900"
              >
                Ask about this service <ArrowUpRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
