class CalculatorController {
    constructor(calculatorService) {
        this.calculatorService = calculatorService;
    }

    add(req, res) {
        const { a, b } = req.body;
        const result = this.calculatorService.add(a, b);
        res.json({ result });
    }

    subtract(req, res) {
        const { a, b } = req.body;
        const result = this.calculatorService.subtract(a, b);
        res.json({ result });
    }

    multiply(req, res) {
        const { a, b } = req.body;
        const result = this.calculatorService.multiply(a, b);
        res.json({ result });
    }

    divide(req, res) {
        const { a, b } = req.body;
        try {
            const result = this.calculatorService.divide(a, b);
            res.json({ result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default CalculatorController;