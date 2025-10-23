import { type ComponentPropsWithoutRef, type ElementType } from 'react';

/**
 * Polymorphic component props
 * Allows components to be rendered as different HTML elements
 */
export type PolymorphicProps<E extends ElementType = ElementType> = {
  as?: E;
} & ComponentPropsWithoutRef<E>;

/**
 * Navigation item
 */
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: NavItem[];
}

/**
 * Site configuration
 */
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage?: string;
  links?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

/**
 * Project/Case study
 */
export interface Project {
  title: string;
  slug: string;
  description: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  stack: string[];
  featured?: boolean;
  order?: number;
}

/**
 * Theme modes
 */
export type Theme = 'light' | 'dark' | 'system';
