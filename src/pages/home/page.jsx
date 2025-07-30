import Hero from "./_components/hero";
import About from "./_components/about";
import Why from "./_components/Why/Why";

export default function HomePage() {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="houses" className="min-h-screen bg-gray-800 p-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-8">บ้าน</h2>
        </div>
      </section>
      <section id="timeline" className="min-h-screen bg-gray-700 p-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-8">กำหนดการ</h2>
        </div>
      </section>
      <section id="why">
        <Why/>
      </section>

    </div>
  );
}
