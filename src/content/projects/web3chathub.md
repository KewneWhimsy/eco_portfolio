---
slug: "web3chathub"
title:
  fr: "Application de chat pour le Web3 Summit"
  en: "Chat App for the Web3 Summit"
  de: "Chat-App für den Web3 Summit"
description:
  fr: "Application compagnon pour le Web3 Summit Berlin : agenda consultable et salles de chat pair-à-pair sans serveur ni inscription, via WebRTC et le protocole Polkadot."
  en: "Companion app for Web3 Summit Berlin: browsable agenda and peer-to-peer chat rooms with no server or registration, via WebRTC and the Polkadot protocol."
  de: "Companion-App für den Web3 Summit Berlin: durchsuchbare Agenda und Peer-to-Peer-Chatrooms ohne Server oder Registrierung, über WebRTC und das Polkadot-Protokoll."
featured: true
tech: ["Astro", "Tailwind", "Alpine.js", "WebRTC", "Polkadot SDK"]
links:
  github: "https://github.com/KewneWhimsy/web3chathub"
order: 9
---

## Le projet en quelques mots

Application compagnon non officielle pour le Web3 Summit Berlin : les participants peuvent consulter l'agenda de la conférence et rejoindre des salles de chat associées à chaque session.

La particularité : aucun serveur de chat. La communication passe directement d'un navigateur à l'autre via WebRTC, et l'identité des participants est résolue automatiquement par l'extension Polkadot, sans compte à créer.

## Particularités du projet

- **Chat entièrement pair-à-pair** : Les messages transitent directement entre navigateurs via WebRTC et le Statement Store de Polkadot, sans serveur intermédiaire
- **Zéro inscription** : L'extension Polkadot authentifie le participant automatiquement
- **Salles éphémères** : Chaque session de la conférence a sa propre salle de chat, disponible le temps de l'événement
- **Stack familière, couche nouvelle** : Astro, Tailwind et Alpine.js pour l'interface, avec le SDK Polkadot par-dessus pour la couche décentralisée

Ce prototype m'a donné envie d'aller plus loin dans cet écosystème. Le deuxième jour, j'ai entrevu la solution pour ajouter un vrai système de persistance des données, mais j'ai préféré m'arrêter là et profiter de ce que l'événement avait à offrir.

Lors du dApp challenge de l'événement, le projet a remporté le **Wild Card Prize** de l'équipe organisatrice et le **Builder's Impact Award** de la [Polkadot Blockchain Academy](https://polkadot.academy/).

---lang:en---

## Project in a few words

An unofficial companion app for the Web3 Summit Berlin: attendees can browse the conference agenda and join chat rooms tied to each session.

The key feature: no chat server. Communication goes directly between browsers via WebRTC, and participants are identified automatically through the Polkadot extension, with no account needed.

## Project highlights

- **Fully peer-to-peer chat**: Messages pass directly between browsers via WebRTC and Polkadot's Statement Store, without an intermediary server
- **Zero registration**: The Polkadot extension authenticates the user automatically
- **Ephemeral rooms**: Each conference session has its own chat room, available for the duration of the event
- **Familiar stack, new layer**: Astro, Tailwind and Alpine.js for the interface, with the Polkadot SDK on top for the decentralized layer

Building this prototype made me want to dig deeper into this ecosystem. On the second day, I could see the solution for adding a proper data persistence layer, but I chose to stop there and make the most of what the event had to offer.

At the event's dApp challenge, the project won the **Wild Card Prize** from the organising team and the **Builder's Impact Award** from the [Polkadot Blockchain Academy](https://polkadot.academy/).

---lang:de---

## Projekt in wenigen Worten

Eine inoffizielle Companion-App für den Web3 Summit Berlin: Teilnehmer können die Konferenzagenda durchsuchen und Chatrooms zu den einzelnen Sessions beitreten.

Das Besondere: kein Chat-Server. Die Kommunikation läuft direkt zwischen Browsern über WebRTC, und Teilnehmer werden automatisch über die Polkadot-Erweiterung identifiziert, ohne Konto.

## Projektbesonderheiten

- **Vollständig peer-to-peer Chat**: Nachrichten werden direkt zwischen Browsern über WebRTC und Polkadots Statement Store übertragen, ohne Zwischenserver
- **Keine Registrierung**: Die Polkadot-Erweiterung authentifiziert den Teilnehmer automatisch
- **Ephemere Räume**: Jede Konferenzsession hat ihren eigenen Chatroom, verfügbar für die Dauer des Events
- **Vertrauter Stack, neue Schicht**: Astro, Tailwind und Alpine.js für die Oberfläche, mit dem Polkadot SDK darüber für die dezentrale Schicht

Dieses Prototype hat mich neugierig gemacht, tiefer in dieses Ökosystem einzutauchen. Am zweiten Tag sah ich die Lösung für ein richtiges Datenpersistenzsystem, entschied mich aber, dort aufzuhören und das Event in vollen Zügen zu genießen.

Beim dApp-Challenge des Events gewann das Projekt den **Wild Card Prize** des Veranstaltungsteams und den **Builder's Impact Award** der [Polkadot Blockchain Academy](https://polkadot.academy/).
