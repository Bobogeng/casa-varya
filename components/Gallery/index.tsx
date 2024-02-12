import { kronaOne } from "@/app/fonts";

export default function Gallery({
  title,
  src,
}: {
  title: string;
  src: string;
}) {
  return (
    <div
      className="flex w-[546px] h-[400px] p-6 bg-cover bg-center relative"
      style={{ backgroundImage: `url('${src}')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <p className={`${kronaOne.className} text-white text-xl self-end z-10`}>
        {title}
      </p>
    </div>
  );
}
