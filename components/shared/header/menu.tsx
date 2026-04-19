import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex-end gap-3">
      <nav className="hidden md:flex">
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart />
            Кошик
          </Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/account">
            <UserIcon />
            Вхід
          </Link>
        </Button>
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start p-2">
            <SheetTitle className="ml-3">Меню</SheetTitle>
            <Button asChild variant="ghost">
              <Link href="/cart">
                <ShoppingCart />
                Кошик
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/account">
                <UserIcon />
                Вхід
              </Link>
            </Button>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
