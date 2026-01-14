"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/sslc-study", label: "SSLC Study" },
  { href: "/contact", label: "Contact" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
        isActive
          ? "bg-blue-600 text-white"
          : "text-slate-800 hover:bg-slate-100"
      }`}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200 backdrop-blur bg-white/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-blue-700">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-base font-bold text-blue-700">
            P
          </span>
          <div className="leading-tight">
            <div className="text-sm text-slate-500">Parikshe</div>
            <div className="text-base font-semibold text-slate-900">Learning</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <Link
          href="/sslc-study"
          className="hidden rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 md:inline-flex"
        >
          Explore Courses
        </Link>
      </div>
    </header>
  );
}
