'use client';

import { IBrand } from "@/types/brand.interface";
import { IDevice } from "@/types/device.interface";
import { FC, useState } from "react";
import Filters from "./Filters/Filters";
import ProductList from "./ProductList/ProductList";

interface ProductsProps {
    initialBrands: IBrand[];
    initialDevices: IDevice;
}

const Products: FC<ProductsProps> = ({ initialBrands, initialDevices }) => {
    const [filteredData, setFilteredData] = useState<IDevice>(initialDevices);

    return (
        <div className="h-screen">
            <div className="flex mt-24">
                <div className="w-[288px] mr-6">
                    <Filters brands={initialBrands} onFiltersChange={setFilteredData} initialDevices={initialDevices} />
                </div>
                <div className="w-9/12">
                    <ProductList data={filteredData} />
                </div>
            </div>
        </div>
    );
};

export default Products;
