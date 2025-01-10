"use client";

import { createStore, Provider } from "jotai";
import { isGridAtom } from "@/atoms/view";
import { useLayoutEffect, useState } from "react";

const myStore = createStore();

// Set initial default value (for SSR)
myStore.set(isGridAtom, false);

export default function JotaiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHydrated, setIsHydrated] = useState(false);

  useLayoutEffect(() => {
    // After hydration, load from localStorage
    const savedGridView = localStorage.getItem("isGridView");
    if (savedGridView !== null) {
      myStore.set(isGridAtom, savedGridView === "true");
    }

    // Subscribe to changes
    const unsub = myStore.sub(isGridAtom, () => {
      const currentValue = myStore.get(isGridAtom);
      localStorage.setItem("isGridView", String(currentValue));
    });

    setIsHydrated(true);
    return () => unsub();
  }, []);

  // During SSR and initial client render, use default value
  if (!isHydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  // After hydration, render with localStorage value
  return <Provider store={myStore}>{children}</Provider>;
}
