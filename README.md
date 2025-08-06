# Loom Video Downloader - Next.js

A modern, Next.js-based web application for downloading videos from Loom.com with a clean, professional interface.

## ✨ Features

- **🎯 Single Video Downloads**: Download individual Loom videos with ease
- **🎨 Modern UI**: Clean, professional design with Tailwind CSS
- **🌙 Dark Mode**: Toggle between light and dark themes
- **📱 Responsive Design**: Works perfectly on desktop and mobile devices
- **⚡ Direct Downloads**: Videos download directly from Loom's servers
- **🔒 No Server Storage**: Videos are never stored on the server
- **🎭 Multiple Formats**: Support for MP4, WEBM, and MOV formats
- **⚙️ Next.js 14**: Built with the latest Next.js features

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd loom-downloader-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎯 Usage

### Web Interface

1. **Enter Loom URL**: Paste a Loom video URL in the format `https://www.loom.com/share/video-id`
2. **Select Format**: Choose your preferred video format (MP4, WEBM, MOV)
3. **Click Download**: The system will fetch the direct download URL
4. **Download Video**: Click the "Download Video" button to download directly from Loom

## 🛠️ API Endpoints

### Single Download
```http
POST /api/download-single
Content-Type: application/json

{
  "url": "https://www.loom.com/share/video-id",
  "filename": "video.mp4"
}
```

**Response:**
```json
{
  "success": true,
  "filename": "video.mp4",
  "videoId": "video-id",
  "downloadUrl": "https://loom.com/direct-download-url"
}
```

## 🎨 UI Features

- **Modern Design**: Clean, minimalist interface with professional styling
- **Floating Icons**: Decorative elements for visual appeal
- **Gradient Accents**: Beautiful blue gradient underlines and buttons
- **Smooth Animations**: Hover effects and transitions
- **Responsive Layout**: Adapts to different screen sizes
- **Dark Mode Toggle**: Switch between light and dark themes

## 🔧 Technical Details

### Architecture
- **Frontend**: Next.js 14 with TypeScript and Tailwind CSS
- **Backend**: Next.js API Routes
- **Styling**: Tailwind CSS for modern, responsive design
- **State Management**: React hooks for local state

### Key Components
- `src/app/page.tsx` - Main page component
- `src/app/api/download-single/route.ts` - API endpoint for downloads
- `tailwind.config.ts` - Tailwind CSS configuration

### Dependencies
- `next` - React framework
- `react` - UI library
- `axios` - HTTP client for API requests
- `tailwindcss` - CSS framework

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
npm start
```

### Local Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

## 📱 Screenshots

### Features
- Clean, modern interface
- Format selection dropdown
- Direct download functionality
- Progress tracking
- Dark mode support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This tool is for educational purposes only. Please respect copyright laws and only download videos you have permission to download. The developers are not responsible for any misuse of this software.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Include your Node.js version and operating system

## 📈 Roadmap

- [ ] Bulk download interface
- [ ] Video quality selection
- [ ] Download history
- [ ] User authentication
- [ ] API rate limiting
- [ ] Video metadata extraction

---

**Made with ❤️ using Next.js 14**

*Transform your offline video collection with this reliable and efficient downloader.*
