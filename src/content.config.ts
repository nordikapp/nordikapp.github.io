import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const l10n = z.object({ fr: z.string(), en: z.string() });
const l10nList = z.object({ fr: z.array(z.string()), en: z.array(z.string()) });

const apps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/apps' }),
  schema: z.object({
    name: z.string(),
    order: z.number(),
    color: z.string(),
    monogram: z.string().max(2),
    status: z.enum(['live', 'beta', 'soon']),
    platforms: z.array(z.enum(['ios', 'android', 'web'])),
    maker: z.string(),
    tagline: l10n,
    description: l10n,
    // Comptes utilisateurs : active la page « suppression de compte » (exigée par Google Play).
    accounts: z.boolean(),
    dataCollected: l10nList,
    thirdParties: z.array(z.string()).default([]),
    links: z
      .object({
        appStore: z.string().url().optional(),
        googlePlay: z.string().url().optional(),
        web: z.string().url().optional(),
      })
      .default({}),
    privacyUpdated: z.coerce.date(),
  }),
});

export const collections = { apps };
