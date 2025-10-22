# Got Lost? - Interactive 3D Campus Map

Got Lost? is an immersive web application that allows users to explore your university campus through interactive 360° panoramic views. Built with React, Next.js, and Pannellum, it provides a seamless virtual tour experience with hotspot-based navigation.

![Got Lost? Preview](https://via.placeholder.com/800x400?text=Got+Lost+Campus+Tour)

## ✨ Features

- 🎯 **360° Panoramic Views** - Explore campus locations in immersive equirectangular panoramas
- 🗺️ **Interactive Navigation** - Click hotspots to move between different campus scenes
- 📍 **Mini-Map Overlay** - Always know where you are with the contextual mini-map
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Built with Next.js for optimal loading and rendering
- 🎨 **Modern UI** - Clean interface styled with Tailwind CSS

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18.0 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd Got-Lost
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add panoramic images:**

   - Place your 360° equirectangular images in `public/assets/panoramas/`
   - Recommended format: JPG or PNG
   - Recommended resolution: 4096x2048 or higher
   - Update the image paths in `data/scenesData.js`

4. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
got-lost/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar component
│   ├── Viewer.tsx      # 360° panorama viewer with Pannellum
│   └── MapOverlay.tsx  # Mini-map overlay component
├── data/               # Data files
│   └── scenesData.js   # Scene configurations and hotspots
├── pages/              # Next.js pages
│   ├── _app.tsx        # App wrapper
│   ├── index.tsx       # Home page with viewer
│   ├── explore.tsx     # Scene gallery page
│   └── about.tsx       # About page
├── public/             # Static assets
│   └── assets/
│       └── panoramas/  # 360° panoramic images
├── styles/             # Global styles
│   └── globals.css     # Tailwind and custom CSS
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies
```

## 🎨 Customization

### Adding New Scenes

1. **Add your panoramic image** to `public/assets/panoramas/`

2. **Update `data/scenesData.js`:**
   ```javascript
   export const scenesData = {
     // ... existing scenes
     newScene: {
       id: "newScene",
       title: "New Location",
       imageUrl: "/assets/panoramas/your-image.jpg",
       description: "Description of this location",
       hotspots: [
         {
           id: "hs1",
           pitch: -10,
           yaw: 50,
           type: "scene",
           targetScene: "anotherScene",
           text: "Go to Another Location",
           createTooltipArgs: "Click to navigate →",
         },
       ],
       initialViewParameters: {
         pitch: 0,
         yaw: 0,
         fov: 100,
       },
     },
   };
   ```

### Customizing Hotspots

Hotspots support two types:

- **`scene`** - Navigation hotspot (blue) that links to another panorama
- **`info`** - Information hotspot (green) that displays details

Adjust `pitch` (vertical angle) and `yaw` (horizontal angle) to position hotspots correctly.

### Styling

- Global styles: `styles/globals.css`
- Tailwind configuration: `tailwind.config.js`
- Component-specific styles: Use Tailwind classes in TSX files

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) - React framework with SSR and routing
- **UI Library:** [React 18](https://react.dev/) - Component-based UI library
- **360° Viewer:** [Pannellum](https://pannellum.org/) - Lightweight panorama viewer
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript

## 📸 Creating 360° Panoramas

To create equirectangular panoramic images for Got Lost?:

1. **Capture:**

   - Use a 360° camera (Ricoh Theta, Insta360, etc.)
   - Or use a smartphone with panorama apps
   - Or stitch multiple photos together

2. **Format:**

   - Export as equirectangular projection
   - Aspect ratio: 2:1 (e.g., 4096x2048)
   - Format: JPG or PNG

3. **Optimize:**
   - Compress images for web (aim for < 2MB per image)
   - Use tools like [TinyPNG](https://tinypng.com/) or [ImageOptim](https://imageoptim.com/)

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Build for Production

```bash
npm run build
npm start
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋 Support

If you have questions or need help:

- Open an issue on GitHub
- Check the [Pannellum documentation](https://pannellum.org/documentation/overview/)
- Review [Next.js documentation](https://nextjs.org/docs)

## 🎯 Roadmap

- [ ] Add more campus locations
- [ ] Implement 2D floor plan integration
- [ ] Add search functionality
- [ ] Include audio descriptions
- [ ] Create virtual tour paths
- [ ] Add VR headset support
- [ ] Implement analytics dashboard

---

**Built with ❤️ for campus exploration**
