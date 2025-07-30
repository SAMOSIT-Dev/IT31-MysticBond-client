import { ShieldAlert } from "lucide-react";
import BG from "../../assets/images/quiz_bg.png";

export default function ErrorPage() {
  return (
    <div
      className="flex flex-col w-screen min-h-screen max-h-full bg-cover bg-center bg-fixed p-4 py-12"
      style={{
        backgroundImage: `url(${BG})`,
      }}
    >
      <div className="fixed w-screen h-full inset-0 bg-black/50"></div>
      <div className="m-auto max-w-300 h-max w-full p-5 py-15 max-md:p-7 flex flex-col text-white border-white/10 glass-card">
        <div className="mx-auto flex flex-col space-y-5 justify-center items-center">
          <div className="text-[#7200FD]">
            <ShieldAlert size={100} />
          </div>
          <p className="text-center text-xl leading-normal">
            ตรวจพบข้อผิดพลาด, การุณาติดต่อพี่ Staff เพื่อดำเนินการแก้ไข
          </p>
        </div>
      </div>
    </div>
  );
}
