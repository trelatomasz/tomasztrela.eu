import type { CollectionEntry } from 'astro:content';

export interface BlogPost {
  title: string;
  excerpt: string;
  timeSpent: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  featured?: boolean;
}

export function formatBlogPost(post: CollectionEntry<'blog'>): BlogPost {
  return {
    title: post.data.title,
    excerpt: post.data.excerpt,
    timeSpent: post.data.timeSpent,
    date: post.data.date,
    readTime: post.data.readTime,
    tags: post.data.tags,
    slug: post.slug,
    featured: post.data.featured || false,
  };
}

export function sortPostsByDate(posts: BlogPost[]): BlogPost[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedPost(posts: BlogPost[]): BlogPost | null {
  return posts.find(post => post.featured) || null;
}

export function getPostsByTag(posts: BlogPost[], tag: string): BlogPost[] {
  return posts.filter(post => post.tags.includes(tag));
}

export function getAllTags(posts: BlogPost[]): string[] {
  const tagSet = new Set<string>();
  posts.forEach(post => {
    post.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
} 