import { NextResponse } from "next/server";
import { data } from "../route";

type Params = {
  params: { id: string };
};

export const GET = async (_request: Request, { params }: Params) => {
  const course = data.find((item) => item.id === params.id);
  if (!course) {
    return NextResponse.json({ message: "Course not found" }, { status: 404 });
  }
  return NextResponse.json(course);
};
