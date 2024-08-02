import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
import { HeaderNav } from "./header.interface";
import { blogRoute, cartRoute, contactsRoute, faqRoute, homeRoute, productsRoute, profileRoute, searchRoute } from "@/utils/const";

export const NavItems: HeaderNav[] = [
  {
    content: "Home",
    link: homeRoute,
  },

  {
    content: "Products",
    link: productsRoute,
  },
  
  {
    content: "Blog",
    link: blogRoute,
  },

  {
    content: "FAQ",
    link: faqRoute,
  },

  {
    content: "Contact Us",
    link: contactsRoute,
  },

  {
    content: MagnifyingGlassIcon,
    link: searchRoute,
  },

  {
    content: ShoppingCartIcon,
    link: cartRoute,
  },

  {
    content: UserIcon,
    link: profileRoute,
  },
];
