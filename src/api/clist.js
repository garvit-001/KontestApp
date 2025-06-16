import { configDotenv } from "dotenv";

const BASE_URL = "https://clist.by/api/v4";
const AUTH = {
  username: import.meta.env.VITE_username,
  api_key:  import.meta.env.VITE_apikey,
};

export const fetchFromClist = async (endpoint) => {
  const url = new URL(`${BASE_URL}${endpoint}`, window.location.origin);

  url.searchParams.append("username", AUTH.username);
  url.searchParams.append("api_key", AUTH.api_key);

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error("API Error");

  return await res.json();
};