import Image from "next/image";
import { ArrowUpRight, Code2 } from "lucide-react";

const projects = [
  {
    name: "Commerce storefront",
    category: "E-commerce concept",
    description:
      "A warm, product-led storefront concept with room to grow into a full shop.",
    image: "/projects/goodside.svg",
    alt: "Illustrative preview of an independent coffee shop storefront concept",
    color: "bg-[#f0c1a8]",
    technologies: ["Next.js", "React", "Responsive UI"],
  },
  {
    name: "Creative studio site",
    category: "Business website concept",
    description:
      "A flexible editorial-style layout concept for a creative services business.",
    image: "/projects/fieldnotes.svg",
    alt: "Illustrative preview of a creative studio business website concept",
    color: "bg-[#d5e5bb]",
    technologies: ["React", "Tailwind CSS", "Animation"],
  },
  {
    name: "Operations dashboard",
    category: "SaaS interface concept",
    description:
      "A clear dashboard concept that makes key team activity easy to scan.",
    image: "/projects/northstar.svg",
    alt: "Illustrative preview of an analytics dashboard interface concept",
    color: "bg-[#c6d9e8]",
    technologies: ["Next.js", "Dashboard UI", "API-ready"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-anchor bg-[#eef1f8] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
              Project previews
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
              A peek at what we can build.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600">
            A few illustrative concepts showing the kinds of web experiences
            this service can deliver. They are previews, not client
            testimonials or claims of commissioned work.
          </p>
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group overflow-hidden rounded-[1.4rem] border border-slate-200/80 bg-white shadow-sm shadow-slate-900/[0.03]"
            >
              <div
                className={`relative aspect-[1.32] overflow-hidden ${project.color}`}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.025]"
                />
                <span className="absolute left-3 top-3 rounded-full border border-white/70 bg-white/85 px-3 py-1.5 text-[10px] font-semibold text-slate-700 backdrop-blur">
                  Concept preview
                </span>
              </div>
              <div className="p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-violet-700">
                  {project.category}
                </p>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <h3 className="text-base font-semibold tracking-tight">
                    {project.name}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="shrink-0 text-slate-400"
                  />
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 text-[9px] font-medium text-slate-600"
                    >
                      <Code2 size={10} /> {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
