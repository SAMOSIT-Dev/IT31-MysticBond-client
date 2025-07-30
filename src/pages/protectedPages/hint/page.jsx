import { Tally1, Tally2, Tally3 } from "lucide-react";

import BG from "../../../assets/images/quiz_bg.png";
import BOOK_PROP from "../../../assets/images/Prop2_3x.webp";

import NavBar from "../../../components/NavBar";
import {
  Step,
  StepIndicator,
  StepProvider,
  StepTabContent,
} from "../../../components/Step";
import { useMemo } from "react";
import { Hint } from "../../../libs/api/hint.api";
import { useLoaderData } from "react-router";

const defaultStepValues = [
  {
    key: "1",
    label: "คำใบ้ชิ้นแรก",
    disabled: false,
    activated: true,
    icon: <Tally1 className="relative -right-2 w-max" />,
  },
  {
    key: "2",
    label: "คำใบชิ้นที่ 2",
    disabled: false,
    activated: true,
    icon: <Tally2 className="relative -right-1.5 w-max" />,
  },
  {
    key: "3",
    label: "คำใบ้ชิ้นที่ 3",
    disabled: false,
    activated: true,
    icon: <Tally3 className="relative -right-0.75 w-max" />,
  },
];

export default function HintPage() {
  const { data: initalData = {} } = useLoaderData() || { data: {} };
  const { data } = Hint.getHints(initalData);

  const hints = useMemo(() => {
    return data?.data?.data?.hints ?? [];
  }, [data]);

  const hasHints = !!hints.length;

  const getStepItems = useMemo(() => {
    const formatted = defaultStepValues.map((value, i) => {
      if (i < hints.length) {
        return { ...value, disabled: false, activated: true };
      }
      return { ...value, disabled: true, activated: false };
    });
    return formatted;
  }, [data]);

  return (
    <div
      className="flex flex-col w-screen min-h-screen max-h-full bg-cover bg-center bg-fixed p-4 py-12"
      style={{
        backgroundImage: `url(${BG})`,
      }}
    >
      <div className="fixed w-screen h-full inset-0 bg-black/50"></div>
      <div className="relative h-18.25 mb-14">
        <NavBar />
      </div>
      <div className="m-auto max-w-300 h-max w-full p-5 py-15 max-md:p-7 flex flex-col text-white border-white/10 glass-card">
        <div className="text-center">
          <StepProvider
            defaultValue={hasHints ? "1" : ""}
            defaultValueOfStepItems={getStepItems}
          >
            <Step className="flex flex-col" activationMode="manual">
              <div className="mx-auto mb-10">
                {hints.length > 0 ? (
                  hints.map((hint, i) => (
                    <StepTabContent key={hint} value={String(i + 1)}>
                      <div className="text-center max-w-130">
                        <p className="text-xl text-[#828282]">
                          คำใบชิ้นที่ {i + 1}
                        </p>
                        <p className="text-5xl leading-normal mt-7">"{hint}"</p>
                      </div>
                    </StepTabContent>
                  ))
                ) : (
                  <div className="mx-auto text-center">
                    <div className="mx-auto max-w-100 my-10">
                      <img src={BOOK_PROP} />
                    </div>
                    <p className="text-3xl leading-normal">
                      โปรดรอการประกาศจากทางโครงการ
                    </p>
                    <div className="mt-5 text-sm text-center text-[#A4A4A4]">
                      <p>“ทางเลือกวันนี้จะกำหนดตัวตนของคุณในวันข้างหน้า”</p>
                      <p className="leading-6">- Tim Fargo</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="mx-auto">
                <StepIndicator />
              </div>
            </Step>
          </StepProvider>
        </div>
      </div>
    </div>
  );
}
