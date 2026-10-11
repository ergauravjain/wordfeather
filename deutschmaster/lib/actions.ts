"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { getPrisma, isDatabaseConfigured } from "@/lib/db";
import { getCurrentUserEmail } from "@/lib/session";
import { isLevel, TARGET_LEVEL_COOKIE } from "@/lib/data";

export async function setTargetLevel(level: string) {
  if (!isLevel(level)) throw new Error(`Unknown level: ${level}`);

  (await cookies()).set(TARGET_LEVEL_COOKIE, level, { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });

  if (isDatabaseConfigured) {
    try {
      const email = await getCurrentUserEmail();
      await getPrisma().user.update({ where: { email }, data: { targetLevel: level } });
    } catch (err) {
      console.warn("[deutschmaster] could not persist target level:", (err as Error).message);
    }
  }

  revalidatePath("/", "layout");
}
