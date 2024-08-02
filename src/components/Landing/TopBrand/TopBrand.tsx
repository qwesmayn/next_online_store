import { FC } from "react";
import Сarousel from "../Сarousel/Сarousel";

const TopBrand: FC = () => {
  return (
    <div>
      <div className="flex items-center justify-between pb-4 border-b-2 mb-8">
        <div>
          <h3 className="font-medium text-3xl text-black">Top Brands</h3>
        </div>
      </div>
      <Сarousel />
    </div>
  );
};

export default TopBrand;
