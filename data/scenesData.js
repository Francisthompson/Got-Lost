// Sample scenes data structure for Got Lost?
// Automatically generated scenes for sequential building walkthrough

// Building/Wing information
const buildingInfo = {
  name: "Stan Grad Building",
  floor: "Floor 2",
  wing: "MB Wing",
};

// Image sequence numbers (002-119, missing 071)
const imageNumbers = [
  "002",
  "003",
  "004",
  "005",
  "006",
  "007",
  "008",
  "009",
  "010",
  "011",
  "012",
  "013",
  "014",
  "015",
  "016",
  "017",
  "018",
  "019",
  "020",
  "021",
  "022",
  "023",
  "024",
  "025",
  "026",
  "027",
  "028",
  "029",
  "030",
  "031",
  "032",
  "033",
  "034",
  "035",
  "036",
  "037",
  "038",
  "039",
  "040",
  "041",
  "042",
  "043",
  "044",
  "045",
  "046",
  "047",
  "048",
  "049",
  "050",
  "051",
  "052",
  "053",
  "054",
  "055",
  "056",
  "057",
  "058",
  "059",
  "060",
  "061",
  "062",
  "063",
  "064",
  "065",
  "066",
  "067",
  "068",
  "069",
  "070",
  "072",
  "073",
  "074",
  "075",
  "076",
  "077",
  "078",
  "079",
  "080",
  "081",
  "082",
  "083",
  "084",
  "085",
  "086",
  "087",
  "088",
  "089",
  "090",
  "091",
  "092",
  "093",
  "094",
  "095",
  "096",
  "097",
  "098",
  "099",
  "100",
  "101",
  "102",
  "103",
  "104",
  "105",
  "106",
  "107",
  "108",
  "109",
  "110",
  "111",
  "112",
  "113",
  "114",
  "115",
  "116",
  "117",
  "118",
  "119",
];

// Helper function to extract time from filename pattern
function getTimeFromNumber(num) {
  const fileMap = {
    "002": "185539",
    "003": "190240",
    "004": "190342",
    "005": "190410",
    "006": "190434",
    "007": "190556",
    "008": "190624",
    "009": "190647",
    "010": "190713",
    "011": "190743",
    "012": "190821",
    "013": "190847",
    "014": "190909",
    "015": "190958",
    "016": "191023",
    "017": "191054",
    "018": "191117",
    "019": "191148",
    "020": "191211",
    "021": "191235",
    "022": "191311",
    "023": "191345",
    "024": "191459",
    "025": "191551",
    "026": "191620",
    "027": "191739",
    "028": "191819",
    "029": "191841",
    "030": "191915",
    "031": "191943",
    "032": "192021",
    "033": "192100",
    "034": "192131",
    "035": "192156",
    "036": "192259",
    "037": "192330",
    "038": "192435",
    "039": "192504",
    "040": "192538",
    "041": "192615",
    "042": "192718",
    "043": "192757",
    "044": "193253",
    "045": "193318",
    "046": "193347",
    "047": "193420",
    "048": "193452",
    "049": "193532",
    "050": "193601",
    "051": "193620",
    "052": "193646",
    "053": "193713",
    "054": "193731",
    "055": "193835",
    "056": "193904",
    "057": "193931",
    "058": "194005",
    "059": "194059",
    "060": "194136",
    "061": "194159",
    "062": "194243",
    "063": "194304",
    "064": "194422",
    "065": "194445",
    "066": "194530",
    "067": "194557",
    "068": "194621",
    "069": "194642",
    "070": "194702",
    "072": "194739",
    "073": "194829",
    "074": "194845",
    "075": "194904",
    "076": "194924",
    "077": "194953",
    "078": "195012",
    "079": "195041",
    "080": "195101",
    "081": "195117",
    "082": "195145",
    "083": "195210",
    "084": "195259",
    "085": "195420",
    "086": "195438",
    "087": "195515",
    "088": "195546",
    "089": "195615",
    "090": "195646",
    "091": "195710",
    "092": "195736",
    "093": "195759",
    "094": "195819",
    "095": "195843",
    "096": "195908",
    "097": "195929",
    "098": "200109",
    "099": "200213",
    100: "200301",
    101: "200348",
    102: "200408",
    103: "200427",
    104: "200447",
    105: "200505",
    106: "200527",
    107: "200603",
    108: "200625",
    109: "200646",
    110: "200713",
    111: "200735",
    112: "200802",
    113: "200822",
    114: "200841",
    115: "200905",
    116: "200930",
    117: "201000",
    118: "201021",
    119: "201042",
  };
  return fileMap[num] || "000000";
}

// Generate scenes dynamically
const scenesData = {};

imageNumbers.forEach((num, index) => {
  const sceneId = `location_${num}`;
  const imageFilename = `IMG_20251006_${getTimeFromNumber(num)}_00_${num}.jpg`;

  // Create hotspots for navigation
  const hotspots = [];

  // Add "Previous" hotspot if not first image
  if (index > 0) {
    hotspots.push({
      id: `prev_${num}`,
      pitch: -15,
      yaw: 180, // Behind the viewer
      type: "scene",
      targetScene: `location_${imageNumbers[index - 1]}`,
      text: "Go Back",
      createTooltipFunc: (hotSpotDiv, args) => {
        hotSpotDiv.classList.add("custom-hotspot");
        const span = document.createElement("span");
        span.innerHTML = args;
        hotSpotDiv.appendChild(span);
      },
      createTooltipArgs: "← Previous",
    });
  }

  // Add "Next" hotspot if not last image
  if (index < imageNumbers.length - 1) {
    hotspots.push({
      id: `next_${num}`,
      pitch: -15,
      yaw: 0, // In front of the viewer
      type: "scene",
      targetScene: `location_${imageNumbers[index + 1]}`,
      text: "Continue Forward",
      createTooltipFunc: (hotSpotDiv, args) => {
        hotSpotDiv.classList.add("custom-hotspot");
        const span = document.createElement("span");
        span.innerHTML = args;
        hotSpotDiv.appendChild(span);
      },
      createTooltipArgs: "Next →",
    });
  }

  // Add info hotspot showing position
  hotspots.push({
    id: `info_${num}`,
    pitch: 10,
    yaw: 90,
    type: "info",
    text: `Location ${num}`,
    createTooltipFunc: (hotSpotDiv, args) => {
      hotSpotDiv.classList.add("info-hotspot");
      const span = document.createElement("span");
      span.innerHTML = args;
      hotSpotDiv.appendChild(span);
    },
    createTooltipArgs: `📍 Stop ${index + 1} of ${imageNumbers.length}`,
  });

  scenesData[sceneId] = {
    id: sceneId,
    title: `${buildingInfo.name} - Location ${num}`,
    imageUrl: `/assets/panoramas/${imageFilename}`,
    description: `${buildingInfo.floor}, ${buildingInfo.wing} - Position ${
      index + 1
    }/${imageNumbers.length}`,
    hotspots: hotspots,
    initialViewParameters: {
      pitch: 0,
      yaw: 0,
      fov: 100,
    },
  };
});

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

// Export the scenes data
export { scenesData };
