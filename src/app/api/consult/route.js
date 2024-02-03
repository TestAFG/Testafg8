import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function POST(req) {
  const { userId } = auth();
  if (!userId) return NextResponse.error();
  const { location, budget, name, email, phone } = await req.json();
  console.log(location, budget, name, email, phone);
  if (!location || !budget) return NextResponse.error();
  const res = await prisma.consultTable.create({
    data: {
      Budget: budget,
      name,
      email,
      phone,
      location,
      userId,
    },
  });
  if (!res) return NextResponse.error();
  return NextResponse.json(res);
}
