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
      className="flex lg:w-full w-full h-[256px] sm:h-[400px] p-6 bg-cover bg-center relative transition-all ease-out lg:scale-95 lg:hover:scale-100"
      style={{ backgroundImage: `url('${src}')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <p className={`${kronaOne.className} text-white text-xl self-end z-10`}>
        {title}
      </p>
    </div>
  );
}
