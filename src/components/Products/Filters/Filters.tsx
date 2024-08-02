import { FC, useState } from "react";
import FiltersGeneral from "./FiltersGeneral/FiltersGeneral";
import { IBrand } from "@/types/brand.interface";
import { IDevice } from "@/types/device.interface";
import { deviceService } from "@/services/device.service";
import SwitchPrice from "./SwitchPrice/SwitchPrice";

interface FiltersProps {
  brands: IBrand[];
  onFiltersChange: (data: IDevice) => void;
  initialDevices: IDevice;
}

const Filters: FC<FiltersProps> = ({ brands, onFiltersChange, initialDevices }) => {
  const [filters, setFilters] = useState<{
    brandId: number[];
    minPrice: number;
    maxPrice: number;
  }>({
    brandId: [],
    minPrice: 0,
    maxPrice: 20000,
  });
  const [clearFilters, setClearFilters] = useState(false);

  const handleFiltersChange = async (newFilters: Partial<typeof filters>) => {
    const updatedFilters = {
      ...filters,
      ...newFilters,
    };
    setFilters(updatedFilters);
  
    try {
      const devicesData = await deviceService.getByParams(updatedFilters) || {
        count: 0,
        devices: [],
      };
      onFiltersChange(devicesData);
    } catch (error) {
      console.error("Ошибка при получении отфильтрованных устройств:", error);
    }
  };

  const handleBrandFilterChange = (brandIds: number[]) => {
    handleFiltersChange({ brandId: brandIds });
  };

  const handlePriceFilterChange = (priceRange: { minPrice: number; maxPrice: number }) => {
    handleFiltersChange(priceRange);
  };

  const handleFiltersClear = () => {
    const clearedFilters = {
      brandId: [],
      minPrice: 0,
      maxPrice: 20000,
    };
    setFilters(clearedFilters);
    onFiltersChange(initialDevices);
    setClearFilters(true);
    setTimeout(() => setClearFilters(false), 0);
  };

  return (
    <div>
      <div className="flex justify-between items-center pb-4">
        <h5 className="font-medium text-xl">Filters</h5>
        <button onClick={handleFiltersClear}>
          <span className="text-base cursor-pointer text-blue-500 hover:text-blue-300 transition duration-300">
            Clear all
          </span>
        </button>
      </div>
      <div>
        <FiltersGeneral
          brands={brands}
          onFiltersChange={handleBrandFilterChange}
          selectedBrands={filters.brandId}
          clearFilters={clearFilters}
        />
        <SwitchPrice
          onFiltersChange={handlePriceFilterChange}
          priceRange={[filters.minPrice, filters.maxPrice]}
        />
      </div>
    </div>
  );
};

export default Filters;
