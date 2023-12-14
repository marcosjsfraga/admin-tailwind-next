import { SettingsTabs } from "@/components/SettingsTabs";
import { InputControl, InputPrefix, InputRoot } from "@/components/Input";
import { Select } from "@/components/Select";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      {/* Content */}
      <div className="mt-6 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
            <span className="text-sm text-zinc-500">
              Update your information
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              form="formSettings"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800"
            >
              Salvar
            </button>
          </div>
        </div>
        {/* Form */}
        <form id="formSettings" className="mt-6 flex w-full flex-col gap-5">
          {/* Line 1 */}
          <div className="grip grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <InputRoot>
                <InputControl id="firstName" defaultValue="Marcos" />
              </InputRoot>
              <InputRoot>
                <InputControl id="lastName" defaultValue="Fraga" />
              </InputRoot>
            </div>
          </div>
          {/* Line 2 */}
          <div className="grip grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <Select />
          </div>
        </form>
      </div>
    </>
  );
}
