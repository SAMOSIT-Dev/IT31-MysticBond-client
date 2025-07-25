import { twMerge } from "tailwind-merge";

export function cn(...classList) {
    return twMerge(classList)
}