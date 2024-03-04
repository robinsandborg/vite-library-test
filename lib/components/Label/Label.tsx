import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils";
import styles from "./label.module.css";

const labelVariants = cva(styles["prism-label"], {
  variants: {
    size: {
      default: styles["prism-label--default"],
      small: styles["prism-label--small"],
    },
    disabled: {
      true: styles["prism-label--disabled"],
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface LabelProps extends VariantProps<typeof labelVariants> {
  optional?: boolean;
  optionalText?: string;
  hint?: string;
}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & LabelProps
>(({ className, children, optional, optionalText, hint, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  >
    {children}
    {optional && (
      <span className={styles["prism-label__optional"]}>{optionalText}</span>
    )}
    {hint && <span className={styles["prism-label__hint"]}>{hint}</span>}
  </LabelPrimitive.Root>
));

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
