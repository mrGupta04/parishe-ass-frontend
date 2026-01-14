import { NextResponse } from "next/server";

const courses = [
  {
    id: "sslc-foundation",
    title: "SSLC Foundation Program",
    category: "SSLC",
    durationWeeks: 12,
    price: 4500,
    summary: "Structured study plan, concept drills, and mock tests designed for SSLC board prep.",
    level: "Beginner" as const,
  },
  {
    id: "sslc-fast-track",
    title: "Fast Track Revision",
    category: "SSLC",
    durationWeeks: 6,
    price: 2800,
    summary: "Condensed revision sprint with high-yield practice questions and weekly live doubt clearing.",
    level: "Intermediate" as const,
  },
  {
    id: "math-master",
    title: "Math Mastery Lab",
    category: "Mathematics",
    durationWeeks: 10,
    price: 3200,
    summary: "Daily problem sets, visual explanations, and adaptive quizzes to eliminate weak spots.",
    level: "Intermediate" as const,
  },
  {
    id: "science-essentials",
    title: "Science Essentials",
    category: "Science",
    durationWeeks: 8,
    price: 3000,
    summary: "Physics, Chemistry, and Biology primers with interactive experiments and recap notes.",
    level: "Beginner" as const,
  },
  {
    id: "english-exam-ready",
    title: "English Exam Ready",
    category: "English",
    durationWeeks: 5,
    price: 2500,
    summary: "Grammar refreshers, comprehension drills, and writing templates tailored for board patterns.",
    level: "Beginner" as const,
  },
  {
    id: "competitive-bridge",
    title: "Competitive Bridge",
    category: "Competitive",
    durationWeeks: 14,
    price: 5200,
    summary: "Foundation for olympiads and entrance tests with analytical reasoning and speed-building routines.",
    level: "Advanced" as const,
  },
];

export const GET = async () => {
  return NextResponse.json(courses);
};

export type Course = (typeof courses)[number];
export const data = courses;
