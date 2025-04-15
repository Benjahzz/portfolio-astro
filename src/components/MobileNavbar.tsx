import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/constants";
import { useState } from "react";

const MobileNavbar = () => {

  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="mr-2 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] z-[60]">
        <SheetHeader className="text-left">
          <SheetTitle>Menú</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 pt-4">
          {NAV_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
