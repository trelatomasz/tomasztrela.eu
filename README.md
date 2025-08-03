# tomasztrela.eu - Personal Website

A modern, responsive personal website built with Astro and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, minimal design with dark mode
- **Responsive**: Mobile-first approach with excellent mobile experience
- **Fast**: Built with Astro for optimal performance
- **SEO Friendly**: Static site generation with proper meta tags
- **Accessible**: Following web accessibility best practices

## 📁 Project Structure

```
src/
├── layouts/
│   └── Layout.astro          # Main layout component
├── pages/
│   ├── index.astro           # Home page
│   ├── mystuff.astro         # Portfolio/Projects page
│   └── blog.astro            # Blog page
└── components/               # Reusable components (future)
public/
└── favicon.svg              # Website favicon
```

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Hosting**: GitHub Pages (planned)
- **DNS**: nazwa.pl

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tomasztrela/tomasztrela.eu-github.git
cd tomasztrela.eu-github
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:4321`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📄 Pages

### Home Page (`/`)
- Personal introduction and description
- Tech stack overview
- Quick links to other sections

### My Stuff (`/mystuff`)
- Portfolio of projects
- GitHub activity and statistics
- Featured projects with descriptions
- Contact information

### Blog (`/blog`)
- Featured blog posts
- All blog posts with categories
- Newsletter signup
- Category filtering

## 🎨 Design System

### Colors
- **Primary**: Blue (#0ea5e9) - Used for accents and links
- **Background**: Dark gray (#111827) - Main background
- **Surface**: Medium gray (#1f2937) - Cards and sections
- **Text**: Light gray (#f3f4f6) - Primary text

### Typography
- **Headings**: Bold, primary color
- **Body**: Regular weight, light gray
- **Links**: Primary color with hover effects

## 🔧 Configuration

### Astro Configuration
The site is configured in `astro.config.mjs` with:
- Tailwind CSS integration
- Site URL configuration
- Base path settings

### Tailwind Configuration
Custom Tailwind configuration in `tailwind.config.mjs` includes:
- Dark mode support
- Custom color palette
- Responsive breakpoints

## 📱 Responsive Design

The website is built with a mobile-first approach:
- **Mobile**: Single column layout, collapsible navigation
- **Tablet**: Two-column grid for projects and blog posts
- **Desktop**: Full layout with sidebar navigation

## 🚀 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Push the `dist/` folder to the `gh-pages` branch
3. Configure GitHub Pages to serve from the `gh-pages` branch

### Custom Domain
The site is configured for `tomasztrela.eu` domain with DNS managed by nazwa.pl.

## 🤝 Contributing

This is a personal website, but suggestions and improvements are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Website**: [tomasztrela.eu](https://tomasztrela.eu)
- **GitHub**: [@tomasztrela](https://github.com/tomasztrela)
- **Email**: contact@tomasztrela.eu

---

Built with ❤️ using Astro and Tailwind CSS
