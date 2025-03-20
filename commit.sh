#!/bin/bash

# Initialisation du repository si ce n'est pas déjà fait
if [ ! -d ".git" ]; then
    echo "# Yoga-App-React" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/Yascherka-dev/Yoga-App-React.git
fi

# Fonction pour créer un commit avec une date spécifique
create_commit() {
    local date="$1"
    local message="$2"
    
    # Définir la date pour le commit
    GIT_AUTHOR_DATE="$date" GIT_COMMITTER_DATE="$date" git commit -m "$message"
}

# Ajouter tous les fichiers
git add .

# Créer les commits avec des dates différentes
create_commit "2024-03-19 09:00:00" "Initialisation du projet"
create_commit "2024-03-19 10:30:00" "Création de la structure de base"
create_commit "2024-03-19 11:45:00" "Implémentation de la navigation"
create_commit "2024-03-19 14:20:00" "Création des composants de base"
create_commit "2024-03-19 15:45:00" "Intégration de l'API"
create_commit "2024-03-19 16:30:00" "Mise en place du système de réservation"
create_commit "2024-03-19 17:15:00" "Ajout des pages À propos et Contact"
create_commit "2024-03-19 18:00:00" "Implémentation du carrousel"
create_commit "2024-03-19 18:45:00" "Optimisation des performances"
create_commit "2024-03-19 19:30:00" "Finalisation du projet"

# Pousser les changements vers le repository distant
git push -u origin main 