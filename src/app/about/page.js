export default function About() {
  return (
    <main className="min-h-screen bg-white text-center p-10">
      <h1 className="text-5xl font-bold text-green-700 mb-6">🌿 About Us</h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
        Grow-A-Garden Pets is a fun, free marketplace that lets people trade lovable, plant-raised creatures from their digital gardens. We believe in creating joyful, eco-friendly companions for everyone — all hand-grown with love and a little bit of sunshine magic.
      </p>

      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-8">
        <div className="bg-green-100 p-6 rounded-xl shadow hover:bg-gray-100 transition">
          <h2 className="text-xl font-semibold text-green-800 mb-2">🌸 What Makes Us Unique</h2>
          <p>Our pets are inspired by nature and community-grown culture. We’re all about smiles, creativity, and fun.</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-xl shadow hover:bg-gray-100 transition">
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">💬 Contact Us</h2>
          <p>Have questions or want to showcase your pets? Email us at <b>support@growapet.com</b>.</p>
        </div>
      </div>
    </main>
  );
}
