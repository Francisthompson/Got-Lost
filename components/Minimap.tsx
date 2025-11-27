'use client';

import React, { useState } from 'react';

const Minimap: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [destination] = useState('MC301'); // Simulated user input

  // Simulated path coordinates (representing a walk through hallways)
  // Each point is [x, y] as percentage of the minimap
  const pathPoints = [
    [10, 50], [20, 50], [30, 50], [40, 50], [50, 50],  // Straight horizontal hallway
    [60, 50], [70, 50],                                // Continue right
    [70, 40], [70, 30], [70, 20], [70, 15],            // Turn up vertical hallway
    [75, 15], [80, 15], [85, 15], [90, 15],            // Right horizontal
    [90, 20], [90, 30], [90, 40], [90, 50],            // Down vertical
    [85, 50], [80, 50], [75, 50], [70, 50],            // Left horizontal
    [70, 55], [70, 65], [70, 75],                      // Down vertical
    [65, 75], [55, 75], [45, 75], [35, 75],            // Left horizontal
    [25, 75], [20, 75],                                // Continue left
    [20, 70], [20, 60], [20, 50],                      // Up vertical
    [25, 50], [30, 50], [35, 50],                      // Right horizontal
    [35, 45], [35, 35], [35, 25],                      // Up vertical
  ];

  // Key locations along the route
  const locations = [
    { x: 10, y: 50, name: 'Main Entrance', type: 'entrance', pathIndex: 0 },
    { x: 50, y: 50, name: 'MC213', type: 'room', pathIndex: 4 },
    { x: 85, y: 15, name: 'MC301', type: 'room', pathIndex: 13 },
    { x: 90, y: 40, name: 'Computer Lab', type: 'lab', pathIndex: 17 },
    { x: 70, y: 75, name: 'MC154', type: 'room', pathIndex: 24 },
    { x: 25, y: 75, name: 'Library', type: 'library', pathIndex: 28 },
  ];

  // Find destination location and its path index
  const destinationLocation = locations.find(loc => loc.name === destination);
  const destinationIndex = destinationLocation?.pathIndex ?? pathPoints.length - 1;

  const handlePositionChange = (index: number) => {
    setCurrentPosition(Math.max(0, Math.min(pathPoints.length - 1, index)));
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 bg-white rounded-lg shadow-xl p-4 w-80 border-2 border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-gray-800 flex items-center">
          <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          Route to {destination}
        </h3>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
          {currentPosition + 1} / {pathPoints.length}
        </span>
      </div>

      {/* Minimap Canvas */}
      <div className="relative bg-white rounded-lg border-2 border-gray-300 overflow-hidden" style={{ height: '240px' }}>
        {/* Building floor plan background */}
        <div className="absolute inset-0" style={{
          backgroundColor: '#f8f9fa'
        }} />

        {/* Draw the full path and building elements */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4285f4" />
              <stop offset="100%" stopColor="#1967d2" />
            </linearGradient>
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#34a853" />
              <stop offset="100%" stopColor="#1e8e3e" />
            </linearGradient>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.3"/>
            </filter>
          </defs>

          {/* Hallways (lighter background) */}
          <rect x="8" y="48" width="84" height="4" fill="#ffffff" opacity="0.8" />
          <rect x="68" y="10" width="4" height="50" fill="#ffffff" opacity="0.8" />
          <rect x="58" y="68" width="24" height="4" fill="#ffffff" opacity="0.8" />
          <rect x="18" y="50" width="4" height="18" fill="#ffffff" opacity="0.8" />

          {/* Full route to destination (light green - remaining path) */}
          {currentPosition < destinationIndex && (
            <polyline
              points={pathPoints.slice(0, destinationIndex + 1).map(([x, y]) => `${x},${y}`).join(' ')}
              fill="none"
              stroke="#34a853"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.4"
            />
          )}

          {/* Full route to destination (light green - remaining path) */}
          {currentPosition < destinationIndex && (
            <polyline
              points={pathPoints.slice(0, destinationIndex + 1).map(([x, y]) => `${x},${y}`).join(' ')}
              fill="none"
              stroke="#34a853"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.4"
            />
          )}

          {/* Future path beyond destination (dotted gray - Google Maps style) */}
          <polyline
            points={pathPoints.map(([x, y]) => `${x},${y}`).join(' ')}
            fill="none"
            stroke="#bdc1c6"
            strokeWidth="2"
            strokeDasharray="2,3"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.6"
          />
          
          {/* Completed path (blue solid - Google Maps style) */}
          {currentPosition > 0 && (
            <polyline
              points={pathPoints.slice(0, currentPosition + 1).map(([x, y]) => `${x},${y}`).join(' ')}
              fill="none"
              stroke="#4285f4"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#shadow)"
            />
          )}

          {/* Location markers */}
          {locations.map((loc, idx) => {
            const getMarkerColor = (type: string) => {
              switch(type) {
                case 'entrance': return '#34a853';
                case 'room': return '#ea4335';
                case 'lab': return '#fbbc04';
                case 'library': return '#9334e9';
                case 'food': return '#f97316';
                default: return '#4285f4';
              }
            };

            const getIcon = (type: string) => {
              switch(type) {
                case 'entrance': return 'M';
                case 'room': return 'R';
                case 'lab': return 'L';
                case 'library': return 'B';
                case 'food': return 'F';
                default: return '•';
              }
            };

            return (
              <g key={idx}>
                {/* Pin drop shape */}
                <path
                  d={`M ${loc.x} ${loc.y - 4} 
                      C ${loc.x - 2} ${loc.y - 4} ${loc.x - 3} ${loc.y - 2} ${loc.x - 3} ${loc.y} 
                      C ${loc.x - 3} ${loc.y + 1.5} ${loc.x} ${loc.y + 3.5} ${loc.x} ${loc.y + 3.5}
                      C ${loc.x} ${loc.y + 3.5} ${loc.x + 3} ${loc.y + 1.5} ${loc.x + 3} ${loc.y}
                      C ${loc.x + 3} ${loc.y - 2} ${loc.x + 2} ${loc.y - 4} ${loc.x} ${loc.y - 4} Z`}
                  fill={getMarkerColor(loc.type)}
                  stroke="white"
                  strokeWidth="0.4"
                  filter="url(#shadow)"
                />
                {/* Icon in center */}
                <circle cx={loc.x} cy={loc.y - 2} r="1.2" fill="white" opacity="0.9" />
                <text
                  x={loc.x}
                  y={loc.y - 1.3}
                  fontSize="2"
                  fontWeight="bold"
                  fill={getMarkerColor(loc.type)}
                  textAnchor="middle"
                  style={{ fontFamily: 'sans-serif' }}
                >
                  {getIcon(loc.type)}
                </text>
              </g>
            );
          })}

          {/* Current position marker (blue dot - Google Maps style) */}
          <g>
            {/* Outer pulse ring */}
            <circle
              cx={pathPoints[currentPosition][0]}
              cy={pathPoints[currentPosition][1]}
              r="5"
              fill="#4285f4"
              opacity="0.2"
            >
              <animate
                attributeName="r"
                from="3"
                to="8"
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.3"
                to="0"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
            {/* Inner blue dot */}
            <circle
              cx={pathPoints[currentPosition][0]}
              cy={pathPoints[currentPosition][1]}
              r="2.5"
              fill="#4285f4"
              stroke="white"
              strokeWidth="1"
              filter="url(#shadow)"
            />
            {/* Center white dot */}
            <circle
              cx={pathPoints[currentPosition][0]}
              cy={pathPoints[currentPosition][1]}
              r="1"
              fill="white"
            />
          </g>
        </svg>

        {/* Location labels overlay */}
        {locations.map((loc, idx) => (
          <div
            key={idx}
            className="absolute text-[9px] font-medium text-gray-700 bg-white bg-opacity-90 px-1.5 py-0.5 rounded shadow-sm pointer-events-none whitespace-nowrap"
            style={{
              left: `${loc.x}%`,
              top: `${loc.y + 2}%`,
              transform: 'translate(-50%, 0)'
            }}
          >
            {loc.name}
          </div>
        ))}
      </div>

      {/* Progress slider */}
      <div className="mt-4">
        <input
          type="range"
          min="0"
          max={pathPoints.length - 1}
          value={currentPosition}
          onChange={(e) => handlePositionChange(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          style={{
            background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(currentPosition / (pathPoints.length - 1)) * 100}%, #e5e7eb ${(currentPosition / (pathPoints.length - 1)) * 100}%, #e5e7eb 100%)`
          }}
        />
      </div>

      {/* Controls */}
      <div className="mt-3 flex gap-2">
        <button
          onClick={() => handlePositionChange(currentPosition - 1)}
          disabled={currentPosition === 0}
          className="flex-1 px-3 py-2 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed rounded text-sm font-medium transition-colors flex items-center justify-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <button
          onClick={() => handlePositionChange(0)}
          className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm font-medium transition-colors"
          title="Reset to start"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
        <button
          onClick={() => handlePositionChange(currentPosition + 1)}
          disabled={currentPosition === pathPoints.length - 1}
          className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded text-sm font-medium transition-colors flex items-center justify-center gap-1"
        >
          Forward
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Info text */}
      <p className="mt-3 text-xs text-gray-500 text-center italic">
        Demo: Simulated navigation path
      </p>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default Minimap;
