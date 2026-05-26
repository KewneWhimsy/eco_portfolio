---
slug: "drupal-faille-securite-sites-publics"
title:
  fr: "Drupal : quand le site de votre mairie devient une porte ouverte"
  en: "Drupal: when your town hall's website becomes an open door"
  de: "Drupal: Wenn die Website Ihrer Gemeinde zur offenen Tür wird"
description:
  fr: "Une faille majeure expose des milliers de sites d'administrations françaises sous Drupal. Ce n'est pas une surprise, c'est une conséquence logique de la complexité."
  en: "A major vulnerability exposes thousands of French public administration websites running Drupal. Not a surprise — a predictable consequence of complexity."
  de: "Eine schwerwiegende Sicherheitslücke betrifft tausende französische Behördenwebsites unter Drupal. Keine Überraschung, sondern eine logische Folge der Komplexität."
date: "2026-05-26"
tags: ["securite", "eco-conception", "web"]
published: true
---

La semaine dernière, une faille de sécurité majeure a été découverte dans Drupal, le logiciel qui fait tourner des milliers de sites publics français. Des universités, des mairies, des services de l'État. Et personne n'en parle vraiment.

## C'est quoi Drupal ?

C'est le logiciel qu'on installe "derrière" un site web pour gérer son contenu. Un peu comme WordPress, mais plébiscité par les administrations françaises depuis des années.

Le problème avec ces outils : ils sont complexes, ils nécessitent des mises à jour régulières, et quand une faille est découverte, elle est souvent exploitée avant que les équipes aient eu le temps de réagir. C'est exactement ce qui se passe en ce moment.

## La faille en clair

Précision importante : la faille ne concerne pas tous les sites Drupal, mais ceux qui utilisent PostgreSQL comme base de données. Ironie du sort : PostgreSQL est la base de données la plus rigoureuse du marché, et ce n'est pas elle le coupable. C'est Drupal qui gère mal les données qu'il lui envoie. De son côté, PostgreSQL fait exactement ce qu'on lui demande.

Un hacker peut accéder à ces bases de données sans mot de passe, sans compte, sans rien. Juste en envoyant une requête mal formée au bon endroit.

Plus de 15 000 tentatives d'attaque ont été documentées en quelques jours sur des milliers de sites dans le monde. Les sites français (universités, collectivités, .gouv.fr) font partie des cibles potentielles.

## Le vrai problème

Cette faille sera corrigée. Mais dans deux ans, il y en aura une autre. C'est la nature de ces systèmes : plus c'est complexe, plus il y a de surface à attaquer.

La question que peu de gens posent : est-ce qu'une mairie ou une association a vraiment besoin d'un outil aussi lourd ?

Un site qui publie des horaires, des actualités, un formulaire de contact, ça peut être construit différemment. Plus simple, plus léger, sans base de données exposée à internet. Moins de risques, moins de maintenance, moins de coûts.

Ce n'est pas magique. Mais c'est une approche qui existe, et qui fait sens pour beaucoup de structures publiques ou associatives.

---

Si vous gérez un site sous Drupal : mettez-le à jour maintenant (avis SA-CORE-2026-004). Si vous vous interrogez sur votre présence en ligne, c'est peut-être le bon moment.

**Sources** : [Avis officiel Drupal](https://www.drupal.org/sa-core-2026-004) • [Clubic](https://www.clubic.com/actualite-614020-universites-mairies-sites-gouv-fr-une-faille-drupal-activement-exploitee-concerne-directement-le-service-public-francais.html) • [Le Monde Informatique](https://www.lemondeinformatique.fr/actualites/lire-une-faille-critique-empoisonne-les-administrateurs-drupal-100217.html) • [Tenable](https://www.tenable.com/blog/cve-2026-9082-highly-critical-sql-injection-vulnerability-in-drupal-core-sa-core-2026-004) • [BleepingComputer](https://www.bleepingcomputer.com/news/security/drupal-critical-sql-injection-flaw-now-targeted-in-attacks/)

---lang:en---

Last week, a major security vulnerability was discovered in Drupal, the software powering thousands of French public websites. Universities, town halls, government agencies. And barely anyone is talking about it.

## What is Drupal?

It's the software installed "behind" a website to manage its content. A bit like WordPress, but one that French public administrations have favoured for years.

The problem with these tools: they're complex, they require regular updates, and when a vulnerability is discovered, it's often exploited before teams have had time to react. That's exactly what's happening right now.

## The flaw, explained plainly

One important note: the flaw doesn't affect every Drupal site, only those using PostgreSQL as their database. The irony is that PostgreSQL is actually one of the most solid databases out there — it's not the culprit here. It's Drupal that handles the data it sends poorly. PostgreSQL, for its part, does exactly what it's told.

A hacker can access those databases without a password, without an account, without anything. Just by sending a malformed request to the right place.

More than 15,000 attack attempts have been documented within a few days across thousands of sites worldwide. French sites (universities, local authorities, .gouv.fr) are among the potential targets.

## The real problem

This vulnerability will be patched. But in two years, there will be another one. That's the nature of these systems: the more complex they are, the larger the attack surface.

The question few people ask: does a town hall or a community organisation really need such a heavy tool?

A website that publishes opening hours, news, and a contact form can be built differently. Simpler, lighter, with no database exposed to the internet. Less risk, less maintenance, lower costs.

It's not magic. But it's an approach that exists, and one that makes sense for many public or non-profit organisations.

---

If you manage a Drupal site: update it now (advisory SA-CORE-2026-004). If you're questioning your online setup, this might be a good moment to do so.

**Sources**: [Official Drupal advisory](https://www.drupal.org/sa-core-2026-004) • [SecurityWeek](https://www.securityweek.com/drupal-vulnerability-in-hacker-crosshairs-shortly-after-disclosure/) • [The Hacker News](https://thehackernews.com/2026/05/drupal-core-sql-injection-bug-actively.html) • [Tenable](https://www.tenable.com/blog/cve-2026-9082-highly-critical-sql-injection-vulnerability-in-drupal-core-sa-core-2026-004) • [BleepingComputer](https://www.bleepingcomputer.com/news/security/drupal-critical-sql-injection-flaw-now-targeted-in-attacks/)

---lang:de---

Letzte Woche wurde eine schwerwiegende Sicherheitslücke in Drupal entdeckt, der Software, die tausende französischer öffentlicher Websites betreibt. Universitäten, Rathäuser, Behörden. Und kaum jemand spricht darüber.

## Was ist Drupal?

Es ist die Software, die "hinter" einer Website installiert wird, um deren Inhalte zu verwalten. Ein bisschen wie WordPress, aber von französischen Behörden seit Jahren bevorzugt eingesetzt.

Das Problem mit diesen Tools: Sie sind komplex, erfordern regelmäßige Updates, und wenn eine Sicherheitslücke entdeckt wird, wird sie oft ausgenutzt, bevor die Teams Zeit hatten zu reagieren. Genau das passiert gerade.

## Die Lücke in verständlichen Worten

Ein wichtiger Hinweis: Die Lücke betrifft nicht alle Drupal-Websites, sondern nur jene, die PostgreSQL als Datenbank nutzen. Die Ironie dabei: PostgreSQL gilt als eine der zuverlässigsten Datenbanken überhaupt und ist nicht der Schuldige. Es ist Drupal, das die Daten, die es an PostgreSQL sendet, schlecht verarbeitet. PostgreSQL seinerseits tut genau das, was man von ihm verlangt.

Ein Hacker kann auf diese Datenbanken zugreifen, ohne Passwort, ohne Konto, ohne irgendetwas. Nur durch das Senden einer fehlerhaften Anfrage an die richtige Stelle.

Mehr als 15.000 Angriffsversuche wurden innerhalb weniger Tage auf tausenden Websites weltweit dokumentiert. Französische Websites (Universitäten, Kommunen, .gouv.fr) gehören zu den potenziellen Zielen.

## Das eigentliche Problem

Diese Lücke wird geschlossen werden. Aber in zwei Jahren wird es eine neue geben. Das ist die Natur dieser Systeme: Je komplexer sie sind, desto größer ist die Angriffsfläche.

Die Frage, die kaum jemand stellt: Braucht eine Gemeinde oder ein Verein wirklich ein so schweres Werkzeug?

Eine Website, die Öffnungszeiten, Neuigkeiten und ein Kontaktformular veröffentlicht, kann anders gebaut werden. Einfacher, leichter, ohne eine im Internet exponierte Datenbank. Weniger Risiken, weniger Wartungsaufwand, geringere Kosten.

Das ist kein Wundermittel. Aber es ist ein Ansatz, der existiert, und der für viele öffentliche oder gemeinnützige Organisationen Sinn ergibt.

---

Wenn Sie eine Drupal-Website betreiben: Aktualisieren Sie sie jetzt (Sicherheitshinweis SA-CORE-2026-004). Wenn Sie Ihre Online-Präsenz hinterfragen, ist jetzt vielleicht der richtige Moment dafür.

**Quellen**: [Offizieller Drupal-Hinweis](https://www.drupal.org/sa-core-2026-004) • [SecurityWeek](https://www.securityweek.com/drupal-vulnerability-in-hacker-crosshairs-shortly-after-disclosure/) • [The Hacker News](https://thehackernews.com/2026/05/drupal-core-sql-injection-bug-actively.html) • [Tenable](https://www.tenable.com/blog/cve-2026-9082-highly-critical-sql-injection-vulnerability-in-drupal-core-sa-core-2026-004) • [BleepingComputer](https://www.bleepingcomputer.com/news/security/drupal-critical-sql-injection-flaw-now-targeted-in-attacks/)
