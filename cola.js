class Cola {
    constructor() {
        this.items = [];
    }

    // agregar (enqueue)
    enqueue(elemento) {
        this.items.push(elemento);
        console.log("Elemento agregado:", elemento);
    }

    // eliminar (dequeue)
    dequeue() {
        if (this.isEmpty()) {
            console.log("La cola está vacía");
            return null;
        }
        const eliminado = this.items.shift();
        console.log("Elemento eliminado:", eliminado);
        return eliminado;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    mostrar() {
        console.log("Cola:", this.items);
    }
}

// EJEMPLO con números
const cola = new Cola();

cola.enqueue(10);
cola.enqueue(20);
cola.enqueue(30);

cola.mostrar();
cola.dequeue();
cola.mostrar();