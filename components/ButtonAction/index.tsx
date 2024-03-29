"use client";
import Button from "../Button";
import Image from "next/image";

export default function ButtonAction({
  action,
  full,
}: {
  action: string;
  full?: boolean;
}) {
  if (action == "whatsapp") {
    return (
      <Button
        leadingIcon={
          <div className="relative lg:w-[42px] lg:h-[42px] w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[42px] max-h-[42px]">
            <Image
              src={"/icons/whatsapp.svg"}
              alt=""
              fill={true}
              draggable="false"
            />
          </div>
        }
        onClick={() =>
          window.open("https://api.whatsapp.com/send?phone=6287808270698")
        }
        trailIcon={
          <div className="relative lg:w-[42px] lg:h-[42px] w-[24px] h-[24px] max-w-[42px] max-h-[42px]">
            <Image
              src={"/icons/arrow-outward.svg"}
              alt=""
              fill={true}
              draggable="false"
            />
          </div>
        }
        full={full ? true : false}
        bold
      >
        Whatsapp
      </Button>
    );
  }
}
