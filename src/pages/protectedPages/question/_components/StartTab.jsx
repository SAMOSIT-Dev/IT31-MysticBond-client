import { StepTabContent, useStep } from "../../../../components/Step";
import Button from "../../../../components/ui/Button";

import SHIELD from "../../../../assets/images/shield_props.png";
import { preload } from "react-dom";

export default function StartTab() {
  const { setValue, updateStepItemState } = useStep();
  preload(SHIELD, { as: "image" })
  
  return (
    <StepTabContent value="start">
      <div className="flex flex-col">
        <div className="relative mx-auto max-w-70 flex">
          <img src={SHIELD} />
        </div>
        <p className="text-xl md:text-3xl text-center my-12 mt-0 max-w-200 mx-auto leading-normal md:leading-12">
          โดยที่ประชาชนแห่งสหประชาชาติได้ยืนยันอีกครั้งไว้
          ในกฎบัตรถึงศรัทธาในสิทธิมนุษยชนขั้นพื้นฐาน
        </p>
        <Button
          className="max-w-90 w-full mx-auto"
          onClick={() => {
            setValue("question");
            updateStepItemState("start", { disabled: true, activated: true });
          }}
        >
          เริ่มทำแบบทดสอบ
        </Button>
      </div>
    </StepTabContent>
  );
}
