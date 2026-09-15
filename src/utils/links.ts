/** Only show usable, explicit addresses. Empty content stays out of the UI. */
export function isWebUrl(value: string | undefined): value is string {
  if (!value || value.trim() !== value) return false;
  try {
    const url = new URL(value);
    return (
      (url.protocol === "https:" || url.protocol === "http:") &&
      Boolean(url.hostname)
    );
  } catch {
    return false;
  }
}

export function isEmail(value: string | undefined): value is string {
  return Boolean(value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
}

export function isCvUrl(value: string | undefined): value is string {
  return (
    isWebUrl(value) ||
    Boolean(value && /^\/(?!\/)[^\s?#]+\.(pdf|docx?)$/i.test(value))
  );
}
