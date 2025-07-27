import { twMerge } from "tailwind-merge";

export function cn(...classList) {
    return twMerge(classList)
}

export function getFormDataValues(formData) {
    return Object.fromEntries(formData)
}