import { Check } from "lucide-react";
import { Checkbox as RadixCheckbox } from "radix-ui";
import { cn } from "../../libs/utils/utils";

/**
 *
 * @param {import("radix-ui").Checkbox.CheckboxProps}
 */
export default function Checkbox({ className, ...props }) {
  return (
    <RadixCheckbox.Root
      className={
        cn(
          "size-5 border-2 bg-[#1D1D20] border-[#46464D] appearance-none outline-none rounded-md flex items-center justify-center",
          className
        )
      }
      {...props}
    >
      <RadixCheckbox.Indicator>
        <Check size={12}/>
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
}
