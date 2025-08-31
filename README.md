# Tech Domain Blog & Project Showcase

A modern, responsive blog and project showcase application built with Next.js 14, TypeScript, and Tailwind CSS. This application serves as a comprehensive platform for showcasing technical blogs, innovative projects, and team information.

## 🚀 Features

### Core Features
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode Support**: Toggle between light and dark themes with next-themes
- **Modern UI**: Clean, modern interface with smooth animations
- **TypeScript**: Full type safety throughout the application
- **SEO Optimized**: Built-in SEO optimization with Next.js 14

### Content Management
- **Blog System**: Display and manage technical blog posts
- **Project Showcase**: Highlight completed and ongoing projects
- **Search & Filter**: Advanced search and filtering by categories and tags
- **Featured Content**: Highlight important blogs and projects
- **Markdown Support**: Rich markdown content rendering

### User Experience
- **Smooth Animations**: CSS-based animations and transitions
- **Loading States**: Proper loading indicators
- **Error Handling**: Graceful error handling and user feedback
- **Mobile Navigation**: Collapsible mobile menu
- **Theme Persistence**: Remember user's theme preference

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Theme**: next-themes
- **Markdown**: react-markdown with remark-gfm
- **Deployment**: Netlify/Vercel ready

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd blog-showcase
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── blogs/             # Blog pages
│   ├── projects/          # Project pages
│   ├── about/             # About page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── layout/           # Layout components (Navbar, Footer)
│   ├── providers/        # Context providers
│   └── ui/               # UI components (Cards, SearchFilter)
├── data/                 # Static data files
│   ├── blogs.json        # Blog posts data
│   └── projects.json     # Projects data
└── types/                # TypeScript type definitions
```

## 📝 Content Management

### Adding Blog Posts

Edit `src/data/blogs.json` to add new blog posts:

```json
{
  "id": "unique-id",
  "title": "Your Blog Title",
  "excerpt": "Brief description...",
  "content": "# Full markdown content...",
  "author": "Author Name",
  "date": "2024-01-01",
  "readTime": "5 min read",
  "tags": ["tag1", "tag2"],
  "category": "Web Development",
  "image": "https://example.com/image.jpg",
  "featured": false
}
```

### Adding Projects

Edit `src/data/projects.json` to add new projects:

```json
{
  "id": "unique-id",
  "title": "Project Title",
  "description": "Brief description...",
  "longDescription": "Detailed description...",
  "technologies": ["React", "Node.js"],
  "category": "Web Development",
  "image": "https://example.com/image.jpg",
  "demoUrl": "https://demo.com",
  "githubUrl": "https://github.com/user/repo",
  "featured": true,
  "status": "completed",
  "date": "2024-01-01"
}
```

## 🎨 Customization

### Theme Colors

Modify `tailwind.config.ts` to customize the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Animations

Add custom animations in `tailwind.config.ts`:

```typescript
animation: {
  'custom-animation': 'customKeyframe 1s ease-in-out',
},
keyframes: {
  customKeyframe: {
    '0%': { /* styles */ },
    '100%': { /* styles */ },
  }
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `out` folder to Netlify

### Manual Deployment

```bash
npm run build
npm run start
```

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- Use TypeScript for all new files
- Follow the existing component structure
- Use Tailwind CSS for styling
- Add proper TypeScript types for all props and data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Lucide React for beautiful icons

---

Built with ❤️ by the Tech Domain team
