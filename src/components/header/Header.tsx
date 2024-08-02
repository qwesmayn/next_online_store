'use client'
import Image from "next/image";
import { NavItems } from "./header.data";
import Link from "next/link";
import { HeaderNav } from "./header.interface";
import { usePathname } from "next/navigation";
import cn from 'clsx'
import { FC } from "react";

const Header : FC = () => {
  const pathname = usePathname()

  return (
    <header className="flex justify-between items-center py-4 px-28 shadow-gradient-header">
      <div>
        <Link href="/">
          <Image src="/logo.png" width="56" height="63" alt="Logo"/>
        </Link>
      </div>
      <div>
        <nav className="space-x-12">
          {NavItems.map(
            (item: HeaderNav, index) =>
              typeof item.content === "string" && (
                <Link href={item.link} key={index} className={cn('text-lg p-2 transition duration-300 hover:text-sky hover:border-b-[1px] hover:border-sky-600',  pathname === item.link || (item.link !== '/' && pathname.startsWith(item.link)) ? "text-sky border-b-[1px] border-sky-600" : "text-black")}>
                  {item.content}
                </Link>
              )
          )}
        </nav>
      </div>
      <div className="flex justify-center items-center space-x-2">
        {NavItems.map(
          (item: HeaderNav, index) =>
            typeof item.content !== "string" && (
              <div className="w-6 h-6" key={index}>
                <Link href={item.link} className="w-6 h-6">
                  <item.content />
                </Link>
              </div>
            )
        )}
      </div>
    </header>
  );
}

export default Header;