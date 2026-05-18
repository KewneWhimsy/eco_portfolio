import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
  const site = "https://jkw.ovh";
  const langs = ["fr", "en", "de"] as const;
  const langCode: Record<string, string> = { fr: "fr-FR", en: "en-US", de: "de-DE" };

  const blogPosts = await getCollection("blog", (p) => p.data.published);
  const projects = await getCollection("projects");

  const staticPages = ["", "about", "blog", "contact", "eco", "legal", "network", "privacy", "projects", "services"];

  type Entry = { loc: string; alternates: { hreflang: string; href: string }[] };
  const entries: Entry[] = [];

  function altLinks(path: string) {
    return langs.map((l) => ({
      hreflang: langCode[l],
      href: path ? `${site}/${l}/${path}/` : `${site}/${l}/`,
    }));
  }

  for (const lang of langs) {
    for (const page of staticPages) {
      entries.push({
        loc: page ? `${site}/${lang}/${page}/` : `${site}/${lang}/`,
        alternates: altLinks(page),
      });
    }
    for (const post of blogPosts) {
      entries.push({
        loc: `${site}/${lang}/blog/${post.data.slug}/`,
        alternates: langs.map((l) => ({ hreflang: langCode[l], href: `${site}/${l}/blog/${post.data.slug}/` })),
      });
    }
    for (const project of projects) {
      entries.push({
        loc: `${site}/${lang}/${project.data.slug}/`,
        alternates: langs.map((l) => ({ hreflang: langCode[l], href: `${site}/${l}/${project.data.slug}/` })),
      });
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries
  .map(
    ({ loc, alternates }) => `  <url>
    <loc>${loc}</loc>
${alternates.map((a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}"/>`).join("\n")}
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
};
