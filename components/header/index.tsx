import React from "react";
import Link from "next/link";
import Image from "next/image";

import SearchBar from "./SearchBar";
import Theme from "./Theme";
import Language from "./Language";
import CartIcon from "../cart/CartIcon";
import SideBar from "./SideNav/SideBar";
import SideNavSide from "./SideNav/SideNavSide";
import MegaMenu from "./MegaMenu/MegaMenu";
import ExtraMenu from "./MegaMenu/ExtraMenu";
import { ActiveMenuItemProvider } from "../../store/context/activeMenuItemContext";
import { MegaMenuContextProvider } from "../../store/context/megaMenuContext";
import dynamic from "next/dynamic";
// import UserBox from "./user";
const UserBox = dynamic(() => import("./user"), {
  ssr: false,
});

const Header = () => {
  return (
    <header className="md:fixed left-0 right-0 top-0 md:bg-palette-fill shadow-sm pt-4 z-[1000]">
      <ActiveMenuItemProvider>
        {/* 📱 sm break point */}
        <div className="md:hidden">
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <div className="">
                <SideBar />
                <SideNavSide />
              </div>
              <Link href="/" className="">
                <a className="flex items-center w-full ">
                  <Image
                    src="/images/logo.png"
                    alt="zishop-logo"
                    width={120}
                    height={25}
                    objectFit="contain"
                    className="cursor-pointer ltr:-mr-3 "
                  />
                </a>
              </Link>
            </div>
            <div className="flex rtl:w-[9rem] ltr:w-[9rem] justify-between items-center ">
              <Language />
              <Theme />
            </div>
          </div>
          <hr />
          <div className="mb-2 mt-4 flex items-center">
            <SearchBar />
            <div className="ltr:ml-4 rtl:mr-4 flex items-center justify-between ltr:w-[4.1rem] rtl:w-[4.3rem] ">
              <UserBox />
              <CartIcon />
            </div>
          </div>
        </div>

        {/* 💻 md break point */}
        <div className="hidden md:block px-4 relative">
          <div className="flex items-center">
            <Link href="/" className="">
              <a className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="zishop-logo"
                  width={120}
                  height={25}
                  objectFit="contain"
                  className="cursor-pointer ltr:-mr-3"
                />
              </a>
            </Link>
            <div className="md:block ltr:ml-4 rtl:mr-4 grow">
              <SearchBar />
            </div>
            <div className="hidden md:flex items-center justify-between font-bold ltr:ml-4 rtl:mr-4">
              <UserBox />
              <CartIcon />
            </div>
          </div>
          <div className="hidden md:flex justify-between items-center my-4">
            <div className="flex items-center grow">
              <MegaMenuContextProvider>
                <MegaMenu />
              </MegaMenuContextProvider>
              <ExtraMenu />
            </div>
            <div className="flex items-center justify-between ltr:w-[10rem] rtl:w-[9.3rem]">
              <Language />
              <Theme />
            </div>
          </div>
        </div>
      </ActiveMenuItemProvider>
    </header>
  );
};

export default Header;
