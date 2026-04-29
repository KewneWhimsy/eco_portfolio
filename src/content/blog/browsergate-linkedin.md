---
slug: "browsergate-linkedin-surveillance-navigateur"
title:
  fr: "BrowserGate : LinkedIn scanne secrètement vos extensions de navigateur"
  en: "BrowserGate: LinkedIn secretly scans your browser extensions"
  de: "BrowserGate: LinkedIn scannt heimlich Ihre Browser-Erweiterungen"
description:
  fr: "LinkedIn injecte un script de 2,7 Mo qui détecte 6 000 extensions installées sur votre navigateur et collecte vos données matérielles. Sans vous le dire."
  en: "LinkedIn injects a 2.7MB script that detects 6,000 extensions installed in your browser and collects your hardware data. Without telling you."
  de: "LinkedIn injiziert ein 2,7 MB großes Skript, das 6.000 installierte Browser-Erweiterungen erkennt und Ihre Hardware-Daten sammelt. Ohne Sie zu informieren."
date: "2026-04-15"
tags: ["securite", "vie-privee", "eco-conception"]
readTime: 5
published: true
---

Le 6 avril 2026, l'association européenne Fairlinked e.V. publie un rapport explosif : LinkedIn injecte secrètement un bundle JavaScript de **2,7 Mo** dans son site, capable de scanner votre navigateur à chaque visite. Le scandale est baptisé **BrowserGate**.

## Comment ça fonctionne

Le script, nommé "Spectroscopy", effectue trois opérations à chaque chargement de page :

1. **Scan des extensions** : 6 222 requêtes simultanées sont lancées pour détecter les extensions Chrome installées sur votre navigateur.
2. **Fingerprinting matériel** : 48 caractéristiques sont collectées, dont le nombre de cœurs CPU, la mémoire disponible, la résolution d'écran, le fuseau horaire, la langue, l'état de la batterie…
3. **Transmission chiffrée** : ces données sont chiffrées et jointes à chaque requête API de votre session.

Tout cela se passe sans aucune mention dans la politique de confidentialité de LinkedIn.

## L'ampleur de la surveillance

La croissance de cette liste est vertigineuse :

- **2017** : 38 extensions surveillées
- **2024** : 461 extensions surveillées
- **Février 2026** : 6 167 extensions surveillées, soit **+1 252% en deux ans**

Parmi les extensions ciblées : plus de 200 outils concurrents de LinkedIn (Apollo, Lusha, ZoomInfo), mais aussi des outils liés à des conditions neurodivergentes, des pratiques religieuses, des opinions politiques ou des recherches d'emploi actives. Plus d'un milliard d'utilisateurs sont potentiellement concernés.

## La réponse de LinkedIn

LinkedIn reconnaît scanner les extensions, mais affirme que c'est uniquement pour détecter celles qui "scrappent des données en violation des conditions d'utilisation". La plateforme nie utiliser ces informations pour "inférer des données sensibles".

LinkedIn qualifie également le rapport de campagne de diffamation, attribuant son origine à un développeur d'extension dont le compte a été suspendu pour scraping.

Certains chercheurs en sécurité nuancent : Tyler Reguly (Fortra) parle de "resource probing" plutôt que d'espionnage, et estime que beaucoup d'extensions ciblées sont effectivement malveillantes. Il considère les accusations excessives. Mais même lui reconnaît le problème central : **l'absence totale de transparence**.

## Le contexte légal

Ce n'est pas la première fois que LinkedIn se retrouve en difficulté sur la protection des données. En octobre 2024, la Commission irlandaise de protection des données lui infligeait déjà une amende de **310 millions d'euros** pour violations du RGPD liées à la publicité ciblée.

BrowserGate soulève de nouvelles questions : collecter des données potentiellement sensibles (convictions religieuses, état de santé, activité professionnelle) sans consentement explicite va à l'encontre du RGPD pour les utilisateurs européens.

## Ce que vos données financent

Depuis septembre 2024, LinkedIn utilise vos données pour entraîner les IA de Microsoft, activé par défaut, avec des données remontant à 2003. Microsoft a investi 13 milliards dans OpenAI et détient le contrat cloud du Pentagone à 9 milliards. Pendant qu'OpenAI interdisait encore les usages militaires, le Pentagone testait déjà ses modèles via Azure. En 2026, OpenAI a officialisé un accord direct avec le Pentagone pour déploiement dans des réseaux classifiés.

Votre abonnement et vos données alimentent un écosystème dont les priorités n'ont plus grand chose à voir avec le réseau professionnel qu'on vous a vendu.

## L'angle qu'on oublie

2,7 Mo de JavaScript de surveillance. 6 222 requêtes HTTP lancées en parallèle. À chaque visite. Et ça, pour chacun de leurs milliards d'utilisateurs.

C'est une illustration parfaite de ce que le développement sans contrainte produit : du code qui sert les intérêts de la plateforme, chargé silencieusement sur votre appareil, consommant votre bande passante, votre batterie, vos ressources. Zéro bénéfice pour vous.

Un site qui respecte ses utilisateurs ne fait pas ça. Et un site bien conçu n'a pas besoin de le faire.

---

La surveillance n'est pas gratuite. Elle a un coût énergétique, un coût en confiance, et de plus en plus un coût juridique. L'éco-conception, c'est aussi décider de ne charger que ce qui est nécessaire à l'utilisateur.

Pour ma part, j'ai supprimé mon compte suite à cette affaire. BrowserGate n'est pas un incident isolé : c'est le énième exemple d'un grand groupe qui traite ses utilisateurs comme une ressource à exploiter. Je trouve aussi que LinkedIn reste fondamentalement trop col blanc, trop lisse, peu accessible à ceux qui ne rentrent pas dans les cases du CV classique.

Si quelqu'un a envie de construire un réseau de networking plus sain, plus ouvert, plus honnête avec ses utilisateurs, je suis partant pour en parler.

**Sources** : [Fairlinked e.V.](https://www.linkedin.com/pulse/linkedin-accused-extensive-browser-surveillance-pdfze) • [The Next Web](https://thenextweb.com/news/linkedin-browsergate-extension-scanning-privacy-fingerprint) • [TechRadar](https://www.techradar.com/pro/security/one-of-the-largest-corporate-espionage-and-data-breach-scandals-in-digital-history-new-browsergate-report-claims-linkedin-secretly-scans-user-browsers-for-installed-extensions-and-collects-device-data) • [SecurityWeek](https://www.securityweek.com/browsergate-claims-of-linkedin-spying-clash-with-security-research-findings/) • [Malwarebytes](https://www.malwarebytes.com/blog/news/2025/09/linkedin-will-use-your-data-to-train-its-ai-unless-you-opt-out-now) • [Gizmodo](https://gizmodo.com/pentagon-reportedly-used-microsoft-workaround-to-test-openai-models-despite-ban-2000730635) • [Tech Insider](https://tech-insider.org/openai-pentagon-military-ai-deal-2026/)

---lang:en---

On April 6, 2026, the European association Fairlinked e.V. published a bombshell report: LinkedIn secretly injects a **2.7MB JavaScript bundle** into its website, capable of scanning your browser on every visit. The scandal has been dubbed **BrowserGate**.

## How it works

The script, named "Spectroscopy", performs three operations on every page load:

1. **Extension scanning**: 6,222 simultaneous requests are fired to detect which Chrome extensions are installed in your browser.
2. **Hardware fingerprinting**: 48 characteristics are collected — CPU core count, available memory, screen resolution, timezone, language, battery status…
3. **Encrypted transmission**: this data is encrypted and attached to every API request during your session.

All of this happens without any mention in LinkedIn's privacy policy.

## The scale of surveillance

The growth of this list is staggering:

- **2017**: 38 extensions monitored
- **2024**: 461 extensions monitored
- **February 2026**: 6,167 extensions monitored — **+1,252% in two years**

Among the targeted extensions: over 200 direct LinkedIn competitors (Apollo, Lusha, ZoomInfo), but also tools linked to neurodivergent conditions, religious practices, political opinions, or active job-seeking. More than one billion users are potentially affected.

## LinkedIn's response

LinkedIn acknowledges scanning for extensions, but claims it only does so to detect those that "scrape data in violation of its terms of service." The platform denies using this information to "infer sensitive data."

LinkedIn also dismisses the report as a smear campaign, attributing it to a developer whose account was suspended for scraping.

Some security researchers push back: Tyler Reguly (Fortra) calls it "resource probing" rather than spying, and notes that many targeted extensions are genuinely malicious. He considers the accusations overblown. But even he acknowledges the core issue: **a complete lack of transparency**.

## The legal context

This isn't the first time LinkedIn has faced trouble over data protection. In October 2024, Ireland's Data Protection Commission already fined LinkedIn **€310 million** for GDPR violations related to targeted advertising.

BrowserGate raises new questions: collecting potentially sensitive data (religious beliefs, health conditions, professional activity) without explicit consent conflicts with GDPR for European users.

## What your data funds

Since September 2024, LinkedIn has been using your data to train Microsoft's AI models — opt-in by default, with data going back to 2003. Microsoft has invested $13 billion in OpenAI and holds the Pentagon's $9 billion cloud contract. While OpenAI still officially banned military use, the Pentagon was already testing its models through Azure. In 2026, OpenAI signed a direct deal with the Pentagon for deployment in classified networks.

Your subscription and your data feed an ecosystem whose priorities have little to do with the professional network you were sold.

## The angle that's being overlooked

2.7MB of surveillance JavaScript. 6,222 HTTP requests fired in parallel. On every visit. And that, for each of their billion users.

This is a perfect illustration of what unconstrained development produces: code that serves the platform's interests, silently loaded onto your device, consuming your bandwidth, your battery, your resources. Zero benefit to you.

A site that respects its users doesn't do this. And a well-designed site doesn't need to.

---

Surveillance isn't free. It has an energy cost, a trust cost, and — increasingly — a legal cost. Eco-design also means deciding to only load what's actually necessary for the user.

For my part, I deleted my account after this. BrowserGate isn't an isolated incident — it's yet another example of a big platform treating its users as a resource to exploit. I also find LinkedIn too corporate, too polished, and not very accessible to people who don't fit the standard CV mould.

If anyone is interested in building a healthier, more open, more honest networking platform — I'd love to talk.

**Sources**: [Fairlinked e.V.](https://www.linkedin.com/pulse/linkedin-accused-extensive-browser-surveillance-pdfze) • [The Next Web](https://thenextweb.com/news/linkedin-browsergate-extension-scanning-privacy-fingerprint) • [TechRadar](https://www.techradar.com/pro/security/one-of-the-largest-corporate-espionage-and-data-breach-scandals-in-digital-history-new-browsergate-report-claims-linkedin-secretly-scans-user-browsers-for-installed-extensions-and-collects-device-data) • [SecurityWeek](https://www.securityweek.com/browsergate-claims-of-linkedin-spying-clash-with-security-research-findings/) • [Malwarebytes](https://www.malwarebytes.com/blog/news/2025/09/linkedin-will-use-your-data-to-train-its-ai-unless-you-opt-out-now) • [Gizmodo](https://gizmodo.com/pentagon-reportedly-used-microsoft-workaround-to-test-openai-models-despite-ban-2000730635) • [Tech Insider](https://tech-insider.org/openai-pentagon-military-ai-deal-2026/)

---lang:de---

Am 6. April 2026 veröffentlichte die europäische Vereinigung Fairlinked e.V. einen brisanten Bericht: LinkedIn injiziert heimlich ein **2,7 MB großes JavaScript-Bundle** in seine Website, das bei jedem Besuch Ihren Browser scannen kann. Der Skandal wurde **BrowserGate** getauft.

## Wie es funktioniert

Das Skript namens "Spectroscopy" führt bei jedem Seitenaufruf drei Operationen durch:

1. **Extension-Scanning**: 6.222 simultane Anfragen werden abgefeuert, um festzustellen, welche Chrome-Erweiterungen in Ihrem Browser installiert sind.
2. **Hardware-Fingerprinting**: 48 Merkmale werden gesammelt — CPU-Kerne, verfügbarer Arbeitsspeicher, Bildschirmauflösung, Zeitzone, Sprache, Akkustatus…
3. **Verschlüsselte Übertragung**: Diese Daten werden verschlüsselt und an jede API-Anfrage der Sitzung angehängt.

All das geschieht ohne jede Erwähnung in LinkedIns Datenschutzrichtlinie.

## Das Ausmaß der Überwachung

Das Wachstum dieser Liste ist schwindelerregend:

- **2017**: 38 überwachte Erweiterungen
- **2024**: 461 überwachte Erweiterungen
- **Februar 2026**: 6.167 überwachte Erweiterungen — **+1.252% in zwei Jahren**

Unter den Zielerweiterungen: über 200 direkte LinkedIn-Konkurrenten (Apollo, Lusha, ZoomInfo), aber auch Tools für neurodivergente Zustände, religiöse Praktiken, politische Meinungen oder aktive Jobsuche. Mehr als eine Milliarde Nutzer sind potenziell betroffen.

## LinkedIns Reaktion

LinkedIn gibt zu, nach Erweiterungen zu suchen, behauptet aber, dies nur zu tun, um solche zu erkennen, die "Daten unter Verletzung der Nutzungsbedingungen scrapen". Die Plattform bestreitet, diese Informationen zu verwenden, um "sensible Daten zu inferieren".

LinkedIn bezeichnet den Bericht auch als Verleumdungskampagne und schreibt ihn einem Entwickler zu, dessen Konto wegen Scrapings gesperrt worden war.

Einige Sicherheitsforscher dämpfen die Aufregung: Tyler Reguly (Fortra) nennt es "Resource Probing" statt Spionage und stellt fest, dass viele der Zielerweiterungen tatsächlich schädlich sind. Aber selbst er erkennt das Kernproblem an: **vollständiger Mangel an Transparenz**.

## Der rechtliche Kontext

Es ist nicht das erste Mal, dass LinkedIn beim Datenschutz in Schwierigkeiten gerät. Im Oktober 2024 hatte die irische Datenschutzbehörde LinkedIn bereits mit **310 Millionen Euro** wegen DSGVO-Verstößen bei der zielgerichteten Werbung bestraft.

BrowserGate wirft neue Fragen auf: Das Sammeln potenziell sensibler Daten (religiöse Überzeugungen, Gesundheitszustand, berufliche Aktivität) ohne ausdrückliche Einwilligung widerspricht der DSGVO für europäische Nutzer.

## Was Ihre Daten finanzieren

Seit September 2024 verwendet LinkedIn Ihre Daten zum Training von Microsofts KI-Modellen — standardmäßig aktiviert, mit Daten bis zurück ins Jahr 2003. Microsoft hat 13 Milliarden Dollar in OpenAI investiert und hält den 9-Milliarden-Dollar-Cloud-Vertrag des Pentagons. Während OpenAI militärische Nutzung noch offiziell verbot, testete das Pentagon seine Modelle bereits über Azure. 2026 schloss OpenAI einen direkten Vertrag mit dem Pentagon für den Einsatz in klassifizierten Netzwerken.

Ihr Abonnement und Ihre Daten speisen ein Ökosystem, dessen Prioritäten wenig mit dem professionellen Netzwerk zu tun haben, das man Ihnen verkauft hat.

## Der übersehene Blickwinkel

2,7 MB Überwachungs-JavaScript. 6.222 parallele HTTP-Anfragen. Bei jedem Besuch. Und das für jeden ihrer Milliarden Nutzer.

Dies ist eine perfekte Illustration dessen, was unkontrollierte Entwicklung produziert: Code, der den Interessen der Plattform dient, still auf Ihrem Gerät geladen, der Ihre Bandbreite, Ihren Akku und Ihre Ressourcen verbraucht. Null Nutzen für Sie.

Eine Website, die ihre Nutzer respektiert, tut das nicht. Und eine gut gestaltete Website muss das nicht.

---

Überwachung ist nicht kostenlos. Sie hat einen Energiepreis, einen Vertrauenspreis und — zunehmend — einen Rechtspreis. Öko-Design bedeutet auch zu entscheiden, nur das zu laden, was für den Nutzer wirklich notwendig ist.

Ich habe mein Konto nach dieser Affäre gelöscht. BrowserGate ist kein Einzelfall — es ist ein weiteres Beispiel eines großen Konzerns, der seine Nutzer als auszubeutende Ressource behandelt. Ich finde LinkedIn ohnehin zu stark auf eine bestimmte Berufswelt ausgerichtet, zu glattgebügelt und wenig zugänglich für alle, die nicht ins klassische Lebenslauf-Schema passen.

Wenn jemand Lust hat, ein gesünderes, offeneres und ehrlicheres Netzwerk aufzubauen — ich bin dabei.

**Quellen**: [Fairlinked e.V.](https://www.linkedin.com/pulse/linkedin-accused-extensive-browser-surveillance-pdfze) • [The Next Web](https://thenextweb.com/news/linkedin-browsergate-extension-scanning-privacy-fingerprint) • [TechRadar](https://www.techradar.com/pro/security/one-of-the-largest-corporate-espionage-and-data-breach-scandals-in-digital-history-new-browsergate-report-claims-linkedin-privately-scans-user-browsers-for-installed-extensions-and-collects-device-data) • [SecurityWeek](https://www.securityweek.com/browsergate-claims-of-linkedin-spying-clash-with-security-research-findings/) • [Malwarebytes](https://www.malwarebytes.com/blog/news/2025/09/linkedin-will-use-your-data-to-train-its-ai-unless-you-opt-out-now) • [Gizmodo](https://gizmodo.com/pentagon-reportedly-used-microsoft-workaround-to-test-openai-models-despite-ban-2000730635) • [Tech Insider](https://tech-insider.org/openai-pentagon-military-ai-deal-2026/)
