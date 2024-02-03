import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { auth } from "@clerk/nextjs";

export async function POST(req) {
  const data = await req.json();
  const { userId } = auth();

  if ((!data.bhk)) return NextResponse.error();
  if (!userId) return NextResponse.error();

  const res = await prisma.estForm.create({
    data: {
      bhk: Number(data.bhk) ,
      room: data.room,
      package: data.packageType,
      userId,
    },
  });
  if (!res) return NextResponse.error();
  return NextResponse.json(res);
}
