import about_bg from "../../../assets/images/about_bg.png"
import about_arrow from "../../../assets/images/about_arrow.png"
import about_arrow_dekstop_left from "../../../assets/images/about_arrow_dekstop_left.png"
import about_arrow_dekstop_right from "../../../assets/images/about_arrow_dekstop_right.png"
export default function About() {
  return (
    <section>
      <div
        style={{ backgroundImage: `
                radial-gradient(rgba(102,102,102,0) 0%, rgba(102,102,102,0.2) 50%, rgba(0,0,0,0.90) 90%),
                url(${about_bg})
            ` 
        }}
        className=" bg-cover bg-[70%_center] h-[915px] relative justify-center items-end flex w-full lg:bg-center lg:h-[1025px] "
      >
        <div className=" text-white font-normal text-center mb-30 p-3 w-full lg:w-[80%]">
            <div className="flex items-center lg:justify-between xl:justify-evenly justify-center">
                <img className="lg:inline-block w-[25%] hidden" src={about_arrow_dekstop_left} alt="arrow"></img>
                <h1 style={{ fontFamily: "'Inria Serif'"}} className="text-[32px] lg:text-[40px]">What is SIT Sairahat</h1>
                <img className="lg:inline-block w-[25%] hidden" src={about_arrow_dekstop_right} alt="arrow"></img>
            </div>
            <img className="lg:hidden md:w-[50%] justify-self-center" src={about_arrow} alt="arrow" ></img>
            <p style={{ fontFamily: "'LINE Seed Sans', sans-serif" }}
            className="font-normal text-[15px] lg:text-[32px] lg:w-[80%] pt-4 justify-self-center">
              โดยที่ประชาชนแห่งสหประชาชาติได้ยืนยันอีกครั้งไว้ในกฎบัตรถึงศรัทธาในสิทธิมนุษยชนขั้นพื้นฐาน
            </p>
        </div>
      </div>
    </section>
  );
}

