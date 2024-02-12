import { kronaOne } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black lg:p-16 p-6 flex flex-col lg:grid lg:grid-cols-12 gap-6 text-white">
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
      <div className="col-start-10 col-span-3 flex flex-col lg:items-end gap-6">
        <p className={`${kronaOne.className} text-xl`}>Contact Us</p>
        <div className="flex flex-col lg:items-end gap-4 lg:text-end">
          <div className="flex lg:justify-center items-end gap-2">
            <Link href={"https://www.instagram.com/casavarya/"} target="_blank">
              @casavarya
            </Link>
          </div>
          <div className="col-start-10 col-span-3 flex lg:justify-center lg:items-end gap-2">
            <Link
              href={"https://api.whatsapp.com/send?phone=6281287070548"}
              target="_blank"
            >
              <span className="font-bold">+62</span> 812 8707 0548
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-3 flex justify-center lg:justify-start items-center gap-2">
        <div>
          <Image
            className="pointer-events-none select-none"
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
        <p className="text-white lg:text-start text-center text-opacity-50 font-bold">
          © Casa Varya 2024
        </p>
      </div>
      <div className="col-start-10 col-span-3">
        <p className="text-white text-opacity-50 font-bold lg:text-end text-center">
          By Mudaya Land, in association with Tamara group
        </p>
      </div>
    </footer>
  );
}
