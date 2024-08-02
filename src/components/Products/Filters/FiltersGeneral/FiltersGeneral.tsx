import { FC, useEffect } from 'react';
import FilterList from '../FilterList/FilterList';
import { IBrand } from '@/types/brand.interface';

interface FiltersGeneralProps {
  brands: IBrand[];
  onFiltersChange: (filters: number[]) => void;
  selectedBrands: number[];
  clearFilters: boolean;
}

const FiltersGeneral: FC<FiltersGeneralProps> = ({ brands, onFiltersChange, selectedBrands, clearFilters }) => {
  const brandQueries = brands.map((brand) => ({
    id: brand.id,
    query: brand.name,
  }));

  useEffect(() => {
    onFiltersChange(selectedBrands);
  }, [selectedBrands]);

  return (
    <div>
      <FilterList
        nameQuery="Brand"
        querys={brandQueries}
        onChange={onFiltersChange}
        clearFilters={clearFilters}
      />
    </div>
  );
};

export default FiltersGeneral;
