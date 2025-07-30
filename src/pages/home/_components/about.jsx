import about_bg from "../../../assets/images/about_bg.png";
import about_arrow from "../../../assets/images/about_arrow.png";
import about_arrow_dekstop_left from "../../../assets/images/about_arrow_dekstop_left.png";
import about_arrow_dekstop_right from "../../../assets/images/about_arrow_dekstop_right.png";
export default function About() {
  return (
    <section>
      <div
        style={{
          backgroundImage: `
                radial-gradient(69.1% 50% at 50% 50%, rgba(102, 102, 102, 0.00) 0%, rgba(0, 0, 0, 0.75) 100%),
                url(${about_bg})
            `,
        }}
        className=" bg-cover bg-[70%_center] h-[915px] relative justify-center items-end flex w-full lg:bg-center lg:h-[1025px] "
      >
        <div className=" text-white font-normal text-center mb-30 p-3 w-full lg:w-[80%]">
          <div className="flex items-center lg:justify-between xl:justify-evenly justify-center">
            <img
              className="lg:inline-block w-[25%] hidden"
              src={about_arrow_dekstop_left}
              alt="arrow"
            ></img>
            <h1
              style={{ fontFamily: "'Inria Serif'" }}
              className="text-2xl lg:text-[40px] mb-4"
            >
              What is The Code of the Mystic Bonds
            </h1>
            <img
              className="lg:inline-block w-[25%] hidden"
              src={about_arrow_dekstop_right}
              alt="arrow"
            ></img>
          </div>
          <img
            className="lg:hidden md:w-[50%] justify-self-center mx-auto"
            src={about_arrow}
            alt="arrow"
          ></img>
          <p
            style={{ fontFamily: "'LINE Seed Sans', sans-serif" }}
            className="font-normal text-[15px] lg:text-[32px] px-5 lg:w-[80%] pt-4 justify-self-center"
          >
            นี่ไม่ใช่แค่การรับน้อง แต่มันคือการเข้าสู่พันธสัญญาแห่งตำนาน
            ที่ไม่มีวันนับถอยหลัง คืนนี้ ดวงจันทร์จะเปิดทาง
            สู่วิถีของผู้ถูกเลือก เถ้าธุลีจากอดีตกำลังฟื้นชีพ
            และพลังเวทที่หลับใหลจะไหลเวียนอีกครั้ง ใต้เงาแห่งพฤกษาโบราณ
            พวกเจ้าจะผนึกพันธะร่วมกับเหล่าสัตว์ผู้พิทักษ์ เมื่อบทสวดถูกขับขาน
            พิธีศักดิ์สิทธิ์จะเริ่มต้น เส้นทางที่เจ้าจะเลือกในคืนนี้
            จักสืบทอดไปถึงเจ็ดชั่วอายุเวทมนตร์
          </p>
        </div>
      </div>
    </section>
  );
}
