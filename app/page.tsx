import { kronaOne } from "./fonts";
import Image from "next/image";

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
              <div className="flex flex-col gap-2 p-6 pl-[88px] h-full border-r-2 border-b-2 border-solid border-brown border-opacity-50">
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
              <div className="flex flex-col gap-2 p-6 border-b-2 border-solid border-brown border-opacity-50">
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
              <div className="flex flex-col gap-2 p-6 pl-[88px] border-r-2 border-b-2 border-solid border-brown border-opacity-50">
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
              <div className="flex flex-col gap-2 p-6 border-b-2 border-solid border-brown border-opacity-50">
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
              <div className="col-span-2 flex items-center gap-2 p-6 pl-[88px]">
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
          <div className="relative flex-1">
            <Image
              className="object-cover object-[0px_85%]"
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
              className="object-cover"
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
          <div className="flex items-center p-6 gap-2 bg-beige border-solid border-[1px] border-brown">
            <Image
              src="/images/highway.png"
              alt=""
              width={78}
              height={78}
              draggable={false}
            />
            <p>{`<`}1,500 meters to Tolls/Highway</p>
          </div>
          <div className="flex items-center p-6 gap-2 bg-beige border-solid border-[1px] border-brown">
            <Image
              src="/images/police.png"
              alt=""
              width={78}
              height={78}
              draggable={false}
            />
            <p>{`<`}1,800 meters to nearest District Police</p>
          </div>
          <div className="flex items-center p-6 gap-2 bg-beige border-solid border-[1px] border-brown">
            <Image
              src="/images/church.png"
              alt=""
              width={78}
              height={78}
              draggable={false}
            />
            <p>{`<`}300 meters to nearest Church</p>
          </div>
          <div className="flex items-center p-6 gap-2 bg-beige border-solid border-[1px] border-brown">
            <Image
              src="/images/plane.png"
              alt=""
              width={78}
              height={78}
              draggable={false}
            />
            <p>{`<`}20 minutes to Jakarta Int&apos;l Airport</p>
          </div>
          <div className="flex items-center p-6 gap-2 bg-beige border-solid border-[1px] border-brown">
            <Image
              src="/images/bank.png"
              alt=""
              width={78}
              height={78}
              draggable={false}
            />
            <p>{`<`}200 meters to nearest ATM/Bank</p>
          </div>
          <div className="flex items-center p-6 gap-2 bg-beige border-solid border-[1px] border-brown">
            <Image
              src="/images/mosque.png"
              alt=""
              width={78}
              height={78}
              draggable={false}
            />
            <p>{`<`}300 meters to nearest Mosque</p>
          </div>
          <div className="flex items-center p-6 gap-2 bg-beige border-solid border-[1px] border-brown">
            <Image
              src="/images/city.png"
              alt=""
              width={78}
              height={78}
              draggable={false}
            />
            <p>{`<`}60 minutes to SCBD/City Center</p>
          </div>
          <div className="flex items-center p-6 gap-2 bg-beige border-solid border-[1px] border-brown">
            <Image
              src="/images/hospital.png"
              alt=""
              width={78}
              height={78}
              draggable={false}
            />
            <p>{`<`}1,700 meters to nearest Hospital</p>
          </div>
          <div className="flex items-center p-6 gap-2 bg-beige border-solid border-[1px] border-brown">
            <Image
              src="/images/cart.png"
              alt=""
              width={78}
              height={78}
              draggable={false}
            />
            <p>{`<`}750 meters to Convenience Store</p>
          </div>
          <div className="flex items-center p-6 gap-2 bg-beige border-solid border-[1px] border-brown">
            <Image
              src="/images/school.png"
              alt=""
              width={78}
              height={78}
              draggable={false}
            />
            <p>{`<`}600 meters to School</p>
          </div>
          <div className="flex items-center p-6 gap-2 bg-beige border-solid border-[1px] border-brown">
            <Image
              src="/images/park.png"
              alt=""
              width={78}
              height={78}
              draggable={false}
            />
            <p>{`<`}350 meters to Kids Friendly Park</p>
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
                className="object-contain"
                src="/images/facilities.png"
                alt="Facilities"
                fill={true}
                draggable={false}
              />
            </div>
            <div className="col-span-3 grid grid-cols-2 gap-2 text-brown">
              <div className="flex flex-col p-6 gap-4 bg-beige">
                <h2 className={`${kronaOne.className} text-xl uppercase`}>
                  Foundation
                </h2>
                <p className="font-medium">Concrete pile</p>
              </div>
              <div className="flex flex-col p-6 gap-4 bg-beige">
                <h2 className={`${kronaOne.className} text-xl uppercase`}>
                  Structure
                </h2>
                <p className="font-medium">Reinforced concrete</p>
              </div>
              <div className="flex flex-col p-6 gap-4 bg-beige">
                <h2 className={`${kronaOne.className} text-xl uppercase`}>
                  Wall
                </h2>
                <p className="font-medium">Hebel brick masonry plus cement</p>
              </div>
              <div className="flex flex-col p-6 gap-4 bg-beige">
                <h2 className={`${kronaOne.className} text-xl uppercase`}>
                  Plafond
                </h2>
                <p className="font-medium">Painted gypsum board</p>
              </div>
              <div className="flex flex-col p-6 gap-4 bg-beige">
                <h2 className={`${kronaOne.className} text-xl uppercase`}>
                  Roof Structure
                </h2>
                <p className="font-medium">Light steel</p>
              </div>
              <div className="flex flex-col p-6 gap-4 bg-beige">
                <h2 className={`${kronaOne.className} text-xl uppercase`}>
                  Roof
                </h2>
                <p className="font-medium">Concrete roof tile</p>
              </div>
              <div className="flex flex-col p-6 gap-4 bg-beige">
                <h2 className={`${kronaOne.className} text-xl uppercase`}>
                  Floor
                </h2>
                <p className="font-medium">Granite tile & ceramic</p>
              </div>
              <div className="flex flex-col p-6 gap-4 bg-beige">
                <h2 className={`${kronaOne.className} text-xl uppercase`}>
                  Doors
                </h2>
                <p className="font-medium">Solid engineering, aluminum frame</p>
              </div>
              <div className="flex flex-col p-6 gap-4 bg-beige">
                <h2 className={`${kronaOne.className} text-xl uppercase`}>
                  Sanitaire
                </h2>
                <p className="font-medium">Toilet seat (ex. Toto)</p>
              </div>
              <div className="flex flex-col p-6 gap-4 bg-beige">
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
      <article className="bg-beige">
        <section className="grid grid-cols-3 gap-6 p-16 text-brown">
          <div className="flex flex-col gap-6">
            <h1
              className={`${kronaOne.className} text-5xl leading-normal uppercase`}
            >
              House Type
            </h1>
            <p className="text-xl leading-normal">
              Indulge in European luxury living with this exquisite abode.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="w-full relative">
              <Image
                className="object-contain"
                src="/images/basic-1.png"
                alt="Basic Image 1"
                fill={true}
                draggable={false}
              />
            </div>
            <div className="w-full relative">
              <Image
                className="object-contain"
                src="/images/basic-2.png"
                alt="Basic Image 2"
                fill={true}
                draggable={false}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6">
            <h2
              className={`${kronaOne.className} text-4xl leading-normal uppercase`}
            >
              Basic Type
            </h2>
            <div className="flex items-center gap-2">
              <div>
                <Image
                  src="/images/bed.png"
                  alt="Bed"
                  width={78}
                  height={78}
                  draggable={false}
                />
              </div>
              <p className="flex justify-center items-center w-8 h-8 rounded-full bg-brown text-white text-xl font-bold text-center">
                2
              </p>
              <div>
                <Image
                  src="/images/car.png"
                  alt="Car"
                  width={78}
                  height={78}
                  draggable={false}
                />
              </div>
              <p className="flex justify-center items-center w-8 h-8 rounded-full bg-brown text-white text-xl font-bold text-center">
                3
              </p>
              <div>
                <Image
                  src="/images/bath.png"
                  alt="Bath"
                  width={78}
                  height={78}
                  draggable={false}
                />
              </div>
              <p className="flex justify-center items-center w-8 h-8 rounded-full bg-brown text-white text-xl font-bold text-center">
                2
              </p>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 flex flex-col gap-2">
                <h3
                  className={`${kronaOne.className} text-2xl leading-normal uppercase`}
                >
                  1st Floor
                </h3>
                <ul className="flex flex-col pl-2 gap-2 list-disc list-inside font-medium">
                  <li>Carport</li>
                  <li>Living Room</li>
                  <li>Dining Room</li>
                  <li>Kitchen</li>
                  <li>Bathroom 1</li>
                  <li>Terrace</li>
                  <li>Garden</li>
                </ul>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <h3
                  className={`${kronaOne.className} text-2xl leading-normal uppercase`}
                >
                  2nd Floor
                </h3>
                <ul className="flex flex-col pl-2 gap-2 list-disc list-inside font-medium">
                  <li>Master Bedroom</li>
                  <li>Master Bathroom</li>
                  <li>Bathroom 2</li>
                  <li>Corridor</li>
                  <li>Balcony</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </article>
      <article className={`${kronaOne.className}`}>
        <section className="p-16">
          <h1 className="text-black text-5xl text-center leading-normal">
            <span className="text-brown">The Gateway</span> to Your{" "}
            <span className="text-brown">European Lifestyle</span> - Enjoy Your
            Dream <span className="text-brown">Home at Casa Varya</span>.
          </h1>
        </section>
        <section></section>
      </article>
    </main>
  );
}
