import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { auth } from "@clerk/nextjs";

export  async function POST(req) {
  const {shape, length, width, packageType} = await req.json();
  console.log(shape, length, width, packageType)
  const { userId } = auth();
  if (!userId) return NextResponse.error();
  if(!shape || !length) return NextResponse.error()
  const res = await prisma.est1Form.create({
    data: {
      length:Number(length),
      width:Number(width),
      shape,
      package:packageType,
      userId
    },
  });
  if(!res) return NextResponse.error()
  return NextResponse.json(res)
}
