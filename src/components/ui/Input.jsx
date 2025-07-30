import { cn } from "../../libs/utils/utils";

/**
 *
 * @param {import("react").ComponentProps<'input'> & {leftIcon?: import("react").ReactNode}}
 * @returns
 */
export default function Input({ leftIcon, className, ...props }) {
  return (
    <div
      className={cn(
        "flex items-center rounded-xl text-white overflow-hidden border-2 h-15 bg-[#1D1D20] border-[#46464D] font-inria-serif placeholder-[#626268]",
        className
      )}
    >
      {leftIcon && (
        <div
          className={cn(
            "flex items-center justify-center size-15 px-3 relative",
            "after:absolute after:content-[''] after:right-0 after:w-px after:h-3 after:bg-[#626268]"
          )}
        >
          {leftIcon}
        </div>
      )}
      <input className="flex w-full h-full outline-0 p-4" {...props} />
    </div>
  );
}
