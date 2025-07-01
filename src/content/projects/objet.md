---
slug: "[lang]/objet"
title:
  fr: "Bibliothèque d'objets - Quimper"
  en: "Object Library - Quimper"
  de: "Objektbibliothek - Quimper"
description:
  fr: "Projet de création du site web de l'Objethèque de Cornouaille - Un projet collaboratif et communautaire pour promouvoir le partage d'objets."
  en: "Creation project for the Cornouaille Object Library website - A collaborative and community project to promote object sharing."
  de: "Projekt zur Erstellung der Website der Objektbibliothek Cornouaille - Ein kollaboratives Gemeinschaftsprojekt zur Förderung des Objektteilens."
year: 2024
featured: true
tech: ["Astro", "CSS Pro", "TypeScript", "Alpine.js", "GitHub Actions", "API HelloAsso"]
images:
  hero: "../../assets/projects/objet00.png"
  gallery: 
    - "../../assets/projects/objet02.png"
    - "../../assets/projects/objet03.png"
    - "../../assets/projects/objet04.png"
    - "../../assets/projects/objet05.png"
links:
  website: "https://objethequecornouaille.fr/"
collaborators:
  - name: "Jade Ounaphom"
    role:
      fr: "Créatrice audiovisuelle"
      en: "Audiovisual creator"
      de: "Audiovisuelle Gestalterin"
    url: "https://jadephom.myportfolio.com/"
order: 3
status: "completed"
---

## Aperçu du projet

L'Objethèque de Cornouaille est une association basée à Quimper qui permet aux habitants d'emprunter des objets du quotidien plutôt que de les acheter, favorisant ainsi un mode de vie plus durable.

Conçu en collaboration avec [Jade Ounaphom](https://jadephom.myportfolio.com/), créatrice audiovisuelle, le site met en avant le fonctionnement de la bibliothèque d'objets, ses actualités et permet d'accéder au catalogue des objets disponibles.

## Défis et approche

### Contraintes principales

1. **Contraintes budgétaires** - Développer une solution professionnelle avec des ressources très limitées et sans possibilité d'investissement dans des services payants coûteux.

2. **Intégration système existant** - Faire cohabiter harmonieusement le site avec MyTurn, un logiciel tiers déjà utilisé par l'association pour la gestion des prêts.

3. **Visibilité sociale** - Créer une présence cohérente entre le site web et les réseaux sociaux, essentiels pour une petite structure qui doit se faire connaître localement.

4. **Interface accessible** - Concevoir un parcours utilisateur intuitif pour un public très varié, incluant des personnes peu familières avec la technologie.

5. **Maintenance facilitée** - Permettre aux bénévoles non-techniques de gérer le contenu du site sans formation spécifique ni intervention d'un développeur.

## Solutions mises en œuvre

### Approche pragmatique et économique
Utilisation d'Astro pour créer rapidement un site léger et performant, tout en intégrant les outils déjà existants de l'association pour ne pas alourdir leur budget (solution MyTurn à 30€/an).

### Focus sur l'essentiel
Structure simple et efficace centrée sur les besoins réels des utilisateurs : comprendre le principe de l'objethèque, voir les actualités et accéder au catalogue des objets.

### Intégration sociale
Utilisation d'un flux Facebook pour afficher les actualités, permettant à l'équipe bénévole de ne gérer qu'un seul canal de communication tout en alimentant le site web automatiquement.

### Collaboration créative
Travail en étroite collaboration avec une designeuse qui a créé l'identité visuelle et les éléments graphiques, apportant une dimension professionnelle au projet malgré les contraintes.

### Mode sombre adaptatif
Implémentation d'un mode sombre qui s'adapte automatiquement aux préférences système de l'utilisateur, sans bouton de toggle pour préserver l'identité visuelle de l'association en mode clair par défaut, tout en améliorant le confort visuel et réduisant la consommation d'énergie sur les appareils à écran OLED/AMOLED.

### Calendrier interactif des événements
Développement d'un calendrier intuitif avec Alpine.js permettant aux visiteurs de visualiser rapidement les ateliers et événements à venir.

### Automatisation des mises à jour
Création d'un workflow GitHub Actions qui récupère quotidiennement les données d'événements depuis l'API HelloAsso et génère un fichier JSON statique, permettant aux bénévoles de mettre à jour les événements sans intervention technique.

## Leçons apprises

- L'adaptation des solutions techniques aux contraintes réelles est plus importante que la perfection technique
- L'intégration intelligente de services tiers peut compenser les limitations budgétaires
- L'automatisation bien pensée est un investissement qui autonomise les équipes non-techniques sur le long terme

## Réflexion personnelle

Ce projet, bien qu'imparfait d'un point de vue technique, représente une étape importante dans mon parcours de développeur. Réalisé bénévolement pour une association locale, il répond à un besoin concret avec les moyens disponibles. Si je devais le refaire aujourd'hui, j'explorerais des alternatives aux iframes et je mettrais davantage l'accent sur les performances. Néanmoins, ce site remplit efficacement sa mission principale : aider une association éco-responsable à promouvoir le partage d'objets dans sa communauté, tout en minimisant les besoins d'intervention technique grâce à l'automatisation.

---lang:en---

## Project overview

The Cornouaille Object Library is an association based in Quimper that allows residents to borrow everyday objects rather than buying them, thus promoting a more sustainable lifestyle.

Designed in collaboration with [Jade Ounaphom](https://jadephom.myportfolio.com/), audiovisual creator, the website highlights how the object library works, its news and provides access to the catalog of available objects.

## Challenges and approach

### Main constraints

1. **Budget Constraints** - Developing a professional solution with very limited resources and without the possibility of investing in expensive paid services.

2. **Existing System Integration** - Creating a seamless coexistence between the website and MyTurn, a third-party software already used by the association for loan management.

3. **Social Visibility** - Building a coherent presence between the website and social media, essential for a small organization that needs to gain local recognition.

4. **Accessible Interface** - Designing an intuitive user journey for a highly diverse audience, including people who are not familiar with technology.

5. **Facilitated Maintenance** - Enabling non-technical volunteers to manage website content without specific training or developer intervention.

## Implemented solutions

### Pragmatic and economical approach
Using Astro to quickly create a lightweight and efficient site, while integrating the association's existing tools to avoid increasing their budget (MyTurn solution at €30/year).

### Focus on essentials
Simple and effective structure centered on users' real needs: understanding the principle of the object library, seeing the news, and accessing the object catalog.

### Social integration
Using a Facebook feed to display news, allowing the volunteer team to manage only one communication channel while automatically feeding the website.

### Creative collaboration
Working closely with a designer who created the visual identity and graphic elements, bringing a professional dimension to the project despite the constraints.

### Adaptive dark mode
Implementation of a dark mode that automatically adapts to the user's system preferences, without a toggle button to preserve the association's visual identity in light mode by default, while improving visual comfort and reducing energy consumption on devices with OLED/AMOLED screens.

### Interactive events calendar
Development of an intuitive calendar with Alpine.js allowing visitors to quickly visualize upcoming workshops and events.

### Update automation
Creation of a GitHub Actions workflow that daily retrieves event data from the HelloAsso API and generates a static JSON file, allowing volunteers to update events without technical intervention.

## Lessons learned

- Adapting technical solutions to real constraints is more important than technical perfection
- Smart integration of third-party services can compensate for budget limitations
- Well-designed automation is an investment that empowers non-technical teams in the long run

## Personal reflection

This project, although technically imperfect, represents an important step in my journey as a developer. Created voluntarily for a local association, it addresses a concrete need with available resources. If I were to do it again today, I would explore alternatives to iframes and place more emphasis on performance. Nevertheless, this site effectively fulfills its main mission: helping an eco-friendly association promote object sharing in its community, while minimizing the need for technical intervention thanks to automation.

---lang:de---

## Projektübersicht

Die Objektbibliothek Cornouaille ist ein Verein mit Sitz in Quimper, der es Einwohnern ermöglicht, Alltagsgegenstände auszuleihen, anstatt sie zu kaufen, und so einen nachhaltigeren Lebensstil fördert.

In Zusammenarbeit mit [Jade Ounaphom](https://jadephom.myportfolio.com/), audiovisuelle Gestalterin, präsentiert die Website die Funktionsweise der Objektbibliothek, ihre Neuigkeiten und bietet Zugang zum Katalog der verfügbaren Objekte.

## Herausforderungen und Ansatz

### Hauptbeschränkungen

1. **Budgetbeschränkungen** - Entwicklung einer professionellen Lösung mit sehr begrenzten Ressourcen und ohne die Möglichkeit, in teure kostenpflichtige Dienste zu investieren.

2. **Integration bestehender Systeme** - Schaffung einer nahtlosen Koexistenz zwischen der Website und MyTurn, einer bereits vom Verein für die Leihverwaltung genutzten Drittanbieter-Software.

3. **Soziale Sichtbarkeit** - Aufbau einer kohärenten Präsenz zwischen Website und sozialen Medien, wesentlich für eine kleine Organisation, die lokale Anerkennung gewinnen muss.

4. **Zugängliche Benutzeroberfläche** - Gestaltung einer intuitiven Benutzerreise für ein sehr vielfältiges Publikum, einschließlich Menschen, die mit Technologie nicht vertraut sind.

5. **Erleichterte Wartung** - Befähigung nicht-technischer Freiwilliger zur Verwaltung von Website-Inhalten ohne spezifische Schulung oder Eingriff eines Entwicklers.

## Umgesetzte Lösungen

### Pragmatischer und wirtschaftlicher Ansatz
Verwendung von Astro zur schnellen Erstellung einer leichten und effizienten Website unter Integration der bestehenden Tools des Vereins, um deren Budget nicht zu erhöhen (MyTurn-Lösung für 30 €/Jahr).

### Fokus auf das Wesentliche
Einfache und effektive Struktur, die auf die tatsächlichen Bedürfnisse der Benutzer ausgerichtet ist: Verständnis des Prinzips der Objektbibliothek, Einsehen der Neuigkeiten und Zugriff auf den Objektkatalog.

### Soziale Integration
Verwendung eines Facebook-Feeds zur Anzeige von Neuigkeiten, wodurch das Freiwilligenteam nur einen Kommunikationskanal verwalten muss, während die Website automatisch mit Inhalten versorgt wird.

### Kreative Zusammenarbeit
Enge Zusammenarbeit mit einer Designerin, die die visuelle Identität und grafischen Elemente erstellt hat und dem Projekt trotz der Einschränkungen eine professionelle Dimension verleiht.

### Adaptiver Dunkelmodus
Implementierung eines Dunkelmodus, der sich automatisch an die Systemeinstellungen des Benutzers anpasst, ohne Umschalttaste, um die visuelle Identität des Vereins im standardmäßigen Hellmodus zu bewahren, während der visuelle Komfort verbessert und der Energieverbrauch auf Geräten mit OLED/AMOLED-Bildschirmen reduziert wird.

### Interaktiver Veranstaltungskalender
Entwicklung eines intuitiven Kalenders mit Alpine.js, der Besuchern eine schnelle Visualisierung kommender Workshops und Veranstaltungen ermöglicht.

### Automatisierung der Aktualisierungen
Erstellung eines GitHub Actions-Workflows, der täglich Veranstaltungsdaten von der HelloAsso-API abruft und eine statische JSON-Datei generiert, wodurch Freiwillige Veranstaltungen ohne technische Eingriffe aktualisieren können.

## Gelernte Lektionen

- Die Anpassung technischer Lösungen an reale Einschränkungen ist wichtiger als technische Perfektion
- Intelligente Integration von Drittanbieterdiensten kann Budgetbeschränkungen ausgleichen
- Gut konzipierte Automatisierung ist eine Investition, die nicht-technische Teams langfristig stärkt

## Persönliche Reflexion

Dieses Projekt, obwohl technisch nicht perfekt, stellt einen wichtigen Schritt in meiner Entwicklung als Entwickler dar. Es wurde freiwillig für einen lokalen Verein erstellt und adressiert mit den verfügbaren Ressourcen einen konkreten Bedarf. Wenn ich es heute noch einmal machen würde, würde ich Alternativen zu Iframes erkunden und mehr Wert auf Leistung legen. Nichtsdestotrotz erfüllt diese Website ihre Hauptaufgabe effektiv: einer umweltfreundlichen Vereinigung zu helfen, das Teilen von Objekten in ihrer Gemeinschaft zu fördern, während der Bedarf an technischen Eingriffen dank Automatisierung minimiert wird.