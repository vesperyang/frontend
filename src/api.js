const BASE_URL = "http://localhost:8000/api";

export const addPageView = async () => {
  const res = await fetch(`${BASE_URL}/pageview`, { method: "POST" });
  if (!res.ok) throw new Error("Failed to add page view");
  return res.json();
};

export const getStats = async () => {
  const res = await fetch(`${BASE_URL}/stats`);
  if (!res.ok) throw new Error("Failed to fetch stats");
  return res.json();
};