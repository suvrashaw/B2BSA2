"use client";
import { useEffect } from "react";

export function SWRegistrar() {
  useEffect(() => {
    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => console.log("SW registered", reg))
        .catch((err) => console.log("SW failed", err));
    }
  }, []);

  return null;
}
