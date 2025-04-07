"use server";

import { prisma } from "../prisma";

export async function getCounter() {
  const counter = await prisma.counter.findUnique({ where: { id: 1 } });
  return counter ? counter.value : 0;
}
