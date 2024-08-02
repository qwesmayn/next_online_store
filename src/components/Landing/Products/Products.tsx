import { productsRoute } from "@/utils/const";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FC } from "react";
import ProductCard from "./ProductCard/ProductCard";
import { Device, IDevice } from "@/types/device.interface";

interface ProductsProps {
  data : IDevice
}


const Products: FC<ProductsProps> = ({data}) => {
  return (
    <div>
      <div className="flex items-center justify-between pb-4 border-b-2 mb-8">
        <div>
          <h3 className="font-medium text-3xl text-black">New Products</h3>
        </div>
        <div>
          <Link
            href={productsRoute}
            className="flex items-center space-x-[10px]"
          >
            <span className="mr-[10px] text-black text-nowrap">View all</span>
            <ChevronRightIcon width={9} height={9} />
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap space-x-6">
        {data?.devices.map((device : Device) => (
            <ProductCard key = {device.id} device={device} />
        ))}
      </div>
    </div>
  );
};

export default Products;
