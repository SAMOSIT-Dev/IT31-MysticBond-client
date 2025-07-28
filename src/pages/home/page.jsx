import Hero from "./_components/hero";

export default function HomePage() {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      {/* Mock up for nav bar Text changing follow by section id */}

      <section id="about" className="min-h-screen bg-gray-900 p-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-8">เกี่ยวกับกิจกรรม</h2>
        </div>
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
      <section id="why" className="min-h-screen bg-gray-600 p-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-8">คำถามที่พบบ่อย</h2>
        </div>
      </section>

    </div>
  );
}
