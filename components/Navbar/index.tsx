import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="absolute z-50 top-0 left-0 w-full flex lg:p-16 p-6">
      <nav className="relative w-full flex items-center justify-between">
        <Link href="/">
          <div className="relative lg:w-[200px] w-[128px] lg:h-[64px] h-[32px]">
            <Image
              className="object-contain"
              src="/images/logo-casa-varya.png"
              alt="Casa Varya Logo"
              fill={true}
              priority
              draggable={false}
            />
          </div>
        </Link>
      </nav>
      <div className="absolute top-0 lg:right-16 right-6 flex flex-col items-end gap-2 text-white lg:text-sm text-xs text-end pointer-events-none select-none">
        <div className="relative lg:w-[112px] w-[64px] lg:h-[112px] h-[64px]">
          <Image
            className="object-cover"
            src={"/images/rw-logo-2017.jpg"}
            alt=""
            fill={true}
            priority
            draggable={false}
          />
        </div>
        <p className="lg:w-[112px] w-[64px] lg:h-[112px] h-[64px]">
          Lead Agent by Ray White Prominence
        </p>
      </div>
    </header>
  );
}
