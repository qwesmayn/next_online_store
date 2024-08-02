import Image from "next/image";
import { FC } from "react";

interface CardCategorieProps {
    name : string
    img : any
}

const CardCategorie : FC<CardCategorieProps> = ({name, img}) => {
    return (
        <div className="flex justify-center items-center flex-col px-4 py-2 flex-wrap shadow-lg w-[184px] h-[196px] rounded-lg cursor-pointer bg-white hover:shadow-2xl transition duration-300">
            <div className="mb-2">
                <Image src={img} width="148" height="148" alt={name}/>
            </div>
            <div>
                <span className="text-base font-light text-gray-500">{name}</span>
            </div>
        </div>
    );
}

export default CardCategorie;
