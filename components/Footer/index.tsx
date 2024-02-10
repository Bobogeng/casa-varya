import { kronaOne } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black p-16 grid grid-cols-12 gap-6 text-white">
      <div className="col-span-3 flex flex-col gap-6">
        <p className={`${kronaOne.className} text-xl`}>Marketing Gallery</p>
        <p>
          Kompleks Puri GardenaBlok E, RT.2/RW.14, Pegadungan, Kalideres,West
          Jakarta 11830
        </p>
      </div>
      <div className="col-start-5 col-span-3 flex flex-col gap-6">
        <p className={`${kronaOne.className} text-xl`}>More Pages</p>
        <div className="flex flex-col gap-4">
          <div>
            <Link href={"#"}>Homepage</Link>
          </div>
          <div>
            <Link href={"/contact-us"}>Contact Us</Link>
          </div>
        </div>
      </div>
      <div className="col-start-10 col-span-3 flex flex-col items-end gap-6">
        <p>Contact Us</p>
        <div className="flex flex-col items-end gap-4 text-end">
          <div className="flex justify-center items-end gap-2">
            <Link href={"https://www.instagram.com/casavarya/"} target="_blank">
              @casavarya
            </Link>
          </div>
          <div className="col-start-10 col-span-3 flex justify-center items-end gap-2">
            <Link
              href={"https://api.whatsapp.com/send?phone=6281287070548"}
              target="_blank"
            >
              <span className="font-bold">+62</span> 812 8707 0548
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-3 flex items-center gap-2">
        <div>
          <Image
            src={"/images/rw-logo-2017.jpg"}
            alt=""
            width={48}
            height={48}
          />
        </div>
        <p className="text-white text-opacity-50 font-bold">
          Lead Agent by Ray White Prominence
        </p>
      </div>
      <div className="col-start-5 col-span-3">
        <p className="text-white text-opacity-50 font-bold">
          © Casa Varya 2024
        </p>
      </div>
      <div className="col-start-10 col-span-3">
        <p className="text-white text-opacity-50 font-bold text-end">
          By Mudaya Land, in association with Tamara group
        </p>
      </div>
    </footer>
  );
}
