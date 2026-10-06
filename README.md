# NordikApp Galaxy · site web

Site vitrine statique (Astro) de NordikApp Galaxy, hébergé sur GitHub Pages.
Sert de site officiel pour les comptes développeur Apple et Google Play.

## Développement

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
```

## Ajouter une application

1. Copier un fichier de `src/content/apps/` (ex. `tounes.md`) sous le nouveau slug.
2. Remplir le front-matter (nom, couleur, plateformes, données recueillies, liens stores).
3. Pousser sur `main`.

Pages générées automatiquement, en FR (racine) et en EN (`/en`) :

| URL | Usage store |
|---|---|
| `/apps/<slug>` | URL marketing |
| `/apps/<slug>/privacy` | Privacy Policy URL (Apple, Google) |
| `/apps/<slug>/support` | Support URL (Apple) |
| `/apps/<slug>/delete-account` | Account deletion URL (Google), si `accounts: true` |

## Informations légales

Toutes dans `src/site.config.ts`. Les valeurs entre ⟨ ⟩ sont provisoires et doivent
correspondre au REQ et au D-U-N-S avant l'inscription aux stores.

## Déploiement

1. Organisation GitHub gratuite, repo **public** `nordikapp-website`.
2. Settings → Pages → Source : *GitHub Actions*. Le workflow `.github/workflows/deploy.yml` publie à chaque push sur `main`.
3. Settings → Pages → Custom domain : `nordikapp.ca` (déjà dans `public/CNAME`), cocher *Enforce HTTPS*.
4. DNS (Cloudflare, proxy désactivé / nuage gris) :
   - `A @` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME www` → `<organisation>.github.io`
5. Vérifier le domaine dans les paramètres Pages de l'organisation (protection contre la prise de contrôle).

## Courriel

Cloudflare Email Routing : `contact@` et `confidentialite@` redirigés vers les boîtes existantes.
