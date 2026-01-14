import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4 sm:px-6">
        <div>
          <div className="text-lg font-semibold text-slate-900">Parikshe Learning</div>
          <p className="mt-3 text-sm text-slate-600">
            Exam-ready courses, guided practice, and confidence-building support for ambitious learners.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">Explore</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>
              <Link className="transition hover:text-blue-700" href="/sslc-study">
                SSLC Study Plans
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-blue-700" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-blue-700" href="/careers">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">Resources</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>
              <a className="transition hover:text-blue-700" href="https://parikshe.in/" target="_blank" rel="noreferrer">
                Original Site
              </a>
            </li>
            <li>
              <Link className="transition hover:text-blue-700" href="/contact">
                Contact
              </Link>
            </li>
            <li>
              <a className="transition hover:text-blue-700" href="mailto:hello@parikshe.in">
                hello@parikshe.in
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">Stay Updated</div>
          <p className="mt-3 text-sm text-slate-600">Weekly tips, exam updates, and practice prompts straight to your inbox.</p>
          <form className="mt-4 flex rounded-full border border-slate-200 p-1 shadow-sm">
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-full px-3 py-2 text-sm outline-none"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="rounded-full bg-blue-700 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-800"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-slate-50 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Parikshe Learning — Crafted for the recreation brief.
      </div>
    </footer>
  );
}
