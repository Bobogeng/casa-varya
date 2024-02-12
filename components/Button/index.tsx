export default function Button({
  children,
  leadingIcon,
  trailIcon,
  active,
  secondary,
  full,
  onClick,
}: {
  children: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailIcon?: React.ReactNode;
  active?: boolean;
  secondary?: boolean;
  full?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      className={`${
        full ? "w-full" : "w-full sm:w-fit"
      } px-6 py-3 flex items-center gap-4 rounded-full ${
        secondary
          ? "bg-black bg-opacity-80 hover:bg-opacity-100 active:bg-brown text-white"
          : active
          ? "bg-brown text-white"
          : "bg-white hover:bg-beige active:bg-white"
      } active:scale-95 transition-all ease-out text-black break-words overflow-hidden`}
      aria-label="Button"
      onClick={!active ? onClick : undefined}
      disabled={active}
    >
      {leadingIcon}
      <div
        className={`flex items-center gap-2 ${
          full
            ? "w-full justify-between"
            : "w-full lg:w-fit lg:justify-start justify-between"
        }`}
      >
        <p className="w-full font-bold lg:text-4xl text-lg">{children}</p>
        {trailIcon}
      </div>
    </button>
  );
}
