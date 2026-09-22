import styles from "../App.module.css";
type ArrowProps = {
  direction?: "up-right" | "down" | "right" | "up";
  className?: string;
};

export function Arrow({ direction = "up-right", className = "" }: ArrowProps) {
  return (
    <svg
      className={`${styles.arrow} ${styles[`arrow--${direction}`] ?? ""} ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
