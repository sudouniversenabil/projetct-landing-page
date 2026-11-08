import {
  BadgeCheck,
  Blocks,
  Gauge,
  HeartHandshake,
  MessagesSquare,
  ScanEye,
  Smartphone,
} from "lucide-react";

const benefits = [
  {
    icon: Blocks,
    title: "Clean, maintainable code",
    description: "An organized foundation that is easier to understand and extend.",
  },
  {
    icon: Smartphone,
    title: "Responsive on every screen",
    description: "A consistent experience from phone to tablet to desktop.",
  },
  {
    icon: BadgeCheck,
    title: "Modern technologies",
    description: "A practical, up-to-date stack chosen to suit the job.",
  },
  {
    icon: Gauge,
    title: "Performance minded",
    description: "Efficient pages and careful implementation help keep your site quick.",
  },
  {
    icon: MessagesSquare,
    title: "Reliable communication",
    description: "Clear updates and an open line of communication as we work.",
  },
  {
    icon: ScanEye,
    title: "Care in the details",
    description: "Thoughtful attention to the small things that make a product feel finished.",
  },
  {
    icon: HeartHandshake,
    title: "Focused on your goals",
    description: "Recommendations and solutions shaped around your users and priorities.",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="section-anchor relative overflow-hidden bg-[#10172a] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
        <div className="max-w-md">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">
            Why work with me
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
            A smoother path from brief to launch.
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/60">
            You bring the goal. I bring thoughtful engineering, clear
            collaboration, and a focus on getting the details right.
          </p>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-semibold">What you can expect</p>
            <p className="mt-2 text-xs leading-5 text-white/55">
              A professional process, dependable communication, and a solution
              built around the actual needs of your project.
            </p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {benefits.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-lime/30 hover:bg-white/[0.07]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime/10 text-lime">
                <Icon size={18} strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 text-sm font-semibold">{title}</h3>
              <p className="mt-1.5 text-xs leading-5 text-white/55">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
