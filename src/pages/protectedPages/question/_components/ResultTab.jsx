import { StepTabContent, useStep } from "../../../../components/Step";

import BOOK_PROP from "../../../../assets/images/Prop2_3x.webp";
import Button from "../../../../components/ui/Button";
import Loading from "../../../../components/Loading";
import AnimatedLayout from "../../../../components/AnimatedLayout";
import { useNavigate } from "react-router";

export default function ResultTab({ houseData = {}, isLoading = true }) {
  const { value } = useStep();
  const navigate = useNavigate();

  return (
    <AnimatedLayout key={value}>
      <StepTabContent value="result">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="flex flex-col">
            {houseData?.title ? (
              <div className="mx-auto text-center max-w-120">
                <div className="mx-auto max-w-100 my-10">
                  <img src={houseData?.img ?? BOOK_PROP} alt="" />
                </div>
                <p className="text-5xl font-inria-serif my-10">
                  {houseData.title}
                </p>
                <p className="text-xl leading-normal">
                  {houseData.description}
                </p>
                <Button
                  className="max-w-90 w-full mx-auto mt-10"
                  varaint="white"
                  onClick={() => navigate("/hint", { viewTransition: true })}
                >
                  คำใบ้
                </Button>
              </div>
            ) : (
              <div className="mx-auto text-center">
                <div className="mx-auto max-w-100 my-10">
                  <img src={BOOK_PROP} />
                </div>
                <p className="text-3xl leading-normal">
                  โปรดรอการประกาศผลอีกครั้งในวันข้างหน้า
                </p>
                <div className="mt-5 text-sm text-center text-[#A4A4A4]">
                  <p>“ทางเลือกวันนี้จะกำหนดตัวตนของคุณในวันข้างหน้า”</p>
                  <p className="leading-6">- Tim Fargo</p>
                </div>
                <Button className="max-w-90 w-full mx-auto mt-7.25">
                  เสร็จสิ้น
                </Button>
              </div>
            )}
          </div>
        )}
      </StepTabContent>
    </AnimatedLayout>
  );
}
