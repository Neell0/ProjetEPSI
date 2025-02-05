# Documentation des Fonctions

## Services

### `CalculatorService`

Le service `CalculatorService` contient les méthodes de calcul de base.

- **Méthodes** :
  - `add(a, b)` : Additionne deux nombres.
  - `subtract(a, b)` : Soustrait le deuxième nombre du premier.
  - `multiply(a, b)` : Multiplie deux nombres.
  - `divide(a, b)` : Divise le premier nombre par le deuxième. Lance une erreur si le deuxième nombre est zéro.
  - `validateNumbers(...args)` : Valide que tous les arguments sont des nombres.

[Voir le fichier `calculatorService.js`](src/services/calculatorService.js)

## Contrôleurs

### `CalculatorController`

Le contrôleur `CalculatorController` gère les requêtes API pour les opérations de calcul.

- **Méthodes** :
  - `add(req, res)` : Gère la requête POST pour l'addition.
  - `subtract(req, res)` : Gère la requête POST pour la soustraction.
  - `multiply(req, res)` : Gère la requête POST pour la multiplication.
  - `divide(req, res)` : Gère la requête POST pour la division. Retourne une erreur si la division par zéro est tentée.

[Voir le fichier `calculatorController.js`](src/controllers/calculatorController.js)

## Routes

### `calculatorRoutes`

Le fichier `calculatorRoutes.js` définit les routes pour les opérations de calcul.

- **Routes** :
  - `POST /api/calculator/add` : Route pour l'addition.
  - `POST /api/calculator/subtract` : Route pour la soustraction.
  - `POST /api/calculator/multiply` : Route pour la multiplication.
  - `POST /api/calculator/divide` : Route pour la division.

[Voir le fichier `calculatorRoutes.js`](src/routes/calculatorRoutes.js)

## Application

### `app.js`

Le fichier `app.js` est le point d'entrée de l'application Express.

- **Fonctionnalités** :
  - Configure Express pour utiliser `body-parser` pour parser les requêtes JSON.
  - Monte les routes de calculateur sous `/api/calculator`.
  - Démarre le serveur sur le port défini dans le fichier `.env` ou sur le port 3000 par défaut.

[Voir le fichier `app.js`](src/app.js)