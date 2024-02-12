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
          <Image
            src={"/icons/whatsapp.svg"}
            alt=""
            width={42}
            height={42}
            draggable="false"
          />
        }
        onClick={() =>
          window.open("https://api.whatsapp.com/send?phone=6281287070548")
        }
        trailIcon={
          <Image
            src={"/icons/arrow-outward.svg"}
            alt=""
            width={42}
            height={42}
            draggable="false"
          />
        }
        full={full ? true : false}
      >
        Whatsapp
      </Button>
    );
  }
}
