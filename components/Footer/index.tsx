import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black lg:p-16 p-6 flex flex-col lg:grid lg:grid-cols-12 gap-6 text-white lg:text-start text-center">
      <div className="col-span-3 flex flex-col gap-6">
        <p className={`font-display lg:text-xl text-lg`}>Marketing Gallery</p>
        <p>
          Kompleks Puri GardenaBlok E, RT.2/RW.14, Pegadungan, Kalideres,West
          Jakarta 11830
        </p>
      </div>
      <div className="col-start-10 col-span-3 flex flex-col lg:items-end gap-6">
        <p className={`font-display lg:text-xl text-lg`}>Contact Us</p>
        <div className="flex flex-col lg:items-end items-center gap-4 lg:text-end text-center">
          <Link
            className="flex lg:justify-end justify-center items-center gap-2"
            href={"https://www.instagram.com/casavarya/"}
            target="_blank"
          >
            <div className="relative w-5 h-5">
              <Image
                className="pointer-events-none opacity-50"
                src={"/icons/instagram-fill.svg"}
                alt=""
                fill={true}
              />
            </div>
            @casavarya
          </Link>
          <Link
            className="flex lg:justify-end justify-center items-center gap-2"
            href={"https://api.whatsapp.com/send?phone=6287808270698"}
            target="_blank"
          >
            <div className="relative w-5 h-5">
              <Image
                className="pointer-events-none opacity-50"
                src={"/icons/whatsapp-fill.svg"}
                alt=""
                fill={true}
              />
            </div>
            <span className="font-bold">+62</span> 878 0827 0698
          </Link>
          <Link
            className="flex lg:justify-end justify-center items-center gap-2"
            href={"mailto:casavaryaresidences@gmail.com?subject=Inquiry"}
            target="_blank"
          >
            <div className="relative w-5 h-5">
              <Image
                className="pointer-events-none opacity-50"
                src={"/icons/mail.svg"}
                alt=""
                fill={true}
              />
            </div>
            casavaryaresidences@gmail.com
          </Link>
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
