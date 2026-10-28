"use client";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export function useAuth() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/api/me").then(setUser).catch(() => setUser(null)).finally(() => setLoading(false));
  }, []);

  return { user, loading };
}
