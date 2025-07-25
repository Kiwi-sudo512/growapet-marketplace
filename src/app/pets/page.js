'use client';
import pets from '@/data/pets.json';
import Image from 'next/image';

export default function PetsPage() {
  return (
    <main className="min-h-screen bg-green-50 px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-green-800 drop-shadow">
        🌼 Available Garden Pets
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pets.map((pet) => (
          <div
            key={pet.id}
            className="bg-white border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all"
          >
            <div className="w-full h-[200px] overflow-hidden rounded-md mb-4">
              <Image
                src={pet.image}
                alt={pet.name}
                width={300}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">{pet.name}</h2>
            <p className="text-gray-600 mt-1">{pet.description}</p>
            <p className="text-green-600 font-bold text-lg mt-3">{pet.price}</p>
            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-gray-600 transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
