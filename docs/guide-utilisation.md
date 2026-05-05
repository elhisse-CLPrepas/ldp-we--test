# Guide d'utilisation

## Démarrer

1. Ouvrir le dossier du projet dans VS Code.
2. Lire `GUIDE_SOURCE_LDP.md` pour comprendre le besoin initial.
3. Lancer un serveur local si nécessaire :

```powershell
python -m http.server 8080
```

4. Ouvrir `http://localhost:8080` dans le navigateur.

## Modifier le contenu

- Les textes principaux sont dans `index.html`.
- Les cartes de la section outils sont dans `data/features.json`.
- Les questions de FAQ sont dans `data/faq.json`.
- Les styles visuels sont dans `assets/css/style.css`.
- Le comportement de chargement des données est dans `assets/js/app.js`.
- Les images utilisées par la page sont dans `assets/img/`.
- Le lien d’inscription est dans la section `#inscription` de `index.html`.

## Versionner avec Git

Après chaque étape importante :

```powershell
git status
git add .
git commit -m "init: créer la structure du projet"
```

Messages possibles pour la suite :

- `feat: ajouter la landing page V1`
- `feat: améliorer la section méthode`
- `docs: compléter le README`
- `release: préparer la version 1.0`

## Publier sur GitHub

1. Créer un dépôt GitHub vide.
2. Ajouter l’origine distante fournie par GitHub.
3. Pousser la branche principale.
4. Activer GitHub Pages si une publication statique est souhaitée.
