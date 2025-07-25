export default function Home() {
  return (
    <main className="min-h-screen bg-green-50 text-center p-10">
      <h1 className="text-5xl font-extrabold mb-4 text-green-700">🌿 Grow-A-Garden Pets 🐾</h1>
      <p className="text-xl text-gray-700 mb-8">
        Welcome to our free online marketplace for garden-grown pets!
      </p>

      <a
        href="/pets"
        className="inline-block bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-green-700 transition"
      >
        Browse Pets →
      </a>
    </main>
  );
}
