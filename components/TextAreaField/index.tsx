export default function TextAreaField({
  name,
  onChange,
  placeholder,
  value,
  full,
}: {
  name: string;
  onChange?: () => void;
  placeholder?: string;
  value?: string | number;
  full?: boolean;
}) {
  return (
    <textarea
      className={`${
        full ? "w-full" : "w-fit"
      } max-h-72 px-4 py-2 rounded-lg bg-black bg-opacity-50 text-2xl text-white placeholder:text-opacity-50 outline-none caret-gray-400 hover:bg-opacity-75 focus:outline-none focus:bg-opacity-100 transition-all ease-out`}
      name={name}
      id={name}
      rows={5}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}
