---
slug: "[lang]/esport
title:
  fr: "Application e-sport avec chat"
  en: "E-sport Application with Chat"
  de: "E-Sport-Anwendung mit Chat"
description:
  fr: "Plateforme de gestion d'événements e-sport intégrant un système de chat en temps réel via WebSocket et HTMX."
  en: "E-sport event management platform with a real-time chat system via WebSocket and HTMX."
  de: "E-Sport-Eventmanagement-Plattform mit einem Echtzeit-Chat-System über WebSocket und HTMX."
year: 2025
featured: true
tech: ["Astro", "Tailwind", "Alpine.js", "HTMX", "WebSocket", "Express", "PostgreSQL", "MongoDB"]
images:
  hero: "../../assets/projects/esport00.png"
  gallery: 
    - "../../assets/projects/esport02.png"
    - "../../assets/projects/esport03.png"
    - "../../assets/projects/esport04.png"
    - "../../assets/projects/esport01.png"
links:
  website: "https://kewnewhimsy.github.io/esportify-f/"
  githubFrontend: "https://github.com/KewneWhimsy/esportify-f"
  githubBackend: "https://github.com/KewneWhimsy/esportify-b"
order: 1
status: "completed"
---

## Aperçu du projet

Cette plateforme permet aux organisateurs d'événements e-sport de créer et gérer des tournois, tout en offrant aux participants un moyen de communiquer en temps réel via un système de chat intégré.

Ce projet démontre l'intégration d'un chat en temps réel dans une application web avec une architecture claire séparant les responsabilités. Le frontend utilise Astro pour le rendu statique avec des îlots interactifs via Alpine.js et HTMX, tandis que le backend utilise Express avec son module WebSocket pour gérer à la fois les requêtes API et la communication en temps réel.

## Architecture du projet

### Frontend
- Astro pour le rendu statique avec hydratation partielle
- Alpine.js pour la gestion de l'état local et les interactions UI légères
- HTMX pour les requêtes AJAX et l'interaction avec le serveur sans JavaScript complexe
- Tailwind CSS pour un styling efficace avec des classes utilitaires

### Backend
- Architecture monolithique intégrée pour simplicité et maintenance
- Serveur Express gérant à la fois l'API REST et la communication WebSocket
- Module WebSocket natif d'Express pour la communication en temps réel
- MongoDB pour le stockage des messages et des données utilisateurs
- PostgreSQL pour les données structurées (événements, tournois, équipes)

## Interaction des composants

### Serveur Express + WebSocket
**Rôle** : Serveur unique gérant l'ensemble de l'application backend

**Responsabilités** :
- API REST pour l'authentification et les opérations CRUD
- Gestion des événements e-sport et des tournois
- Établissement et maintenance des connexions WebSocket pour le chat
- Diffusion des messages dans les salons appropriés
- Stockage persistant dans PostgreSQL et MongoDB

### Frontend HTMX + Alpine.js
**Rôle** : Interface utilisateur réactive avec un minimum de JavaScript

**Responsabilités** :
- HTMX intercepte les formulaires et effectue des requêtes AJAX vers l'API Express
- HTMX se connecte au WebSocket pour les messages en temps réel
- Alpine.js gère l'état local et les interactions UI complexes
- Astro optimise le chargement initial avec le rendu côté serveur

## Défis techniques

1. **Intégration WebSocket** - Concevoir une architecture où Express gère de manière cohérente à la fois les requêtes HTTP traditionnelles et les connexions WebSocket persistantes.

2. **Gestion d'état distribuée** - Maintenir la cohérence des données entre le frontend et le backend (API REST et WebSocket).

3. **Intégration ciblée des technologies** - Choisir les technologies appropriées pour chaque partie de l'application: HTMX standard pour les opérations CRUD et l'extension WebSocket de HTMX uniquement pour les fonctionnalités nécessitant une communication en temps réel.

4. **Sécurité inter-services** - Mettre en place un système d'authentification cohérent pour l'API REST et les connexions WebSocket.

## Solutions mises en œuvre

### Serveur Express intégré
Utilisation d'un serveur Express unique intégrant nativement WebSocket, simplifiant le déploiement et la maintenance tout en assurant une communication fluide entre les différentes parties de l'application.

### Gestion des événements
Système permettant aux utilisateurs de créer des événements, de s'y abonner, et aux modérateurs de les gérer via un dashboard dédié, assurant une expérience communautaire fluide.

### HTMX pour la simplicité
HTMX permet d'obtenir une expérience dynamique semblable à une SPA mais avec beaucoup moins de JavaScript côté client, rendant l'application plus légère et réactive.

### WebSocket pour le chat en temps réel
Utilisation ciblée de WebSocket via l'extension HTMX uniquement pour les fonctionnalités de chat, offrant une expérience en temps réel là où elle est vraiment nécessaire tout en gardant l'application légère.

## Approche de performance

- **Taille du bundle JS** : Minimale - Utilisation stratégique de HTMX pour réduire la quantité de JavaScript côté client
- **Rechargement partiel** : Efficace - HTMX permet des mises à jour partielles de l'interface sans rechargement complet de la page
- **Communication en temps réel** : Ciblée - Extension WebSocket de HTMX utilisée uniquement pour les fonctionnalités de chat, où le temps réel est nécessaire

## Leçons apprises

- L'architecture monolithique avec Express peut offrir une excellente séparation des préoccupations en interne tout en simplifiant le déploiement et la maintenance
- HTMX et WebSocket forment une combinaison puissante pour créer des interfaces dynamiques avec peu de JavaScript
- L'utilisation de bases de données spécialisées pour différents types de données (PostgreSQL pour les données structurées, MongoDB pour les messages) permet d'optimiser les performances
- Une bonne documentation des API et des modules internes est essentielle même dans une architecture monolithique

## Réflexion personnelle

Ce projet a été une excellente occasion d'explorer une architecture monolithique bien structurée avec des responsabilités clairement définies. L'utilisation d'Express avec son module WebSocket natif pour gérer à la fois l'API REST et la communication en temps réel s'est avérée être une solution élégante et performante. J'ai particulièrement apprécié l'intégration de HTMX qui permet d'obtenir une expérience utilisateur dynamique avec un minimum de JavaScript, tout en conservant une architecture propre côté serveur. Ce projet a été développé avec Express pour sa simplicité d'implémentation et sa flexibilité. Pour le niveau de trafic actuel, cette architecture est parfaitement adaptée. Si l'application venait à gagner en popularité et nécessitait une meilleure gestion de la charge, j'envisagerais de migrer vers un backend Phoenix/Elixir, reconnu pour ses capacités de concurrence et de mise à l'échelle supérieures.

---lang:en---

## Project overview

This platform allows e-sport event organizers to create and manage tournaments, while offering participants a way to communicate in real-time via an integrated chat system.

This project demonstrates the integration of real-time chat into a web application with a clear architecture separating responsibilities. The frontend uses Astro for static rendering with interactive islands via Alpine.js and HTMX, while the backend uses Express with its WebSocket module to handle both API requests and real-time communication.

## Project architecture

### Frontend
- Astro for static rendering with partial hydration
- Alpine.js for local state management and lightweight UI interactions
- HTMX for AJAX requests and server interaction without complex JavaScript
- Tailwind CSS for efficient styling with utility classes

### Backend
- Integrated monolithic architecture for simplicity and maintenance
- Express server handling both REST API and WebSocket communication
- Native WebSocket module for Express for real-time communication
- MongoDB for storing messages and user data
- PostgreSQL for structured data (events, tournaments, teams)

## Component interaction

### Express + WebSocket Server
**Role**: Single server managing the entire backend application

**Responsibilities**:
- REST API for authentication and CRUD operations
- Management of e-sport events and tournaments
- Establishment and maintenance of WebSocket connections for chat
- Broadcasting messages in appropriate chat rooms
- Persistent storage in PostgreSQL and MongoDB

### Frontend HTMX + Alpine.js
**Role**: Responsive user interface with minimal JavaScript

**Responsibilities**:
- HTMX intercepts forms and makes AJAX requests to the Express API
- HTMX connects to WebSocket for real-time messages
- Alpine.js handles local state and complex UI interactions
- Astro optimizes initial loading with server-side rendering

## Technical challenges

1. **WebSocket Integration** - Designing an architecture where Express consistently handles both traditional HTTP requests and persistent WebSocket connections.

2. **Distributed state management** - Maintaining data consistency between the frontend and backend (REST API and WebSocket).

3. **Targeted technology integration** - Selecting the appropriate technologies for each part of the application: standard HTMX for CRUD operations and HTMX WebSocket extension only for features requiring real-time communication.

4. **Inter-service security** - Implementing a consistent authentication system for the REST API and WebSocket connections.

## Implemented solutions

### Integrated Express Server
Using a single Express server with native WebSocket integration, simplifying deployment and maintenance while ensuring smooth communication between different parts of the application.

### Event Management
System allowing users to create events, subscribe to them, and moderators to manage them via a dedicated dashboard, ensuring a smooth community experience.

### HTMX for simplicity
HTMX provides a dynamic SPA-like experience but with much less client-side JavaScript, making the application lighter and more responsive.

### WebSocket for real-time chat
Targeted use of WebSocket through the HTMX extension only for chat features, providing a real-time experience where it's truly needed while keeping the application lightweight.

## Performance approach

- **JS bundle size** : Minimal - Strategic use of HTMX to reduce the amount of client-side JavaScript
- **Partial page updates** : Efficient - HTMX enables partial UI updates without complete page reloads
- **Real-time communication** : Targeted - HTMX WebSocket extension used only for chat features, where real-time is necessary

## Lessons learned

- Monolithic architecture with Express can offer excellent separation of concerns internally while simplifying deployment and maintenance
- HTMX and WebSocket form a powerful combination for creating dynamic interfaces with little JavaScript
- Using specialized databases for different types of data (PostgreSQL for structured data, MongoDB for messages) optimizes performance
- Good documentation of APIs and internal modules is essential even in a monolithic architecture

## Personal reflection

This project was an excellent opportunity to explore a well-structured monolithic architecture with clearly defined responsibilities. Using Express with its native WebSocket module to handle both REST API and real-time communication proved to be an elegant and performant solution. I particularly appreciated the integration of HTMX, which provides a dynamic user experience with minimal JavaScript, while maintaining a clean server-side architecture. This project was developed with Express for its ease of implementation and flexibility. For the current traffic level, this architecture is perfectly suitable. If the application were to gain popularity and require better load management, I would consider migrating to a Phoenix/Elixir backend, known for its superior concurrency and scaling capabilities.

---lang:de---

## Projektübersicht

Diese Plattform ermöglicht es E-Sport-Veranstaltern, Turniere zu erstellen und zu verwalten, während sie den Teilnehmern eine Möglichkeit bietet, über ein integriertes Chat-System in Echtzeit zu kommunizieren.

Dieses Projekt demonstriert die Integration eines Echtzeit-Chats in eine Webanwendung mit einer klaren Architektur, die Verantwortlichkeiten trennt. Das Frontend verwendet Astro für statisches Rendering mit interaktiven Inseln über Alpine.js und HTMX, während das Backend Express mit seinem WebSocket-Modul verwendet, um sowohl API-Anfragen als auch Echtzeit-Kommunikation zu verarbeiten.

## Projektarchitektur

### Frontend
- Astro für statisches Rendering mit partieller Hydratation
- Alpine.js für lokale Zustandsverwaltung und leichtgewichtige UI-Interaktionen
- HTMX für AJAX-Anfragen und Serverinteraktion ohne komplexes JavaScript
- Tailwind CSS für effizientes Styling mit Utility-Klassen

### Backend
- Integrierte monolithische Architektur für Einfachheit und Wartung
- Express-Server, der sowohl REST-API als auch WebSocket-Kommunikation verarbeitet
- Natives WebSocket-Modul für Express für Echtzeit-Kommunikation
- MongoDB für die Speicherung von Nachrichten und Benutzerdaten
- PostgreSQL für strukturierte Daten (Veranstaltungen, Turniere, Teams)

## Komponenteninteraktion

### Express + WebSocket Server
**Rolle**: Einzelserver, der die gesamte Backend-Anwendung verwaltet

**Verantwortlichkeiten**:
- REST-API für Authentifizierung und CRUD-Operationen
- Verwaltung von E-Sport-Veranstaltungen und Turnieren
- Einrichtung und Wartung von WebSocket-Verbindungen für den Chat
- Übertragung von Nachrichten in entsprechenden Chatrooms
- Persistente Speicherung in PostgreSQL und MongoDB

### Frontend HTMX + Alpine.js
**Rolle**: Responsive Benutzeroberfläche mit minimalem JavaScript

**Verantwortlichkeiten**:
- HTMX fängt Formulare ab und stellt AJAX-Anfragen an die Express-API
- HTMX verbindet sich mit WebSocket für Echtzeit-Nachrichten
- Alpine.js verwaltet lokalen Zustand und komplexe UI-Interaktionen
- Astro optimiert das initiale Laden mit serverseitigem Rendering

## Technische Herausforderungen

1. **WebSocket-Integration** - Entwicklung einer Architektur, in der Express sowohl traditionelle HTTP-Anfragen als auch persistente WebSocket-Verbindungen konsistent verarbeitet.

2. **Verteilte Zustandsverwaltung** - Aufrechterhaltung der Datenkonsistenz zwischen dem Frontend und Backend (REST-API und WebSocket).

3. **Gezielte Technologieintegration** - Auswahl der geeigneten Technologien für jeden Teil der Anwendung: Standard-HTMX für CRUD-Operationen und HTMX-WebSocket-Erweiterung nur für Funktionen, die Echtzeit-Kommunikation erfordern.

4. **Diensteübergreifende Sicherheit** - Implementierung eines konsistenten Authentifizierungssystems für die REST-API und WebSocket-Verbindungen.

## Umgesetzte Lösungen

### Integrierter Express-Server
Verwendung eines einzelnen Express-Servers mit nativer WebSocket-Integration, wodurch Bereitstellung und Wartung vereinfacht werden und gleichzeitig eine reibungslose Kommunikation zwischen verschiedenen Teilen der Anwendung gewährleistet wird.

### Ereignisverwaltung
System, das Benutzern ermöglicht, Ereignisse zu erstellen, sie zu abonnieren und Moderatoren, diese über ein dediziertes Dashboard zu verwalten, um ein reibungsloses Gemeinschaftserlebnis zu gewährleisten.

### HTMX für Einfachheit
HTMX bietet ein dynamisches SPA-ähnliches Erlebnis, aber mit viel weniger clientseitigem JavaScript, wodurch die Anwendung leichter und reaktionsschneller wird.

### WebSocket für Echtzeit-Chat
Gezielter Einsatz von WebSocket über die HTMX-Erweiterung nur für Chat-Funktionen, was eine Echtzeit-Erfahrung bietet, wo sie wirklich benötigt wird, und gleichzeitig die Anwendung leicht hält.

## Leistungsansatz

- **JS-Bundle-Größe**: Minimal - Strategischer Einsatz von HTMX zur Reduzierung der Menge an clientseitigem JavaScript
- **Teilseitenaktualisierungen**: Effizient - HTMX ermöglicht partielle UI-Aktualisierungen ohne vollständige Seitenneuladen
- **Echtzeit-Kommunikation**: Gezielt - HTMX WebSocket-Erweiterung nur für Chat-Funktionen verwendet, wo Echtzeit notwendig ist

## Gelernte Lektionen

- Monolithische Architektur mit Express kann intern eine hervorragende Trennung der Zuständigkeiten bieten und gleichzeitig Bereitstellung und Wartung vereinfachen
- HTMX und WebSocket bilden eine leistungsstarke Kombination zur Erstellung dynamischer Schnittstellen mit wenig JavaScript
- Die Verwendung spezialisierter Datenbanken für verschiedene Arten von Daten (PostgreSQL für strukturierte Daten, MongoDB für Nachrichten) optimiert die Leistung
- Eine gute Dokumentation von APIs und internen Modulen ist auch in einer monolithischen Architektur unerlässlich

## Persönliche Reflexion

Dieses Projekt war eine ausgezeichnete Gelegenheit, eine gut strukturierte monolithische Architektur mit klar definierten Verantwortlichkeiten zu erkunden. Die Verwendung von Express mit seinem nativen WebSocket-Modul zur Verarbeitung sowohl der REST-API als auch der Echtzeit-Kommunikation erwies sich als elegante und leistungsstarke Lösung. Besonders geschätzt habe ich die Integration von HTMX, das ein dynamisches Benutzererlebnis mit minimalem JavaScript bietet und gleichzeitig eine saubere serverseitige Architektur beibehält. Dieses Projekt wurde mit Express für seine einfache Implementierung und Flexibilität entwickelt. Für das aktuelle Verkehrsaufkommen ist diese Architektur perfekt geeignet. Sollte die Anwendung an Popularität gewinnen und eine bessere Lastverteilung erfordern, würde ich eine Migration zu einem Phoenix/Elixir-Backend in Betracht ziehen, das für seine überlegenen Nebenläufigkeits- und Skalierungsfähigkeiten bekannt ist.