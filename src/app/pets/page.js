import pets from '@/data/pets.json';
import Image from 'next/image';

export default function PetsPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Our Garden Pets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {pets.map((pet) => (
          <div key={pet.id} className="border p-4 rounded-xl shadow hover:shadow-lg transition">
            <Image src={pet.image} alt={pet.name} width={300} height={200} className="rounded" />
            <h2 className="text-xl font-semibold mt-2">{pet.name}</h2>
            <p className="text-gray-600">{pet.description}</p>
            <p className="font-bold mt-2">{pet.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
