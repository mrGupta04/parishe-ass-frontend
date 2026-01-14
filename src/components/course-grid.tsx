"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchJson } from "@/lib/api-client";

export type Course = {
  id: string;
  title: string;
  category: string;
  durationWeeks: number;
  price: number;
  summary: string;
  level: "Beginner" | "Intermediate" | "Advanced";
};

type State = {
  status: "idle" | "loading" | "success" | "error";
  data: Course[];
  error?: string;
};

export function CourseGrid() {
  const [state, setState] = useState<State>({ status: "idle", data: [] });

  useEffect(() => {
    let isMounted = true;
    const fetchCourses = async () => {
      setState({ status: "loading", data: [] });
      try {
        const courses = await fetchJson<Course[]>("/courses");
        if (isMounted) {
          setState({ status: "success", data: courses });
        }
      } catch (error) {
        if (isMounted) {
          setState({ status: "error", data: [], error: (error as Error).message });
        }
      }
    };

    fetchCourses();
    return () => {
      isMounted = false;
    };
  }, []);

  if (state.status === "loading") {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="animate-pulse rounded-2xl border border-slate-200 bg-slate-50 p-4" />
        ))}
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
        Could not load courses. {state.error}
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {state.data.map((course) => (
        <article key={course.id} className="relative flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{course.category}</span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{course.level}</span>
          </div>
          <h3 className="text-lg font-semibold text-slate-900">{course.title}</h3>
          <p className="text-sm text-slate-600">{course.summary}</p>
          <div className="flex items-center justify-between text-sm font-semibold text-slate-800">
            <span>{course.durationWeeks} weeks</span>
            <span>₹{course.price.toLocaleString()}</span>
          </div>
          <Link
            href={`/sslc-study?course=${course.id}`}
            className="mt-auto inline-flex items-center justify-center rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            View Course
          </Link>
        </article>
      ))}
    </div>
  );
}
