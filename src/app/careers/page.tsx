import { SectionHeading } from "@/components/section-heading";

const roles = [
  {
    title: "Curriculum Designer (SSLC)",
    location: "Remote, India",
    type: "Full-time",
    summary: "Craft bilingual study plans, mocks, and drills that mirror board expectations.",
  },
  {
    title: "Frontend Engineer",
    location: "Remote, India",
    type: "Full-time",
    summary: "Ship performant, accessible learning flows in Next.js and ensure responsive parity.",
  },
  {
    title: "Student Success Coach",
    location: "Hybrid, Bengaluru",
    type: "Part-time",
    summary: "Guide learners through weekly check-ins, clear roadblocks, and reduce exam anxiety.",
  },
];

const culture = [
  "Bias for clarity in every flow and message.",
  "Learner empathy over vanity metrics.",
  "Rapid experimentation with measurable outcomes.",
  "Remote-first with async rituals and crisp docs.",
];

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-12 px-4 pb-16 pt-10 sm:px-6">
      <SectionHeading
        eyebrow="Careers"
        title="Build calmer exam journeys with us"
        subtitle="Join the team behind Parikshe-inspired experiences. Product, pedagogy, and student success roles open."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {roles.map((role) => (
          <article key={role.title} className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              <span>{role.location}</span>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-800">{role.type}</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{role.title}</h3>
            <p className="text-sm text-slate-600">{role.summary}</p>
            <button className="mt-auto inline-flex items-center justify-center rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800">
              View details
            </button>
          </article>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-blue-100 bg-blue-50/70 p-6 shadow-sm">
          <SectionHeading
            eyebrow="Culture"
            title="How we collaborate"
            subtitle="Parikshe's calm tone extends to how we work—respectful cadence, focused sprints, and strong mentorship."
          />
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {culture.map((value) => (
              <li key={value}>• {value}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Hiring process</div>
          <ol className="mt-4 space-y-3 text-sm text-slate-700">
            <li>1. Quick call to align on role expectations and timeline.</li>
            <li>2. A short, role-relevant task (content, frontend, or coaching).</li>
            <li>3. Panel conversation focusing on craft, collaboration, and learner empathy.</li>
            <li>4. Offer with clear success criteria for the first 90 days.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
