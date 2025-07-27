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
      "bg-[#6600C0] border border-[#C08CFF] font-bold text-lg shadow-[0px_4px_61px_5px_#3D166D]",
    secondary: "",
    white: "",
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
