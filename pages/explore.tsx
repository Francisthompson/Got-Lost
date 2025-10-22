import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { getAllScenes } from '@/data/scenesData';

const Explore: React.FC = () => {
  const scenes = getAllScenes();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Explore Campus</h1>
        <p className="text-gray-600 mb-8">
          Discover all the amazing locations on our campus through immersive 360° views
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenes.map((scene) => (
            <div
              key={scene.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-6xl">📍</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {scene.title}
                </h3>
                <p className="text-gray-600 mb-4">{scene.description}</p>
                <Link
                  href={`/?scene=${scene.id}`}
                  className="inline-block px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  View in 360°
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Explore;
