import logo from "../../../assets/images/the_code_of_mystic_bonds_logo.svg";
import hero_bg from "../../../assets/images/hero_bg.webp";

import { useNavigate } from "react-router";
import { useAuth } from "../../../hooks/useAuth";
import RevealOnScrollAnimation from "../../../components/RevealOnScrollAnimation";

export default function Hero() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return (
    <section className="justify-end flex flex-col items-center lg:justify-center w-full min-h-[768px] h-screen relative ">
      {/* Background Decoration */}
      <div className="absolute flex flex-col w-full h-full">
        <div
          style={{ backgroundImage: `url(${hero_bg})` }}
          className={`z-0 lg:h-full absolute w-full h-3/4 bg-cover bg-center`}
        />
        <span className="absolute bottom-0 w-full h-1/2 lg:h-4/5 bg-gradient-to-b from-transparent via-black to-black lg:opacity-50" />
      </div>

      <RevealOnScrollAnimation className="relative z-1 flex items-center justify-center flex-col space-y-5">
        <img
          src={logo}
          alt="The Code of Mystic Bonds Logo"
          className="w-full hidden lg:block"
        />
        <button
          className="lg:block hidden cursor-pointer lg:-mt-5 lg:text-2xl lg:px-20 lg:py-4 px-8 py-2 text-white text-md border-2 border-[#F4F4F440] shadow-[0_0_1rem] shadow-[#f4f4f449] bg-[radial-gradient(circle_at_top,_#000000,_#000000,_#262626,_#4F4F4F)] rounded-[44px] duration-300 hover:shadow-[0_0_1.5rem] hover:shadow-[#f4f4f480]"
          onClick={() =>
            navigate(isAuthenticated ? "/question" : "/auth/login", {
              viewTransition: true,
            })
          }
        >
          {isAuthenticated ? "เริ่มคัดสรร" : "เข้าสู่ระบบ"}
        </button>
      </RevealOnScrollAnimation>
    </section>
  );
}
