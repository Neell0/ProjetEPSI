class CalculatorService {
    add(a, b) {
        this.validateNumbers(a, b);
        return a + b;
    }

    subtract(a, b) {
        this.validateNumbers(a, b);
        return a - b;
    }

    multiply(a, b) {
        this.validateNumbers(a, b);
        return a * b;
    }

    divide(a, b) {
        this.validateNumbers(a, b);
        if (b === 0) {
            throw new Error('Division by zero is not allowed.');
        }
        return a / b;
    }

    validateNumbers(...args) {
        args.forEach(arg => {
            if (typeof arg !== 'number') {
                throw new Error('All arguments must be numbers.');
            }
        });
    }
}

export default CalculatorService;