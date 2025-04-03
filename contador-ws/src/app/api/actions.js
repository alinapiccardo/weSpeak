"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getCounter() {
  const counter = await prisma.counter.findUnique({ where: { id: 1 } });
  return counter ? counter.value : 0;
}

export async function updateCounter(increment) {
  const counter = await prisma.counter.upsert({
    where: { id: 1 },
    update: { value: { increment: increment ? 1 : -1 } },
    create: { id: 1, value: 0 },
  });
  return counter.value;
}
