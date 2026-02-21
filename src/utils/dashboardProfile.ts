const DASHBOARD_NAME_KEY = "koyapay-dashboard-name";
const DASHBOARD_PROFILE_IMAGE_KEY = "koyapay-dashboard-profile-image";

const toTitleCase = (value: string): string =>
  value
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");

export const setDashboardUserName = (name: string): void => {
  const normalized = toTitleCase(name);
  if (!normalized) return;
  localStorage.setItem(DASHBOARD_NAME_KEY, normalized);
};

export const setDashboardUserNameFromEmail = (email: string): void => {
  const localPart = email.trim().split("@")[0] ?? "";
  if (!localPart) return;

  const fromEmail = localPart
    .replace(/[._-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  setDashboardUserName(fromEmail);
};

export const getDashboardUserName = (): string => {
  const saved = localStorage.getItem(DASHBOARD_NAME_KEY) ?? "";
  return saved.trim() || "User";
};

export const setDashboardProfileImage = (imageDataUrl: string): void => {
  if (!imageDataUrl.trim()) return;
  localStorage.setItem(DASHBOARD_PROFILE_IMAGE_KEY, imageDataUrl);
};

export const getDashboardProfileImage = (): string => {
  return localStorage.getItem(DASHBOARD_PROFILE_IMAGE_KEY) ?? "";
};