"use client";

import Link from "next/link";
import { Fragment } from "react";
import { Transition, Menu } from "@headlessui/react";
import { List, Moon } from "@phosphor-icons/react";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const navigation = [
  { name: "About", href: "/about" },
  // { name: "Projects", href: "/projects" },
  // { name: "Technologies", href: "/technologies" },
  { name: "Contact Me", href: "/contact" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);
  const pathname = usePathname();

  console.log({ pathname });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="bg-light-gray dark:bg-dark-gray shadow-md dark:text-white ">
      <nav
        className="mx-auto flex max-w-7xl items-center  justify-between p-6 sm:px-8"
        aria-label="Global"
      >
        <div className="flex items-center">
          <Link href={"/"}>
            <span className=" mr-4 cursor-pointer text-2xl font-semibold">
              Devon Soto
            </span>
          </Link>
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Devon Soto</span>
          </Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full  p-2 hover:bg-gray-200 dark:hover:bg-black"
          >
            <Moon size={24} fill={darkMode ? "white" : "black"} />
          </button>
        </div>
        <Menu as="div" className="relative ml-3 md:hidden">
          <div>
            <Menu.Button className="flex rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="sr-only">Open user menu</span>
              <List className="h-6 w-6" aria-hidden="true" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="about"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700",
                    )}
                  >
                    About
                  </Link>
                )}
              </Menu.Item>
              {/* <Menu.Item>
                {({ active }) => (
                  <Link
                    href="projects"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700",
                    )}
                  >
                    Projects
                  </Link>
                )}
              </Menu.Item> */}
              {/* <Menu.Item>
                {({ active }) => (
                  <Link
                    href="technologies"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700",
                    )}
                  >
                    Technologies
                  </Link>
                )}
              </Menu.Item> */}
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="contact"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700",
                    )}
                  >
                    Contact Me
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
        <div className="hidden items-center md:flex md:gap-x-12">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            const linkClass = cn(
              "hover:text-ai-cyan-hover dark:text-ai-cyan dark:hover:text-ai-cyan-dark-hover scroll-smooth text-sm font-semibold leading-6",
              {
                "border-b-2 border-ai-cyan": isActive, // Example active style: underline with a specific color
                // Add more conditional styles for active state if needed
              },
            );
            return (
              <Link key={item.name} href={item.href} className={linkClass}>
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
