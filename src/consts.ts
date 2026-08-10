// src/consts.ts

// Site metadata
export const SITE_TITLE = 'E-portafolio | Bases de Datos 1';
export const SITE_DESCRIPTION =
  'E-portafolio académico de Bases de Datos 1 - Universidad El Bosque';
// Blog settings
export const BLOG_TITLE = 'E-portafolio | Bases de Datos 1';
export const BLOG_DESCRIPTION = 'E-portafolio académico de Bases de Datos 1 - Universidad El Bosque';
export const POSTS_PER_PAGE = 6;
export const BLOG_URL = '/blog';

// Author defaults
export const DEFAULT_AUTHOR = 'Maicol Orti';

// 🆕 Blog-related constants
export const BLOG_CATEGORIES = [
  'All posts',
  'Architecture',
  'Materials',
  'Philosophy',
  'Innovation',
  'Interior Design',
  'Urbanism',
  'Wellness'
] as const;

export const BLOG_SOCIAL_SHARE = {
  twitter: true,
  linkedin: true,
  facebook: true,
  email: true
} as const;

export const DEFAULT_BLOG_IMAGE = '/favicon.svg';