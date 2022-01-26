export class Hero {
    constructor(name, description = '') {
        if(typeof name !== 'string' || name.length === 0 || typeof description !== 'string') {
            throw new Error('Invalid parameters');
        }
        this.name = name;
        this.description = description;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }
}