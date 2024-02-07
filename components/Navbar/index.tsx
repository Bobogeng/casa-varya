import Image from "next/image";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <header className="absolute z-50 top-0 left-0 w-full flex p-16">
      <nav className="w-full flex items-center justify-between">
        <Image
          src="/images/logo-casa-varya.png"
          alt="Casa Varya Logo"
          className="dark:invert"
          width={200}
          height={64}
          priority
        />
        <NavLink />
      </nav>
    </header>
  );
}
