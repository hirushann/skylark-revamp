import { cacheLife } from "next/cache";

// Cached so the prerendered shell can read the clock; refreshed daily.
export async function Year() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
