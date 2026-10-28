const BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export const api = {
  get: (path: string, init?: RequestInit) =>
    fetch(BASE + path, { credentials: "include", ...init }).then(r => r.json()),
  post: (path: string, body: unknown) =>
    fetch(BASE + path, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).then(r => r.json()),
};
