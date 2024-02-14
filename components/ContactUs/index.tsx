"use client";
import InputFieldIcon from "@/components/InputFieldIcon";
import TextAreaField from "@/components/TextAreaField";
import Button from "../../components/Button/index";
import ButtonAction from "@/components/ButtonAction";
import Image from "next/image";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const subject = "Casa Varya Residences Inquiry";
      const body = formData.message;
      const mailtoLink = `mailto:casavaryaresidences@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;
    }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <main>
      <article className="bg-[url('/images/hero-section.jpg')] bg-no-repeat bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <section className="relative z-10 h-full flex flex-col lg:gap-6 gap-4 justify-center">
          <div className="relative flex flex-col lg:p-16 p-6 lg:gap-6 gap-4 overflow-hidden">
            <div className="-z-10 absolute inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-xl"></div>
            <div className="flex flex-col gap-2">
              <h2
                className={`font-display lg:text-4xl text-xl text-white lg:leading-normal leading-normal`}
              >
                Connect with Us for <span className="text-brown">Your</span>{" "}
                Dream Home.
              </h2>
              <p className="lg:text-xl text-base text-white text-opacity-50 lg:leading-normal leading-normal">
                Reach out to us today and let our expert team guide you towards
                your perfect European luxury lifestyle. Contact us now to turn
                your dream into reality.
              </p>
            </div>
            <form
              className="flex flex-col md:grid md:grid-cols-3 md:gap-6 gap-4"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-1">
                <InputFieldIcon
                  name="name"
                  src="/icons/person.svg"
                  placeholder="Name"
                  full
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </div>
              <div className="flex flex-col gap-1">
                <InputFieldIcon
                  name="email"
                  src="/icons/mail.svg"
                  placeholder="Email"
                  full
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div className="flex flex-col gap-1">
                <InputFieldIcon
                  name="phone"
                  src="/icons/phone.svg"
                  placeholder="Phone"
                  full
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
              </div>
              <div className="col-span-3 flex flex-col gap-1">
                <TextAreaField
                  name="message"
                  placeholder="Message"
                  full
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <p className="text-red-500">{errors.message}</p>
                )}
              </div>
              <Button
                secondary
                full
                onClick={() => {}}
                type="submit"
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
            </form>
          </div>
        </section>
      </article>
    </main>
  );
}
