"use client";
import { useState } from "react";

type ToastItem = {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
};

export function useToast() {
  // lightweight placeholder hook for dev environment / type-checking
  const [toasts] = useState<ToastItem[]>([]);
  return { toasts };
}

export type { ToastItem };
