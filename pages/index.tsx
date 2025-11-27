import React from 'react';
import Navbar from '@/components/Navbar';
import Viewer from '@/components/Viewer';
import Minimap from '@/components/Minimap';

const Home: React.FC = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Navbar />
      
      {/* Main viewer container */}
      <div className="w-full h-full pt-16">
        <Viewer />
      </div>

      {/* Minimap overlay */}
      <Minimap />
    </div>
  );
};

export default Home;
