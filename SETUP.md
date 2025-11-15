# AI Resume Analyzer - Setup Guide

## 📋 Overview

AI Resume Analyzer is a modern web application that helps analyze resumes using AI-powered feedback. It provides detailed insights on ATS compatibility, tone, content, structure, and skills.

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with React Router v7
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **Build Tool**: Vite 6
- **State Management**: Zustand
- **Authentication**: Puter.js
- **PDF Processing**: pdfjs-dist
- **Server**: Node.js with SSR (Server-Side Rendering)

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: v20.x or higher (tested with v20.19.5)
- **npm**: v10.x or higher (tested with v10.8.2)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/PratikKhaire/ai-resume-analyzer.git
cd ai-resume-analyzer
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages (approximately 288 packages).

### 3. Run Development Server

```bash
npm run dev
```

The application will start at **http://localhost:5173/**

### 4. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

### 5. Start Production Server

```bash
npm run start
```

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR at http://localhost:5173 |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run typecheck` | Run TypeScript type checking |

## 📁 Project Structure

```
ai-resume-analyzer/
├── app/                      # Application source code
│   ├── routes/              # Route components
│   │   ├── home.tsx         # Main resume dashboard
│   │   └── auth.tsx         # Authentication page
│   ├── components/          # Reusable React components
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── ResumeCard.tsx   # Resume display card
│   │   └── ScoreCircle.tsx  # Score visualization
│   ├── lib/                 # Utility libraries
│   │   └── puter.ts         # Puter.js integration
│   ├── root.tsx             # Root layout component
│   └── app.css              # Global styles
├── constants/               # Application constants
│   └── index.ts             # Resume data and AI prompts
├── types/                   # TypeScript type definitions
│   ├── index.d.ts           # Core types (Resume, Feedback, Job)
│   └── puter.d.ts           # Puter.js type definitions
├── public/                  # Static assets
│   ├── images/              # Images and backgrounds
│   └── icons/               # SVG icons
├── build/                   # Production build output (generated)
│   ├── client/              # Client-side assets
│   └── server/              # Server-side code
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
├── react-router.config.ts   # React Router configuration
└── Dockerfile               # Docker containerization
```

## 🔑 Key Features

1. **Resume Analysis**: Upload and analyze resumes with AI-powered feedback
2. **Multi-factor Scoring**: Get scores for:
   - ATS (Applicant Tracking System) compatibility
   - Tone and Style
   - Content quality
   - Structure and formatting
   - Skills alignment
3. **Authentication**: Secure login with Puter.js
4. **Responsive Design**: Works on desktop and mobile devices
5. **Server-Side Rendering**: Fast initial page loads

## 🐳 Docker Deployment

### Build Docker Image

```bash
docker build -t ai-resume-analyzer .
```

### Run Container

```bash
docker run -p 3000:3000 ai-resume-analyzer
```

The application will be available at **http://localhost:3000**

## 🔧 Configuration

### Environment Variables

The application uses Puter.js for authentication. Make sure the Puter.js SDK is properly loaded (included via CDN in `root.tsx`).

### Customizing Resume Data

Sample resume data is located in `constants/index.ts`. You can modify the `resumes` array to add or update resume examples.

### AI Response Format

The AI analysis format is defined in `constants/index.ts` as `AIResponseFormat`. This can be customized to change the feedback structure.

## 🧪 Development Tips

1. **Hot Module Replacement (HMR)**: The dev server supports HMR, so changes are reflected instantly
2. **Type Safety**: Always run `npm run typecheck` before committing changes
3. **Building**: Test production builds locally with `npm run build && npm run start`
4. **Debugging**: Use browser DevTools with React Developer Tools extension

## 📝 Important Notes

- The application requires authentication via Puter.js to access the main dashboard
- Resume PDFs are processed using pdfjs-dist
- All routes use React Router v7's new routing system
- The build process creates both client and server bundles for SSR

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is already in use, you can specify a different port:

```bash
npm run dev -- --port 3001
```

### Build Errors

If you encounter build errors:

1. Clear the build cache: `rm -rf build .react-router`
2. Reinstall dependencies: `rm -rf node_modules package-lock.json && npm install`
3. Run type checking: `npm run typecheck`

### TypeScript Errors

Run type generation and checking:

```bash
npm run typecheck
```

## 📚 Additional Resources

- [React Router Documentation](https://reactrouter.com/)
- [Vite Documentation](https://vitejs.dev/)
- [TailwindCSS Documentation](https://tailwindcss.com/)
- [Puter.js Documentation](https://puter.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and type checking
5. Submit a pull request

## 📄 License

This project is private. Check with the repository owner for licensing details.

---

**Ready to analyze resumes?** Run `npm run dev` and open http://localhost:5173/ in your browser! 🚀
