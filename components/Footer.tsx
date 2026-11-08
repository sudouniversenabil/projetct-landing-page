import {
  ArrowUpRight,
  Code2,
  Mail,
  MessageCircle,
} from "lucide-react";
import {
  contactEmail,
  contactEmailUsername,
  fiverrProfileUrl,
  fullName,
  githubUrl,
  linkedInUrl,
  whatsappUrl,
} from "../lib/site-config";

export default function Footer() {
  const socialLinks = [
    { label: "GitHub", href: githubUrl },
    { label: "LinkedIn", href: linkedInUrl },
  ].filter((link) => link.href);

  return (
    <footer className="bg-[#10172a] px-5 pb-7 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl border-t border-white/10 pt-7">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-lime text-ink">
              <Code2 size={15} />
            </span>
            {fullName}{" "}
            <span className="font-normal text-white/45">
              / Web Development
            </span>
          </a>
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-5 gap-y-3 text-xs text-white/55"
          >
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#benefits" className="transition hover:text-white">
              Why choose me
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#process" className="transition hover:text-white">
              Process
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-white/40">
            © {new Date().getFullYear()} {fullName}. Built with care.
          </p>
          <div className="flex flex-wrap items-center gap-5 text-xs">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-white/60 transition hover:text-white"
              >
                {link.label} <ArrowUpRight size={12} />
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-white/60 transition hover:text-white"
            >
              <MessageCircle size={13} /> WhatsApp{" "}
              <ArrowUpRight size={12} />
            </a>
            {contactEmail ? (
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-1 text-white/60 transition hover:text-white"
              >
                <Mail size={13} /> Email <ArrowUpRight size={12} />
              </a>
            ) : (
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-white/60 transition hover:text-white"
                aria-label={`Email address pending; username is ${contactEmailUsername}`}
              >
                <Mail size={13} /> Email (address pending)
              </a>
            )}
            <a
              href={fiverrProfileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-lime transition hover:text-white"
            >
              Fiverr <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
