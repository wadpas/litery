import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";

const Header = () => (
  <header className="sticky top-0 z-50 w-full shadow-xs backdrop-blur-xs">
    <div className="wrapper flex-between p-2">
      <div className="flex-start hover:cursor-pointer">
        <Link href="/" className="flex-center flex-1">
          <Image
            src="/images/logo.svg"
            alt={`${APP_NAME} logo`}
            width={50}
            height={50}
          />
          <span className="font ml-2 hidden text-2xl font-bold md:block">
            {APP_NAME.toUpperCase()}
          </span>
        </Link>
      </div>
      <Menu />
    </div>
  </header>
);

export default Header;
