import { Tabs } from "radix-ui";
import { cn } from "../libs/utils/utils";
import { createContext, use, useCallback, useEffect, useMemo, useState } from "react";

const StepContext = createContext();

export function useStep() {
  const context = use(StepContext);
  if (!context) {
    throw new Error("useStep must be used within StepProvider");
  }
  return context;
}

export function StepProvider({
  defaultValue = "",
  defaultValueOfStepItems = [],
  children,
}) {
  const [value, setValue] = useState(defaultValue);
  const [stepItems, setStepItems] = useState(defaultValueOfStepItems);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    setStepItems(defaultValueOfStepItems);
  }, [defaultValueOfStepItems]);

  const updateStepItemState = useCallback((key, value) => {
    setStepItems((prev) =>
      prev.map((item) => (item.key === key ? { ...item, ...value } : item))
    );
  }, []);

  const getStepIndex = useMemo(() => {
    const index = stepItems.findIndex((x) => x.key === value);
    return index;
  }, [stepItems, value]);

  const context = {
    value,
    setValue,
    updateStepItemState,
    stepItems,
    getStepIndex,
  };

  return (
    <StepContext.Provider value={context}>{children}</StepContext.Provider>
  );
}

/**
 *
 * @param {Tabs.TabsProps} param0
 * @returns
 */
export function Step({ children, ...props }) {
  const { setValue, value } = useStep();
  return (
    <Tabs.Root value={value} onValueChange={setValue} {...props}>
      {children}
    </Tabs.Root>
  );
}

export function StepIndicator() {
  const { value, stepItems, getStepIndex } = useStep();

  const getDividerStyle = (currentIndex) => {
    const stepIndex = getStepIndex;

    if (currentIndex < stepIndex) {
      return "#7200FD70";
    }

    return "rgba(183, 183, 183, 0.44)";
  };

  return (
    <Tabs.List className="flex">
      {stepItems.map((item, i) => (
        <div key={item.key} className="flex">
          <div className="grid grid-cols-[repeat(2,_auto)] grid-rows-[repeat(2,_auto)]">
            <Tabs.Trigger
              disabled={item.disabled}
              aria-readonly
              className={cn(
                "flex items-center justify-center p-4 px-10 font-normal bg-[#B7B7B770] rounded-full text-white col-span-1",
                "data-[state='active']:bg-white data-[state='active']:font-black data-[state='active']:text-black group",
                "backdrop-blur-[19.200000762939453px]",
                item.activated && "bg-[#7200FD70] data-[state='active']:text-white data-[state='active']:bg-[#7200FD]",
                "max-md:h-14 max-md:data-[state='inactive']:size-14 max-md:data-[state='inactive']:p-4"
              )}
              value={item.key}
            >
              <span className="max-md:hidden group-data-[state='active']:block">
                {item.label}
              </span>
              {item?.icon && (
                <i className="flex md:hidden group-data-[state='active']:hidden text-white">
                  {item.icon}
                </i>
              )}
            </Tabs.Trigger>
            {i < stepItems.length - 1 && (
              <div
                className={cn(
                  "my-auto flex before:relative before:content-[''] before:w-20 before:h-px col-span-1 row-span-1",
                  "max-md:before:max-w-6"
                )}
                style={{
                  background: getDividerStyle(i),
                  transition: "background 0.7s ease",
                }}
              ></div>
            )}
            <p className="text-xs mt-2 text-center row-start-2">
              {item.activated
                ? "เสร็จสิ้น"
                : value === item.key
                ? "กำลังดำเนินการ"
                : "ยังไม่เริ่ม"}
            </p>
          </div>
        </div>
      ))}
    </Tabs.List>
  );
}

/**
 *
 * @param {Tabs.TabsContentProps} param0
 * @returns
 */
export function StepTabContent({ ...props }) {
  return <Tabs.Content className="outline-none" {...props} />;
}
