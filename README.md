# Loom Video Downloader - Next.js

A modern, Next.js-based web application for downloading videos from Loom.com with a clean, professional interface.

![Loom Video Downloader](https://img.shields.io/badge/Next.js-15.4.6-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **🎯 Single Video Downloads**: Download individual Loom videos with ease
- **🎨 Modern UI**: Clean, professional design with Tailwind CSS
- **🌙 Dark Mode**: Toggle between light and dark themes
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **⚡ Fast Performance**: Built with Next.js 15 for optimal speed
- **🔒 Secure**: No server-side file storage, direct download links
- **🎵 Multiple Formats**: Support for MP4, WEBM, and MOV formats
- **📊 Progress Tracking**: Real-time download progress indicators
- **🚀 Vercel Ready**: Optimized for Vercel deployment

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/stevie1mat/LoomDownloader.git
   cd loom-downloader-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### Web Interface

1. **Enter Loom URL**: Paste your Loom video URL in the input field
2. **Select Format**: Choose your preferred video format (MP4, WEBM, MOV)
3. **Click Download**: The app will process your video and provide a direct download link
4. **Download**: Click the download button to save your video

### Example URLs

```
https://www.loom.com/share/video-id
https://loom.com/share/abc123def456
```

## 🔧 API Reference

### Download Single Video

**Endpoint**: `POST /api/download-single`

**Request Body**:
```json
{
  "url": "https://www.loom.com/share/video-id",
  "filename": "video.mp4"
}
```

**Response**:
```json
{
  "success": true,
  "filename": "video.mp4",
  "videoId": "video-id",
  "downloadUrl": "https://cdn.loom.com/video-url"
}
```

**Error Response**:
```json
{
  "error": "Invalid Loom URL"
}
```

## 🛠️ Development

### Project Structure

```
loom-downloader-nextjs/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── download-single/
│   │   │       └── route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
├── public/
├── package.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables

No environment variables required for basic functionality.

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Deploy automatically** - Vercel will detect Next.js and deploy
3. **Custom domain** - Add your custom domain in Vercel dashboard

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

### Docker Deployment

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

## 🎨 UI Features

### Design System

- **Color Palette**: Blue and purple gradients
- **Typography**: Inter font family
- **Components**: Modern card-based design
- **Animations**: Smooth transitions and hover effects

### Dark Mode

- **Automatic detection** of system preferences
- **Manual toggle** with sun/moon icons
- **Persistent state** across sessions

### Responsive Design

- **Mobile-first** approach
- **Breakpoints**: sm, md, lg, xl
- **Touch-friendly** interface

## 🔒 Security & Privacy

### Data Protection

- **No file storage** on server
- **Direct download links** from Loom CDN
- **No user data collection**
- **HTTPS encryption** for all requests

### Copyright Compliance

- **Educational use only**
- **No copyrighted content** support
- **User responsibility** for downloads

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- **TypeScript** for type safety
- **ESLint** for code quality
- **Prettier** for formatting
- **Conventional commits** for commit messages

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This tool is for educational purposes only. Users are responsible for ensuring they have the right to download any content. We do not support or condone the download of copyrighted material without permission.

## 🆘 Support

### Common Issues

**Q: Video won't download**
A: Ensure the Loom URL is valid and the video is publicly accessible.

**Q: Format not available**
A: Try a different format (MP4, WEBM, MOV) as availability varies.

**Q: Download link expired**
A: Loom download links have expiration times. Try downloading again.

### Getting Help

- **GitHub Issues**: [Report bugs and feature requests](https://github.com/stevie1mat/LoomDownloader/issues)
- **Documentation**: Check this README for usage instructions
- **Community**: Join our discussions

## 🗺️ Roadmap

### Planned Features

- [ ] **Bulk Downloads**: Download multiple videos at once
- [ ] **Playlist Support**: Download entire Loom playlists
- [ ] **Quality Selection**: Choose video quality options
- [ ] **Download History**: Track previous downloads
- [ ] **Export Formats**: Support for more video formats
- [ ] **API Rate Limiting**: Better request management
- [ ] **User Authentication**: Optional user accounts
- [ ] **Analytics Dashboard**: Download statistics

### Technical Improvements

- [ ] **PWA Support**: Progressive Web App features
- [ ] **Offline Mode**: Cache for better performance
- [ ] **Service Workers**: Background processing
- [ ] **WebAssembly**: Faster video processing
- [ ] **Edge Functions**: Serverless API optimization

## 🙏 Acknowledgments

- **Loom.com** for providing the video platform
- **Next.js Team** for the amazing framework
- **Vercel** for seamless deployment
- **Tailwind CSS** for the utility-first CSS framework
- **Open Source Community** for inspiration and support

---

**Made with ❤️ by the Loom Downloader Team**

*Last updated: December 2024*
