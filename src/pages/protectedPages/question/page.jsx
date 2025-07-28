import Button from "../../../components/ui/Button";

import BG from "../../../assets/images/quiz_bg.png";
import {
  Step,
  StepIndicator,
  StepProvider,
  StepTabContent,
} from "../../../components/Step";
import StartTab from "./_components/StartTab";
import QuestionTab from "./_components/QuestionTab";
import ResultTab from "./_components/ResultTab";
import { ClipboardList, Send, Sparkles } from "lucide-react";

export default function QuestionPage() {
  return (
    <div
      className="flex flex-col w-screen min-h-screen max-h-full bg-cover bg-center bg-fixed p-4 py-12"
      style={{
        backgroundImage: `url(${BG})`,
      }}
    >
      <div className="fixed w-screen h-full inset-0 bg-black/50"></div>
      <div className="m-auto max-w-300 h-max w-full p-5 py-15 max-md:p-7 flex flex-col text-white border-white/10 glass-card">
        <StepProvider
          defaultValue="start"
          defaultValueOfStepItems={[
            {
              key: "start",
              label: "เริ่มต้น",
              disabled: true,
              activated: false,
              icon: <Sparkles />,
            },
            {
              key: "question",
              label: "แบบทดสอบ",
              disabled: true,
              activated: false,
              icon: <ClipboardList />,
            },
            { key: "result", label: "สรุปผล", disabled: true, icon: <Send className="relative right-px"/> },
          ]}
        >
          <Step className="flex flex-col" activationMode="manual">
            <div className="mx-auto">
              <StepIndicator />
            </div>
            <StartTab />
            <QuestionTab />
            <ResultTab
            //   houseData={{
            //     title: "Giffin",
            //     description:
            //       "มีความยืดหยุ่นสูง สนุกกับการลงมือทำจริง ชอบลองสิ่งใหม่ โดยเฉพาะสิ่งที่เกี่ยวข้องกับประสบการณ์ตรง",
            //   }}
            />
          </Step>
        </StepProvider>
      </div>
    </div>
  );
}
