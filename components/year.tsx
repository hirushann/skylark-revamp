// Evaluated at build time; every deploy refreshes it.
export function Year() {
  return <>{new Date().getFullYear()}</>;
}
