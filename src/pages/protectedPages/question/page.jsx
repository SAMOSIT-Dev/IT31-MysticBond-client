import BG from "../../../assets/images/quiz_bg.png";

import { Step, StepIndicator, StepProvider } from "../../../components/Step";
import StartTab from "./_components/StartTab";
import QuestionTab from "./_components/QuestionTab";
import ResultTab from "./_components/ResultTab";
import { ClipboardList, Send, ShieldAlert, Sparkles } from "lucide-react";
import { Profile } from "../../../libs/api/profile.api";
import { useMemo } from "react";
import { useLoaderData } from "react-router";
import NavBar from "../../../components/NavBar";
import Loading from "../../../components/Loading";
import AnimatedLayout from "../../../components/AnimatedLayout";
import { preload } from "react-dom";

export default function QuestionPage() {
  const { data: initalData = {} } = useLoaderData() || { data: {} };
  const { data, error, isLoading } = Profile.getProfile(initalData);

  const getHouseData = useMemo(() => {
    const profile = data?.data?.data;
    const house = profile?.user?.house?.houseName;

    preload(`/assets/${(house ?? "").toLowerCase()}.webp`, { as: "image" })

    return {
      title: house,
      description: "",
      img: `/assets/${(house ?? "").toLowerCase()}.webp`,
    };
  }, [data]);

  const hasHouseData = !!getHouseData?.title;
  const isAnswered = !!data?.data?.data?.user?.isAnswered;

  const defaultStepValues = useMemo(
    () => [
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
      {
        key: "result",
        label: "สรุปผล",
        disabled: true,
        activated: isAnswered && hasHouseData,
        icon: <Send className="relative right-px" />,
      },
    ],
    []
  );

  preload(BG, { as: "image" })

  return (
    <AnimatedLayout>
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
          {isLoading ? (
            <Loading />
          ) : error ? (
            <div className="mx-auto flex flex-col space-y-5 justify-center items-center">
              <div className="text-[#7200FD]">
                <ShieldAlert size={100} />
              </div>
              <p className="text-center text-xl leading-normal">
                ตรวจพบข้อผิดพลาด, การุณาติดต่อพี่ Staff เพื่อดำเนินการแก้ไข
              </p>
            </div>
          ) : (
            <StepProvider
              defaultValue={isAnswered ? "result" : "start"}
              defaultValueOfStepItems={defaultStepValues}
            >
              <Step className="flex flex-col" activationMode="manual">
                <div className="mx-auto">
                  <StepIndicator />
                </div>
                <AnimatedLayout>
                  <StartTab />
                </AnimatedLayout>
                <AnimatedLayout>
                  <QuestionTab />
                </AnimatedLayout>
                <AnimatedLayout>
                  <ResultTab isLoading={isLoading} houseData={getHouseData} />
                </AnimatedLayout>
              </Step>
            </StepProvider>
          )}
        </div>
      </div>
    </AnimatedLayout>
  );
}
