import React from 'react';

interface MapOverlayProps {
  currentScene: string;
  onSceneSelect?: (sceneId: string) => void;
}

const MapOverlay: React.FC<MapOverlayProps> = ({ currentScene, onSceneSelect }) => {
  const scenes = [
    { id: 'mainEntrance', name: 'Main Entrance', x: 30, y: 70 },
    { id: 'library', name: 'Library', x: 60, y: 40 },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 bg-white rounded-lg shadow-lg p-4 w-64">
      <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
        Campus Map
      </h3>
      
      <div className="relative bg-gray-100 rounded-md h-40 overflow-hidden border-2 border-gray-200">
        {/* Placeholder map */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gray-400 text-xs">Mini Map View</div>
        </div>
        
        {/* Scene markers */}
        {scenes.map((scene) => (
          <div
            key={scene.id}
            className={`absolute w-3 h-3 rounded-full cursor-pointer transition-all ${
              currentScene === scene.id
                ? 'bg-blue-600 ring-4 ring-blue-200'
                : 'bg-gray-400 hover:bg-blue-400'
            }`}
            style={{ left: `${scene.x}%`, top: `${scene.y}%` }}
            onClick={() => onSceneSelect && onSceneSelect(scene.id)}
            title={scene.name}
          />
        ))}
      </div>
      
      <div className="mt-3 text-xs text-gray-600">
        <div className="flex items-center justify-between">
          <span>Current Location:</span>
          <span className="font-semibold text-primary capitalize">
            {currentScene.replace(/([A-Z])/g, ' $1').trim()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MapOverlay;
