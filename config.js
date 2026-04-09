// ========================
// CONFIGURATION - API KEYS
// ========================
// Mettez toutes vos clés API ici
// Ce fichier peut être ajouté à .gitignore si vous voulez garder vos clés privées

const CONFIG = {
  // Unsplash API Key (pour les photos)
  // Obtenez votre clé sur: https://unsplash.com/developers
  UNSPLASH_ACCESS_KEY: 'jULX67EqogcoOXFzX1B9aMycHG0mkue8yVMzMFJs4eY',
  
  // GitHub Repository URL (raw files)
  // Format: https://raw.githubusercontent.com/USERNAME/REPO/BRANCH/
  GITHUB_REPO_URL: 'https://raw.githubusercontent.com/Anna-Paulina/Travel-map/main/',
  
  // Nom du fichier index des voyages
  INDEX_FILE: 'trips-index.json',
  
  // API d'élévation (gratuite, pas de clé nécessaire)
  // Alternatives: 'https://api.opentopodata.org/v1/etopo1' ou 'https://api.open-elevation.com/api/v1/lookup'
  ELEVATION_API: 'https://api.opentopodata.org/v1/aster30m'
};

// Rendre CONFIG accessible globalement
if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}
