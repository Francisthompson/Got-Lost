import React from 'react';
import Navbar from '@/components/Navbar';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Got Lost?</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Welcome to Got Lost?
            </h2>
            <p className="text-gray-600 mb-4">
              Got Lost? is an innovative interactive 3D campus map that brings our university 
              to life through immersive 360° panoramic views. Whether you're a prospective 
              student, a visitor, or a current member of our community, Got Lost? offers an 
              engaging way to explore our beautiful campus.
            </p>
            <p className="text-gray-600 mb-4">
              Using cutting-edge web technology, including React, Next.js, and Pannellum, 
              we've created a seamless experience that allows you to virtually walk through 
              campus, discover key locations, and get a real feel for our facilities.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Interactive 360° panoramic views of campus locations</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Hotspot-based navigation between different scenes</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Mini-map overlay for easy navigation</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Responsive design that works on all devices</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Fast and smooth user experience</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Technology Stack
            </h2>
            <div className="grid grid-cols-2 gap-4 text-gray-600">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Frontend</h3>
                <ul className="space-y-1">
                  <li>• React 18</li>
                  <li>• Next.js 14</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">360° Viewer</h3>
                <ul className="space-y-1">
                  <li>• Pannellum</li>
                  <li>• React Hooks</li>
                  <li>• Dynamic Imports</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
