'use client'
import { FC } from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import * as routes from "@/utils/const";

const routeMapping = {
  [routes.homeRoute]: { label: "Home", path: routes.homeRoute },
  [routes.productsRoute]: { label: "Products", path: routes.productsRoute },
  [routes.blogRoute]: { label: "Blog", path: routes.blogRoute },
  [routes.faqRoute]: { label: "FAQ", path: routes.faqRoute },
  [routes.contactsRoute]: { label: "Contacts", path: routes.contactsRoute },
  [routes.searchRoute]: { label: "Search", path: routes.searchRoute },
  [routes.cartRoute]: { label: "Cart", path: routes.cartRoute },
  [routes.profileRoute]: { label: "Profile", path: routes.profileRoute },
};

const BreadcrumbsComponent: FC = () => {
  const pathname = usePathname();

  const segments = pathname.split("/").filter((segment) => segment !== "");

  if (pathname === routes.homeRoute) {
    return null;
  }

  let breadcrumbs: { label: string; path: string }[] = [
    { label: "Home", path: routes.homeRoute },
  ];

  let currentPath = "";
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;

    const matchingRoute = Object.values(routeMapping).find(
      (route) => route.path === currentPath
    );

    if (matchingRoute) {
      breadcrumbs.push({
        label: matchingRoute.label,
        path: matchingRoute.path,
      });
    } else {
      breadcrumbs.push({
        label: segment.charAt(0).toUpperCase() + segment.slice(1),
        path: currentPath,
      });
    }
  });

  return (
    <nav className="space-x-1 flex items-center py-6">
      {breadcrumbs.map((item, index) => (
        <div key={index} className="flex items-center">
          <Link
            href={item.path}
            className={`text-lg p-2 transition duration-300 ${
              index === breadcrumbs.length - 1
                ? "text-sky hover:text-sky border-b-[1px] border-sky-600"
                : "hover:text-sky hover:border-sky-600 "
            }`}
          >
            {item.label}
          </Link>
          {index < breadcrumbs.length - 1 && (
            <ChevronRightIcon width={18} className="text-sky mx-1" />
          )}
        </div>
      ))}
    </nav>
  );
};

export default BreadcrumbsComponent;
