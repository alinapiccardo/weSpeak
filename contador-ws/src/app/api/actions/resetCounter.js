"use server";

import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";

export async function resetCounter() {
  await prisma.counter.update({
    where: { id: 1 },
    data: { value: 0 },
  });

  revalidatePath("/");
}
