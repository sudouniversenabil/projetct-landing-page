import {
  ArrowRight,
  ClipboardList,
  Code2,
  MessagesSquare,
  PackageCheck,
  TestTube2,
} from "lucide-react";

const steps = [
  {
    icon: MessagesSquare,
    title: "Discuss requirements",
    detail:
      "Share your goals, references, must-haves, and any questions before we get started.",
  },
  {
    icon: ClipboardList,
    title: "Plan the solution",
    detail:
      "Agree on scope, deliverables, and the right approach for your project.",
  },
  {
    icon: Code2,
    title: "Design & develop",
    detail:
      "Build the agreed experience with regular communication along the way.",
  },
  {
    icon: TestTube2,
    title: "Test & optimize",
    detail:
      "Check the details across screen sizes and refine the finished work.",
  },
  {
    icon: PackageCheck,
    title: "Deliver with care",
    detail:
      "Receive the completed project and clear handoff for your next steps.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="section-anchor px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
            Clear steps. No guesswork.
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            A collaborative process that keeps the work focused from the first
            conversation to final delivery.
          </p>
        </div>
        <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(({ icon: Icon, title, detail }, index) => (
            <li
              key={title}
              className="relative rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-900/[0.02]"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
                  <Icon size={19} strokeWidth={1.8} />
                </span>
                <span className="font-mono text-xs font-medium text-slate-400">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-5 text-sm font-semibold">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-600">{detail}</p>
              {index < steps.length - 1 && (
                <ArrowRight
                  size={15}
                  aria-hidden="true"
                  className="absolute -right-2.5 top-9 z-10 hidden text-violet-300 lg:block"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
