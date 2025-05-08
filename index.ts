function formatString(input: string, toUpper?: boolean): string {
    if (toUpper !== false) {
        return input.toUpperCase();
    }
    return input.toLowerCase();
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter((item) => item.rating >= 4)
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    const newArray: T[] = [];
    for (const arr of arrays) {
        newArray.push(...arr)
    }
    return newArray
}

class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year)
        this.model = model;
    }

    getModel(): string {
        return `Model: ${this.model}`
    }
}

function processValue(value: string | number): number {
    if (typeof value === 'string') {
        return value.length
    }
    return value * 2
}

interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;
    return products.reduce((heightPriceProduct, product) => {
        return product.price > heightPriceProduct.price ? product : heightPriceProduct
    })
}

const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend"
    } else {
        return "Weekday"
    }
}

async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if (n > 0) {
            setTimeout(() => {
                resolve(n * n)
            }, 1000);
        } else {
            reject(new Error("Negative number not allowed"))
        }
    })
}




