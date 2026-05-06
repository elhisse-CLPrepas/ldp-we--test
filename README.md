# LAB-NUM-IA - Apprendre en produisant

Landing page professionnelle pour présenter un webinaire pratique :
créer une page web avec VS Code, Codex, Git et GitHub.

## Objectif

Passer de l’usage simple de l’IA à une production organisée :
idée -> page web -> versionnement -> GitHub -> publication.

## Structure

```text
.
|-- index.html
|-- assets/
|   |-- css/
|   |   `-- style.css
|   |-- js/
|   |   `-- app.js
|   `-- img/
|       |-- logo-ia.png
|       |-- hero.jpg
|       |-- og-image.jpg
|       |-- affiche-annonce.png
|       `-- affiche-webinaire.png
|-- data/
|   |-- faq.json
|   `-- features.json
|-- docs/
|   `-- guide-utilisation.md
|-- README.md
`-- .gitignore
```

## Utilisation locale

Ouvrir `index.html` dans un navigateur moderne.

Pour que le chargement des fichiers JSON fonctionne partout, il est recommandé de servir le dossier avec un petit serveur local :

```powershell
python -m http.server 8080
```

Puis ouvrir `http://localhost:8080`.

## Logique Git conseillée

```text
init: créer la structure du projet
feat: ajouter la landing page V1
feat: améliorer la section méthode
docs: compléter le README
release: préparer la version 1.0
```

## Technologies

- HTML5
- CSS3 responsive
- JavaScript vanilla
- Données JSON
- Balises SEO et Open Graph
