class Operations {
    sum(a, b) {
        return +a + +b
    }

    sub(a, b) {
        return a - b
    }

    multiple(a, b) {
        return a * b
    }

    divide(a, b) {
        return a / b
    }
}

module.exports = new Operations()
