import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface InputPrefixProps extends ComponentProps<"div"> {}

export function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />;
}

interface InputControlProps extends ComponentProps<"input"> {}

export function InputControl(props: InputControlProps) {
  return (
    <input
      className={twMerge(
        "flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600",
        "dark:text-zinc-100 dark:placeholder-zinc-400",
      )}
      {...props}
    />
  );
}

export interface InputRootProps extends ComponentProps<"div"> {}

export function InputRoot(props: InputRootProps) {
  return (
    <div
      className={twMerge(
        "mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm",
        "focus:within:ring-4 focus:within:ring-violet-100 focus-within:border-violet-300",
        "dark:focus:within:ring-violet-500/10 dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-600",
        props.className,
      )}
      {...props}
    />
  );
}
