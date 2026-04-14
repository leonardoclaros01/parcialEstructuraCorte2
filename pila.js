class Pila {
    constructor() {
        this.items = [];
    }

    // agregar
    push(elemento) {
        this.items.push(elemento);
        console.log("Elemento agregado:", elemento);
    }

    // eliminar 
    pop() {
        if (this.isEmpty()) {
            console.log("La pila está vacía");
            return null;
        }
        const eliminado = this.items.pop();
        console.log("Elemento eliminado:", eliminado);
        return eliminado;
    }

    // ver cima
    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    mostrar() {
        console.log("Pila:", this.items);
    }
}

// EJEMPLOS
const pila = new Pila();

pila.push({ Nombre: "Orlando", Edad: 30 });
pila.push({ Nombre: "Maria", Edad: 25 });

pila.mostrar();
pila.pop();
pila.mostrar();
