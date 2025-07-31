import LOGO from "../assets/images/the_code_of_mystic_bonds_logo.svg";

import { Link, useNavigate } from "react-router";
import { useActiveSection } from "../hooks/useActiveSection";
import { useAuth } from "../hooks/useAuth";

// Mock
const sectionTextMap = {
  hero: "หนัาหลัก",
  about: "เกี่ยวกับกิจกรรม",
  houses: "บ้าน",
  why: "ทำไมถึงควรเลือก",
};

export default function NavBar({ isRootPage = false }) {
  const navigate = useNavigate();
  const activeSection = useActiveSection();
  const { isAuthenticated } = useAuth();

  const currentSectionText = sectionTextMap[activeSection] || "หน้าหลัก";

  return (
    <>
      <nav
        className="z-50 h-[73px] w-full fixed top-1/12 px-[9%] inset-0 flex items-center justify-center lg:justify-between"
        style={{ top: "min(6%, 85px)" }}
      >
        <Link to="/" className="h-full">
          <img
            src={LOGO}
            alt="The Code of Mystic Bonds Logo"
            className="h-full"
          />
        </Link>

        <div className="lg:flex gap-10 xl:gap-20 flex-row hidden absolute left-1/2 -translate-x-1/2 bg-[#B7B7B770] text-white px-12 py-3 rounded-full w-max backdrop-blur-md whitespace-nowrap">
          <Link
            to={{ pathname: "/", hash: "#about" }}
            className="hover:text-gray-300 hover:underline transition-colors"
          >
            เกี่ยวกับกิจกรรม
          </Link>
          <Link
            to={{ pathname: "/", hash: "#houses" }}
            className="hover:text-gray-300 hover:underline transition-colors"
          >
            บ้าน
          </Link>
          <Link
            to={{ pathname: "/", hash: "#why" }}
            className="hover:text-gray-300 hover:underline transition-colors"
          >
            คำถามที่พบบ่อย
          </Link>
        </div>

        <button
          className="lg:flex hidden cursor-pointer bg-white px-12 py-3 rounded-full font-bold duration-300 hover:shadow-[0_0_1.5rem] hover:shadow-[#f4f4f480]"
          onClick={() =>
            navigate(isAuthenticated ? "/question" : "/auth/login", {
              viewTransition: true,
            })
          }
        >
          {isAuthenticated ? "เริ่มคัดสรร" : "เข้าสู่ระบบ"}
        </button>
      </nav>
      {isRootPage && (
        <nav
          className="lg:hidden z-50 fixed left-1/2 -translate-x-1/2 h-14 flex w-max items-center justify-center rounded-full text-white border-2 border-white/10 backdrop-blur-sm"
          style={{
            bottom: "min(6%, 85px)",
          }}
        >
          <span className="px-8 py-3">{currentSectionText}</span>
          <button
            onClick={() =>
              navigate(isAuthenticated ? "/question" : "/auth/login", {
                viewTransition: true,
              })
            }
            className="cursor-pointer px-8 py-3 text-md border-2 border-[#202020] shadow-[0_0_1rem] shadow-[#f4f4f449] bg-[radial-gradient(circle_at_top,_#000000,_#000000,_#262626,_#4F4F4F)] rounded-[44px] duration-300 hover:shadow-[0_0_1.5rem] hover:shadow-[#f4f4f480]"
          >
            {isAuthenticated ? "เริ่มคัดสรร" : "เข้าสู่ระบบ"}
          </button>
        </nav>
      )}
    </>
  );
}
