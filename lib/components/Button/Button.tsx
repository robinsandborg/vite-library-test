import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./button.module.css";
import { cn } from "../../../utils";

const buttonVariants = cva(styles["prism-btn"], {
  variants: {
    variant: {
      primary: styles["prism-btn--primary"],
      secondary: styles["prism-btn--secondary"],
    },
    size: {
      default: styles["prism-btn--default"],
      small: styles["prism-btn--small"],
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
