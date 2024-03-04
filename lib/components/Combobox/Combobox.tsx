import {
  Button,
  ComboBox,
  Input,
  ListBox,
  ListBoxItem,
  Popover,
} from "react-aria-components";
import { Label } from "../Label/Label";
import styles from "./combobox.module.css";
import { cva } from "class-variance-authority";
import { cn } from "../../../utils";

type ComboboxOption = {
  value: string;
  label: string;
};

type ComboboxProps = {
  id: string;
  options: ComboboxOption[];
  size?: "default" | "small";
  label: string;
  disabled?: boolean;
  hint?: string;
  className?: string;
};

const comboboxVariants = cva(styles["prism-combobox"], {
  variants: {
    size: {
      default: styles["prism-label--default"],
      small: styles["prism-label--small"],
    },
  },
  defaultVariants: {
    size: "default",
  },
});

function Combobox({
  options,
  id,
  size = "default",
  label,
  disabled,
  hint,
  className,
}: ComboboxProps) {
  return (
    <ComboBox
      className={cn(comboboxVariants(), className)}
      id={id}
      isDisabled={disabled}
      aria-labelledby={`${id}-label`}
    >
      {label && (
        <Label
          size={size}
          htmlFor={id}
          id={`${id}-label`}
          disabled={disabled}
          hint={hint}
        >
          {label}
        </Label>
      )}
      <div>
        <Input
          className={cn(
            styles["prism-combobox__input"],
            styles[`prism-combobox__input--${size}`]
          )}
        />
        <Button className={styles["prism-combobox__button"]}>
          <svg
            width="14"
            height="7"
            viewBox="0 0 14 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(styles["prism-combobox__icon"], {
              [styles["prism-combobox__icon--disabled"]]: disabled,
            })}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.646447 0.146447C0.841709 -0.0488155 1.15829 -0.0488155 1.35355 0.146447L7 5.79289L12.6464 0.146447C12.8417 -0.0488155 13.1583 -0.0488155 13.3536 0.146447C13.5488 0.341709 13.5488 0.658291 13.3536 0.853553L7.35355 6.85355C7.15829 7.04882 6.84171 7.04882 6.64645 6.85355L0.646447 0.853553C0.451184 0.658291 0.451184 0.341709 0.646447 0.146447Z"
              fill="currentColor"
            />
          </svg>
        </Button>
      </div>
      <Popover className={styles["prism-combobox__popover"]}>
        <ListBox className={styles["prism-combobox__listbox"]}>
          {options.map((option) => (
            <ListBoxItem
              key={option.value}
              className={styles["prism-combobox__list-item"]}
            >
              {option.label}
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </ComboBox>
  );
}

Combobox.displayName = "Combobox";

export { Combobox };
