# Got Lost? - Quick Start Guide

## 🚀 Getting Your App Running

Congratulations! You've successfully set up the Got Lost? base project. Here's how to get it fully functional:

### ✅ What's Already Done

- ✓ Next.js project structure created
- ✓ All dependencies installed
- ✓ Tailwind CSS configured
- ✓ 360° Pannellum viewer integrated
- ✓ Navigation components built
- ✓ Scenes data structure ready
- ✓ Development server running on http://localhost:3000

### 📸 Next Steps: Add Your Panoramic Images

The app is currently looking for panoramic images that don't exist yet. Here's how to add them:

#### Option 1: Download Free Sample Panoramas (Quickest)

1. Visit one of these sources for free 360° equirectangular images:

   - **[Flickr Equirectangular Group](https://www.flickr.com/groups/equirectangular/)** - Free panoramas
   - **[Poly Haven HDRIs](https://polyhaven.com/hdris)** - High-quality free HDRIs
   - **[Sample Panorama](https://pannellum.org/images/cerro-toco-0.jpg)** - Direct link to test image

2. Download at least 2 images (for testing navigation)

3. Rename them to match the scene configuration:

   ```
   sample-entrance.jpg
   sample-library.jpg
   ```

4. Place them in: `public/assets/panoramas/`

5. Refresh your browser at http://localhost:3000

#### Option 2: Use Your Own 360° Photos

1. **Capture Photos:**

   - Use a 360° camera (Ricoh Theta, Insta360, GoPro Max, etc.)
   - Or use a smartphone panorama app
   - Or stitch multiple photos using software like Hugin or PTGui

2. **Ensure Correct Format:**

   - **Projection**: Equirectangular (2:1 aspect ratio)
   - **Resolution**: Recommended 4096x2048 or higher
   - **Format**: JPG or PNG
   - **Size**: Compress to < 2MB for web performance

3. **Add to Project:**

   ```
   public/assets/panoramas/
   ├── sample-entrance.jpg  (your first location)
   ├── sample-library.jpg   (your second location)
   └── ...more scenes
   ```

4. **Update Scene Configuration** in `data/scenesData.js` if using different names

### 🎨 Customizing Your Scenes

Edit `data/scenesData.js` to add more locations or modify existing ones:

```javascript
export const scenesData = {
  yourNewScene: {
    id: "yourNewScene",
    title: "Your Location Name",
    imageUrl: "/assets/panoramas/your-image.jpg",
    description: "Brief description",
    hotspots: [
      {
        id: "hs1",
        pitch: -10, // Vertical angle (-90 to 90)
        yaw: 50, // Horizontal angle (0 to 360)
        type: "scene", // or 'info'
        targetScene: "anotherScene", // for navigation
        text: "Click me!",
        createTooltipArgs: "Navigation →",
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

### 🧪 Testing Without Images (Development Mode)

If you want to test the interface without panoramas:

1. The app will show an error message with instructions
2. All other components (navbar, map overlay, navigation) will still work
3. You can navigate between pages using the menu

### 📝 Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### 🌐 View Your App

Once you've added images, open your browser to:

- **Home/Viewer**: http://localhost:3000
- **Explore Page**: http://localhost:3000/explore
- **About Page**: http://localhost:3000/about

### 🎯 Features to Try

1. **360° Navigation**: Click and drag to look around
2. **Zoom**: Scroll to zoom in/out
3. **Hotspots**: Click blue hotspots to navigate between scenes
4. **Info Points**: Click green hotspots for information
5. **Mini-Map**: Bottom-right overlay shows your location
6. **Fullscreen**: Use the fullscreen button for immersive view

### 🔧 Troubleshooting

**Images not loading?**

- Check that images are in `public/assets/panoramas/`
- Verify image names match those in `data/scenesData.js`
- Ensure images are equirectangular format (2:1 ratio)
- Clear browser cache and refresh

**Hotspots not appearing?**

- Check pitch/yaw values in scenesData.js
- Make sure targetScene IDs match scene IDs
- Verify hotspot type is 'scene' or 'info'

**Performance issues?**

- Compress your panorama images (target < 2MB each)
- Use JPG instead of PNG for photos
- Reduce image resolution if needed

### 📚 Learn More

- [Pannellum Documentation](https://pannellum.org/documentation/overview/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Creating Equirectangular Panoramas](https://en.wikipedia.org/wiki/Equirectangular_projection)

### 🎉 You're All Set!

Your Got Lost? campus map is ready to be customized. Add your panoramic images and start exploring your virtual campus tour!

---

**Need help?** Check the main [README.md](./README.md) for more detailed information.
