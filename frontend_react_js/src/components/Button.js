import React from "react";
import styles from "./Button.module.css";

/**
 * Reusable button component with theme-aware variants.
 */
// PUBLIC_INTERFACE
export default function Button({
  variant = "primary",
  size = "lg",
  type = "button",
  className = "",
  disabled = false,
  children,
  ...rest
}) {
  const classes = [
    styles.button,
    styles[variant] || styles.primary,
    styles[size] || styles.lg,
    disabled ? styles.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
