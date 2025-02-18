import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export function isVerified() {
  const queryParams = new URLSearchParams(window.location.search);
  const paramsVerified = queryParams.get("verified");
  return paramsVerified;
}


