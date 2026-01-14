import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

const modules = [
  {
    title: "Concept sprints",
    detail: "Short bilingual explainers with anchor visuals and recall checks.",
  },
  {
    title: "Practice ladders",
    detail: "Topic-wise drills that climb from basics to exam-grade problems.",
  },
  {
    title: "Mock labs",
    detail: "Full-length timed mocks with solutions and error tagging.",
  },
  {
    title: "Revision stacks",
    detail: "Crisp notes and flash prompts regenerated based on weak areas.",
  },
];

const schedule = [
  { day: "Mon", focus: "Concept primer + Ladder", time: "45 mins" },
  { day: "Wed", focus: "Practice ladder + Doubts", time: "40 mins" },
  { day: "Fri", focus: "Timed mock", time: "50 mins" },
  { day: "Sun", focus: "Revision stack", time: "30 mins" },
];

export default function StudyPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-12 px-4 pb-16 pt-10 sm:px-6">
      <SectionHeading
        eyebrow="SSLC Study"
        title="A calm, repeatable study system"
        subtitle="Rebuilt from the Parikshe SSLC page—structured modules, weekly cadence, and clear outcomes."
      />

      <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 text-sm text-slate-700">
          <div className="rounded-2xl bg-blue-50/80 p-5 shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Outcomes</div>
            <p className="mt-2 text-slate-800">Concept clarity, exam-speed drills, and stable confidence through weekly check-ins.</p>
          </div>
          <ul className="space-y-2">
            {modules.map((module) => (
              <li key={module.title} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                <div>
                  <div className="text-sm font-semibold text-slate-900">{module.title}</div>
                  <p className="text-xs text-slate-600">{module.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 rounded-3xl border border-blue-100 bg-blue-50/70 p-5 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Weekly rhythm</div>
          <div className="grid gap-3 sm:grid-cols-2">
            {schedule.map((item) => (
              <div key={item.day} className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">{item.day}</div>
                <div className="text-xs text-slate-500">{item.focus}</div>
                <div className="mt-2 text-xs font-semibold text-blue-700">{item.time}</div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-slate-900 px-4 py-3 text-white">
            <div className="text-xs uppercase tracking-[0.2em] text-blue-200">Support</div>
            <p className="mt-1 text-sm">Doubt rooms nightly, plus weekend study rooms with mentor oversight.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-full bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Talk to the team
          </Link>
        </div>
      </div>
    </div>
  );
}
