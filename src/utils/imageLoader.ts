// src/utils/imageLoader.ts

/**
 * Charge automatiquement les images d'un projet basé sur son slug
 * Recherche dans src/assets/projects/ avec le pattern : {slug}00.{format} pour l'image hero
 * et {slug}01.{format}, {slug}02.{format}... pour la galerie
 */
export async function loadImagesBySlug(slug: string) {
  let heroImage: any = null;
  
  // Formats d'images supportés par ordre de préférence
  const formats = ['png', 'jpg', 'jpeg', 'webp'];
  
  // Essayer différents formats pour l'image hero (index 00)
  for (const format of formats) {
    try {
      const img = await import(`../assets/projects/${slug}00.${format}`);
      heroImage = img.default;
      break;
    } catch {
      // Format non trouvé, essayer le suivant
      continue;
    }
  }
  
  // Charger les images de galerie (01, 02, 03... jusqu'à 20)
  const galleryImages: any[] = [];
  for (let i = 1; i <= 20; i++) {
    const paddedIndex = i.toString().padStart(2, '0');
    let found = false;
    
    for (const format of formats) {
      try {
        const img = await import(`../assets/projects/${slug}${paddedIndex}.${format}`);
        galleryImages.push(img.default);
        found = true;
        break;
      } catch {
        continue;
      }
    }
    
    // Si aucune image trouvée pour cet index, arrêter la recherche
    if (!found) break;
  }
  
  return { heroImage, galleryImages };
}

/**
 * Charge uniquement l'image hero d'un projet (optimisation pour la page projets)
 */
export async function loadHeroImage(slug: string) {
  const formats = ['png', 'jpg', 'jpeg', 'webp'];
  
  for (const format of formats) {
    try {
      const img = await import(`../assets/projects/${slug}00.${format}`);
      return img.default;
    } catch {
      continue;
    }
  }
  
  return null;
}