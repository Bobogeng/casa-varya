export default function Button({
  children,
  leadingIcon,
  trailIcon,
  active,
  secondary,
  full,
  bold,
  type,
  onClick,
}: {
  children: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailIcon?: React.ReactNode;
  active?: boolean;
  secondary?: boolean;
  full?: boolean;
  bold?: boolean;
  type?: "submit";
  onClick?: () => void;
}) {
  return (
    <button
      className={`${
        full ? "w-full" : "w-fit"
      } lg:px-6 px-4 lg:py-3 py-2 flex items-center gap-4 rounded-full ${
        secondary
          ? "bg-black bg-opacity-80 hover:bg-opacity-100 active:bg-brown text-white"
          : active
          ? "bg-brown text-white"
          : "bg-white hover:bg-beige active:bg-white"
      } active:scale-95 transition-all ease-out text-black break-words overflow-hidden`}
      aria-label="Button"
      onClick={!active ? onClick : undefined}
      disabled={active}
      type={type}
    >
      {leadingIcon}
      <div
        className={`flex items-center gap-2 ${
          full
            ? "w-full justify-between"
            : "w-fit lg:justify-start justify-between"
        }`}
      >
        <p
          className={`w-full xl:text-4xl lg:text-2xl text-lg text-start ${
            bold ? "font-bold" : "font-medium"
          }`}
        >
          {children}
        </p>
        {trailIcon}
      </div>
    </button>
  );
}
