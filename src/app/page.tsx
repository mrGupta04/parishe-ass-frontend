import Link from "next/link";
import { CourseGrid } from "@/components/course-grid";
import { SectionHeading } from "@/components/section-heading";

const highlights = [
  { label: "Students coached", value: "40k+" },
  { label: "Adaptive quizzes", value: "1.2M" },
  { label: "Avg. improvement", value: "+18%" },
  { label: "Cities covered", value: "120" },
];

const features = [
  {
    title: "Exam-first pedagogy",
    detail: "Every module mirrors board patterns with crisp theory, solved examples, and timed drills.",
  },
  {
    title: "Coach-led accountability",
    detail: "Weekly check-ins and progress nudges keep learners on track without overwhelm.",
  },
  {
    title: "Adaptive practice",
    detail: "Question difficulty adjusts to confidence scores so practice time is always efficient.",
  },
];

const testimonials = [
  {
    quote: "Parikshe gave my SSLC prep a clear rhythm—short videos, focused practice, and quick feedback.",
    name: "Ishita K.",
    role: "SSLC Topper, 2024",
  },
  {
    quote: "The revision sprints and weekly scorecards helped our school batch lift averages across subjects.",
    name: "Ramesh N.",
    role: "Academic Coordinator",
  },
];

export default function Home() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-20 pt-10 sm:px-6 sm:pt-12">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6">
          <div className="inline-flex max-w-fit items-center gap-2 rounded-full bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-800">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Trusted by schools and topper batches
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Exam-ready learning crafted for SSLC, delivered with calm clarity.
          </h1>
          <p className="max-w-2xl text-lg text-slate-700">
            Analyze the Parikshe experience—structured study journeys, live support, and adaptive practice that keeps learners steady from the first chapter to the final mock.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/sslc-study"
              className="rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-800"
            >
              View SSLC study plans
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50"
            >
              About Parikshe
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm sm:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.label} className="flex flex-col gap-1 rounded-xl bg-slate-50 px-3 py-2">
                <span className="text-lg font-semibold text-slate-900">{item.value}</span>
                <span className="text-xs text-slate-600">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white/90 p-6 shadow-lg">
          <div className="absolute inset-0 opacity-60 [background:radial-gradient(circle_at_20%_20%,#c7d2fe_0,transparent_25%),radial-gradient(circle_at_80%_0,#bfdbfe_0,transparent_25%)]" />
          <div className="relative flex flex-col gap-4 rounded-2xl border border-white/70 bg-white/80 p-5 shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Daily flow</div>
            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                <span>Concept primer</span>
                <span className="text-xs font-semibold text-blue-700">10 mins</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                <span>Practice ladder</span>
                <span className="text-xs font-semibold text-blue-700">15 mins</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                <span>Timed quiz</span>
                <span className="text-xs font-semibold text-blue-700">20 mins</span>
              </div>
            </div>
            <div className="rounded-2xl bg-blue-700 px-4 py-3 text-white shadow">
              <div className="text-sm uppercase tracking-[0.2em] text-blue-100">Progress pulse</div>
              <div className="mt-2 flex items-center justify-between text-sm font-semibold">
                <span>Confidence score</span>
                <span className="rounded-full bg-white/20 px-3 py-1">+12 this week</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm sm:p-8">
        <SectionHeading
          eyebrow="Built for learners"
          title="Why Parikshe keeps students calm and exam-ready"
          subtitle="A recreation of the core Parikshe flows—reusable components, responsive layouts, and stateful UI."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
              <div className="mb-3 h-10 w-10 rounded-xl bg-blue-100" />
              <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{feature.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Courses"
          title="Curated study tracks"
          subtitle="Mock API-powered listing with loading, success, and error states."
        />
        <CourseGrid />
      </section>

      <section className="grid gap-8 rounded-3xl border border-blue-100 bg-blue-50/60 p-6 shadow-sm sm:grid-cols-2 sm:p-8">
        <SectionHeading
          eyebrow="SSLC study"
          title="A calm path to exam day"
          subtitle="Short concept videos, drill sheets, bilingual notes, and live doubt clearing to mirror the Parikshe SSLC flow."
          align="left"
        />
        <div className="space-y-4 text-sm text-slate-700">
          <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm">
            <div>
              <div className="text-sm font-semibold text-slate-900">Weekly planners</div>
              <div className="text-xs text-slate-500">Auto-adjusted when you miss a session.</div>
            </div>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">Adaptive</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm">
            <div>
              <div className="text-sm font-semibold text-slate-900">Live doubt rooms</div>
              <div className="text-xs text-slate-500">Evening slots with bilingual mentors.</div>
            </div>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">Daily</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm">
            <div>
              <div className="text-sm font-semibold text-slate-900">Exam-grade mocks</div>
              <div className="text-xs text-slate-500">Board-aligned papers with explanations.</div>
            </div>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">Weekly</span>
          </div>
          <div className="flex gap-3">
            <Link
              href="/sslc-study"
              className="inline-flex flex-1 items-center justify-center rounded-full bg-blue-700 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
            >
              Open SSLC Study page
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-blue-200 px-4 py-3 text-sm font-semibold text-blue-800 transition hover:bg-white"
            >
              Talk to a coach
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Proof"
          title="Learners stay engaged and calm"
          subtitle="Recreated testimonials with a clean, card-based layout."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-base text-slate-700">“{item.quote}”</p>
              <footer className="mt-3 text-sm font-semibold text-slate-900">{item.name}</footer>
              <div className="text-xs text-slate-500">{item.role}</div>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-slate-900 px-6 py-8 text-white shadow-sm sm:px-10 sm:py-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-blue-200">Ready to recreate</div>
            <h3 className="text-2xl font-semibold">Ship your Parikshe-inspired experience.</h3>
            <p className="text-sm text-slate-200">Reusable components, mock APIs, and stateful flows are set up. Extend or deploy to Vercel in minutes.</p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Contact us
            </Link>
            <Link
              href="/careers"
              className="rounded-full border border-slate-500 px-4 py-2 text-sm font-semibold text-white transition hover:border-white"
            >
              View careers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
