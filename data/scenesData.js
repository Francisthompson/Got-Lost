// Sample scenes data structure for Got Lost?
// Each scene represents a location on campus with a 360° panoramic image

export const scenesData = {
  mainEntrance: {
    id: "mainEntrance",
    title: "Main Entrance",
    imageUrl: "/assets/panoramas/sample-entrance.jpg",
    description: "University Main Entrance",
    hotspots: [
      {
        id: "hs1",
        pitch: -10,
        yaw: 50,
        type: "scene",
        targetScene: "library",
        text: "Go to Library",
        createTooltipFunc: (hotSpotDiv, args) => {
          hotSpotDiv.classList.add("custom-hotspot");
          const span = document.createElement("span");
          span.innerHTML = args;
          hotSpotDiv.appendChild(span);
        },
        createTooltipArgs: "Library →",
      },
      {
        id: "hs2",
        pitch: 0,
        yaw: -30,
        type: "info",
        text: "Welcome to Campus!",
        createTooltipFunc: (hotSpotDiv, args) => {
          hotSpotDiv.classList.add("info-hotspot");
          const span = document.createElement("span");
          span.innerHTML = args;
          hotSpotDiv.appendChild(span);
        },
        createTooltipArgs: "ℹ️ Main Gate",
      },
    ],
    initialViewParameters: {
      pitch: 0,
      yaw: 0,
      fov: 100,
    },
  },
  library: {
    id: "library",
    title: "University Library",
    imageUrl: "/assets/panoramas/sample-library.jpg",
    description: "Central Library Building",
    hotspots: [
      {
        id: "hs3",
        pitch: -5,
        yaw: 180,
        type: "scene",
        targetScene: "mainEntrance",
        text: "Back to Entrance",
        createTooltipFunc: (hotSpotDiv, args) => {
          hotSpotDiv.classList.add("custom-hotspot");
          const span = document.createElement("span");
          span.innerHTML = args;
          hotSpotDiv.appendChild(span);
        },
        createTooltipArgs: "← Back",
      },
      {
        id: "hs4",
        pitch: 10,
        yaw: 90,
        type: "info",
        text: "Reading Room",
        createTooltipFunc: (hotSpotDiv, args) => {
          hotSpotDiv.classList.add("info-hotspot");
          const span = document.createElement("span");
          span.innerHTML = args;
          hotSpotDiv.appendChild(span);
        },
        createTooltipArgs: "📚 Reading Room",
      },
    ],
    initialViewParameters: {
      pitch: 0,
      yaw: 0,
      fov: 100,
    },
  },
};

// Helper function to get a scene by ID
export const getSceneById = (sceneId) => {
  return scenesData[sceneId];
};

// Helper function to get all scene IDs
export const getAllSceneIds = () => {
  return Object.keys(scenesData);
};

// Helper function to get all scenes as an array
export const getAllScenes = () => {
  return Object.values(scenesData);
};
