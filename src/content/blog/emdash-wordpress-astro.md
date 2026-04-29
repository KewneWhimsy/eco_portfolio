---
slug: "emdash-successor-wordpress-astro-cloudflare"
title:
  fr: "EmDash : Cloudflare valide mes choix techniques, mais ne va pas assez loin"
  en: "EmDash: Cloudflare validates my technical choices, but doesn't go far enough"
  de: "EmDash: Cloudflare bestätigt meine technischen Entscheidungen, geht aber nicht weit genug"
description:
  fr: "Cloudflare vient de lancer un CMS concurrent de WordPress, construit sur Astro, exactement la technologie que j'utilise. Ça valide des choix. Ça ne règle pas tout."
  en: "Cloudflare just launched a CMS competing with WordPress, built on Astro — exactly the technology I use. It validates some choices. It doesn't fix everything."
  de: "Cloudflare hat gerade ein CMS als WordPress-Konkurrenz gestartet, gebaut auf Astro — genau die Technologie, die ich verwende. Es bestätigt Entscheidungen. Es löst nicht alles."
date: "2026-04-29"
tags: ["eco-conception", "securite", "performance"]
readTime: 4
published: true
---

WordPress fait tourner 43% du web. Blogs, boutiques, sites d'entreprise : c'est le choix par défaut depuis 20 ans. Le 1er avril 2026, Cloudflare a lancé EmDash, un CMS concurrent construit sur Astro et leurs propres serveurs. La date a semé le doute chez beaucoup de développeurs. C'était réel.

Ce qui m'intéresse dans cette annonce, c'est ce qu'elle dit sur les choix techniques, et sur leurs limites.

## Le problème que WordPress a créé

WordPress fonctionne avec des plugins : des extensions tierces qui ajoutent des fonctionnalités. Formulaire de contact, boutique, statistiques... il en existe des dizaines de milliers. Le problème : chaque plugin a un accès total au site. Un seul plugin compromis suffit à tout exposer. 96% des piratages de sites WordPress viennent de là.

## Ce qu'EmDash propose

EmDash résout ce problème à moitié. Chaque plugin est isolé : il doit déclarer à l'avance exactement ce à quoi il a besoin d'accéder, et ne peut rien faire d'autre. C'est plus sûr que WordPress. C'est aussi plus sobre : le site ne consomme rien quand personne ne le visite.

La combinaison choisie, Astro sur Cloudflare, c'est exactement ce que j'utilise pour les sites vitrines et e-commerce. Pour des applications plus complexes avec du temps réel, je vise d'autres technologies, mais pour ce type de besoin c'est le bon choix.

## Où je ne suis pas d'accord

EmDash reste un système à plugins. Il sécurise mieux les extensions, mais il en a toujours besoin pour fonctionner. C'est une réponse à un problème structurel que j'ai choisi de ne pas avoir.

La plupart des fonctionnalités qu'un plugin apporte, on peut les construire directement, en mieux et sans les risques qui vont avec. Un formulaire de contact, une galerie, un système de réservation : ce ne sont pas des problèmes compliqués. Ce sont des problèmes que des milliers de plugins résolvent de façon générique, avec tout le superflu et les vulnérabilités que ça implique.

Résultat : pas de surface d'attaque liée aux extensions, pas de dépendance à des mises à jour tierces, pas de fonctionnalités embarquées inutilement.

## Ce que ça confirme

EmDash montre que s’appuyer sur Astro et Cloudflare est une bonne direction pour créer des sites rapides, sécurisés et plus économes en ressources. C’est encourageant de voir ce type d’approche se démocratiser.

EmDash reste encore jeune pour un usage sérieux, et son fonctionnement basé sur des extensions implique forcément certains compromis.

Pour des projets où la performance, la sécurité et l’impact environnemental comptent, je privilégie le sur-mesure. L’objectif est simple : concevoir des interfaces adaptées aux besoins réels, sans menus inutiles ni complexité. On garde ainsi un outil clair, maîtrisé, et sans dépendance à une plateforme externe.

**Sources** : [Cloudflare Blog](https://blog.cloudflare.com/emdash-wordpress/) • [InfoQ](https://www.infoq.com/news/2026/04/cloudflare-emdash-wordpress/) • [Hacker News](https://news.ycombinator.com/item?id=47602832)

---lang:en---

WordPress powers 43% of the web. Blogs, shops, business sites: it's been the default choice for 20 years. On April 1, 2026, Cloudflare launched EmDash, a competing CMS built on Astro and their own infrastructure. The date caused confusion among developers. It was real.

What interests me about this announcement is what it says about technical choices — and their limits.

## The problem WordPress created

WordPress runs on plugins: third-party extensions that add features. Contact forms, shops, analytics — there are tens of thousands of them. The problem: every plugin has full access to the site. A single compromised plugin is enough to expose everything. 96% of WordPress breaches come from plugins.

## What EmDash offers

EmDash solves this problem halfway. Each plugin is isolated: it must declare upfront exactly what it needs access to, and can do nothing else. It's more secure than WordPress. It's also more efficient: the site consumes nothing when no one is visiting.

The combination — Astro on Cloudflare — is exactly what I use for showcase sites and e-commerce. For more complex applications with real-time requirements, I lean towards other technologies, but for this type of need it's the right choice.

## Where I disagree

EmDash is still a plugin-based system. It secures extensions better, but still depends on them to function. That's a response to a structural problem I chose not to have.

Most of what a plugin does can be built directly, better, and without the risks that come with it. A contact form, a gallery, a booking system: these aren't complicated problems. They're problems that thousands of plugins solve generically, with all the bloat and vulnerabilities that entails.

The result: no attack surface from extensions, no dependency on third-party updates, no unnecessary features shipped by default.

## What this confirms

EmDash shows that relying on Astro and Cloudflare is a solid direction for building fast, secure, and more resource-efficient websites. It’s encouraging to see this kind of approach becoming more widespread.

EmDash is still quite new for serious production use, and its plugin-based model inevitably comes with some compromises.

For projects where performance, security, and environmental impact matter, I focus on custom-built solutions. The goal is simple: create interfaces tailored to real needs, without unnecessary menus or complexity. This keeps things clear, controlled, and free from dependence on external platforms.

**Sources**: [Cloudflare Blog](https://blog.cloudflare.com/emdash-wordpress/) • [InfoQ](https://www.infoq.com/news/2026/04/cloudflare-emdash-wordpress/) • [Hacker News](https://news.ycombinator.com/item?id=47602832)

---lang:de---

WordPress betreibt 43% des Webs. Blogs, Shops, Unternehmensseiten: es ist seit 20 Jahren die Standardwahl. Am 1. April 2026 startete Cloudflare EmDash, ein konkurrierendes CMS, gebaut auf Astro und ihrer eigenen Infrastruktur. Das Datum sorgte bei Entwicklern für Verwirrung. Es war real.

Was mich an dieser Ankündigung interessiert, ist, was sie über technische Entscheidungen aussagt — und über ihre Grenzen.

## Das Problem, das WordPress geschaffen hat

WordPress läuft über Plugins: Erweiterungen von Drittanbietern, die Funktionen hinzufügen. Kontaktformulare, Shops, Statistiken — es gibt Zehntausende davon. Das Problem: Jedes Plugin hat vollen Zugriff auf die Website. Ein einziges kompromittiertes Plugin reicht aus, um alles offenzulegen. 96% der WordPress-Angriffe kommen von dort.

## Was EmDash bietet

EmDash löst dieses Problem zur Hälfte. Jedes Plugin ist isoliert: Es muss im Voraus genau deklarieren, worauf es zugreifen muss, und kann nichts anderes tun. Es ist sicherer als WordPress. Es ist auch sparsamer: Die Website verbraucht nichts, wenn niemand sie besucht.

Die gewählte Kombination — Astro auf Cloudflare — ist genau das, was ich für Unternehmensseiten und E-Commerce verwende. Für komplexere Anwendungen mit Echtzeit-Anforderungen setze ich auf andere Technologien, aber für diesen Bedarf ist es die richtige Wahl.

## Wo ich nicht einverstanden bin

EmDash bleibt ein Plugin-basiertes System. Es sichert Erweiterungen besser, ist aber immer noch auf sie angewiesen. Das ist eine Antwort auf ein strukturelles Problem, das ich nicht haben wollte.

Das meiste, was ein Plugin leistet, lässt sich direkt bauen, besser und ohne die damit verbundenen Risiken. Ein Kontaktformular, eine Galerie, ein Buchungssystem: das sind keine komplizierten Probleme. Es sind Probleme, die Tausende von Plugins auf generische Weise lösen, mit allem Überflüssigen und den Schwachstellen, die das mit sich bringt.

Ergebnis: keine Angriffsfläche durch Erweiterungen, keine Abhängigkeit von Drittanbieter-Updates, keine unnötig mitgelieferten Funktionen.

## Was das bestätigt

EmDash zeigt, dass es sinnvoll ist, auf Astro und Cloudflare zu setzen, um schnelle, sichere und ressourcenschonendere Websites zu erstellen. Es ist ermutigend zu sehen, dass sich dieser Ansatz zunehmend verbreitet.

EmDash ist noch recht neu für einen ernsthaften produktiven Einsatz, und sein pluginbasierter Ansatz bringt zwangsläufig gewisse Kompromisse mit sich.

Für Projekte, bei denen Leistung, Sicherheit und Umweltaspekte wichtig sind, setze ich auf maßgeschneiderte Lösungen. Das Ziel ist einfach: Interfaces zu entwickeln, die auf reale Bedürfnisse zugeschnitten sind, ohne unnötige Menüs oder Komplexität. So bleibt das Ganze klar, kontrollierbar und unabhängig von externen Plattformen.

**Quellen**: [Cloudflare Blog](https://blog.cloudflare.com/emdash-wordpress/) • [InfoQ](https://www.infoq.com/news/2026/04/cloudflare-emdash-wordpress/) • [Hacker News](https://news.ycombinator.com/item?id=47602832)
