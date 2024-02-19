import Image from "next/image";
import { FC } from "react";
import Each from "../atoms/Each";

const clients = [
  "/images/jobox.png",
  "/images/dsign.png",
  "/images/wave.png",
  "/images/twins.png",
  "/images/bubles.png",
];

const Client: FC = () => {
  return (
    <div className="relative z-10">
      <div className="text-lg text-muted-foreground">
        Companies we helped grow
      </div>
      <div className="mt-8 flex flex-row justify-between">
        <Each
          of={clients}
          render={({ item, index }) => (
            <Image key={index} src={item} alt={item} width={139} height={35} />
          )}
        />
      </div>
    </div>
  );
};

export default Client;
