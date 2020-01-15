import { isEven, identity, IHaveAMessage } from './utils';

describe('array methods', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    it('checking the membership of an array', () => {
        const allEvens = numbers.every(isEven);
        console.log(allEvens);
        expect(allEvens).toBe(false);

        const someEven = numbers.some(isEven);
        expect(someEven).toBe(true);
    });

    it('visiting every number of  an array', () => {
        let total = 0;
        numbers.forEach(n => total += n);
        expect(total).toBe(45);
    });

    describe('array methods that create new array ', () => {
        it('should behave ', () => {
            function doubleIt(n: number) {
                return n + n;
            }
            const doubled = numbers.map(doubleIt);

            expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
            expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
            const dup = numbers.map(identity);
        });

        it('has a filter', () => {
            const evens = numbers.filter(isEven);
            expect(evens).toEqual([2, 4, 6, 8]);
        });

        it('using reduce', () => {
            let total = numbers.reduce((s, n) => s + n);
            expect(total).toBe(45);
            total = numbers.reduce((s, n) => s + n, 100);
            expect(total).toBe(145);
        });
    });



});

describe('an example', () => {
    it('the example', () => {
        // given a cart
        interface Cartitem {
            description: string;
            qty: number;
            price: number;
        }
        const cart: Cartitem[] = [
            { description: 'Eggs', qty: 3, price: 2.37 },
            { description: 'Breads', qty: 2, price: 3.50 },
            { description: 'Beer', qty: 6, price: 7.50 }
        ];

        interface ShippingInfo {
            totalQty: number;
            totalPrice: number;
        }

        const starter: ShippingInfo = {
            totalQty: 0,
            totalPrice: 0
        };

        //                 numbers.reduce((s, n) => s + n, 100);
        //   here 100 is replaced with starter values
        const result = cart.reduce((s: ShippingInfo, n: Cartitem) => {
            return {
                totalQty: s.totalQty += n.qty,
                totalPrice: s.totalPrice += n.price
            };
        }, starter);

        expect(result.totalPrice).toBeCloseTo(13.37);
        expect(result.totalQty).toBe(11);


    });
});

describe('structural typing', () => {
    it('an exmaple', () => {

        function logIt(thingy: IHaveAMessage): void {
            console.log('message: ' + thingy.message + ' from: ' + thingy.from);
        }

        const call = {
            from: 'Mom',
            message: 'call me.',
            time: '4:00 PM'
        };

        logIt(call);




    });
});


describe('two loops you muight use but probably wont', () => {
    it('for in  loop', () => {
        // dont dont that in loops array enumarate as string
        // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        // let total = 0;
        // for (const num in numbers) {
        //     total += num;
        // }
        // expect(total).toBe(45);

        // for loop is enumerate the properties of the object
        const book = {
            title: 'Hyperobjects',
            author: 'Morton'
        };
        // tslint:disable-next-line: forin
        for (const prop in book) {
            console.log(`Book's ${prop} is ${book[prop]}`);
        }
    });

    it('for of loop', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let total = 0;
        for (const n of numbers) {
            total += n;
        }
        expect(total).toBe(45);

    });
});
