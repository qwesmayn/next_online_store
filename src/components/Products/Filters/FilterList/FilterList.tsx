import { FC, useState, useEffect } from "react";
import { IFilterList } from "./FilterList.interface";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import cn from "clsx";
import { Checkbox } from "antd";

interface IFilterListProps extends IFilterList {
  onChange: (selectedIds: number[]) => void;
  clearFilters: boolean;
}

const FilterList: FC<IFilterListProps> = ({ nameQuery, querys, onChange, clearFilters }) => {
  const [selectedQueries, setSelectedQueries] = useState<string[]>([]);
  const [openAll, setOpenAll] = useState(false);

  const handleCheckboxChange = (query: string, id: number) => {
    const newSelectedQueries = selectedQueries.includes(query)
      ? selectedQueries.filter((q) => q !== query)
      : [...selectedQueries, query];
    setSelectedQueries(newSelectedQueries);

    const selectedIds = newSelectedQueries
      .map((q) => querys.find((item) => item.query === q)?.id)
      .filter((id): id is number => id !== undefined);
    onChange(selectedIds);
  };

  const handleOpenChange = () => {
    setOpenAll((prevValue) => !prevValue);
  };

  useEffect(() => {
    if (clearFilters) {
      setSelectedQueries([]);
    }
  }, [clearFilters]);

  return (
    <div className={cn("border-b-2 border-gray-400", openAll ? "pb-8" : "pb-4")}>
      <div
        className="flex justify-between items-center cursor-pointer py-4"
        onClick={handleOpenChange}
      >
        <div>
          <span className="text-xl font-light">{nameQuery}</span>
        </div>
        <div
          className={cn("transition-transform duration-300", {
            "transform rotate-180": openAll,
          })}
        >
          <ChevronDownIcon width={24} />
        </div>
      </div>

      {openAll && (
        <div>
          <ul className="space-y-4">
            {querys?.map((queryData) => (
              <li key={queryData.query} className="text-xl font-light">
                <label className="flex items-center">
                  <Checkbox
                    className="mr-4 scale-125"
                    checked={selectedQueries.includes(queryData.query)}
                    onChange={() => {
                      if (queryData.id !== undefined) {
                        handleCheckboxChange(queryData.query, queryData.id);
                      }
                    }}
                  />
                  <span>
                    {queryData.query}
                    <span>{queryData?.count}</span>
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterList;
