export function isAlphanumeric(str: string): boolean {
    return /^[a-zA-Z0-9\s]+$/.test(str);
}