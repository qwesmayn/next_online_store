import { FC, useEffect, useState, useCallback } from "react";
import { InputNumber, Slider } from "antd";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import debounce from "lodash/debounce";

interface SwitchPriceProps {
  onFiltersChange: (priceRange: { minPrice: number; maxPrice: number }) => void;
  priceRange: [number, number];
}

const SwitchPrice: FC<SwitchPriceProps> = ({ onFiltersChange, priceRange }) => {
  const [openAll, setOpenAll] = useState(false);
  const [localPriceRange, setLocalPriceRange] = useState<[number, number]>(priceRange);

  const handleOpenChange = () => {
    setOpenAll((prevValue) => !prevValue);
  };

  const updatePriceFilter = useCallback(
    debounce((newPriceRange: [number, number]) => {
      onFiltersChange({ minPrice: newPriceRange[0], maxPrice: newPriceRange[1] });
    }, 600),
    [onFiltersChange]
  );

  const handleMinPriceChange = (value: number | null) => {
    const minValue = value ?? 1;
    const newPriceRange: [number, number] = [minValue, localPriceRange[1]];
    setLocalPriceRange(newPriceRange);
    updatePriceFilter(newPriceRange);
  };

  const handleMaxPriceChange = (value: number | null) => {
    const maxValue = value ?? 20000;
    const newPriceRange: [number, number] = [localPriceRange[0], maxValue];
    setLocalPriceRange(newPriceRange);
    updatePriceFilter(newPriceRange);
  };

  const handleSliderChange = (values: [number, number]) => {
    setLocalPriceRange(values);
  };

  const handleSliderAfterChange = (values: [number, number]) => {
    updatePriceFilter(values);
  };

  useEffect(() => {
    setLocalPriceRange(priceRange);
  }, [priceRange]);

  return (
    <div>
      <div
        className="flex justify-between items-center cursor-pointer py-4"
        onClick={handleOpenChange}
      >
        <div>
          <span className="text-xl font-light">Price</span>
        </div>
        <div
          className={`transition-transform duration-300 ${openAll ? "transform rotate-180" : ""}`}
        >
          <ChevronDownIcon width={24} />
        </div>
      </div>
      {openAll && (
        <div className="pb-8 px-6">
          <div className="space-x-6 text-center">
            <InputNumber
              size="large"
              placeholder="min."
              max={20000}
              value={localPriceRange[0]}
              onChange={handleMinPriceChange}
            />
            <InputNumber
              size="large"
              placeholder="max."
              max={20000}
              value={localPriceRange[1]}
              onChange={handleMaxPriceChange}
            />
          </div>
          <Slider
            range
            value={localPriceRange}
            max={20000}
            onChange={(value) => handleSliderChange(value as [number, number])}
            onChangeComplete={(value) => handleSliderAfterChange(value as [number, number])}
          />
        </div>
      )}
    </div>
  );
};

export default SwitchPrice;
