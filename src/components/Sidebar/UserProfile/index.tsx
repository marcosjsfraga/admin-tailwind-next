import { LogOut } from "lucide-react";

export function UserProfile() {
  return (
    <div className="mt-auto flex items-center gap-3">
      <div className="h-px bg-zinc-200"></div>

      <img
        src="https://github.com/marcosjsfraga.png"
        className="h-10 w-10 rounded-full"
        alt="avatar"
      />

      <div className="flex flex-col truncate">
        <span className="text-small font-semibold text-zinc-700">
          Marcos Fraga
        </span>
        <span className="truncate text-sm text-zinc-500">
          marcosjsfraga@gmail.com
        </span>
      </div>
      <button
        type="button"
        className="ml-auto rounded-md p-2 hover:bg-zinc-100"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  );
}
