"use client";

import { Menu, Search } from "lucide-react";
import { InputControl, InputPrefix, InputRoot } from "../Input";
import Logo from "./Logo";
import { MainNavigation } from "./MainNavigation";
import { UserProfile } from "./UserProfile";
import * as Collapsible from "@radix-ui/react-collapsible";

export function Sidebar() {
  return (
    <Collapsible.Root
      className={`fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-300 bg-white p-4 data-[state=open]:bottom-0 data-[state=open]:h-screen dark:border-zinc-800 dark:bg-zinc-900  
        lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 lg:data-[state=closed]:h-screen`}
    >
      <div className="flex items-center justify-between">
        <Logo />

        <Collapsible.Trigger asChild className="lg:hidden">
          <button>
            <Menu className="h-6 w-6" />
          </button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <InputRoot>
          <InputPrefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </InputPrefix>
          <InputControl placeholder="Search" />
        </InputRoot>
        <MainNavigation />
        <UserProfile />
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
