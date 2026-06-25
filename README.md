# Site Maude Baudier (version Astro + CMS)

Site vitrine une page, statique, que tu possèdes entièrement. Contenu centralisé et éditable dans `src/data/site.json`, modifiable via une interface d'admin (Pages CMS — voir `.pages.yml`).

## Lancer en local (optionnel, pour développeur)

```bash
npm install
npm run dev      # aperçu sur http://localhost:4321
npm run build    # génère le site final dans /dist
```

## Mise en ligne

Voir le fichier `GUIDE-mise-en-ligne.md` fourni à la racine de la livraison
(déploiement Netlify, branchement du domaine Ionos, CMS, formulaire de contact).

## Structure

- `src/data/site.json` — **tout le contenu** (textes, liens, images). C'est le seul fichier à éditer pour changer le contenu.
- `src/pages/index.astro` — la page d'accueil.
- `src/pages/merci.astro` — page affichée après envoi du formulaire.
- `src/components/Header.astro` — en-tête + navigation (menu mobile inclus).
- `src/layouts/Base.astro` — structure HTML, polices, scripts (animations, menu).
- `src/styles/global.css` — palette de couleurs et styles de base.
- `public/images/` — images (remplace les placeholders par tes vrais visuels).
- `.pages.yml` — configuration de l'interface d'admin (Pages CMS).
- `netlify.toml` — configuration de déploiement Netlify.
