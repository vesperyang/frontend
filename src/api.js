const BASE_URL = "https://backend-8z39.onrender.com"; // Render 后端 URL

export const addPageView = async () => {
  const res = await fetch(`${BASE_URL}/api/pageview`, { method: "POST" });
  if (!res.ok) throw new Error("Failed to add page view");
  return res.json();
};

export const getStats = async () => {
  const res = await fetch(`${BASE_URL}/api/stats`);
  if (!res.ok) throw new Error("Failed to fetch stats");
  return res.json();
};