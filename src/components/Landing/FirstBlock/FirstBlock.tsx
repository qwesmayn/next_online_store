import Image from "next/image";
import { FC } from "react";
import laptop from "/public/laptop.jpg"

const FirstBlock : FC = () => {
  return (
    <div className="flex justify-between items-center mt-1 flex-wrap">
        <div>
          <div className="mb-12"><span className="text-blue-950 font-bold text-6xl">Tech Heim</span></div>
          <div className="mb-28"><span className="text-blue-950 font-medium text-3xl">"Join the <span className="text-orange-600">digital revolution</span>"</span></div>
          <div><button className="bg-orange-600 text-white px-24 py-5 rounded-xl hover:bg-orange-800 transition duration-300">Explore More</button></div>
        </div>
        <div>
          <Image src={laptop} width="728" height="443" alt="Laptop"/>
        </div>
    </div>
  );
}

export default FirstBlock;
