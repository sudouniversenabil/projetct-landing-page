"use client";

import { ArrowUpRight, Code2, Menu, X } from "lucide-react";
import { useState } from "react";
import { fullName } from "../lib/site-config";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why choose me", href: "#benefits" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({
  fiverrUrl,
}: {
  fiverrUrl: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#10172a]/90 text-white backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8 lg:px-12"
      >
        <a
          href="#home"
          className="inline-flex items-center gap-2 text-base font-semibold tracking-tight"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-lime text-ink">
            <Code2 size={17} />
          </span>
          {fullName}{" "}
          <span className="font-normal text-white/45">/ Web Development</span>
        </a>

        <div className="hidden items-center gap-6 xl:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-white/65 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={fiverrUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2.5 text-xs font-bold text-ink transition hover:bg-white"
          >
            Hire Me on Fiverr <ArrowUpRight size={14} />
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="rounded-full border border-white/15 p-2 xl:hidden"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={19} /> : <Menu size={19} />}
        </button>

        {isOpen && (
          <div
            id="mobile-navigation"
            className="absolute inset-x-4 top-[calc(100%+0.5rem)] flex flex-col gap-1 rounded-2xl border border-white/10 bg-[#151e34] p-3 shadow-2xl xl:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={fiverrUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-1 flex items-center justify-between rounded-xl bg-lime px-4 py-3 text-sm font-bold text-ink"
              onClick={() => setIsOpen(false)}
            >
              Hire Me on Fiverr <ArrowUpRight size={16} />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
