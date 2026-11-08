import { MessageSquareQuote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
      <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-emerald-50 px-6 py-10 sm:px-10 sm:py-12">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-violet-700 shadow-sm">
            <MessageSquareQuote size={21} />
          </span>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
            Client feedback
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Your experience matters.
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Client reviews will appear here as soon as they&apos;re available
            and approved for sharing. No made-up names or testimonials—just
            honest feedback.
          </p>
          <div className="mt-6 rounded-full border border-violet-100 bg-white/80 px-4 py-2 text-xs font-medium text-slate-600">
            Reviews coming soon
          </div>
        </div>
      </div>
    </section>
  );
}
