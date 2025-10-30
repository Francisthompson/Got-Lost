import React from 'react';

interface MapOverlayProps {
  currentScene: string;
  onSceneSelect?: (sceneId: string) => void;
}

const MapOverlay: React.FC<MapOverlayProps> = ({ currentScene, onSceneSelect }) => {
  // Extract location number from scene ID (e.g., "location_002" -> "002")
  const getCurrentLocationNumber = () => {
    const match = currentScene.match(/location_(\d+)/);
    return match ? match[1] : '002';
  };
  
  // Calculate progress (002-119 = 117 total images)
  const imageNumbers = [
    '002', '003', '004', '005', '006', '007', '008', '009', '010', '011',
    '012', '013', '014', '015', '016', '017', '018', '019', '020', '021',
    '022', '023', '024', '025', '026', '027', '028', '029', '030', '031',
    '032', '033', '034', '035', '036', '037', '038', '039', '040', '041',
    '042', '043', '044', '045', '046', '047', '048', '049', '050', '051',
    '052', '053', '054', '055', '056', '057', '058', '059', '060', '061',
    '062', '063', '064', '065', '066', '067', '068', '069', '070', '072',
    '073', '074', '075', '076', '077', '078', '079', '080', '081', '082',
    '083', '084', '085', '086', '087', '088', '089', '090', '091', '092',
    '093', '094', '095', '096', '097', '098', '099', '100', '101', '102',
    '103', '104', '105', '106', '107', '108', '109', '110', '111', '112',
    '113', '114', '115', '116', '117', '118', '119'
  ];
  
  const currentNum = getCurrentLocationNumber();
  const currentIndex = imageNumbers.indexOf(currentNum);
  const progress = ((currentIndex + 1) / imageNumbers.length) * 100;
  
  return (
    <div className="fixed bottom-6 right-6 z-40 bg-white rounded-lg shadow-lg p-4 w-72">
      <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
        Building Walkthrough
      </h3>
      
      <div className="relative bg-[#0C2340] rounded-md h-32 overflow-hidden border-2 border-gray-200 p-4 flex flex-col justify-center items-center">
        <div className="text-white text-center mb-2">
          <div className="text-3xl font-bold">{currentIndex + 1}</div>
          <div className="text-xs opacity-75">of {imageNumbers.length}</div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      
      <div className="mt-3 space-y-2">
        <div className="flex items-center justify-between text-xs text-gray-600">
          <span>Current Stop:</span>
          <span className="font-semibold text-primary">
            Location #{currentNum}
          </span>
        </div>
        
        <div className="flex gap-2">
          {currentIndex > 0 && (
            <button
              onClick={() => onSceneSelect && onSceneSelect(`location_${imageNumbers[currentIndex - 1]}`)}
              className="flex-1 px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded text-xs font-medium transition-colors"
            >
              ← Previous
            </button>
          )}
          {currentIndex < imageNumbers.length - 1 && (
            <button
              onClick={() => onSceneSelect && onSceneSelect(`location_${imageNumbers[currentIndex + 1]}`)}
              className="flex-1 px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-medium transition-colors"
            >
              Next →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapOverlay;
