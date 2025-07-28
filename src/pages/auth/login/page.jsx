import Input from "../../../components/ui/Input";
import { cn, getFormDataValues } from "../../../libs/utils/utils";

import CI_BANNER from "../../../assets/images/KMUTT+SIT.png";
import SIGN_BG from "../../../assets/images/hero_bg.webp";
import KMUTT_LOGO from "../../../assets/images/KMUTT_CI_Semi_Logo_normal-full.png";
import MYSTIC_BOND_LOGO from "../../../assets/images/mysticbond_logo.png";

import Button from "../../../components/ui/Button";
import { useAuth } from "../../../hooks/useAuth";
import { X } from "lucide-react";
import { useNavigate } from "react-router";
import Checkbox from "../../../components/ui/Checkbox";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (formData) => {
    const {
      studentId = "",
      password = "",
      agreeTerm,
    } = getFormDataValues(formData);
    console.log({ studentId, password, agreeTerm });
  };

  return (
    <div className="grid grid-cols-2 h-full text-white gap-4">
      <div className="h-full rounded-2xl overflow-hidden relative max-lg:hidden">
        <div className="w-full h-full absolute inset-0 bg-[#6600C014]"></div>
        <div
          style={{
            backgroundImage: `url(${SIGN_BG})`,
            backgroundPositionX: "20%",
          }}
          className="w-full h-full bg-cover"
        ></div>
      </div>
      <div
        className={cn(
          "h-full p-10 px-16 flex flex-col relative signin-bg rounded-2xl",
          "max-lg:col-span-full max-sm:rounded-none max-md:px-7"
        )}
      >
        <button
          className="absolute hidden max-lg:flex content-center cursor-pointer right-0 top-0 m-5 p-2"
          onClick={() => navigate("/")}
        >
          <X size={35} />
        </button>
        <div className="my-auto text-center">
          {/* <h1 className="text-5xl font-inria-serif">Sign In</h1> */}
          <div className="flex justify-center h-26.25">
            <img src={MYSTIC_BOND_LOGO}  alt="logo" />
          </div>
          <form action={handleSubmit} className="mt-10 flex flex-col">
            <div className="space-y-4">
              <Input
                pattern="[0-9]{11}"
                leftIcon={<img src={KMUTT_LOGO} />}
                name="studentId"
                placeholder="Student ID"
                autoComplete="off"
                required
              />
              <Input
                name="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex my-8">
              <Checkbox
                className="mr-4"
                id="agree-term"
                name="agreeTerm"
                required
              />
              <label
                className="text-[#9C9C9C] text-sm font-inria-serif select-none"
                htmlFor="agree-term"
              >
                I agree to the{" "}
                <span className="text-[#6600C0]">Term & Conditions</span>
              </label>
            </div>
            <Button className="rounded-xl" type="submit">
              เข้าสู่ระบบ
            </Button>
          </form>
        </div>
        <img className="h-12 mt-auto mb-0 w-max mx-auto" src={CI_BANNER} />
      </div>
    </div>
  );
}
