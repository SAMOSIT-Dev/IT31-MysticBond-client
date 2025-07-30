import { cn } from "../../libs/utils/utils";

/**
 *
 * @param {import("react").ComponentProps<'button'> & {varaint?: string}}
 */
export default function Button({
  children,
  className,
  varaint = "primary",
  ...props
}) {
  const buttonVaraint = {
    primary:
      "bg-[#6600C0] border border-[#C08CFF] font-bold text-lg shadow-[0px_4px_61px_5px_#3D166D] disabled:bg-[#494949] disabled:border-[#9B9B9B] disabled:text-[#A8A8A8] disabled:shadow-none",
    secondary: "",
    white: "bg-white text-black font-bold text-lg",
  };

  return (
    <button
      className={cn(
        "rounded-full flex items-center justify-center p-3.5 cursor-pointer",
        buttonVaraint[varaint],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
