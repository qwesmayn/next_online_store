import { FC } from "react";
import SlugCard from "./SlugCard";
import slugFilters from "./slugFiler.data";

const SlugFilter: FC = () => {
    return (
        <div className="space-x-8 flex items-center justify-between flex-wrap">
            {slugFilters.map((filter) => (
                <SlugCard 
                    key={filter.link} 
                    img={filter.img} 
                    name={filter.name} 
                    link={filter.link} 
                />
            ))}
        </div>
    );
}

export default SlugFilter;
