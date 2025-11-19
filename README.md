# ZharZen Yoga - Application de Réservation

Une application web moderne pour la réservation de cours de yoga, développée avec React et Vite. Cette application permet aux utilisateurs de découvrir et réserver des expériences de yoga uniques, alliant bien-être et culture marocaine.

## 🚀 Fonctionnalités

- **Page d'accueil** : Présentation du studio avec section hero et carousel des meilleures expériences
- **Catalogue d'expériences** : Liste complète des cours de yoga disponibles avec filtrage par catégorie
- **Pages de détail** : Informations détaillées pour chaque expérience de yoga
- **Système de réservation** : Formulaire de réservation en ligne avec validation
- **Interface responsive** : Design adaptatif pour tous les appareils (mobile, tablette, desktop)
- **Navigation fluide** : Routing avec React Router pour une expérience utilisateur optimale
- **Filtrage avancé** : Filtrage des expériences par catégorie et niveau

## 🛠 Technologies Utilisées

- **React 19** : Bibliothèque JavaScript pour la construction d'interfaces utilisateur
- **React Router DOM 7** : Gestion de la navigation et du routing
- **Styled Components 6** : Styling CSS-in-JS pour des composants stylisés
- **Vite 6** : Outil de build moderne et rapide
- **ESLint** : Linter pour maintenir la qualité du code
- **Hooks personnalisés** : `useFetch` pour la gestion des appels API

## 📦 Installation

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. Clonez le repository :
```bash
git clone https://github.com/votre-username/Yoga-App-React.git
```

2. Naviguez dans le dossier du projet :
```bash
cd Yoga-App-React
```

3. Installez les dépendances :
```bash
npm install
```

4. Lancez l'application en mode développement :
```bash
npm run dev
```

5. Ouvrez votre navigateur et accédez à `http://localhost:5173`

### Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Crée une version de production optimisée
- `npm run preview` : Prévisualise la version de production
- `npm run lint` : Vérifie le code avec ESLint

## 🔧 Configuration

L'application utilise actuellement des endpoints API configurés directement dans `src/api.js`. Les URLs de l'API sont :

- Expériences : `https://zharzen.b2.celiabourial.com/api/v1/experiences`
- Réservations : `https://zharzen.b2.celiabourial.com/api/v1/reservations`
- Catégories : `https://zharzen.b2.celiabourial.com/api/v1/categories`

Pour utiliser des variables d'environnement, créez un fichier `.env` à la racine du projet :

```env
VITE_API_BASE_URL=https://zharzen.b2.celiabourial.com/api/v1
```

## 📁 Structure du Projet

```
Yoga-App-React/
├── src/
│   ├── assets/              # Images et ressources statiques
│   ├── components/           # Composants React réutilisables
│   │   ├── ExperienceCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── Reservation.jsx
│   ├── hooks/               # Hooks personnalisés
│   │   └── useFetch.js      # Hook pour les appels API
│   ├── pages/               # Pages de l'application
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── ExperienceDetail.jsx
│   │   ├── ExperiencePage.jsx
│   │   └── Home.jsx
│   ├── styles/              # Fichiers CSS
│   │   ├── App.css
│   │   ├── ExperienceCard.css
│   │   ├── ExperienceDetailPage.css
│   │   ├── ExperiencePage.css
│   │   ├── Footer.css
│   │   ├── Hero.css
│   │   ├── Home.css
│   │   ├── Navbar.css
│   │   └── Reservation.css
│   ├── api.js               # Configuration et fonctions API
│   ├── App.jsx              # Composant principal avec routing
│   ├── main.jsx             # Point d'entrée de l'application
│   └── index.css            # Styles globaux
├── index.html               # Template HTML
├── package.json             # Dépendances et scripts
├── vite.config.js           # Configuration Vite
├── eslint.config.js         # Configuration ESLint
└── README.md                # Documentation du projet
```

## 🎨 Design

L'application utilise un design moderne et épuré avec :

- **Palette de couleurs** : Tons apaisants avec accent bleu (#4a90e2) pour les actions
- **Typographie** : Hiérarchie claire et lisible
- **Animations** : Transitions fluides pour une expérience utilisateur agréable
- **Responsive Design** : Mise en page adaptative avec breakpoints pour mobile, tablette et desktop
- **Composants réutilisables** : Architecture modulaire pour faciliter la maintenance
- **Styled Components** : Styling CSS-in-JS pour un code plus maintenable

## 🔌 API

L'application communique avec une API REST pour :

- Récupérer la liste des expériences de yoga
- Créer des réservations
- Obtenir les catégories disponibles

Le hook `useFetch` gère automatiquement les états de chargement et les erreurs.

## 🚧 Fonctionnalités Futures

- [ ] Authentification utilisateur
- [ ] Gestion de profil utilisateur
- [ ] Historique des réservations
- [ ] Système de paiement en ligne
- [ ] Notifications par email
- [ ] Recherche avancée
- [ ] Favoris/Liste de souhaits
- [ ] Avis et commentaires

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

### Guidelines de contribution

- Suivez les conventions de code existantes
- Ajoutez des commentaires pour le code complexe
- Testez vos modifications avant de soumettre une PR
- Assurez-vous que le code passe le linter (`npm run lint`)

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👥 Auteurs

- **Yasmina Cherkaoui** - Développeur Principal

## 🙏 Remerciements

- Merci à tous les contributeurs qui ont aidé à améliorer ce projet
- Inspiration design : Culture marocaine et philosophie du yoga

---

**Note** : Ce projet est en développement actif. N'hésitez pas à signaler des bugs ou à proposer de nouvelles fonctionnalités via les issues GitHub.
