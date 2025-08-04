# Tomasz Trela - Personal Website

A modern, clean personal website built with Astro and Tailwind CSS, featuring a component-based blog system.

## 🚀 Features

- **Modern Tech Stack**: Built with Astro for optimal performance
- **Clean Components**: Separated content from styles using reusable components
- **Dynamic Blog**: Individual markdown files for each blog post
- **Type Safety**: Full TypeScript support with content collections
- **Responsive Design**: Beautiful UI that works on all devices
- **Performance Optimized**: Fast loading with static generation

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── BlogCard.astro
│   ├── BlogHeader.astro
│   ├── CategoryFilter.astro
│   └── NewsletterSignup.astro
├── content/
│   └── blog/           # Individual blog post markdown files
├── layouts/            # Page layouts
├── pages/              # Astro pages
├── utils/              # Utility functions
└── content/config.ts   # Content collections configuration
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd tomasztrela.eu-github

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Blog System

The blog uses Astro's content collections for type-safe content management:

- **Individual Posts**: Each blog post is a separate markdown file in `src/content/blog/`
- **Frontmatter**: Posts include metadata like title, excerpt, date, tags, etc.
- **Dynamic Routes**: Individual post pages are generated automatically
- **Components**: Clean separation of content and presentation

### Adding a New Blog Post

1. Create a new markdown file in `src/content/blog/`
2. Add frontmatter with required metadata:

```markdown
---
title: "Your Post Title"
excerpt: "Brief description of the post"
date: "2024-01-01"
readTime: "5 min read"
tags: ["Tag1", "Tag2"]
featured: false
---

# Your Post Content

Your markdown content here...
```

## 🎨 Components

The website uses a clean component architecture:

- **BlogCard**: Displays individual blog post previews
- **BlogHeader**: Page headers with title and description
- **CategoryFilter**: Tag-based filtering system
- **NewsletterSignup**: Email subscription component

All components are styled with Tailwind CSS and are fully responsive.

## 🚀 Deployment

The site is configured for deployment on GitHub Pages or any static hosting service.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
