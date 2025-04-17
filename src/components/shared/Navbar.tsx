import * as React from "react";
// import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";
import { images, routes } from "@/utils/constants";

const caseStudies: { title: string; href: string; description: string }[] = [
  {
    title: "Azure II Case Study",
    href: "/docs/primitives/alert-dialog",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, veritatis!",
  },
  {
    title: "Minerva House Case Study",
    href: "/docs/primitives/hover-card",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, veritatis!",
  },
  {
    title: "1920 Pierce Case Study ",
    href: "/docs/primitives/progress",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, veritatis!",
  },
];
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, veritatis!",
  },
  {
    title: " Lorem, ipsum",
    href: "/docs/primitives/hover-card",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, veritatis!",
  },
  {
    title: "Lorem, ipsum",
    href: "/docs/primitives/progress",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, veritatis!",
  },
  {
    title: "Lorem, ipsum",
    href: "/docs/primitives/scroll-area",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, veritatis!",
  },
  {
    title: "Lorem, ipsum",
    href: "/docs/primitives/tabs",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, veritatis!",
  },
  {
    title: "Lorem, ipsum",
    href: "/docs/primitives/tooltip",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, veritatis!",
  },
];

export function Navbar() {
  const navigate = useNavigate();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <a href={routes.portfolio}>
            <NavigationMenuLink
              className={`navbar-text navbar-text text-white hover:text-white " ${navigationMenuTriggerStyle()}`}
            >
              Portfolio
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href={routes.caseStudy}>
            <NavigationMenuLink
              className={`navbar-text navbar-text text-white hover:text-white " ${navigationMenuTriggerStyle()}`}
            >
              Case Studies
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <a href={routes.contactUs}>
            <NavigationMenuLink
              className={`navbar-text navbar-text text-white hover:text-white " ${navigationMenuTriggerStyle()}`}
            >
              Contact Us
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem> */}
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger className="navbar-text text-white hover:text-white ">
            Company
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-[#111] text-white hover:text-newWhite">
            <ul className="grid gap-3 p-6 md:w-[300px] lg:w-[400px] lg:grid-cols-1">
              <div
                className="hover:bg-[#333] p-4 flex flex-col  justify-center rounded-lg h-20 hover:cursor-pointer"
                onClick={() => {
                  navigate(routes.company);
                }}
              >
                <p>About Us</p>
                <p className="font-medium text-xs">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, veritatis!
                </p>
              </div>
              <div
                className="hover:bg-[#333] p-4 flex flex-col  justify-center rounded-lg h-20 hover:cursor-pointer"
                onClick={() => {
                  navigate(routes.contactUs);
                }}
              >
                <p>Contact Us</p>
                <p className="font-medium text-xs">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, veritatis!
                </p>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger className="navbar-text text-white hover:text-white ">
            Case Studies
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-[#111] text-white hover:text-newWhite">
            <ul className="grid gap-3 p-6 md:w-[300px] lg:w-[400px] lg:grid-cols-1">
              <div
                className="hover:bg-[#333] p-4 flex flex-col  justify-center rounded-lg h-20 hover:cursor-pointer"
                onClick={() => {
                  navigate(routes.azure);
                }}
              >
                <p>Azure II </p>
                <p className="font-medium text-xs">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, veritatis!
                </p>
              </div>
              <div
                className="hover:bg-[#333] p-4 flex flex-col  justify-center rounded-lg h-20 hover:cursor-pointer"
                onClick={() => {
                  navigate(routes.minerva);
                }}
              >
                <p>Minerva House </p>
                <p className="font-medium text-xs">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, veritatis!
                </p>
              </div>
              <div
                className="hover:bg-[#333] p-4 flex flex-col  justify-center rounded-lg h-20 hover:cursor-pointer"
                onClick={() => {
                  navigate(routes.pierce);
                }}
              >
                <p>1920 Pierce</p>
                <p className="font-medium text-xs">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, veritatis!
                </p>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger className="navbar-text text-white hover:text-white ">
            Case Studies
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-darkBlue text-newWhite hover:text-newWhite">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {caseStudies.map((component) => (
                <div
                  key={component.title}
                  className="hover:bg-darkBlueHover p-2 rounded-lg h-24 hover:cursor-pointer"
                  onClick={() => {
                    navigate(component.href);
                  }}
                >
                  <p>{component.title}</p>
                  <p className="font-medium text-xs mt-2">
                    {component.description}
                  </p>
                </div>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="navbar-text text-white hover:text-white ">
            Components
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-darkBlue text-newWhite hover:text-newWhite">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <div
                  key={component.title}
                  className="hover:bg-darkBlueHover p-2 rounded-lg h-24 hover:cursor-pointer"
                  onClick={() => {
                    navigate(component.href);
                  }}
                >
                  <p>{component.title}</p>
                  <p className="font-medium text-xs mt-2">
                    {component.description}
                  </p>
                </div>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <a href={routes.services}>
            <NavigationMenuLink
              className={`navbar-text navbar-text text-white hover:text-white " ${navigationMenuTriggerStyle()}`}
            >
              Services
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href={routes.company}>
            <NavigationMenuLink
              className={`navbar-text navbar-text text-white hover:text-white " ${navigationMenuTriggerStyle()}`}
            >
              About Us
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
