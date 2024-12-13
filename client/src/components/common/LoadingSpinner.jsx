export default function LoadingSpinner({ size = "md" }) {
  const sizeClass = `loading-${size}`;

  return <span className={`loading loading-spinner ${sizeClass}`} />;
}
