import { NextRequest, NextResponse } from "next/server";
import { data } from "../route";

type ParamsPromise = { params: Promise<{ id: string }> };

export const GET = async (_request: NextRequest, { params }: ParamsPromise) => {
  const { id } = await params;
  const course = data.find((item) => item.id === id);
  if (!course) {
    return NextResponse.json({ message: "Course not found" }, { status: 404 });
  }
  return NextResponse.json(course);
};
