import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return <span className="badge inline-flex items-center text-[9px] font-bold">{children}</span>;
}
