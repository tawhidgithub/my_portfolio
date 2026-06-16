const API_PREFIX = "/api";

export const ENDPOINTS = {
  projects: `${API_PREFIX}/projects`,
  skills: `${API_PREFIX}/skills`,
  youtube: `${API_PREFIX}/youtube`,
  experiences: `${API_PREFIX}/experiences`,
  feedback: `${API_PREFIX}/feedback`,
  auth: `${API_PREFIX}/auth`,
} as const;
