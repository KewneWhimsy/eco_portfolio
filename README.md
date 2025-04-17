# Josselin HANEL - Portfolio Éco-Responsable

Un portfolio multilingue et éco-responsable construit avec Astro et Tailwind CSS, présentant mon travail en tant que développeur web full stack avec une attention particulière portée au développement web durable.

## Fonctionnalités

- **Mode Éco intégré**: Basculez entre les versions standard et éco-responsable du site pour réduire l'empreinte carbone
- **Support multilingue**: Disponible en français, anglais et allemand
- **Design responsive**: Mise en page entièrement adaptable qui fonctionne sur tous les appareils
- **Optimisé pour la performance**: Temps de chargement rapides et utilisation minimale des ressources
- **Accessibilité**: Conçu en tenant compte de l'accessibilité
- **Navigation fluide**: Utilisation de transition-persist pour conserver les éléments communs entre les pages

## Technologies utilisées

- [Astro](https://astro.build/) - Le framework principal pour construire le site
- [Tailwind CSS](https://tailwindcss.com/) - Pour le stylisme

## Caractéristiques éco-responsables

Ce site web est construit avec une préoccupation pour la durabilité environnementale :

1. **Mode Éco** : Une version éco-responsable dédiée du site avec :
   - Utilisation réduite de JavaScript
   - Mises en page simplifiées
   - Requêtes réseau minimales
   - Chargement optimisé des ressources

2. **Optimisation des performances** :
   - Chargement d'images optimisé avec des tailles responsives
   - Dépendances minimales
   - CSS efficace avec Tailwind
   - Format d'images modernes (WebP, AVIF)

3. **Pratiques de codage durables** :
   - Rendu côté serveur quand c'est possible
   - Mise en cache efficace des ressources
   - Scripts tiers minimaux
   - Transitions entre les pages avec `transition-persist` pour éviter les rechargements inutiles

4. **Expérience utilisateur améliorée** :
   - Navigation fluide et rapide
   - Pas de bannière de cookies intrusive
   - Focus sur le contenu essentiel
   - Choix de la langue et du mode (standard/éco) facilement accessible

## Démarrage rapide

### Prérequis

- Node.js (v18.17.1 ou plus récent)
- npm (v9.6.5 ou plus récent) ou pnpm (v7.1.0 ou plus récent)

### Installation

1. Cloner le dépôt

```bash
git clone https://github.com/KewneWhimsy/eco-portfolio.git
cd eco-portfolio
```

2. Installer les dépendances

```bash
npm install
# ou
pnpm install
```

3. Démarrer le serveur de développement

```bash
npm run dev
# ou
pnpm dev
```

4. Ouvrez votre navigateur et visitez `http://localhost:4321`

### Construction pour la production

```bash
npm run build
# ou
pnpm build
```

### Prévisualiser la version de production

```bash
npm run preview
# ou
pnpm preview
```

## Déploiement

Ce site est conçu pour être déployé sur des plateformes comme Netlify, Vercel ou Cloudflare Pages. Le site inclut des redirections pour gérer la sélection de la langue en fonction des préférences de l'utilisateur.

### Variables d'environnement

Aucune variable d'environnement spécifique n'est requise pour le fonctionnement de base.

## Personnalisation

### Ajouter une nouvelle langue

1. Ajoutez le code de langue à la fonction `getStaticPaths` dans chaque fichier de page
2. Ajoutez les traductions pour la nouvelle langue dans les objets de contenu
3. Mettez à jour le composant de sélection de langue pour inclure la nouvelle langue

### Modifier le mode Éco

Le mode éco fonctionne en ayant des routes séparées avec `/eco` dans le chemin. Pour modifier ou améliorer le mode éco :

1. Modifiez les versions spécifiques au mode éco des pages dans `src/pages/[lang]/*/eco.astro`
2. Mettez à jour le comportement de basculement dans `src/components/eco_mode_toggle.astro`

---

Ce projet s'engage à suivre des pratiques de développement web durables et vise à démontrer comment nous pouvons créer des sites web beaux et fonctionnels tout en minimisant l'impact environnemental.

## License
This project is licensed under the Hippocratic License 3.0.
You are free to use, modify, and share this work — as long as you’re not using it to build surveillance tools, spread misinformation, or generally ruin the world.

Let’s keep the web fast, accessible, and a little bit more friendly for Gaïa and beyond.