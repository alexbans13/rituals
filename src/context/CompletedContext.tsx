import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

type CompletedContextType = {
  completedIds: string[];
  markComplete: (id: string) => void;
  isCompleted: (id: string) => boolean;
};

const CompletedContext = createContext<CompletedContextType | null>(null);

export function CompletedProvider({ children }: { children: ReactNode }) {
  const [completedIds, setCompletedIds] = useState<string[]>(["fika", "shinrin-yoku"]);

  const markComplete = useCallback((id: string) => {
    setCompletedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  const isCompleted = useCallback(
    (id: string) => completedIds.includes(id),
    [completedIds]
  );

  return (
    <CompletedContext.Provider value={{ completedIds, markComplete, isCompleted }}>
      {children}
    </CompletedContext.Provider>
  );
}

export function useCompleted() {
  const ctx = useContext(CompletedContext);
  if (!ctx) throw new Error("useCompleted must be used within CompletedProvider");
  return ctx;
}
