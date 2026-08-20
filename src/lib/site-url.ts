// Eén bron van waarheid voor de canonieke site-URL — gebruikt door
// metadataBase, canonical, OG/Twitter-images, robots.ts en sitemap.ts.
// Zelfde patroon als getSiteUrl() in de hoofd-app
// (groomy-mvp/groomy/src/lib/site-url.ts): een env var met een
// fallback, zodat dit maar op één plek hoeft te veranderen zodra er een
// eigen domein aan dit Vercel-project hangt. Tot die tijd wijst dit naar
// de huidige Vercel-URL — zet NEXT_PUBLIC_SITE_URL zodra er een echt
// domein is, anders blijft alle SEO-metadata (canonical, OG-images,
// sitemap) naar het tijdelijke vercel.app-adres wijzen.
export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://barberapp-landing-1myu.vercel.app";
}
