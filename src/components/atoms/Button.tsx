import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/atoms/Icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "text";
  withArrow?: boolean;
}

export function Button({ children, variant = "primary", withArrow = false, className = "", ...props }: ButtonProps) {
  return (
    <button className={`button button--${variant} transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${className}`} {...props}>
      {children}
      {withArrow && <Icon icon={ArrowRight} size={16} />}
    </button>
  );
}
