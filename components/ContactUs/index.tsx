"use client";
import InputFieldIcon from "@/components/InputFieldIcon";
import TextAreaField from "@/components/TextAreaField";
import Button from "../../components/Button/index";
import ButtonAction from "@/components/ButtonAction";
import Image from "next/image";
import { kronaOne } from "../../app/fonts";

export default function ContactUs() {
  return (
    <main>
      <article className="bg-[url('/images/hero-section.jpg')] bg-no-repeat bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <section className="relative z-10 h-full flex flex-col lg:gap-6 gap-4 justify-center">
          <div className="relative flex flex-col lg:p-16 p-6 lg:gap-6 gap-4 overflow-hidden">
            <div className="-z-10 absolute inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-xl"></div>
            <div className="flex flex-col gap-2">
              <h1
                className={`${kronaOne.className} lg:text-4xl text-xl text-white lg:leading-normal leading-normal`}
              >
                Connect with Us for <span className="text-brown">Your</span>{" "}
                Dream Home.
              </h1>
              <p className="lg:text-xl text-base text-white text-opacity-50 lg:leading-normal leading-normal">
                Reach out to us today and let our expert team guide you towards
                your perfect European luxury lifestyle. Contact us now to turn
                your dream into reality.
              </p>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-3 md:gap-6 gap-4">
              <InputFieldIcon
                name="name"
                src="/icons/person.svg"
                placeholder="Name"
                full
              />
              <InputFieldIcon
                name="mail"
                src="/icons/mail.svg"
                placeholder="Email"
                full
              />
              <InputFieldIcon
                name="phone"
                src="/icons/phone.svg"
                placeholder="Phone"
                full
              />
              <div className="col-span-3">
                <TextAreaField name="message" placeholder="Message" full />
              </div>
              <Button
                secondary
                full
                onClick={() => {}}
                trailIcon={
                  <Image
                    src={"/icons/arrow-outward-white.svg"}
                    alt=""
                    width={42}
                    height={42}
                    draggable="false"
                  />
                }
              >
                Submit
              </Button>
              <div className="flex justify-center items-center">
                <p className="text-white text-opacity-50 lg:text-3xl text-lg text-center font-bold">
                  Or you can send it via
                </p>
              </div>
              <ButtonAction action="whatsapp" full />
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
