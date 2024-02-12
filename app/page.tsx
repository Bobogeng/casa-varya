import SwiperGallery from "@/components/SwiperGallery";
import { kronaOne } from "./fonts";
import Image from "next/image";
import Button from "../components/Button/index";
import ButtonAction from "@/components/ButtonAction";
import HouseTypes from "@/components/HouseTypes";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <article className="min-h-screen h-screen p-16 bg-[url('/images/hero-section.jpg')] bg-no-repeat bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <section className="relative z-10 h-full flex flex-col gap-6 justify-center">
          <h1
            className={`max-w-[1116px] ${kronaOne.className} text-8xl text-brown leading-normal`}
          >
            <span className="text-white">Step into Your</span> European Luxury
            Lifestyle<span className="text-white">.</span>
          </h1>
          <ButtonAction action="whatsapp" />
          <p className="absolute bottom-0 right-0 z-10 font-bold text-gray-400 text-end">
            By Mudaya Land, in association with Tamara group
          </p>
        </section>
      </article>
      <article className={`${kronaOne.className}`}>
        <section className="p-16">
          <h1 className="bg-white text-black text-7xl leading-normal">
            <span className="text-brown">A place</span> where elegance begins
            and endures<span className="text-brown">.</span>
          </h1>
        </section>
        <section className="flex bg-[url('/images/hero-section.jpg')] bg-no-repeat bg-cover bg-center relative">
          <div className="absolute inset-0 bg-black bg-opacity-80 backdrop-filter backdrop-blur-2xl"></div>
          <div className="flex-1 z-10">
            <div className="grid grid-rows-3 grid-cols-2 text-2xl text-white">
              <div className="pl-[88px] h-full border-r-2 border-b-2 border-solid border-brown border-opacity-50">
                <div className="flex flex-col gap-2 p-6 transition-all ease-out hover:scale-105">
                  <div>
                    <Image
                      src="/images/house.png"
                      alt=""
                      width={78}
                      height={78}
                      draggable="false"
                    />
                  </div>
                  <p className="leading-normal">Luxury Design</p>
                </div>
              </div>
              <div className="border-b-2 border-solid border-brown border-opacity-50">
                <div className="flex flex-col gap-2 p-6 transition-all ease-out hover:scale-105">
                  <div>
                    <Image
                      src="/images/map.png"
                      alt=""
                      width={78}
                      height={78}
                      draggable="false"
                    />
                  </div>
                  <p className="leading-normal">
                    Located at the core of West Jakarta
                  </p>
                </div>
              </div>
              <div className="pl-[88px] border-r-2 border-b-2 border-solid border-brown border-opacity-50">
                <div className="flex flex-col gap-2 p-6 transition-all ease-out hover:scale-105">
                  <div>
                    <Image
                      src="/images/bench.png"
                      alt=""
                      width={78}
                      height={78}
                      draggable="false"
                    />
                  </div>
                  <p className="leading-normal">Community Park</p>
                </div>
              </div>
              <div className="border-b-2 border-solid border-brown border-opacity-50">
                <div className="flex flex-col gap-2 p-6 transition-all ease-out hover:scale-105">
                  <div>
                    <Image
                      src="/images/gate.png"
                      alt=""
                      width={78}
                      height={78}
                      draggable="false"
                    />
                  </div>
                  <p className="leading-normal">One-Gate System</p>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex items-center gap-2 p-6 pl-[88px] transition-all ease-out hover:scale-105">
                  <div>
                    <Image
                      src="/images/officer.png"
                      alt=""
                      width={78}
                      height={78}
                      draggable="false"
                    />
                  </div>
                  <p className="leading-normal">24/7 Security Monitoring</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex-1 overflow-hidden">
            <Image
              className="object-cover object-[0px_85%] transition-all ease-out duration-1000 hover:scale-125"
              src="/images/place-image.jpg"
              alt="Place Image"
              fill={true}
              draggable={false}
            />
          </div>
        </section>
      </article>
      <article>
        <section className="grid grid-cols-2 items-center">
          <div className="relative h-[700px] overflow-hidden">
            <Image
              className="object-cover transition-all ease-out duration-1000 hover:scale-125"
              src="/images/maps.jpg"
              alt="Maps"
              fill={true}
              draggable={false}
            />
          </div>
          <div className="flex flex-col p-6 gap-6">
            <h1
              className={`${kronaOne.className} text-black text-5xl leading-normal`}
            >
              <span className="bg-white text-brown">
                An upscale neighborhood
              </span>{" "}
              surrounded by <b>all-rounded facilities</b> for your{" "}
              <b>on the go life</b>
            </h1>
            <p className="text-xl self-end leading-normal">
              Mudaya Land is a renowned developer dedicated to crafting Casa
              Varya as a minimalist residential community that combines a touch
              of European grandeur, tailored for families or young individuals
              seeking an elegant, affordable and cozy home.
            </p>
          </div>
        </section>
        <section className="grid grid-rows-3 grid-cols-4 text-brown text-2xl font-bold">
          <div className="flex items-center p-6 gap-2 bg-black text-white text-2xl font-bold border-solid border-[1px] border-brown">
            <Image
              src="/images/map.png"
              alt=""
              width={78}
              height={78}
              draggable={false}
            />
            <p>Maps Label</p>
          </div>
          <div className="bg-beige border-solid border-[1px] border-brown overflow-hidden">
            <div className="flex items-center p-6 gap-2 transition-all ease-out hover:scale-105">
              <Image
                src="/images/highway.png"
                alt=""
                width={78}
                height={78}
                draggable={false}
              />
              <p>{`<`}1,500 meters to Tolls/Highway</p>
            </div>
          </div>
          <div className="bg-beige border-solid border-[1px] border-brown overflow-hidden">
            <div className="flex items-center p-6 gap-2 transition-all ease-out hover:scale-105">
              <Image
                src="/images/police.png"
                alt=""
                width={78}
                height={78}
                draggable={false}
              />
              <p>{`<`}1,800 meters to nearest District Police</p>
            </div>
          </div>
          <div className="bg-beige border-solid border-[1px] border-brown overflow-hidden">
            <div className="flex items-center p-6 gap-2 transition-all ease-out hover:scale-105">
              <Image
                src="/images/church.png"
                alt=""
                width={78}
                height={78}
                draggable={false}
              />
              <p>{`<`}300 meters to nearest Church</p>
            </div>
          </div>
          <div className="bg-beige border-solid border-[1px] border-brown overflow-hidden">
            <div className="flex items-center p-6 gap-2 transition-all ease-out hover:scale-105">
              <Image
                src="/images/plane.png"
                alt=""
                width={78}
                height={78}
                draggable={false}
              />
              <p>{`<`}20 minutes to Jakarta Int&apos;l Airport</p>
            </div>
          </div>
          <div className="bg-beige border-solid border-[1px] border-brown overflow-hidden">
            <div className="flex items-center p-6 gap-2 transition-all ease-out hover:scale-105">
              <Image
                src="/images/bank.png"
                alt=""
                width={78}
                height={78}
                draggable={false}
              />
              <p>{`<`}200 meters to nearest ATM/Bank</p>
            </div>
          </div>
          <div className="bg-beige border-solid border-[1px] border-brown overflow-hidden">
            <div className="flex items-center p-6 gap-2 transition-all ease-out hover:scale-105">
              <Image
                src="/images/mosque.png"
                alt=""
                width={78}
                height={78}
                draggable={false}
              />
              <p>{`<`}300 meters to nearest Mosque</p>
            </div>
          </div>
          <div className="bg-beige border-solid border-[1px] border-brown overflow-hidden">
            <div className="flex items-center p-6 gap-2 transition-all ease-out hover:scale-105">
              <Image
                src="/images/city.png"
                alt=""
                width={78}
                height={78}
                draggable={false}
              />
              <p>{`<`}60 minutes to SCBD/City Center</p>
            </div>
          </div>
          <div className="bg-beige border-solid border-[1px] border-brown overflow-hidden">
            <div className="flex items-center p-6 gap-2 transition-all ease-out hover:scale-105">
              <Image
                src="/images/hospital.png"
                alt=""
                width={78}
                height={78}
                draggable={false}
              />
              <p>{`<`}1,700 meters to nearest Hospital</p>
            </div>
          </div>
          <div className="bg-beige border-solid border-[1px] border-brown overflow-hidden">
            <div className="flex items-center p-6 gap-2 transition-all ease-out hover:scale-105">
              <Image
                src="/images/cart.png"
                alt=""
                width={78}
                height={78}
                draggable={false}
              />
              <p>{`<`}750 meters to Convenience Store</p>
            </div>
          </div>
          <div className="bg-beige border-solid border-[1px] border-brown overflow-hidden">
            <div className="flex items-center p-6 gap-2 transition-all ease-out hover:scale-105">
              <Image
                src="/images/school.png"
                alt=""
                width={78}
                height={78}
                draggable={false}
              />
              <p>{`<`}600 meters to School</p>
            </div>
          </div>
          <div className="bg-beige border-solid border-[1px] border-brown overflow-hidden">
            <div className="flex items-center p-6 gap-2 transition-all ease-out hover:scale-105">
              <Image
                src="/images/park.png"
                alt=""
                width={78}
                height={78}
                draggable={false}
              />
              <p>{`<`}350 meters to Kids Friendly Park</p>
            </div>
          </div>
        </section>
      </article>
      <article className="bg-white">
        <section className="flex flex-col gap-6 p-16">
          <h1
            className={`${kronaOne.className} text-5xl text-brown leading-normal uppercase`}
          >
            Master Plan
          </h1>
          <p className="text-xl leading-normal">
            The development of classic residential clusters, mindfully
            constructed on suitable location.
          </p>
          <div className="grid grid-cols-4">
            <div className="w-full relative">
              <Image
                className="object-contain transition-all ease-out hover:scale-105"
                src="/images/facilities.png"
                alt="Facilities"
                fill={true}
                draggable={false}
              />
            </div>
            <div className="col-span-3 grid grid-cols-2 gap-2 text-brown">
              <div className="flex flex-col p-6 gap-4 bg-beige transition-all ease-out hover:bg-black hover:text-white hover:scale-105">
                <h2 className={`${kronaOne.className} text-xl uppercase`}>
                  Foundation
                </h2>
                <p className="font-medium">Concrete pile</p>
              </div>
              <div className="flex flex-col p-6 gap-4 bg-beige transition-all ease-out hover:bg-black hover:text-white hover:scale-105">
                <h2 className={`${kronaOne.className} text-xl uppercase`}>
                  Structure
                </h2>
                <p className="font-medium">Reinforced concrete</p>
              </div>
              <div className="flex flex-col p-6 gap-4 bg-beige transition-all ease-out hover:bg-black hover:text-white hover:scale-105">
                <h2 className={`${kronaOne.className} text-xl uppercase`}>
                  Wall
                </h2>
                <p className="font-medium">Hebel brick masonry plus cement</p>
              </div>
              <div className="flex flex-col p-6 gap-4 bg-beige transition-all ease-out hover:bg-black hover:text-white hover:scale-105">
                <h2 className={`${kronaOne.className} text-xl uppercase`}>
                  Plafond
                </h2>
                <p className="font-medium">Painted gypsum board</p>
              </div>
              <div className="flex flex-col p-6 gap-4 bg-beige transition-all ease-out hover:bg-black hover:text-white hover:scale-105">
                <h2 className={`${kronaOne.className} text-xl uppercase`}>
                  Roof Structure
                </h2>
                <p className="font-medium">Light steel</p>
              </div>
              <div className="flex flex-col p-6 gap-4 bg-beige transition-all ease-out hover:bg-black hover:text-white hover:scale-105">
                <h2 className={`${kronaOne.className} text-xl uppercase`}>
                  Roof
                </h2>
                <p className="font-medium">Concrete roof tile</p>
              </div>
              <div className="flex flex-col p-6 gap-4 bg-beige transition-all ease-out hover:bg-black hover:text-white hover:scale-105">
                <h2 className={`${kronaOne.className} text-xl uppercase`}>
                  Floor
                </h2>
                <p className="font-medium">Granite tile & ceramic</p>
              </div>
              <div className="flex flex-col p-6 gap-4 bg-beige transition-all ease-out hover:bg-black hover:text-white hover:scale-105">
                <h2 className={`${kronaOne.className} text-xl uppercase`}>
                  Doors
                </h2>
                <p className="font-medium">Solid engineering, aluminum frame</p>
              </div>
              <div className="flex flex-col p-6 gap-4 bg-beige transition-all ease-out hover:bg-black hover:text-white hover:scale-105">
                <h2 className={`${kronaOne.className} text-xl uppercase`}>
                  Sanitaire
                </h2>
                <p className="font-medium">Toilet seat (ex. Toto)</p>
              </div>
              <div className="flex flex-col p-6 gap-4 bg-beige transition-all ease-out hover:bg-black hover:text-white hover:scale-105">
                <h2 className={`${kronaOne.className} text-xl uppercase`}>
                  Water Supply
                </h2>
                <ul className="list-disc list-inside pl-2 font-medium">
                  <li>Septic tanks (ex. Biofil filter)</li>
                  <li>Water Torren 750L (ex. Penguin)</li>
                  <li>Shimizu pump</li>
                  <li>Water pipe (ex. Wavin)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col p-4 gap-4 bg-white border-solid border-[1px] border-brown">
            <h2
              className={`${kronaOne.className} text-xl text-brown uppercase`}
            >
              Additional Facilities :
            </h2>
            <ul className="columns-2 list-disc list-inside pl-2 font-medium">
              <li>Clean water installation</li>
              <li>Pulling telephone cables</li>
              <li>
                Pulling conduit electrical cables with insect and rat-proof
                sleeves
              </li>
              <li>Withdrawal of water heater installation</li>
              <li>Include fences and house walls</li>
            </ul>
          </div>
        </section>
      </article>
      <HouseTypes />
      <article className={`${kronaOne.className}`}>
        <section className="p-16">
          <h1 className="text-black text-5xl text-center leading-normal">
            <span className="text-brown">The Gateway</span> to Your{" "}
            <span className="text-brown">European Lifestyle</span> - Enjoy Your
            Dream <span className="text-brown">Home at Casa Varya</span>.
          </h1>
        </section>
        <section className="pb-16">
          <SwiperGallery />
        </section>
      </article>
    </main>
  );
}
