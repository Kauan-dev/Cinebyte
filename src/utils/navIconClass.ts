export function getNavIconClass(isActive: boolean, baseClass = "") {
  return [baseClass, isActive ? "fill-neutral-50 stroke-1" : ""]
    .filter(Boolean)
    .join(" ");
}
