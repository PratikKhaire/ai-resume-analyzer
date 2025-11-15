# AI Resume Analyzer 📄✨

An intelligent resume analysis tool powered by AI that provides comprehensive feedback on your resume's ATS compatibility, tone, content, structure, and skills alignment.

## 🚀 Quick Start

Get started in seconds:

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser!

📖 **New to this project?** Check out:
- [QUICK_START.md](./QUICK_START.md) - Get running in 3 steps
- [SETUP.md](./SETUP.md) - Complete documentation and guides

## ✨ Features

- 🤖 **AI-Powered Analysis** - Get intelligent feedback on your resume
- 📊 **Multi-Criteria Scoring** - ATS, tone, content, structure, and skills
- 🔐 **Secure Authentication** - Powered by Puter.js
- 🚀 **Server-Side Rendering** - Fast initial page loads
- ⚡️ **Hot Module Replacement** - Instant updates during development
- 📦 **Optimized Bundling** - Production-ready builds
- 🔒 **TypeScript** - Type-safe development
- 🎉 **TailwindCSS** - Modern, responsive styling

## 🛠️ Tech Stack

- **React 19** with **React Router v7** - Modern full-stack framework
- **TypeScript** - Type-safe development
- **TailwindCSS v4** - Utility-first styling
- **Vite 6** - Next-generation build tool
- **Zustand** - Lightweight state management
- **Puter.js** - Authentication system
- **pdfjs-dist** - PDF processing

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at http://localhost:5173 |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server at http://localhost:3000 |
| `npm run typecheck` | Run TypeScript type checking |

## 🐳 Docker Deployment

Build and run with Docker:

```bash
docker build -t ai-resume-analyzer .
docker run -p 3000:3000 ai-resume-analyzer
```

Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
ai-resume-analyzer/
├── app/                  # Application source code
│   ├── routes/          # Page routes (auth, home)
│   ├── components/      # React components
│   └── lib/            # Utilities
├── constants/           # App constants and data
├── types/              # TypeScript definitions
├── public/             # Static assets
└── build/              # Production build (generated)
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run typecheck` to verify
5. Submit a pull request

## 📚 Documentation

- [QUICK_START.md](./QUICK_START.md) - Get running in 3 steps
- [SETUP.md](./SETUP.md) - Complete setup guide with troubleshooting
- [React Router docs](https://reactrouter.com/)

## 📝 System Requirements

- Node.js v20.x or higher
- npm v10.x or higher

---

Built with ❤️ using React Router and AI
