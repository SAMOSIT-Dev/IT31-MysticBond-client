import AnimatedOutlet from "../../components/AnimatedOutlet";
import ScrollToTop from "../../components/ScrollToTop";

export default function AuthLayout() {
  return (
    <>
      <ScrollToTop />
      <div className="w-screen h-screen min-h-0 max-h-screen flex flex-col p-7 bg-black max-sm:p-0">
        <AnimatedOutlet />
      </div>
    </>
  );
}
