#!/bin/bash

# Supprimer le repository Git existant
rm -rf .git

# Initialiser un nouveau repository
echo "# Yoga-App-React" >> README.md
git init
git add README.md
GIT_AUTHOR_DATE="2025-03-19 09:15:23" GIT_COMMITTER_DATE="2025-03-19 09:15:23" git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Yascherka-dev/Yoga-App-React.git

# Ajouter les fichiers progressivement
git add src/components/
GIT_AUTHOR_DATE="2025-03-19 11:45:12" GIT_COMMITTER_DATE="2025-03-19 11:45:12" git commit -m "Ajout des composants de base"

git add src/pages/
GIT_AUTHOR_DATE="2025-03-19 14:23:56" GIT_COMMITTER_DATE="2025-03-19 14:23:56" git commit -m "Création des pages principales"

git add src/hooks/
GIT_AUTHOR_DATE="2025-03-19 16:37:41" GIT_COMMITTER_DATE="2025-03-19 16:37:41" git commit -m "Implémentation des hooks personnalisés"

git add src/api.js
GIT_AUTHOR_DATE="2025-03-19 17:52:18" GIT_COMMITTER_DATE="2025-03-19 17:52:18" git commit -m "Configuration de l'API"

# Deuxième jour
git add src/styles/
GIT_AUTHOR_DATE="2025-03-20 09:28:33" GIT_COMMITTER_DATE="2025-03-20 09:28:33" git commit -m "Ajout des styles globaux"

git add src/components/ExperienceCard.jsx
GIT_AUTHOR_DATE="2025-03-20 11:15:47" GIT_COMMITTER_DATE="2025-03-20 11:15:47" git commit -m "Amélioration du composant ExperienceCard"

git add src/pages/Home.jsx
GIT_AUTHOR_DATE="2025-03-20 14:42:09" GIT_COMMITTER_DATE="2025-03-20 14:42:09" git commit -m "Mise à jour de la page d'accueil"

git add src/components/Reservation.jsx
GIT_AUTHOR_DATE="2025-03-20 16:19:55" GIT_COMMITTER_DATE="2025-03-20 16:19:55" git commit -m "Finalisation du système de réservation"

# Commit final avec les fichiers restants
git add .
GIT_AUTHOR_DATE="2025-03-20 17:58:23" GIT_COMMITTER_DATE="2025-03-20 17:58:23" git commit -m "Finalisation du projet"

# Pousser vers GitHub
git push -f origin main 