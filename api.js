/**
 * Importation des modules nécessaires
 */
const express = require('express');
const bodyParser = require('body-parser');

/**
 * Création de l'application Express
 */
const app = express();
const port = 3000;

/**
 * Middleware pour parser les requêtes JSON
 */
app.use(bodyParser.json());

/**
 * Route POST pour calculer une expression mathématique
 * @route POST /calculate
 * @param {string} expression - L'expression mathématique à calculer
 * @returns {object} - Le résultat du calcul ou une erreur
 */
app.post('/calculate', (req, res) => {
    const { expression } = req.body;
    if (!expression) {
        return res.status(400).json({ error: 'Expression is required' });
    }

    try {
        const result = eval(expression);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: 'Invalid expression' });
    }
});

/**
 * Démarrage du serveur sur le port spécifié
 */
app.listen(port, () => {
    console.log(`Calculator API listening at http://localhost:${port}`);
});