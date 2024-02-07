export default function Button({
  children,
  leadingIcon,
  trailIcon,
}: {
  children: React.ReactNode;
  leadingIcon?: string;
  trailIcon?: string;
}) {
  return (
    <button
      className="flex items-center gap-4 rounded bg-white text-black"
      aria-label="Button"
    >
      {leadingIcon && <div className="text-xl flex-shrink-0"></div>}
      <div className="flex items-center gap-2">
        {children}
        {trailIcon && <div className="text-xl flex-shrink-0"></div>}
      </div>
    </button>
  );
}
