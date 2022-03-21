'use strict';

const btnDenmark = document.querySelector("#gen-denmark");
const btnFinland = document.querySelector("#gen-finland");
const btnNorway = document.querySelector("#gen-norway");
const btnPoland = document.querySelector("#gen-poland");
const btnSweden = document.querySelector("#gen-sweden");

const txtDenmark = document.querySelector("#vat-denmark");
const txtFinland = document.querySelector("#vat-finland");
const txtNorway = document.querySelector("#vat-norway");
const txtPoland = document.querySelector("#vat-poland");
const txtSweden = document.querySelector("#vat-sweden");

class App {

    constructor() {
        btnDenmark.addEventListener('click', this.#vatDenmark.bind(this));
        btnFinland.addEventListener('click', this.#vatFinland.bind(this));
        btnNorway.addEventListener('click', this.#vatNorway.bind(this));
        btnPoland.addEventListener('click', this.#vatPoland.bind(this));
        btnSweden.addEventListener('click', this.#vatSweden.bind(this));
    }

    #generateDigit() {
        return Math.floor((Math.random() * 10));
    }

    #vatDenmark() {
        const multiplier = [2, 7, 6, 5, 4, 3, 2];
        let checksum = 10;
        let vatStub = "";
        while (checksum === 10) {
            const stub = Array.from({ length: multiplier.length }, () => this.#generateDigit());
            vatStub = stub.join("");;
            const temp = new Array(multiplier.length);
            for (let i = 0; i < multiplier.length; i++) {
                temp[i] = stub[i] * multiplier[i];
            }
            const sum = temp.reduce((prev, curr) => prev + curr, 0);
            checksum = sum % 11 === 0 ? 0 : 11 - (sum % 11);
        }
        txtDenmark.textContent = vatStub + checksum;
    }

    #vatFinland() {
        const multiplier = [7, 9, 10, 5, 8, 4, 2];
        let checksum = 10;
        let vatStub = "";
        while (checksum === 10) {
            const stub = Array.from({ length: multiplier.length }, () => this.#generateDigit());
            vatStub = stub.join("");;
            const temp = new Array(multiplier.length);
            for (let i = 0; i < multiplier.length; i++) {
                temp[i] = stub[i] * multiplier[i];
            }
            const sum = temp.reduce((prev, curr) => prev + curr, 0);
            checksum = sum % 11 === 0 ? 0 : 11 - (sum % 11);
        }
        txtFinland.textContent = vatStub + checksum;
    }

    #vatNorway() {
        const multiplier = [3, 2, 7, 6, 5, 4, 3, 2];
        let checksum = 10;
        let vatStub = "";
        while (checksum === 10) {
            const stub = Array.from({ length: multiplier.length }, () => this.#generateDigit());
            vatStub = stub.join("");;
            const temp = new Array(multiplier.length);
            for (let i = 0; i < multiplier.length; i++) {
                temp[i] = stub[i] * multiplier[i];
            }
            const sum = temp.reduce((prev, curr) => prev + curr, 0);
            checksum = sum % 11 === 0 ? 0 : 11 - (sum % 11);
        }
        txtNorway.textContent = vatStub + checksum + 'MVA';
    }

    #vatPoland() {
        const multiplier = [6, 5, 7, 2, 3, 4, 5, 6, 7];
        let checksum = 10;
        let vatStub = "";
        while (checksum === 10) {
            const stub = Array.from({ length: multiplier.length }, () => this.#generateDigit());
            vatStub = stub.join("");;
            const temp = new Array(multiplier.length);
            for (let i = 0; i < multiplier.length; i++) {
                temp[i] = stub[i] * multiplier[i];
            }
            const sum = temp.reduce((prev, curr) => prev + curr, 0);
            checksum = sum % 11;
        }
        txtPoland.textContent = vatStub + checksum;
    }

    #vatSweden() {
        const multiplier = [2, 1, 2, 1, 2, 1, 2, 1, 2];
        let checksum = 10;
        let vatStub = "";
        const stub = Array.from({ length: multiplier.length }, () => this.#generateDigit());
        vatStub = stub.join("");;
        const temp = new Array(multiplier.length);
        for (let i = 0; i < multiplier.length; i++) {
            temp[i] = stub[i] * multiplier[i];
        }
        const temp2 = temp.map((i) => i > 9 ? i % 10 + 1 : i);
        const sum = temp2.reduce((prev, curr) => prev + curr, 0);
        checksum = sum % 10 === 0 ? 0 : 10 - (sum % 10);
        txtSweden.textContent = vatStub + checksum + '01';
    }
}

new App();
