import Image from "next/image";
import NavLink from "./NavLink";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="absolute z-50 top-0 left-0 w-full flex p-16">
      <nav className="relative w-full flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo-casa-varya.png"
            alt="Casa Varya Logo"
            className="dark:invert"
            width={200}
            height={64}
            priority
          />
        </Link>
        <NavLink />
        <div className="absolute right-[250px] flex flex-col gap-2 text-white text-sm text-end font-bold pointer-events-none select-none">
          <div>
            <Image
              src={"/images/rw-logo-2017.jpg"}
              alt=""
              width={112}
              height={112}
            />
          </div>
          <p className="w-[112px]">Lead Agent by Ray White Prominence</p>
        </div>
      </nav>
    </header>
  );
}
