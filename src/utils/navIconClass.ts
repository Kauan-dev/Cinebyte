export function getNavIconClass(isActive: boolean, baseClass = "") {
  return [baseClass, isActive ? " stroke-neutral-50 stroke-2" : ""]
    .filter(Boolean)
    .join(" ");
}
