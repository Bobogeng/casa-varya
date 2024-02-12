import { kronaOne } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black lg:p-16 p-6 flex flex-col lg:grid lg:grid-cols-12 gap-6 text-white lg:text-start text-center">
      <div className="col-span-3 flex flex-col gap-6">
        <p className={`${kronaOne.className} lg:text-xl text-lg`}>
          Marketing Gallery
        </p>
        <p>
          Kompleks Puri GardenaBlok E, RT.2/RW.14, Pegadungan, Kalideres,West
          Jakarta 11830
        </p>
      </div>
      <div className="col-start-10 col-span-3 flex flex-col lg:items-end gap-6">
        <p className={`${kronaOne.className} lg:text-xl text-lg`}>Contact Us</p>
        <div className="flex flex-col lg:items-end items-center gap-4 lg:text-end text-center">
          <div className="flex lg:justify-end justify-center items-center gap-2">
            <div className="relative w-5 h-5">
              <Image
                className="pointer-events-none opacity-50"
                src={"/icons/mail.svg"}
                alt=""
                fill={true}
              />
            </div>
            <Link href={"https://www.instagram.com/casavarya/"} target="_blank">
              @casavarya
            </Link>
          </div>
          <div className="flex lg:justify-end justify-center items-center gap-2">
            <div className="relative w-5 h-5">
              <Image
                className="pointer-events-none opacity-50"
                src={"/icons/phone.svg"}
                alt=""
                fill={true}
              />
            </div>
            <Link
              href={"https://api.whatsapp.com/send?phone=6281287070548"}
              target="_blank"
            >
              <span className="font-bold">+62</span> 878 0827 0698
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-3 flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:text-start text-center gap-2">
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
      <div className="col-start-6 col-span-2 flex justify-center">
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
