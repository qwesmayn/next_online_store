import { FC } from "react";
import FirstBlock from "./FirstBlock/FirstBlock";
import Categries from "./Categries/Categries";
import Products from "./Products/Products";
import TopBrand from "./TopBrand/TopBrand";
import { IDevice } from "@/types/device.interface";

interface LandingProps {
  data : IDevice
}

const Landing : FC<LandingProps> = ({data}) => {
  return (
    <div className="space-y-14">
        <FirstBlock />
        <Categries /> 
        <Products data = {data}/>
        <TopBrand />
    </div>
  );
}

export default Landing;