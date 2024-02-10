import { kronaOne } from "../fonts";

export default function ContactUs() {
  return (
    <main className="min-h-screen">
      <article className="min-h-screen h-screen p-16 bg-[url('/images/hero-section.jpg')] bg-no-repeat bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <section className="relative z-10 h-full flex flex-col gap-6 justify-center">
          <div className="relative flex flex-col p-6 gap-6 rounded-lg overflow-hidden">
            <div className="-z-10 absolute inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-xl"></div>
            <div className="flex flex-col gap-2">
              <h1
                className={`${kronaOne.className} text-4xl text-white leading-normal`}
              >
                Connect with Us for <span className="text-brown">Your</span>{" "}
                Dream Home.
              </h1>
              <p className="text-white text-opacity-50 leading-normal">
                Reach out to us today and let our expert team guide you towards
                your perfect European luxury lifestyle. Contact us now to turn
                your dream into reality.
              </p>
            </div>
            <div className="flex gap-6 items-center"></div>
          </div>
        </section>
      </article>
    </main>
  );
}
