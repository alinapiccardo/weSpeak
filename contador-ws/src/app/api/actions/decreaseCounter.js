"use server";

import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";

export async function decreaseCounter() {
  await prisma.counter.upsert({
    where: { id: 1 },
    update: { value: { increment: -1 } },
    create: { id: 1, value: -1 },
  });

  revalidatePath("/");
}
