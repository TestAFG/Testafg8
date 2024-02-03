import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { auth } from "@clerk/nextjs";

export  async function POST(req) {
  const {length, type, packageType} = await req.json();
  console.log(length, type, packageType)
  const { userId } = auth();
  if (!userId) return NextResponse.error();
  if(!length || !type ) return NextResponse.error()
  const res = await prisma.est2Form.create({
    data: {
      length,
      type,
      package:packageType,
      userId
    },
  });
  if(!res) return NextResponse.error()
  return NextResponse.json(res)
}
