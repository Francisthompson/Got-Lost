'use client';

import React, { useState, useEffect, useRef } from 'react';
import { scenesData, getSceneById } from '@/data/scenesData';

interface ViewerProps {
  initialScene?: string;
}

declare global {
  interface Window {
    pannellum: any;
  }
}

const Viewer: React.FC<ViewerProps> = ({ initialScene = 'mainEntrance' }) => {
  const [currentScene, setCurrentScene] = useState(initialScene);
  const [sceneConfig, setSceneConfig] = useState(getSceneById(initialScene));
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const viewerRef = useRef<HTMLDivElement>(null);
  const pannellumViewerRef = useRef<any>(null);

  useEffect(() => {
    const scene = getSceneById(currentScene);
    if (scene) {
      setSceneConfig(scene);
      setIsLoading(true);
      setError(null);
    }
  }, [currentScene]);

  useEffect(() => {
    // Load Pannellum scripts
    if (typeof window !== 'undefined' && !window.pannellum) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js';
      script.async = true;
      document.body.appendChild(script);

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css';
      document.head.appendChild(link);

      script.onload = () => {
        initViewer();
      };
    } else if (window.pannellum) {
      initViewer();
    }

    return () => {
      if (pannellumViewerRef.current) {
        try {
          pannellumViewerRef.current.destroy();
        } catch (e) {
          // Ignore cleanup errors
        }
      }
    };
  }, [sceneConfig]);

  const initViewer = () => {
    if (!viewerRef.current || !sceneConfig || !window.pannellum) return;

    // Destroy existing viewer
    if (pannellumViewerRef.current) {
      try {
        pannellumViewerRef.current.destroy();
      } catch (e) {
        // Ignore errors
      }
    }

    try {
      // Configure hotspots
      const hotspots = sceneConfig.hotspots.map((hs: any) => ({
        pitch: hs.pitch,
        yaw: hs.yaw,
        type: hs.type === 'scene' ? 'custom' : 'info',
        text: hs.text,
        cssClass: hs.type === 'scene' ? 'custom-hotspot' : 'info-hotspot',
        clickHandlerFunc: () => {
          if (hs.type === 'scene' && hs.targetScene) {
            setCurrentScene(hs.targetScene);
          }
        },
      }));

      // Initialize Pannellum viewer
      pannellumViewerRef.current = window.pannellum.viewer(viewerRef.current, {
        type: 'equirectangular',
        panorama: sceneConfig.imageUrl,
        autoLoad: true,
        pitch: sceneConfig.initialViewParameters.pitch,
        yaw: sceneConfig.initialViewParameters.yaw,
        hfov: sceneConfig.initialViewParameters.fov,
        showZoomCtrl: true,
        showFullscreenCtrl: true,
        mouseZoom: true,
        hotSpots: hotspots,
        onLoad: () => {
          setIsLoading(false);
          setError(null);
        },
        onError: (err: string) => {
          setIsLoading(false);
          setError(err || 'Failed to load panorama');
        },
      });
    } catch (err) {
      setIsLoading(false);
      setError('Failed to initialize viewer');
      console.error('Pannellum error:', err);
    }
  };

  if (!sceneConfig) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-900">
        <div className="text-white text-center">
          <p className="text-xl">Scene not found</p>
          <button
            onClick={() => setCurrentScene('mainEntrance')}
            className="mt-4 px-4 py-2 bg-primary rounded-md hover:bg-blue-700"
          >
            Return to Main Entrance
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-gray-900">
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-30 bg-gray-900">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-white">Loading panorama...</p>
          </div>
        </div>
      )}

      {/* Error message */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center z-30 bg-gray-900">
          <div className="text-white text-center bg-red-900 bg-opacity-80 p-6 rounded-lg">
            <p className="text-xl mb-4">⚠️ {error}</p>
            <p className="text-sm text-gray-300 mb-4">
              Please add your panoramic images to <code className="bg-gray-800 px-2 py-1 rounded">public/assets/panoramas/</code>
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-primary rounded-md hover:bg-blue-700"
            >
              Reload
            </button>
          </div>
        </div>
      )}

      {/* Scene title overlay */}
      <div className="absolute top-20 left-6 z-40 bg-black bg-opacity-60 text-white px-4 py-2 rounded-md">
        <h2 className="text-lg font-semibold">{sceneConfig.title}</h2>
        <p className="text-sm text-gray-300">{sceneConfig.description}</p>
      </div>

      {/* Pannellum container */}
      <div ref={viewerRef} className="w-full h-full" />

      {/* Controls hint */}
      {!error && !isLoading && (
        <div className="absolute bottom-6 left-6 z-40 bg-black bg-opacity-60 text-white px-4 py-2 rounded-md text-sm">
          <p>💡 Tip: Click and drag to look around • Scroll to zoom</p>
        </div>
      )}

      <style jsx global>{`
        .pnlm-container {
          width: 100%;
          height: 100%;
        }
        .custom-hotspot {
          background-color: rgba(59, 130, 246, 0.9);
          color: white;
          padding: 8px 12px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s;
          border: 2px solid white;
        }
        .custom-hotspot:hover {
          background-color: rgba(37, 99, 235, 1);
          transform: scale(1.05);
        }
        .info-hotspot {
          background-color: rgba(16, 185, 129, 0.9);
          color: white;
          padding: 8px 12px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          border: 2px solid white;
        }
        .info-hotspot:hover {
          background-color: rgba(5, 150, 105, 1);
        }
      `}</style>
    </div>
  );
};

export default Viewer;
