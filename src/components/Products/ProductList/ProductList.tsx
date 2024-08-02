import ProductCard from "@/components/Landing/Products/ProductCard/ProductCard";
import { Device, IDevice } from "@/types/device.interface";
import { FC } from "react";

interface ProductListProps {
  data: IDevice;
}

const ProductList: FC<ProductListProps> = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-7">
      {data.count > 0 ? (
        data.devices.map((device: Device) => (
          <ProductCard key={device.id} device={device} />
        ))
      ) : (
        <div className="mx-auto flex items-center">
          <span>Товары не были найден</span>
        </div>
      )}
    </div>
  );
};

export default ProductList;
