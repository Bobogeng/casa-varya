"use client";
import { kronaOne } from "@/app/fonts";
import { houseTypes } from "@/utils/houseTypes";
import Image from "next/image";
import Button from "../Button";
import { useState } from "react";

export default function HouseTypes() {
  const [selectedHouseIndex, setSelectedHouseIndex] = useState(0);
  const [selectedHouse, setSelectedHouse] = useState(
    houseTypes[selectedHouseIndex]
  );

  const handleHouseSelect = (houseIndex: number) => {
    setSelectedHouseIndex(houseIndex);
    setSelectedHouse(houseTypes[houseIndex]);
  };

  return (
    <article className="bg-beige">
      <section className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-6 gap-4 lg:p-16 p-6 text-brown">
        <div className="flex flex-col justify-center lg:gap-6 gap-4">
          <h1
            className={`${kronaOne.className} lg:text-5xl text-xl lg:leading-normal leading-normal uppercase`}
          >
            House Type
          </h1>
          <p className="lg:text-xl text-base lg:leading-normal leading-normal">
            Indulge in European luxury living with this exquisite abode.
          </p>
          {houseTypes.map((house, i) => {
            if (house.type === selectedHouse.type) {
              return (
                <Button
                  leadingIcon={
                    <p className="font-bold xl:text-4xl lg:text-2xl text-lg">
                      {++i}
                    </p>
                  }
                  full
                  onClick={() => handleHouseSelect(--i)}
                  key={i}
                  active
                >
                  {house.type}
                </Button>
              );
            } else {
              return (
                <Button
                  leadingIcon={
                    <p className="font-bold xl:text-4xl lg:text-2xl text-lg">
                      {++i}
                    </p>
                  }
                  secondary
                  full
                  onClick={() => handleHouseSelect(--i)}
                  key={i}
                >
                  {house.type}
                </Button>
              );
            }
          })}
        </div>
        {selectedHouse && (
          <div
            className={`h-[300px] sm:h-[430px] md:h-[500px] lg:h-[700px] grid grid-cols-2 gap-2`}
          >
            <div className="w-full relative">
              <Image
                className="object-contain"
                src={selectedHouse.image1}
                alt={selectedHouse.type + " Image 1"}
                fill={true}
                draggable={false}
              />
            </div>
            <div className="w-full relative">
              <Image
                className="object-contain"
                src={selectedHouse.image2}
                alt={selectedHouse.type + " Image 2"}
                fill={true}
                draggable={false}
              />
            </div>
          </div>
        )}
        {selectedHouse && (
          <div className="flex flex-col justify-center lg:items-start items-center text-center lg:text-start lg:gap-6 gap-4">
            <h2
              className={`${kronaOne.className} lg:text-4xl text-xl lg:leading-normal leading-normal uppercase`}
            >
              {selectedHouse.type}
            </h2>
            <div className="flex flex-wrap sm:flex-row justify-center items-center gap-2">
              <div className="relative flex items-center gap-2">
                <div className="lg:w-[78px] lg:h-[78px] w-[48px] h-[48px] min-w-[48px] min-h-[48px]">
                  <Image
                    src="/images/bed.png"
                    alt="Bed"
                    width={78}
                    height={78}
                    draggable={false}
                  />
                </div>
                <p className="flex justify-center items-center w-8 h-8 rounded-full bg-brown text-white text-xl font-bold text-center">
                  {selectedHouse.bed}
                </p>
              </div>
              <div className="relative flex items-center gap-2">
                <div className="lg:w-[78px] lg:h-[78px] w-[48px] h-[48px] min-w-[48px] min-h-[48px]">
                  <Image
                    src="/images/car.png"
                    alt="Car"
                    width={78}
                    height={78}
                    draggable={false}
                  />
                </div>
                <p className="flex justify-center items-center w-8 h-8 rounded-full bg-brown text-white text-xl font-bold text-center">
                  {selectedHouse.car}
                </p>
              </div>
              <div className="relative flex items-center gap-2">
                <div className="lg:w-[78px] lg:h-[78px] w-[48px] h-[48px] min-w-[48px] min-h-[48px]">
                  <Image
                    src="/images/bath.png"
                    alt="Bath"
                    width={78}
                    height={78}
                    draggable={false}
                  />
                </div>
                <p className="flex justify-center items-center w-8 h-8 rounded-full bg-brown text-white lg:text-xl text-base font-bold text-center">
                  {selectedHouse.bath}
                </p>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col gap-2">
              <div className="flex-1 flex flex-col gap-2">
                <h3
                  className={`${kronaOne.className} lg:text-2xl text-lg lg:leading-normal leading-normal uppercase`}
                >
                  1st Floor
                </h3>
                <ul className="flex flex-col pl-2 gap-2 list-disc list-inside font-medium">
                  {selectedHouse.floor1.map((floor, i) => (
                    <li key={i}>{floor}</li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <h3
                  className={`${kronaOne.className} lg:text-2xl text-lg lg:leading-normal leading-normal uppercase`}
                >
                  2nd Floor
                </h3>
                <ul className="flex flex-col pl-2 gap-2 list-disc list-inside font-medium">
                  {selectedHouse.floor2.map((floor, i) => (
                    <li key={i}>{floor}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </section>
    </article>
  );
}
