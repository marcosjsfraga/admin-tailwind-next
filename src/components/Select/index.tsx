"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";

export function Select() {
  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger
        className={`flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600`}
      >
        <SelectPrimitive.Value
          placeholder="Selecione um país"
          className="text-black"
        />
        <SelectPrimitive.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white"
          sideOffset={4}
        >
          <SelectPrimitive.Viewport className="outline-none">
            <SelectPrimitive.Item
              value="br"
              className="gap-w flex items-center px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
            >
              <SelectPrimitive.ItemText className="text-black">
                Brasil
              </SelectPrimitive.ItemText>
            </SelectPrimitive.Item>
            <SelectPrimitive.Item
              value="pt"
              className="gap-w flex items-center px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
            >
              <SelectPrimitive.ItemText className="text-black">
                Portugal
              </SelectPrimitive.ItemText>
            </SelectPrimitive.Item>
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
