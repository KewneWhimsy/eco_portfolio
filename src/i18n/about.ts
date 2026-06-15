// src/i18n/about.ts
import type { Lang } from './index';

const skillIcons = ['monitor', 'gear', 'database', 'tools', 'list-checks'] as const;
const skillItems = [
  ['Astro', 'Tailwind', 'CSS Pro', 'TypeScript', 'HTMX'],
  ['Astro + Workers', 'Supabase', 'Phoenix (Elixir)'],
  ['PostgreSQL', 'PostgREST', 'MongoDB'],
  ['Git', 'Docker', 'Lighthouse'],
  ['Accessibilité', 'Performance & Éco-conception', 'UX/UI'],
] as const;
export const about = {
  fr: {
    title: 'Josselin HANEL - Qui je suis',
    description: "Découvrez mon parcours, mes compétences, et ma façon de construire des sites simples et sur-mesure, faciles à garder en main.",
    aboutTitle: 'Qui suis-je ?',
    aboutParagraphs: [
      "Né début 90, j'ai vu internet débarquer dans nos vies. Cette génération de transition m'a rendu curieux de la technologie tout en restant attaché à ce qu'elle peut apporter concrètement aux gens.",
      "Je suis empathique, j'aime les rapports apaisés et honnêtes. Quand je crois à un projet, je m'y donne à fond.",
      "En dehors du code : jeux vidéo, cinéma d'animation, art graphique et musique. Sans être musicien, j'explore sans cesse des styles variés, en ce moment je suis pas mal sur l'univers esthétique et sonore de la grind fiction par exemple. J'aime mettre en valeur les artistes talentueux et je suis en route pour franchir le pas de l'autre côté : photo, pixel art et design. J'ai hâte d'avoir des projets plus ambitieux de ce côté-là.",
    ],
    links: [
      { label: 'Ma playlist fourre-tout', url: 'https://youtube.com/playlist?list=PL9gSzoFJ2JguoSDW7XCZ-14UIhI6GVo44&si=x1ILo9ZRT6nDg8Bz' },
      { label: 'Mon profil Senscritique', url: 'https://www.senscritique.com/Whimsical' },
    ],
    skillsTitle: 'Compétences techniques', techToggle: 'Détails techniques', expTitle: 'Mon parcours', eduTitle: 'Formation', contactButton: 'Me contacter',
    experiences: [
      { period: "2025 - Aujourd'hui", position: 'Développeur Web Fullstack indépendant', company: 'À mon compte', description: "Je conçois des sites pour des clients variés, avec une contrainte que je m'impose : chaque site doit être rapide, léger, et que le client puisse l'utiliser en autonomie." },
      { period: '2024 - 2025', position: 'Responsable du site internet', company: 'Objethèque de Cornouaille', description: "Création et maintenance du site de cette association bretonne de prêt d'objets, bénévolement. Un projet qui colle bien à mes valeurs : utile, sobre, local." },
    ],
    education: [
      { year: '2025', degree: 'Diplôme de développeur web', school: 'Studi', description: "Titre RNCP de niveau 5. Formation diplômante qui m'a permis de valider mes acquis. Mon projet de fin de formation est <a href=\"/fr/esport/\" class=\"text-link\">Esportify</a>." },
      { year: '2023 - 2024', degree: 'The Odin Project', school: 'Formation en ligne', description: 'Curriculum open source gratuit et très complet pour apprendre le développement web de zéro. <a href="https://www.theodinproject.com" class="text-link" target="_blank" rel="noopener noreferrer">Voir la formation</a>.' },
      { year: '2022 - Présent', degree: 'Formation continue', school: 'Diverses sources', description: "YouTube, podcasts, newsletters tech... J'apprends en permanence, et l'anglais m'ouvre l'accès aux ressources les plus fraîches." },
    ],
    skillCategories: [
      { category: 'Côté visible', icon: skillIcons[0], items: skillItems[0] },
      { category: 'Côté serveur', icon: skillIcons[1], items: skillItems[1] },
      { category: 'Bases de données', icon: skillIcons[2], items: skillItems[2] },
      { category: 'Outils', icon: skillIcons[3], items: skillItems[3] },
      { category: 'Méthodes', icon: skillIcons[4], items: skillItems[4] },
    ],
  },
  en: {
    title: 'Josselin HANEL - About me',
    description: 'Discover my background, skills, and my approach to building simple, custom-made websites that are easy to stay on top of.',
    aboutTitle: 'About me',
    aboutParagraphs: [
      "Born in the early 90s, I watched the internet arrive in our lives. Growing up in that transitional generation made me curious about technology while staying grounded in what it can actually do for people.",
      "I'm empathetic, I value calm and honest relationships. When I believe in a project, I give it everything.",
      "Outside of code: video games, animated films, graphic art and music. I'm not a musician but I constantly explore different styles — lately I've been deep into the aesthetic and sonic world of grind fiction. I love putting talented artists in the spotlight, and I'm on my way to crossing over to the other side myself: photography, pixel art and design. I can't wait to take on more ambitious projects in that space.",
    ],
    links: [
      { label: 'My catch-all playlist', url: 'https://youtube.com/playlist?list=PL9gSzoFJ2JguoSDW7XCZ-14UIhI6GVo44&si=x1ILo9ZRT6nDg8Bz' },
      { label: 'My Senscritique profile', url: 'https://www.senscritique.com/Whimsical' },
    ],
    skillsTitle: 'Technical skills', techToggle: 'Technical details', expTitle: 'Professional experience', eduTitle: 'Education', contactButton: "Let's talk",
    experiences: [
      { period: '2025 - Present', position: 'Freelance web developer', company: 'Independent', description: 'I design websites for a range of clients, with one rule I set for myself: every site must be fast, lightweight, and easy for the client to use independently.' },
      { period: '2024 - 2025', position: 'Webmaster', company: 'Objethèque de Cornouaille', description: 'Built and maintained the website for this Breton object-lending association, on a voluntary basis. A project that aligns well with my values: useful, simple, local.' },
    ],
    education: [
      { year: '2025', degree: 'TP développeur web et web mobile', school: 'Studi', description: 'A certified program that let me consolidate everything I had learned. My final project was <a href="/en/esport/" class="text-link">Esportify</a>.' },
      { year: '2023 - 2024', degree: 'The Odin Project', school: 'Auto-formation', description: 'A free, open-source and very thorough curriculum to learn web development from scratch. <a href="https://www.theodinproject.com" class="text-link" target="_blank" rel="noopener noreferrer">See the curriculum</a>.' },
      { year: '2022 - Présent', degree: 'Veille technologique', school: 'Sources diverses', description: 'YouTube, podcasts, tech newsletters — always learning, and being comfortable in English means I get the freshest content first.' },
    ],
    skillCategories: [
      { category: 'Frontend', icon: skillIcons[0], items: skillItems[0] },
      { category: 'Backend', icon: skillIcons[1], items: skillItems[1] },
      { category: 'Databases', icon: skillIcons[2], items: skillItems[2] },
      { category: 'Tools', icon: skillIcons[3], items: skillItems[3] },
      { category: 'Methodologies', icon: skillIcons[4], items: skillItems[4] },
    ],
  },
  de: {
    title: 'Josselin HANEL - Über mich',
    description: 'Entdecken Sie meinen Werdegang, meine Fähigkeiten und meine Herangehensweise an einfache, maßgeschneiderte Websites, die sich leicht selbst verwalten lassen.',
    aboutTitle: 'Über mich',
    aboutParagraphs: [
      "Ich bin Anfang der 90er geboren und habe erlebt, wie das Internet in unser Leben einzog. Diese Übergangsgeneration hat mich neugierig auf Technologie gemacht, während ich gleichzeitig sehr daran interessiert bin, was sie konkret für Menschen leisten kann.",
      "Ich bin einfühlsam und schätze ruhige, ehrliche Beziehungen. Wenn ich an ein Projekt glaube, gebe ich alles.",
      "Abseits des Codes: Videospiele, Animationsfilme, Grafikkunst und Musik. Ich bin kein Musiker, erkunde aber ständig verschiedene Stile, gerade beschäftige ich mich viel mit der ästhetischen und klanglichen Welt der Grind Fiction. Ich liebe es, talentierte Künstler in den Vordergrund zu stellen, und ich bin dabei, selbst auf die andere Seite zu wechseln: Fotografie, Pixel Art und Design. Ich freue mich sehr auf ehrgeizigere Projekte in diesem Bereich.",
    ],
    links: [
      { label: 'Meine bunte Playlist', url: 'https://youtube.com/playlist?list=PL9gSzoFJ2JguoSDW7XCZ-14UIhI6GVo44&si=x1ILo9ZRT6nDg8Bz' },
      { label: 'Mein Senscritique-Profil', url: 'https://www.senscritique.com/Whimsical' },
    ],
    skillsTitle: 'Technische Fähigkeiten', techToggle: 'Technische Details', expTitle: 'Berufserfahrung', eduTitle: 'Ausbildung', contactButton: 'Kontaktieren Sie mich',
    experiences: [
      { period: '2025 - Heute', position: 'Freelance Webentwickler', company: 'Unabhängig', description: 'Ich gestalte Websites für verschiedene Kunden, mit einer Regel, die ich mir selbst auferlege: Jede Site muss schnell, leicht und für den Kunden eigenständig nutzbar sein.' },
      { period: '2024 - 2025', position: 'Webmaster', company: 'Objethèque de Cornouaille', description: 'Aufbau und Pflege der Website dieses bretonischen Vereins für Objektausleihe, ehrenamtlich. Ein Projekt, das gut zu meinen Werten passt: nützlich, schlicht, lokal.' },
    ],
    education: [
      { year: '2025', degree: 'Beruflicher Titel für Web- und Mobile-Web-Entwicklung', school: 'Studi', description: 'Eine anerkannte Ausbildung, die mir half, meine Kenntnisse zu bestätigen. Mein Abschlussprojekt war <a href="/de/esport/" class="text-link">Esportify</a>.' },
      { year: '2023 - 2024', degree: 'The Odin Project', school: 'Selbststudium', description: 'Ein kostenloses, sehr vollständiges Open-Source-Curriculum für Webentwicklung von Grund auf. <a href="https://www.theodinproject.com" class="text-link" target="_blank" rel="noopener noreferrer">Zur Ausbildung</a>.' },
      { year: '2022 - Heute', degree: 'Technologische Wachsamkeit', school: 'Verschiedene Quellen', description: 'YouTube, Podcasts, Tech-Newsletter — ich lerne ständig dazu, und gute Englischkenntnisse geben mir Zugang zu den aktuellsten Inhalten.' },
    ],
    skillCategories: [
      { category: 'Frontend', icon: skillIcons[0], items: skillItems[0] },
      { category: 'Backend', icon: skillIcons[1], items: skillItems[1] },
      { category: 'Datenbanken', icon: skillIcons[2], items: skillItems[2] },
      { category: 'Werkzeuge', icon: skillIcons[3], items: skillItems[3] },
      { category: 'Methoden', icon: skillIcons[4], items: skillItems[4] },
    ],
  },
} satisfies Record<Lang, any>;
