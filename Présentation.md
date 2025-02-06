# Présentation du ProjetAPI - Calculatrice

## Introduction
Bienvenue dans la présentation de notre projet API de calculatrice. Ce projet permet d'effectuer des opérations de calcul via des requêtes HTTP et une interface graphique. L'API prend en charge les opérations de base telles que l'addition, la soustraction, la multiplication et la division.

## Objectifs du Projet
- Créer une API RESTful pour effectuer des opérations de calcul.
- Permettre aux utilisateurs d'envoyer des requêtes HTTP pour effectuer des calculs.
- Fournir des réponses JSON avec les résultats des calculs.
- Offrir une interface graphique pour utiliser la calculatrice de manière interactive.

## Structure du Projet
Le projet est organisé de manière modulaire pour faciliter la maintenance et l'extensibilité.

### Répertoires et Fichiers
- **src/** : Contient le code source de l'API.
  - **app.js** : Point d'entrée de l'application Express.
  - **controllers/** : Contient les contrôleurs pour gérer les requêtes API.
    - **calculatorController.js** : Gère les opérations de calcul.
  - **routes/** : Définit les routes de l'API.
    - **calculatorRoutes.js** : Configure les routes pour les opérations de calcul.
  - **services/** : Contient la logique métier pour les calculs.
    - **calculatorService.js** : Implémente les méthodes de calcul.
- **public/** : Contient les fichiers pour l'interface graphique.
  - **index.html** : La page HTML principale contenant la structure de la calculatrice.
  - **styles.css** : Le fichier CSS pour styliser la calculatrice.
  - **script.js** : Le fichier JavaScript pour ajouter la fonctionnalité à la calculatrice.

## Fonctionnalités de l'API
L'API permet d'effectuer les opérations suivantes :
- **Addition** : `POST /api/calculator/add` avec un corps JSON `{ "a": 5, "b": 3 }`
- **Soustraction** : `POST /api/calculator/subtract` avec un corps JSON `{ "a": 5, "b": 3 }`
- **Multiplication** : `POST /api/calculator/multiply` avec un corps JSON `{ "a": 5, "b": 3 }`
- **Division** : `POST /api/calculator/divide` avec un corps JSON `{ "a": 6, "b": 3 }`

## Interface Graphique
L'interface graphique permet d'utiliser la calculatrice de manière interactive via une page web.

### Fichiers
- **index.html** : Contient la structure de la calculatrice.
- **styles.css** : Stylise la calculatrice.
- **script.js** : Ajoute la fonctionnalité interactive.

### Utilisation
1. Ouvrez le fichier `index.html` dans un navigateur web.
2. Utilisez les boutons de la calculatrice pour effectuer des opérations.

## Installation et Utilisation
### Installation
1. Clonez le dépôt du projet.
2. Accédez au répertoire du projet.
3. Exécutez `npm install` pour installer les dépendances.

### Utilisation
1. Démarrez le serveur avec `npm start`.
2. Utilisez un client HTTP (comme Postman) pour envoyer des requêtes à l'API.
3. Ouvrez `index.html` dans un navigateur pour utiliser l'interface graphique.

## Exemples de Requêtes
### Addition
```bash
curl -X POST http://localhost:3000/api/calculator/add -H "Content-Type: application/json" -d '{"a": 5, "b": 3}'
```

### Soustraction
```bash
curl -X POST http://localhost:3000/api/calculator/subtract -H "Content-Type: application/json" -d '{"a": 5, "b": 3}'
```

### Multiplication
```bash
curl -X POST http://localhost:3000/api/calculator/multiply -H "Content-Type: application/json" -d '{"a": 5, "b": 3}'
```

### Division
```bash
curl -X POST http://localhost:3000/api/calculator/divide -H "Content-Type: application/json" -d '{"a": 6, "b": 3}'
```

## Conclusion
Ce projet démontre comment créer une API RESTful simple pour effectuer des opérations de calcul. Il peut être étendu pour inclure des fonctionnalités supplémentaires et améliorer l'expérience utilisateur.

Merci pour votre attention.

Cette présentation couvre les aspects clés de votre projet, y compris les objectifs, la structure, les fonctionnalités, l'installation et l'utilisation.

![singe](https://i.ibb.co/S4Wr0Zn6/singe.jpg)