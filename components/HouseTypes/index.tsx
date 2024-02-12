"use client";
import { kronaOne } from "@/app/fonts";
import { houseTypes } from "@/utils/houseTypes";
import Image from "next/image";
import Button from "../Button";
import { useState, useEffect } from "react";

export default function HouseTypes() {
  const [selectedHouseIndex, setSelectedHouseIndex] = useState(0);
  const [selectedHouse, setSelectedHouse] = useState(
    houseTypes[selectedHouseIndex]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedHouseIndex((prevIndex) => (prevIndex + 1) % houseTypes.length);
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setSelectedHouse(houseTypes[selectedHouseIndex]);
  }, [selectedHouseIndex]);

  const handleHouseSelect = (houseIndex: number) => {
    setSelectedHouseIndex(houseIndex);
  };

  return (
    <article className="bg-beige">
      <section className="grid grid-cols-3 gap-6 p-16 text-brown">
        <div className="flex flex-col justify-center gap-6">
          <h1
            className={`${kronaOne.className} text-5xl leading-normal uppercase`}
          >
            House Type
          </h1>
          <p className="text-xl leading-normal">
            Indulge in European luxury living with this exquisite abode.
          </p>
          {houseTypes.map((house, i) => {
            if (house.type === selectedHouse.type) {
              return (
                <Button
                  leadingIcon={<p className="font-bold text-4xl">{i}</p>}
                  full
                  onClick={() => handleHouseSelect(i)}
                  key={i}
                  active
                >
                  {house.type}
                </Button>
              );
            } else {
              return (
                <Button
                  leadingIcon={<p className="font-bold text-4xl">{i}</p>}
                  secondary
                  full
                  onClick={() => handleHouseSelect(i)}
                  key={i}
                >
                  {house.type}
                </Button>
              );
            }
          })}
        </div>
        {selectedHouse && (
          <div className={`h-[700px] grid grid-cols-2 gap-2`}>
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
          <div className="flex flex-col justify-center gap-6">
            <h2
              className={`${kronaOne.className} text-4xl leading-normal uppercase`}
            >
              {selectedHouse.type}
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
                {selectedHouse.bed}
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
                {selectedHouse.car}
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
                {selectedHouse.bath}
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
                  {selectedHouse.floor1.map((floor, i) => (
                    <li key={i}>{floor}</li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <h3
                  className={`${kronaOne.className} text-2xl leading-normal uppercase`}
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
