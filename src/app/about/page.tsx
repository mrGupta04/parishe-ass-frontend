import { SectionHeading } from "@/components/section-heading";

const pillars = [
  {
    title: "Learner calm",
    detail: "Structured flows reduce anxiety—short lessons, paced practice, and transparent progress pulses.",
  },
  {
    title: "Teacher craft",
    detail: "Content crafted with educators who know board patterns, bilingual nuances, and where students stumble.",
  },
  {
    title: "Data-guided",
    detail: "Engagement signals and confidence scores inform revision plans, not just raw completion metrics.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-12 px-4 pb-16 pt-10 sm:px-6">
      <SectionHeading
        eyebrow="About"
        title="Recreating Parikshe's calm, exam-focused learning"
        subtitle="We studied the Parikshe site and rebuilt core UX patterns with reusable components and mock APIs."
      />

      <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm sm:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
            <h3 className="text-lg font-semibold text-slate-900">{pillar.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{pillar.detail}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-blue-100 bg-blue-50/70 p-6 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">What we kept</div>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            <li>• A hero that reassures students and parents with clear outcomes.</li>
            <li>• Navigation that spotlights SSLC study flows and contact pathways.</li>
            <li>• Cards for courses, careers, and testimonials to mirror the Parikshe visual rhythm.</li>
            <li>• API-backed sections with loading and error states to reflect production UX.</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Stack choices</div>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            <li>• Next.js App Router with TypeScript and Tailwind for rapid layouting.</li>
            <li>• Mock APIs via route handlers to avoid external dependencies.</li>
            <li>• Client components for course listing and contact form to surface state transitions.</li>
            <li>• Import aliases using @/* to keep modules organized and reusable.</li>
          </ul>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-900 px-6 py-8 text-white shadow-sm">
        <div className="text-sm uppercase tracking-[0.2em] text-blue-200">Mission</div>
        <h3 className="mt-2 text-2xl font-semibold">Make exam prep feel calm, predictable, and human.</h3>
        <p className="mt-2 text-sm text-slate-200">
          The Parikshe recreation follows the same spirit: clarity in navigation, structure in study plans, and approachable visuals that feel supportive instead of overwhelming.
        </p>
      </div>
    </div>
  );
}
