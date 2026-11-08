import { ArrowUpRight, CircleHelp } from "lucide-react";

const questions = [
  {
    question: "What types of websites do you develop?",
    answer:
      "I can help with business websites, landing pages, web applications, dashboards, e-commerce interfaces, and custom web features. Send a project brief and we can confirm the right fit.",
  },
  {
    question: "Do you build responsive websites?",
    answer:
      "Yes. Responsive behavior is part of the build, so the experience is planned for mobile, tablet, and desktop screens.",
  },
  {
    question: "Can you work with an existing project?",
    answer:
      "Yes. I can help extend an existing codebase, integrate a feature, improve a page, or troubleshoot a specific issue. Share the current setup and what you want to change.",
  },
  {
    question: "Do you provide backend and database integration?",
    answer:
      "Yes. Backend functionality, API connections, and database integration are available depending on your project requirements and existing stack.",
  },
  {
    question: "Can I request custom functionality?",
    answer:
      "Absolutely. Describe what you need, how it should work, and any constraints. We can agree on the scope before development begins.",
  },
  {
    question: "How can I hire you through Fiverr?",
    answer:
      "Use the Fiverr button to visit my profile, then message me with your project details before ordering.",
  },
];

export default function FAQ({
  fiverrUrl,
}: {
  fiverrUrl: string;
}) {
  return (
    <section
      id="faq"
      className="section-anchor px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <div>
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
            <CircleHelp size={21} />
          </span>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
            A few things you might be wondering.
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Still have a question? Send a message through Fiverr and tell me
            what you&apos;re planning.
          </p>
          <a
            href={fiverrUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-700 transition hover:text-violet-900"
          >
            Ask me on Fiverr <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {questions.map(({ question, answer }) => (
            <details key={question} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-1 text-left text-sm font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                {question}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition group-open:rotate-45 group-open:border-violet-200 group-open:bg-violet-50 group-open:text-violet-700">
                  <span aria-hidden="true" className="text-lg font-normal leading-none">+</span>
                </span>
              </summary>
              <p className="max-w-2xl pb-2 pr-10 pt-2 text-sm leading-6 text-slate-600">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
