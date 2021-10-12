
export class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet(name: string): void {
        document.write(`Hi, ${name}!`);
    }
} 