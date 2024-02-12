import Image from "next/image";

export default function InputFieldIcon({
  name,
  src,
  onChange,
  placeholder,
  value,
  full,
}: {
  name: string;
  src: string;
  onChange?: () => void;
  placeholder?: string;
  value?: string | number;
  full?: boolean;
}) {
  return (
    <label
      className={`relative block ${full ? "w-full" : "w-fit"}`}
      htmlFor={name}
    >
      <Image
        className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-3 opacity-50"
        src={src}
        alt=""
        width={36}
        height={36}
      />
      <input
        name={name}
        id={name}
        className={`${
          full ? "w-full" : "w-fit"
        } px-4 py-2 pl-14 rounded-lg bg-black bg-opacity-50 text-2xl text-white placeholder:text-opacity-50 outline-none caret-gray-400 hover:bg-opacity-75 focus:outline-none focus:bg-opacity-100 transition-all ease-out`}
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </label>
  );
}