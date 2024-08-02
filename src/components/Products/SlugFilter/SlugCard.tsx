'use client'
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { ISlugCard } from "./slugCard.interface";
import { useParams} from "next/navigation";
import cn from 'clsx'

const SlugCard: FC<ISlugCard> = ({ img, name, link }) => {
    const {slug} = useParams();
    
    return (
        <Link href={`/products/${link}`} className={cn("p-2 hover:border-b-[3px] border-b-[3px] transition duration-300 hover:border-blue-800 flex items-center flex-col", slug === link && "border-blue-800")}>
            <Image width={35} height={43} alt={name} src={img}/>
            <span className="text-xl text-gray-600">{name}</span>
        </Link>
    );
};

export default SlugCard;
