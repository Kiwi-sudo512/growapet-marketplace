import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 text-center py-20 px-6">
      <h1 className="text-6xl font-extrabold text-green-700 mb-4 drop-shadow">
        🌿 Grow-A-Garden Pets 🐾
      </h1>
      <p className="text-lg text-gray-700 max-w-xl mx-auto mb-6">
        Explore our marketplace of adorable, garden-raised pets grown with care and sunshine.
      </p>

      <p className="text-sm text-gray-600 italic mb-8">
        ⚠️ Disclaimer: Some pets may occasionally be out of stock due to high demand.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        <Link href="/pets">
          <span className="bg-green-600 hover:bg-gray-600 transition text-white px-6 py-3 rounded-full shadow-lg cursor-pointer">
            Browse Pets →
          </span>
        </Link>
        <Link href="/about">
          <span className="bg-yellow-500 hover:bg-gray-600 transition text-white px-6 py-3 rounded-full shadow-lg cursor-pointer">
            About Us
          </span>
        </Link>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition hover:bg-gray-100">
          <h3 className="text-xl font-bold text-green-700 mb-2">🌱 Organically Grown</h3>
          <p className="text-gray-700">Each pet is raised in vibrant garden environments using 100% organic techniques.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition hover:bg-gray-100">
          <h3 className="text-xl font-bold text-yellow-600 mb-2">🏡 Friendly & Playful</h3>
          <p className="text-gray-700">These pets are family-friendly, well-socialized, and ready for cuddles or playtime.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition hover:bg-gray-100">
          <h3 className="text-xl font-bold text-blue-600 mb-2">📦 Fast Delivery</h3>
          <p className="text-gray-700">Orders are shipped within 1–2 days with tracking, care tips, and starter kits included.</p>
        </div>
      </div>
    </main>
  );
}
