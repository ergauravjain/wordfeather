// Auth placeholder: everyone is the seeded demo learner until real auth
// (e.g. Auth.js) is added. Replace `getCurrentUserEmail` with the session lookup.

import { DEMO_USER } from "@/lib/content/demo";

export async function getCurrentUserEmail(): Promise<string> {
  return DEMO_USER.email;
}
