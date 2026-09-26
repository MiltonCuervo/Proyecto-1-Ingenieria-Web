import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "text";
  withArrow?: boolean;
}

export function Button({ children, variant = "primary", withArrow = false, className = "", ...props }: ButtonProps) {
  return (
    <button className={`button button--${variant} ${className}`} {...props}>
      {children}
      {withArrow && <ArrowRight aria-hidden="true" size={16} />}
    </button>
  );
}
