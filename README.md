# Malak's Luxury Portfolio

A luxury, minimalist portfolio website for Graphic Designer Malak built with React and Vite.

## How to Add Your Images

### Step 1: Add Your Project Images

Place your project images in the `public/images/` folder:

```
portfolio/
├── public/
│   └── images/
│       ├── project-1.jpg    ← Your first project
│       ├── project-2.jpg    ← Your second project
│       ├── project-3.jpg    ← Your third project
│       ├── project-4.jpg
│       ├── project-5.jpg
│       └── project-6.jpg
```

### Step 2: Supported Image Formats

- JPG
- PNG  
- WebP
- SVG

### Step 3: Update Image Names

If you want to use different image names, you can update the code in:
- `src/pages/Home.jsx` - For the featured projects on the home page
- `src/pages/Portfolio.jsx` - For the full portfolio grid

## How to Customize Projects

### Option 1: Edit the Code Directly

Open `src/pages/Portfolio.jsx` and modify the `projects` array:

```
javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    category: 'Your Category',
    image: 'your-image.jpg',
  },
  // Add more projects...
]
```

### Option 2: Categories Available

The filter system supports these categories:
- All
- Branding
- Print Design
- UI/UX
- Packaging
- Motion Graphics
- Identity

## Running the Project

```
bash
cd portfolio
npm install
npm run dev
```

Then open http://localhost:5173/ in your browser.

## Building for Production

```
bash
npm run build
```

This will create a `dist` folder with the production-ready files.

## Project Structure

```
portfolio/
├── public/
│   └── images/           ← Your project images go here
├── src/
│   ├── pages/
│   │   ├── Home.jsx      ← Hero section, featured works
│   │   ├── Portfolio.jsx ← Full portfolio grid
│   │   ├── Projects.jsx  ← Project details
│   │   ├── Skills.jsx     ← Skills & tools
│   │   ├── About.jsx      ← Bio & timeline
│   │   └── Contact.jsx   ← Contact form
│   ├── components/
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   └── App.jsx
├── index.html
└── package.json
```

## Tips for Your Images

For best results:
- Use high-quality images (at least 1200px wide)
- Use consistent aspect ratio (recommended: 4:3 or 16:9)
- Optimize images for web (use tools like TinyPNG)
- Name files consistently (e.g., project-1.jpg, project-2.jpg)

## Need Help?

The website is set up to show placeholder text if images are missing. Once you add your images to the `public/images/` folder, they will automatically appear in the portfolio.
