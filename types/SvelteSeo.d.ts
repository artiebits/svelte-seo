/// <reference types="svelte" />
import { Thing, WithContext } from "schema-dts";
import { SvelteComponentTyped } from "svelte";

export interface SvelteSeoProps {
  title?: string;

  noindex?: boolean;
  nofollow?: boolean;

  description?: string;

  keywords?: string;

  canonical?: string;

  openGraph?: OpenGraph;

  twitter?: Twitter;

  jsonLd?: Thing | WithContext<Thing>;
}

export interface OpenGraph {
  title?: string;
  description?: string;
  url?: string;
  type?: string;
  article?: OpenGraphArticle;
  images?: OpenGraphImage[];
}

export interface OpenGraphArticle {
  publishedTime?: string;
  modifiedTime?: string;
  expirationTime?: string;
  section?: string;
  authors?: string[];
  tags?: string[];
}

export interface OpenGraphImage {
  url: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
}

export interface Twitter {
  card?: TwitterCard;
  site?: string;
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  player?: string;
  playerWidth?: number;
  playerHeight?: number;
}

export type TwitterCard = 'summary' | 'summary_large_image' | 'player'

export default class SvelteSeo extends SvelteComponentTyped<
  SvelteSeoProps,
  {},
  {}
> {}
