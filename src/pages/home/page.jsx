import Hero from "./_components/hero";
import House from "./_components/house";
import About from "./_components/about";
import AnimatedLayout from "../../components/AnimatedLayout";
import Why from "./_components/Why/Why";
import AnimatedLayout from "../../components/AnimatedLayout";

export default function HomePage() {
  return (
    <AnimatedLayout>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="houses">
         <House />
      </section>
      <section id="why">
        <Why/>
      </section>
    </AnimatedLayout>
  );
}
