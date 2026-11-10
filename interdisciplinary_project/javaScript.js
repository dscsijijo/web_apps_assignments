document.addEventListener('DOMContentLoaded', () => {
    let MQ = MathQuill.getInterface(2);

    let mathFieldSpan = document.getElementById('math-field');
    let latexSpan = document.getElementById('latex-output');
    let mathField = MQ.MathField(mathFieldSpan, {
        handlers: {
            edit: function () {
                let enteredMath = mathField.latex();
                latexSpan.textContent = enteredMath;
            }
        }
    });
    MQ.MathField(document.getElementById('math-field'), {autoCommands: 'sin'});
});
function enter() {
    let mathFieldSpan = document.getElementById('math-field');
    // var resultDisplay = document.getElementById('result');
    let enteredMath = document.getElementById('latex-output').textContent;
    const exp = parse(enteredMath);
    console.log(JSON.stringify(exp, null, 2));
    // var result = calculate(enteredMath);
    // resultDisplay.textContent = result;
}
function split(input) {
    const regex = /\s*(\d+(?:\.\d+)?|[a-zA-Z]+|[+\-*\/^{}]|(\\frac)|(\\left\()|(\\right\))|(\\cdot))/gy;
    const exp = [];
    let position = 0;

    while (position < input.length) {
        regex.lastIndex = position;
        const match = regex.exec(input);

        if (!match) {
            throw new Error("Invalid character at position " + position);
        }

        exp.push(match[1]);
        position = regex.lastIndex;
    }

    return exp;
}
function parse(input) {
    const exp = split(input);
    exp.forEach((value,index) => {console.log(`${index}:${value}`)});
    let pos = 0;

    function peek() {
        return exp[pos];
    }

    function consume() {
        return exp[pos++];
    }

    function expression(minPrecedence = 0) {
        let left;
        const current = consume();

        if (!isNaN(current)) {
            left = { type: "num", value: Number(current) };
        }

        else if (current === "-") {
            left = {
                type: "bin",
                op: "*",
                left: { type: "num", value: -1 },
                right: expression(3)
            };
        }
        else if (/^[a-zA-Z]+$/.test(current)) {
            if (peek() === "\\left(") {
                consume();

                const arg = expression();

                if (consume() !== "\\right)") {
                    throw new Error("Missing closing parenthesis");
                }

                left = { type: "func", name: current, arg };
            } else {
                left = { type: "var", name: current };
            }
        } else if (current === "\\left(") {
            left = expression();
            if (consume() !== "\\right)") {
                throw new Error("Missing closing parenthesis");
            }
        }
        else if (current === "\\left{") {
            left = expression();
            if (consume() !== "\\right}") {
                throw new Error("Missing closing parenthesis");
            }
        }
        else if (current === "\\frac") {
            if (consume() !== "{") {
                throw new Error("Expected '{' after \\frac");
            }
            const numerator = expression();
            if (consume() !== "}") {
                throw new Error("Expected '}' after numerator");
            }
            if (consume() !== "{") {
                throw new Error("Expected '{' before denominator");
            }
            const denominator = expression();
            if (consume() !== "}") {
                throw new Error("Expected '}' after denominator");
            }
            left = { type: "frac", numerator, denominator };
        }
        else {
            throw new Error("Unexpected exp: " + current);
        }
        const precedence = {
            "+": 1,
            "-": 1,
            "\\cdot": 2,
            "^": 4
        };

        while (peek() && precedence[peek()] >= minPrecedence) {
            const op = consume();
            const p = precedence[op];

            const nextMin = op === "^" ? p : p + 1;

            const right = expression(nextMin);

            left = {
                type: "bin",
                op,
                left,
                right
            };
        }

        return left;
    }

    const result = expression();

    if (pos !== exp.length) {
        throw new Error("Unexpected exp: " + peek());
    }

    return result;
}