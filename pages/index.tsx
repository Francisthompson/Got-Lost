import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Viewer from '@/components/Viewer';
import MapOverlay from '@/components/MapOverlay';

const Home: React.FC = () => {
  const [currentScene, setCurrentScene] = useState('mainEntrance');

  const handleSceneChange = (sceneId: string) => {
    setCurrentScene(sceneId);
  };

  return (
    <div className="w-full h-screen overflow-hidden">
      <Navbar />
      
      {/* Main viewer container */}
      <div className="w-full h-full pt-16">
        <Viewer initialScene={currentScene} key={currentScene} />
      </div>

      {/* Map overlay */}
      <MapOverlay currentScene={currentScene} onSceneSelect={handleSceneChange} />
    </div>
  );
};

export default Home;
