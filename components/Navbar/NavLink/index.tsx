import Link from "next/link";
import { kronaOne } from "@/app/fonts";

export default function NavLink() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <div className={`${kronaOne.className} text-white flex gap-6`}>
      {navLinks.map((link) => {
        return (
          <Link href={link.href} key={link.name}>
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
