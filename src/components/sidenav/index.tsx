"use client";

import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useState } from "react";

const SideNav = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  return (
    <nav className="flex">
      <button
        className="absolute right-0 m-5 lg:hidden"
        onClick={() => setShow(true)}
      >
        <Menu />
      </button>
      <div
        className={`${show ? "translate-x-0" : "-translate-x-full"} fixed inset-0 bg-black/50 transition-transform duration-300 lg:hidden`}
        onClick={() => setShow(false)}
      ></div>
      <div
        className={`${show ? "translate-x-0" : "-translate-x-full"} fixed z-50 h-screen w-4/5 bg-neutral-900 p-5 transition-transform duration-300 lg:static lg:w-1/4 lg:translate-x-0`}
      >
        <h2 className="text-xl font-semibold">Components</h2>
        <ul className="my-3">
          <li
            className={`${pathname === "/buttons" && "bg-neutral-800"} cursor-pointer rounded-md px-3 py-2 text-lg font-medium hover:bg-neutral-800`}
          >
            Buttons
          </li>
        </ul>
      </div>
      <div className="h-screen w-full overflow-y-scroll p-5">
        <h1 className="text-2xl font-bold capitalize">
          {pathname.split("/")[1]}
        </h1>
        {children}
      </div>
    </nav>
  );
};

export default SideNav;
