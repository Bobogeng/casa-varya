import SwiperGallery from "@/components/SwiperGallery";
import Image from "next/image";
import ButtonAction from "@/components/ButtonAction";
import HouseTypes from "@/components/HouseTypes";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <article className="min-h-screen h-screen p-6 sm:p-16 bg-[url('/images/hero-section.jpg')] bg-no-repeat bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <section className="relative z-10 h-full flex flex-col lg:gap-6 gap-4 justify-center lg:items-start items-center lg:text-start text-center">
          <h1
            className={`max-w-[1116px] font-display xl:text-8xl lg:text-6xl sm:text-4xl text-3xl text-brown leading-normal sm:leading-normal lg:leading-normal xl:leading-normal`}
          >
            <span className="text-white">Step into Your</span> European Luxury
            Lifestyle<span className="text-white">.</span>
          </h1>
          <ButtonAction action="whatsapp" />
          <p className="absolute bottom-0 lg:right-0 z-10 font-bold text-gray-400 lg:text-end text-center">
            By Mudaya Land, in association with Tamara group
          </p>
        </section>
      </article>
      <article className={`font-display`}>
        <section className="p-6 sm:p-16">
          <h2 className="text-black lg:text-7xl text-2xl lg:leading-normal leading-normal">
            <span className="text-brown">A place</span> where elegance begins
            and endures<span className="text-brown">.</span>
          </h2>
        </section>
        <section className="flex flex-col lg:flex-row bg-[url('/images/hero-section.jpg')] bg-no-repeat bg-cover bg-center relative">
          <div className="absolute inset-0 bg-black bg-opacity-80 backdrop-filter backdrop-blur-2xl"></div>
          <div className="flex-1 z-10 lg:order-1 order-2">
            <div className="flex flex-col sm:grid sm:grid-rows-3 sm:grid-cols-2 lg:text-2xl text-lg text-white">
              <div className="h-full sm:border-r-2 flex justify-center items-center border-b-2 border-solid border-brown border-opacity-50 overflow-hidden">
                <div className="flex flex-col justify-center sm:flex-row items-center lg:flex-col gap-2 p-6 text-center transition-all ease-out hover:scale-105">
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
              <div className="flex justify-center items-center border-b-2 border-solid border-brown border-opacity-50 overflow-hidden">
                <div className="flex flex-col justify-center sm:flex-row items-center lg:flex-col gap-2 p-6 text-center transition-all ease-out hover:scale-105">
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
              <div className="sm:border-r-2 flex justify-center items-center border-b-2 border-solid border-brown border-opacity-50 overflow-hidden">
                <div className="flex flex-col justify-center sm:flex-row items-center lg:flex-col gap-2 p-6 text-center transition-all ease-out hover:scale-105">
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
              <div className="flex justify-center items-center border-b-2 border-solid border-brown border-opacity-50 overflow-hidden">
                <div className="flex flex-col justify-center sm:flex-row items-center lg:flex-col gap-2 p-6 text-center transition-all ease-out hover:scale-105">
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
              <div className="flex justify-center items-center col-span-2 overflow-hidden">
                <div className="flex flex-col justify-center sm:flex-row items-center gap-2 p-6 text-center transition-all ease-out hover:scale-105">
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
          <div className="relative w-full lg:flex-1 h-[256px] sm:h-[430px] md:h-[500px] lg:h-auto overflow-hidden lg:order-2 order-1">
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
        <section className="flex flex-col md:grid md:grid-cols-2 items-center">
          <div className="relative w-full h-[256px] sm:h-[430px] md:h-[500px] lg:h-[700px] overflow-hidden">
            <Image
              className="object-cover transition-all ease-out duration-1000 hover:scale-125"
              src="/images/maps.jpg"
              alt="Maps"
              fill={true}
              draggable={false}
            />
          </div>
          <div className="flex flex-col p-6 lg:gap-6 gap-4">
            <h2
              className={`font-display text-black lg:text-5xl text-2xl lg:leading-normal leading-normal`}
            >
              <span className="text-brown">An upscale neighborhood</span>{" "}
              surrounded by <b>all-rounded facilities</b> for your{" "}
              <b>on the go life</b>
            </h2>
            <p className="lg:text-xl text-base self-end lg:leading-normal leading-normal">
              Mudaya Land is a renowned developer dedicated to crafting Casa
              Varya as a minimalist residential community that combines a touch
              of European grandeur, tailored for families or young individuals
              seeking an elegant, affordable and cozy home.
            </p>
          </div>
        </section>
        <section className="flex flex-col xl:grid xl:grid-rows-3 xl:grid-cols-4 lg:grid sm:grid sm:grid-rows-6 sm:grid-cols-2 text-brown lg:text-2xl text-lg font-bold">
          <div className="flex flex-col items-center p-6 gap-2 bg-black text-white text-center-[1px] border-solid border-[1px] border-l-0 border-r-0 sm:border-r-[1px] border-brown">
            <div className="relative lg:w-[78px] lg:h-[78px] w-[48px] h-[48px] min-w-[48px] min-h-[48px] max-w-[78px] max-h-[78px]">
              <Image
                src="/images/map.png"
                alt=""
                fill={true}
                draggable={false}
              />
            </div>
            <p>Map Labels</p>
          </div>
          <div className="bg-beige border-solid border-[1px] border-brown border-l-0 border-r-0 lg:border-l-[1px] lg:border-r-[1px] sm:border-l-[1px] overflow-hidden">
            <div className="flex flex-col items-center p-6 gap-2 transition-all ease-out hover:scale-105 text-center">
              <div className="relative lg:w-[78px] lg:h-[78px] w-[48px] h-[48px] min-w-[48px] min-h-[48px] max-w-[78px] max-h-[78px]">
                <Image
                  src="/images/highway.png"
                  alt=""
                  fill={true}
                  draggable={false}
                />
              </div>
              <p className="sm:text-base text-sm">
                {`<`}1,500 meters to Tolls/Highway
              </p>
            </div>
          </div>
          <div className="bg-beige border-solid border-[1px] border-brown border-l-0 border-r-0 sm:border-r-[1px] lg:border-l-[1px] overflow-hidden">
            <div className="flex flex-col items-center p-6 gap-2 transition-all ease-out hover:scale-105 text-center">
              <div className="relative lg:w-[78px] lg:h-[78px] w-[48px] h-[48px] min-w-[48px] min-h-[48px] max-w-[78px] max-h-[78px]">
                <Image
                  src="/images/police.png"
                  alt=""
                  fill={true}
                  draggable={false}
                />
              </div>
              <p className="sm:text-base text-sm">
                {`<`}1,800 meters to nearest District Police
              </p>
            </div>
          </div>
          <div className="bg-beige border-solid border-[1px] border-brown border-l-0 border-r-0 lg:border-l-[1px] sm:border-l-[1px] overflow-hidden">
            <div className="flex flex-col items-center p-6 gap-2 transition-all ease-out hover:scale-105 text-center">
              <div className="relative lg:w-[78px] lg:h-[78px] w-[48px] h-[48px] min-w-[48px] min-h-[48px] max-w-[78px] max-h-[78px]">
                <Image
                  src="/images/church.png"
                  alt=""
                  fill={true}
                  draggable={false}
                />
              </div>
              <p className="sm:text-base text-sm">
                {`<`}300 meters to nearest Church
              </p>
            </div>
          </div>
          <div className="bg-beige border-solid border-[1px] border-brown border-l-0 border-r-0 sm:border-r-[1px] overflow-hidden">
            <div className="flex flex-col items-center p-6 gap-2 transition-all ease-out hover:scale-105 text-center">
              <div className="relative lg:w-[78px] lg:h-[78px] w-[48px] h-[48px] min-w-[48px] min-h-[48px] max-w-[78px] max-h-[78px]">
                <Image
                  src="/images/plane.png"
                  alt=""
                  fill={true}
                  draggable={false}
                />
              </div>
              <p className="sm:text-base text-sm">
                {`<`}20 minutes to Jakarta Int&apos;l Airport
              </p>
            </div>
          </div>
          <div className="bg-beige border-solid border-[1px] border-brown border-l-0 border-r-0 lg:border-l-[1px] lg:border-r-[1px] sm:border-l-[1px] overflow-hidden">
            <div className="flex flex-col items-center p-6 gap-2 transition-all ease-out hover:scale-105 text-center">
              <div className="relative lg:w-[78px] lg:h-[78px] w-[48px] h-[48px] min-w-[48px] min-h-[48px] max-w-[78px] max-h-[78px]">
                <Image
                  src="/images/bank.png"
                  alt=""
                  fill={true}
                  draggable={false}
                />
              </div>
              <p className="sm:text-base text-sm">
                {`<`}200 meters to nearest ATM/Bank
              </p>
            </div>
          </div>
          <div className="bg-beige border-solid border-[1px] border-brown border-l-0 border-r-0 sm:border-r-[1px] lg:border-l-[1px] overflow-hidden">
            <div className="flex flex-col items-center p-6 gap-2 transition-all ease-out hover:scale-105 text-center">
              <div className="relative lg:w-[78px] lg:h-[78px] w-[48px] h-[48px] min-w-[48px] min-h-[48px] max-w-[78px] max-h-[78px]">
                <Image
                  src="/images/mosque.png"
                  alt=""
                  fill={true}
                  draggable={false}
                />
              </div>
              <p className="sm:text-base text-sm">
                {`<`}300 meters to nearest Mosque
              </p>
            </div>
          </div>
          <div className="bg-beige border-solid border-[1px] border-brown border-l-0 border-r-0 lg:border-l-[1px] sm:border-l-[1px] overflow-hidden">
            <div className="flex flex-col items-center p-6 gap-2 transition-all ease-out hover:scale-105 text-center">
              <div className="relative lg:w-[78px] lg:h-[78px] w-[48px] h-[48px] min-w-[48px] min-h-[48px] max-w-[78px] max-h-[78px]">
                <Image
                  src="/images/city.png"
                  alt=""
                  fill={true}
                  draggable={false}
                />
              </div>
              <p className="sm:text-base text-sm">
                {`<`}60 minutes to SCBD/City Center
              </p>
            </div>
          </div>
          <div className="bg-beige border-solid border-[1px] border-brown border-l-0 border-r-0 sm:border-r-[1px] overflow-hidden">
            <div className="flex flex-col items-center p-6 gap-2 transition-all ease-out hover:scale-105 text-center">
              <div className="relative lg:w-[78px] lg:h-[78px] w-[48px] h-[48px] min-w-[48px] min-h-[48px] max-w-[78px] max-h-[78px]">
                <Image
                  src="/images/hospital.png"
                  alt=""
                  fill={true}
                  draggable={false}
                />
              </div>
              <p className="sm:text-base text-sm">
                {`<`}1,700 meters to nearest Hospital
              </p>
            </div>
          </div>
          <div className="bg-beige border-solid border-[1px] border-brown border-l-0 border-r-0 lg:border-l-[1px] lg:border-r-[1px] sm:border-l-[1px] overflow-hidden">
            <div className="flex flex-col items-center p-6 gap-2 transition-all ease-out hover:scale-105 text-center">
              <div className="relative lg:w-[78px] lg:h-[78px] w-[48px] h-[48px] min-w-[48px] min-h-[48px] max-w-[78px] max-h-[78px]">
                <Image
                  src="/images/cart.png"
                  alt=""
                  fill={true}
                  draggable={false}
                />
              </div>
              <p className="sm:text-base text-sm">
                {`<`}750 meters to Convenience Store
              </p>
            </div>
          </div>
          <div className="bg-beige border-solid border-[1px] border-brown border-l-0 border-r-0 sm:border-r-[1px] lg:border-l-[1px] overflow-hidden">
            <div className="flex flex-col items-center p-6 gap-2 transition-all ease-out hover:scale-105 text-center">
              <div className="relative lg:w-[78px] lg:h-[78px] w-[48px] h-[48px] min-w-[48px] min-h-[48px] max-w-[78px] max-h-[78px]">
                <Image
                  src="/images/school.png"
                  alt=""
                  fill={true}
                  draggable={false}
                />
              </div>
              <p className="sm:text-base text-sm">{`<`}600 meters to School</p>
            </div>
          </div>
          <div className="bg-beige border-solid border-[1px] border-brown border-l-0 border-r-0 lg:border-l-[1px] sm:border-l-[1px] overflow-hidden">
            <div className="flex flex-col items-center p-6 gap-2 transition-all ease-out hover:scale-105 text-center">
              <div className="relative lg:w-[78px] lg:h-[78px] w-[48px] h-[48px] min-w-[48px] min-h-[48px] max-w-[78px] max-h-[78px]">
                <Image
                  src="/images/park.png"
                  alt=""
                  fill={true}
                  draggable={false}
                />
              </div>
              <p className="sm:text-base text-sm">
                {`<`}350 meters to Kids Friendly Park
              </p>
            </div>
          </div>
        </section>
      </article>
      <article className="bg-white">
        <section className="flex flex-col lg:gap-6 gap-4 p-6 sm:p-16">
          <h2
            className={`font-display lg:text-5xl text-2xl text-brown leading-normal uppercase`}
          >
            Master Plan
          </h2>
          <p className="lg:text-xl text-base lg:leading-normal leading-normal">
            The development of classic residential clusters, mindfully
            constructed on suitable location.
          </p>
          <div className="flex flex-col lg:gap-6 gap-4 lg:grid lg:grid-cols-4">
            <div className="w-full h-48 sm:h-72 md:h-96 lg:h-full relative">
              <Image
                className="hidden lg:block object-contain transition-all ease-out hover:scale-105"
                src="/images/facilities.png"
                alt="Facilities"
                fill={true}
                draggable={false}
              />
              <Image
                className="block lg:hidden object-contain transition-all ease-out hover:scale-105"
                src="/images/facilities2.png"
                alt="Facilities"
                fill={true}
                draggable={false}
              />
            </div>
            <div className="flex flex-col md:col-span-3 md:grid md:grid-cols-2 gap-2 text-brown">
              <div className="flex flex-col p-6 gap-4 bg-beige transition-all ease-out hover:bg-black hover:text-white hover:scale-105 break-words">
                <h3 className={`font-display lg:text-xl text-lg uppercase`}>
                  Foundation
                </h3>
                <p className="font-medium">Concrete pile</p>
              </div>
              <div className="flex flex-col p-6 gap-4 bg-beige transition-all ease-out hover:bg-black hover:text-white hover:scale-105 break-words">
                <h3 className={`font-display lg:text-xl text-lg uppercase`}>
                  Structure
                </h3>
                <p className="font-medium">Reinforced concrete</p>
              </div>
              <div className="flex flex-col p-6 gap-4 bg-beige transition-all ease-out hover:bg-black hover:text-white hover:scale-105 break-words">
                <h3 className={`font-display lg:text-xl text-lg uppercase`}>
                  Wall
                </h3>
                <p className="font-medium">Hebel brick masonry plus cement</p>
              </div>
              <div className="flex flex-col p-6 gap-4 bg-beige transition-all ease-out hover:bg-black hover:text-white hover:scale-105 break-words">
                <h3 className={`font-display lg:text-xl text-lg uppercase`}>
                  Plafond
                </h3>
                <p className="font-medium">Painted gypsum board</p>
              </div>
              <div className="flex flex-col p-6 gap-4 bg-beige transition-all ease-out hover:bg-black hover:text-white hover:scale-105 break-words">
                <h3 className={`font-display lg:text-xl text-lg uppercase`}>
                  Roof Structure
                </h3>
                <p className="font-medium">Light steel</p>
              </div>
              <div className="flex flex-col p-6 gap-4 bg-beige transition-all ease-out hover:bg-black hover:text-white hover:scale-105 break-words">
                <h3 className={`font-display lg:text-xl text-lg uppercase`}>
                  Roof
                </h3>
                <p className="font-medium">Concrete roof tile</p>
              </div>
              <div className="flex flex-col p-6 gap-4 bg-beige transition-all ease-out hover:bg-black hover:text-white hover:scale-105 break-words">
                <h3 className={`font-display lg:text-xl text-lg uppercase`}>
                  Floor
                </h3>
                <p className="font-medium">Granite tile & ceramic</p>
              </div>
              <div className="flex flex-col p-6 gap-4 bg-beige transition-all ease-out hover:bg-black hover:text-white hover:scale-105 break-words">
                <h3 className={`font-display lg:text-xl text-lg uppercase`}>
                  Doors
                </h3>
                <p className="font-medium">Solid engineering, aluminum frame</p>
              </div>
              <div className="flex flex-col p-6 gap-4 bg-beige transition-all ease-out hover:bg-black hover:text-white hover:scale-105 break-words">
                <h3 className={`font-display lg:text-xl text-lg uppercase`}>
                  Sanitaire
                </h3>
                <p className="font-medium">Toilet seat (ex. Toto)</p>
              </div>
              <div className="flex flex-col p-6 gap-4 bg-beige transition-all ease-out hover:bg-black hover:text-white hover:scale-105 break-words">
                <h3 className={`font-display lg:text-xl text-lg uppercase`}>
                  Water Supply
                </h3>
                <ul className="list-disc list-inside pl-2 font-medium ">
                  <li>Septic tanks (ex. Biofil filter)</li>
                  <li>Water Torren 750L (ex. Penguin)</li>
                  <li>Shimizu pump</li>
                  <li>Water pipe (ex. Wavin)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col p-4 gap-4 bg-white border-solid border-[1px] border-brown break-words">
            <h3
              className={`font-display lg:text-xl text-lg text-brown uppercase`}
            >
              Additional Facilities :
            </h3>
            <ul className="md:columns-2 list-disc list-inside pl-2 font-medium">
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
      <article>
        <section className="p-6 sm:p-16">
          <h2
            className={`font-display text-black lg:text-5xl text-2xl text-center lg:leading-normal leading-normal`}
          >
            <span className="text-brown">The Gateway</span> to Your{" "}
            <span className="text-brown">European Lifestyle</span> - Enjoy Your
            Dream <span className="text-brown">Home at Casa Varya</span>.
          </h2>
        </section>
        <section className="sm:pb-16">
          <SwiperGallery />
        </section>
        <section className="bg-beige flex flex-col items-center p-6 sm:p-16 sm:gap-12 gap-4">
          <p
            className={`max-w-[1002px] font-display text-brown lg:text-3xl text-xl text-center lg:leading-normal leading-normal`}
          >
            Call to Action for <span className="text-black">booking fee</span>
          </p>
          <p
            className={`max-w-[1002px] font-display text-brown lg:text-5xl text-2xl text-center lg:leading-normal leading-normal`}
          >
            20 Million
          </p>
        </section>
      </article>
      <ContactUs />
    </main>
  );
}
