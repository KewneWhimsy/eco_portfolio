---
slug: "[lang]/portfolio"
title:
  fr: "Portfolio personnel éco-responsable"
  en: "Eco-friendly Personal Portfolio"
  de: "Umweltfreundliches persönliches Portfolio"
description:
  fr: "Présentation de mon portfolio multilingue avec mode éco, conçu selon les principes de l'éco-conception web."
  en: "Presentation of my multilingual portfolio with eco mode, designed according to web eco-design principles."
  de: "Präsentation meines mehrsprachigen Portfolios mit Öko-Modus, entwickelt nach den Prinzipien des Web-Öko-Designs."
year: 2025
featured: true
tech: ["Astro", "TailwindCSS", "TypeScript"]
images:
  hero: "../../assets/projects/portfolio01.png"
links:
  github: "https://github.com/KewneWhimsy/eco_portfolio"
order: 2
status: "completed"
---

## Aperçu du projet

Ce portfolio a été conçu pour montrer qu'un site web performant et agréable à utiliser peut aussi être léger et respectueux des ressources. Il propose deux versions : standard et éco, chacune avec ses avantages.

Combien de fois avez-vous quitté un site parce qu'il était trop lent, bourré de publicités intrusives, ou vous harcelait pour accepter des cookies? Ce portfolio est ma tentative de créer une expérience web plus respectueuse, qui fonctionne bien sur tous les appareils sans frustration.

## Caractéristiques principales

### Mode éco pratique
Une version simplifiée du site qui élimine le superflu pour aller droit à l'essentiel - idéale sur mobile ou connexion lente.

### Support multilingue
Disponible en français, anglais et allemand avec redirection automatique basée sur la localisation du visiteur.

### Chargement rapide
Optimisation des ressources pour une expérience fluide et réactive sur tous les appareils.

### Transitions fluides
Éléments persistants entre les pages pour réduire les chargements redondants et offrir une navigation sans interruption.

## Approche technique

### Frontend
- Astro pour générer du HTML statique avec un minimum de JavaScript
- Tailwind CSS pour des styles optimisés et une empreinte minimale
- Transitions persistantes pour éviter de recharger les éléments communs
- Redirection multilingue via Cloudflare Rules
- Architecture permettant deux modes distincts (standard et éco)

### Optimisations
- Pages HTML statiques avec JavaScript limité aux fonctionnalités essentielles
- Images optimisées avec formats modernes (WebP, AVIF) et chargement différé
- Attributs transition-persist sur les composants partagés entre les pages
- Préchargement des ressources critiques pour une navigation instantanée
- Mode éco accessible via un simple bouton pour basculer instantanément

## Défis rencontrés

### Expérience vs performance
Trouver l'équilibre entre une interface attrayante et un site ultra-performant.

### Navigation fluide
Concevoir une transition transparente entre les pages sans recharger les éléments communs.

### Double mode
Concevoir deux versions du site sans dupliquer inutilement le code et les ressources.

### Accessibilité
S'assurer que les deux versions restent parfaitement accessibles à tous.

## Choix de conception

### Priorité au contenu
L'information reste au premier plan, sans être submergée par des éléments décoratifs superflus.

### Composants persistants
Utilisation de transition-persist pour conserver les éléments communs entre les pages et améliorer la fluidité.

### URLs intuitives
Structure d'URL claire par langue et mode (/fr/, /en/, /fr/eco/) pour un partage facile des pages.

### Mode éco visible
Bouton toujours accessible pour basculer entre les modes standard et éco selon vos préférences.

## Un web sans bandeaux de cookies

Avez-vous remarqué qu'il n'y a pas de bandeau de cookies sur ce site ? Ce n'est pas un oubli. La plupart des sites n'ont pas besoin de ces bandeaux intrusifs qui dégradent l'expérience utilisateur, surtout sur mobile où ils occupent parfois la moitié de l'écran.

Les sites qui n'utilisent des cookies que pour des fonctionnalités essentielles (comme mémoriser votre langue préférée ou maintenir une session) n'ont pas besoin de demander votre consentement. La législation RGPD ne l'exige que pour les cookies de suivi, d'analyse ou de publicité.

Ce portfolio respecte votre vie privée par défaut : pas de trackers, pas d'analytics, pas de publicité — donc pas besoin de bandeau. Imaginez un web où la majorité des sites adoptent cette approche : une expérience plus fluide, moins de frustration et plus de respect pour l'attention de l'utilisateur.

## Standard vs Éco

| Métrique | Mode standard | Mode éco |
|----------|---------------|----------|
| JavaScript | Minimal, pour interactions essentielles | Quasiment absent |
| Images | Optimisées mais présentes | Réduites au minimum nécessaire |
| Transitions | Éléments persistants entre les pages | Navigation directe sans animations |
| Expérience | Plus riche visuellement | Plus directe, axée sur le contenu |

## Performance et impact

- **Taille de page (mode standard)** : < 200 Ko
- **Taille de page (mode éco)** : < 50 Ko
- **Temps de chargement** : < 1 seconde
- **Score Lighthouse** : 99-100/100

## ClientRouter et transition-persist

Pour améliorer l'expérience de navigation, j'utilise `ClientRouter` d'Astro 5 avec l'attribut `transition-persist` sur plusieurs composants clés du site. Cette approche permet :

- Navigation fluide avec effet de transition entre les pages sans rechargement complet
- Conservation des éléments communs entre les pages (logo, photo, menu, footer) sans les recharger
- Réduction drastique des requêtes réseau lors de la navigation
- Transitions fluides sans clignotement des éléments marqués avec transition-persist

### Mode standard vs Mode éco

Une différence clé entre les deux modes de ce site concerne l'utilisation de ClientRouter :

- **Mode standard**: ClientRouter est activé pour des transitions fluides et une expérience plus riche
- **Mode éco**: ClientRouter est délibérément désactivé pour une expérience plus légère et plus directe

Cette approche montre qu'il est possible d'adapter l'expérience utilisateur en fonction du contexte d'utilisation, sans compromettre l'accès à l'information.

## Pourquoi un mode éco?

Je crois qu'un bon site web devrait d'abord être accessible et rapide. Le mode éco n'est pas qu'une question d'environnement : c'est aussi une meilleure expérience pour beaucoup d'utilisateurs. Combien de fois avez-vous quitté un site parce qu'il était trop lent à charger, encombré de publicités, ou vous harcelait pour accepter des cookies? Je préfère un web plus léger, qui respecte l'attention de l'utilisateur et fonctionne bien sur tous les appareils sans frustration. Ce portfolio est ma modeste contribution à cette vision.

---lang:en---

## Project Overview

This portfolio was designed to demonstrate that a high-performing, pleasant-to-use website can also be lightweight and resource-efficient. It offers both a standard version and an eco version, each with its own advantages.

How many times have you left a website because it was too slow, full of intrusive ads, or harassing you to accept cookies? This portfolio is my attempt to create a more respectful web experience that works well on all devices without frustration.

## Key Features

### Practical Eco Mode
A simplified version of the site that eliminates the superfluous to get straight to the point - ideal on mobile or slow connections.

### Multilingual Support
Available in French, English, and German with automatic redirection based on visitor location.

### Fast Loading
Resource optimization for a smooth and responsive experience on all devices.

### Smooth Transitions
Persistent elements between pages to reduce redundant loading and provide seamless navigation.

## Technical Approach

### Frontend
- Astro to generate static HTML with minimal JavaScript
- Tailwind CSS for optimized styles and minimal footprint
- Persistent transitions to avoid reloading common elements
- Multilingual redirection via Cloudflare Rules
- Architecture allowing two distinct modes (standard and eco)

### Optimizations
- Static HTML pages with JavaScript limited to essential functionalities
- Optimized images with modern formats (WebP, AVIF) and lazy loading
- Transition-persist attributes on components shared between pages
- Preloading of critical resources for instant navigation
- Eco mode accessible via a simple button for instant switching

## Challenges Encountered

### Experience vs Performance
Finding the balance between an attractive interface and an ultra-performing site.

### Smooth Navigation
Designing a seamless transition between pages without reloading common elements.

### Dual Mode
Designing two versions of the site without unnecessarily duplicating code and resources.

### Accessibility
Ensuring that both versions remain perfectly accessible to everyone.

## Design Choices

### Content Priority
Information remains at the forefront, without being overwhelmed by superfluous decorative elements.

### Persistent Components
Using transition-persist to maintain common elements between pages and improve fluidity.

### Intuitive URLs
Clear URL structure by language and mode (/fr/, /en/, /fr/eco/) for easy page sharing.

### Visible Eco Mode
Button always accessible to switch between standard and eco modes according to your preferences.

## A web without cookie banners

Have you noticed there's no cookie banner on this site? This isn't an oversight. Most sites don't actually need these intrusive banners that degrade user experience, especially on mobile where they sometimes take up half the screen.

Websites that only use cookies for essential functionalities (like remembering your preferred language or maintaining a session) don't need to ask for your consent. GDPR legislation only requires this for tracking, analytics, or advertising cookies.

This portfolio respects your privacy by default: no trackers, no analytics, no ads—therefore no need for a banner. Imagine a web where most sites adopt this approach: a smoother experience, less frustration, and more respect for user attention.

## Standard vs Eco

| Metric | Standard Mode | Eco Mode |
|--------|---------------|----------|
| JavaScript | Minimal, for essential interactions | Almost none |
| Images | Optimized but present | Reduced to the necessary minimum |
| Transitions | Persistent elements between pages | Direct navigation without animations |
| Experience | Richer visually | More direct, content-focused |

## Performance and Impact

- **Page Size (Standard Mode)** : < 200 Kb
- **Page Size (Eco Mode)** : < 70 Kb
- **Loading Time** : < 1 second
- **Lighthouse Score** : 99-100/100

## ClientRouter and transition-persist

To enhance the navigation experience, I use Astro 5's `ClientRouter` with the `transition-persist` attribute on several key components of the site. This approach allows for:

- Smooth navigation with transition effects between pages without a full reload
- Preservation of common elements between pages (logo, photo, menu, footer) without reloading them
- Drastic reduction in network requests during navigation
- Smooth transitions without flickering of elements marked with transition-persist

### Standard mode vs Eco mode

A key difference between the two modes of this site concerns the use of ClientRouter:

- **Standard mode**: ClientRouter is enabled for smooth transitions and a richer experience
- **Eco mode**: ClientRouter is deliberately disabled for a lighter and more direct experience

This approach demonstrates how the same codebase can adapt to different usage contexts, offering either a richer experience or maximum performance and lightness.

## Why an Eco Mode?

I believe a good website should be accessible and fast first and foremost. Eco mode isn't just about the environment—it's also a better experience for many users. How many times have you left a site because it was too slow to load, cluttered with ads, or harassing you to accept cookies? I prefer a lighter web that respects user attention and works well on all devices without frustration. This portfolio is my modest contribution to that vision.

---lang:de---

## Projektübersicht

Dieses Portfolio wurde entwickelt, um zu zeigen, dass eine leistungsstarke, angenehm zu bedienende Website auch leicht und ressourceneffizient sein kann. Es bietet sowohl eine Standardversion als auch eine Öko-Version, jede mit ihren eigenen Vorteilen.

Wie oft haben Sie eine Website verlassen, weil sie zu langsam war, voller aufdringlicher Werbung oder Sie belästigte, Cookies zu akzeptieren? Dieses Portfolio ist mein Versuch, ein respektvolleres Web-Erlebnis zu schaffen, das auf allen Geräten ohne Frustration gut funktioniert.

## Hauptmerkmale

### Praktischer Öko-Modus
Eine vereinfachte Version der Website, die das Überflüssige eliminiert, um direkt auf den Punkt zu kommen - ideal für Mobilgeräte oder langsame Verbindungen.

### Mehrsprachige Unterstützung
Verfügbar in Französisch, Englisch und Deutsch mit automatischer Weiterleitung basierend auf dem Standort des Besuchers.

### Schnelles Laden
Ressourcenoptimierung für ein reibungsloses und reaktionsschnelles Erlebnis auf allen Geräten.

### Sanfte Übergänge
Persistente Elemente zwischen den Seiten, um redundantes Laden zu reduzieren und eine nahtlose Navigation zu ermöglichen.

## Technischer Ansatz

### Frontend
- Astro zur Generierung von statischem HTML mit minimalem JavaScript
- Tailwind CSS für optimierte Stile und minimalen Fußabdruck
- Persistente Übergänge, um das erneute Laden gemeinsamer Elemente zu vermeiden
- Mehrsprachige Weiterleitung über Cloudflare Rules
- Architektur, die zwei unterschiedliche Modi ermöglicht (Standard und Öko)

### Optimierungen
- Statische HTML-Seiten mit auf wesentliche Funktionen beschränktem JavaScript
- Optimierte Bilder mit modernen Formaten (WebP, AVIF) und Lazy Loading
- Transition-persist-Attribute für zwischen den Seiten gemeinsam genutzte Komponenten
- Vorladen kritischer Ressourcen für sofortige Navigation
- Öko-Modus über einen einfachen Button für sofortiges Umschalten zugänglich

## Herausforderungen

### Erfahrung vs. Leistung
Die Balance zwischen einer attraktiven Benutzeroberfläche und einer leistungsstarken Website finden.

### Reibungslose Navigation
Gestaltung eines nahtlosen Übergangs zwischen Seiten ohne erneutes Laden gemeinsamer Elemente.

### Dualer Modus
Entwicklung von zwei Versionen der Website ohne unnötige Codeduplizierung und Ressourcen.

### Barrierefreiheit
Sicherstellen, dass beide Versionen für alle perfekt zugänglich bleiben.

## Design-Entscheidungen

### Inhalt hat Priorität
Informationen bleiben im Vordergrund, ohne von überflüssigen dekorativen Elementen überwältigt zu werden.

### Persistente Komponenten
Verwendung von transition-persist, um gemeinsame Elemente zwischen Seiten beizubehalten und die Flüssigkeit zu verbessern.

### Intuitive URLs
Klare URL-Struktur nach Sprache und Modus (/fr/, /en/, /fr/eco/) für einfaches Teilen von Seiten.

### Sichtbarer Öko-Modus
Button ist immer zugänglich, um je nach Präferenz zwischen Standard- und Öko-Modus zu wechseln.

## Ein Web ohne Cookie-Banner

Haben Sie bemerkt, dass es auf dieser Website kein Cookie-Banner gibt? Dies ist kein Versehen. Die meisten Websites benötigen diese aufdringlichen Banner nicht, die die Benutzererfahrung beeinträchtigen, besonders auf mobilen Geräten, wo sie manchmal die Hälfte des Bildschirms einnehmen.

Websites, die Cookies nur für wesentliche Funktionalitäten verwenden (wie das Speichern Ihrer bevorzugten Sprache oder das Aufrechterhalten einer Sitzung), müssen nicht um Ihre Einwilligung bitten. Die DSGVO-Gesetzgebung verlangt dies nur für Tracking-, Analyse- oder Werbe-Cookies.

Dieses Portfolio respektiert Ihre Privatsphäre standardmäßig: keine Tracker, keine Analysetools, keine Werbung – daher kein Bedarf an einem Banner. Stellen Sie sich ein Web vor, in dem die meisten Websites diesen Ansatz verfolgen: ein reibungsloseres Erlebnis, weniger Frustration und mehr Respekt für die Aufmerksamkeit der Benutzer.

## Standard vs. Öko

| Metrik | Standardmodus | Öko-Modus |
|--------|---------------|-----------|
| JavaScript | Minimal, für wesentliche Interaktionen | Fast keins |
| Bilder | Optimiert, aber vorhanden | Auf das notwendige Minimum reduziert |
| Übergänge | Persistente Elemente zwischen Seiten | Direkte Navigation ohne Animationen |
| Erfahrung | Visuell reichhaltiger | Direkter, inhaltsbezogener |

## Leistung und Auswirkungen

- **Seitengröße (Standardmodus)** : < 200 KB
- **Seitengröße (Öko-Modus)** : < 70 KB
- **Ladezeit** : < 1 Sekunde
- **Lighthouse-Punktzahl** : 99-100/100

## ClientRouter und transition-persist

Um das Navigationserlebnis zu verbessern, verwende ich Astro 5's `ClientRouter` mit dem `transition-persist`-Attribut auf mehreren Schlüsselkomponenten der Website. Dies ermöglicht:

- Reibungslose Navigation mit Übergangseffekten zwischen Seiten ohne vollständiges Neuladen
- Beibehaltung gemeinsamer Elemente zwischen den Seiten (Logo, Foto, Menü, Footer) ohne sie neu zu laden
- Drastische Reduzierung der Netzwerkanfragen während der Navigation
- Sanfte Übergänge ohne Flackern von Elementen, die mit transition-persist markiert sind

### Standardmodus vs Öko-Modus

Ein wesentlicher Unterschied zwischen den beiden Modi dieser Website betrifft die Verwendung von ClientRouter:

- **Standardmodus**: ClientRouter ist für reibungslose Übergänge und ein reichhaltigeres Erlebnis aktiviert
- **Öko-Modus**: ClientRouter wird bewusst deaktiviert, um ein leichteres und direkteres Erlebnis zu ermöglichen

Dieser Ansatz zeigt, wie sich dieselbe Codebasis an verschiedene Nutzungskontexte anpassen kann und entweder ein reichhaltigeres Erlebnis oder maximale Leistung und Leichtigkeit bietet.

## Warum ein Öko-Modus?

Ich glaube, dass eine gute Website in erster Linie zugänglich und schnell sein sollte. Der Öko-Modus betrifft nicht nur die Umwelt – er bietet auch eine bessere Erfahrung für viele Benutzer. Wie oft haben Sie eine Website verlassen, weil sie zu langsam geladen wurde, mit Werbung überladen war oder Sie belästigte, Cookies zu akzeptieren? Ich bevorzuge ein leichteres Web, das die Aufmerksamkeit der Benutzer respektiert und auf allen Geräten ohne Frustration gut funktioniert. Dieses Portfolio ist mein bescheidener Beitrag zu dieser Vision.