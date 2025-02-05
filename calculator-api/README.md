# ProjetAPI - Calculatrice

## Description
Ce projet est une API qui permet d'effectuer des opérations de calculatrice via des requêtes HTTP. L'API prend en charge les opérations de base telles que l'addition, la soustraction, la multiplication et la division.

## Structure du projet
- **src/** : Contient le code source de l'API.
  - **app.js** : Point d'entrée de l'application Express.
  - **controllers/** : Contient les contrôleurs pour gérer les requêtes API.
    - **calculatorController.js** : Gère les opérations de calcul.
  - **routes/** : Définit les routes de l'API.
    - **calculatorRoutes.js** : Configure les routes pour les opérations de calcul.
  - **services/** : Contient la logique métier pour les calculs.
    - **calculatorService.js** : Implémente les méthodes de calcul.

## Installation
1. Clonez le dépôt du projet.
2. Accédez au répertoire du projet.
3. Exécutez `npm install` pour installer les dépendances.

## Utilisation
1. Démarrez le serveur avec `npm start`.
2. Utilisez un client HTTP (comme Postman) pour envoyer des requêtes à l'API.

### Exemples d'API
- **Addition** : `POST /api/calculate/add` avec un corps JSON `{ "a": 5, "b": 3 }`
- **Soustraction** : `POST /api/calculate/subtract` avec un corps JSON `{ "a": 5, "b": 3 }`
- **Multiplication** : `POST /api/calculate/multiply` avec un corps JSON `{ "a": 5, "b": 3 }`
- **Division** : `POST /api/calculate/divide` avec un corps JSON `{ "a": 6, "b": 3 }`

## Langages et technologies utilisés
- **JavaScript** : Pour le développement de l'API.
- **Node.js** : Environnement d'exécution pour le serveur.
- **Express** : Framework pour construire l'API.

## Contribuer
Les contributions sont les bienvenues. Veuillez soumettre une demande de tirage pour toute amélioration ou correction.