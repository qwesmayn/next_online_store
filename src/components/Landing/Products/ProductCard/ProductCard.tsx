import { Device } from "@/types/device.interface";
import { StarIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { FC } from "react";

interface ProductCardProps {
  device: Device
}

const ProductCard: FC<ProductCardProps> = ({device }) => {
  return (
    <div  className="p-4 w-max shadow-lg rounded-lg bg-white cursor-pointer hover:shadow-2xl transition border-2 duration-300 hover:text-blue-700 hover:border-blue-700">
      <div className="pb-4 mb-4 border-b-2">
        <Image
          src={"http://localhost:5000/" + device.img}
          width={256}
          height={190}
          alt={device.name}
          className="max-h-[190px] object-contain"
        />
      </div>
      <div>
        <div className="mb-4">
          <span className="text-base">{device.name}</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-light text-black">
              ${device.price}
            </span>
          </div>
          <div className="flex items-center justify-between text-blue-900 space-x-[2px]">
            <StarIcon width={24} height={24} />
            <span>{device.raiting}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
