import { add } from '../src/math';

describe('Functions', () => {
    describe('declaring them ', () => {
        it('has about three different wyas to do it', () => {


            // 1. Named Function
            // tslint:disable-next-line: no-shadowed-variable
            function add(a: number, b: number) {
                return a + b;
            }

            // 2. Anonymous function
            const subtract = function (a: number, b: number) {
                return a - b;
            };

            const multiply = (a: number, b: number) => a * b;

            expect(add(2, 2)).toBe(4);
            expect(subtract(10, 2)).toBe(8);
            expect(multiply(3, 3)).toBe(9);


        });
        it('details of arrow functions', () => {
            const getMessage = () => 'Howdy!';
            expect(getMessage()).toBe('Howdy!');

            const logIt = (message: string) => {
                console.log(message);
                return 'Logged It';
            };

            expect(logIt('Pizza')).toBe('Logged It');
        });
        describe('arguments to functions', () => {
            it('does not have overloading ', () => {
                function formatName(first: string, last: string, mi?: string) {
                    let firstPart = `${last}, ${first}`;
                    if (mi) {
                        firstPart += ` ${mi}.`;
                    }
                    return firstPart;
                }

                expect(formatName('Han', 'Solo')).toBe('Solo, Han');
                expect(formatName('Han', 'Solo', 'D')).toBe('Solo, Han D.');
            });
            it('default values for parameters', () => {
                // tslint:disable-next-line: no-shadowed-variable
                function add(a: number = 15, b: number = 10) {
                    return a + b;
                }

                expect(add(2, 2)).toBe(4);
                expect(add(12)).toBe(22);
                expect(add(undefined, 12)).toBe(27);

            });

            it('you can use that rest operator thing ', () => {
                // tslint:disable-next-line: no-shadowed-variable
                function add(a: number, b: number, ...rest: number[]) {
                    const firsttwo = a + b;
                    return rest.reduce((s, n) => s + n, firsttwo);
                }

                expect(add(2, 2)).toBe(4);
                expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
            });
        });
    });

    describe('higher order function', () => {
        // A function that takes one or more arguments that are fucntions and / or
        // return a function
        it('the basic syntax', () => {
            type StringModifier = (msg: string) => string;
            function logItOut(message: string, f: StringModifier) {
                console.log(`At ${new Date().toISOString()}: ${f(message)}`);
            }
            logItOut('Tacos!!!', (s: string) => s.toUpperCase());

            function decorate(x: string) {
                return `***${x}***`;
            }
            logItOut('Burrito', decorate);
        });


    });

    it('type assertions', () => {
        let x: any;

        x = 'Tacos';

        // expect(x.howlong).toBe(5);

        const y = x as string;

        expect(y.length).toBe(5);

        // tslint:disable-next-line: no-angle-bracket-type-assertion
        const z = <string>x;

        expect((x as string).length).toBe(5);
    });

    it('the basic syntax', () => {

        function logItOut(message: string) {
            console.log(`At ${new Date().toISOString()}: ${message}`);
        }

        logItOut('Tacos!!!');
    });

    describe('higher order functions', () => {
        // A function that takes one or more arguments that are functions and/or
        // return a function
        it('the basic syntax', () => {

            type StringModifier = (msg: string) => string;
            function logItOut(message: string, f: StringModifier) {
                console.log(`At ${new Date().toISOString()}: ${f(message)}`);
            }

            logItOut('Tacos', (s: string) => s.toUpperCase());

            function decorate(x: string) {
                return `***${x}***`;
            }

            logItOut('Burrito', decorate);
        });

        describe('HOF that returns a function', () => {
            it('with just a normal ', () => {
                // <element>content</element>
                function tagMaker(element: string, content: string) {
                    return `<${element}>${content}</${element}>`;
                }
                expect(tagMaker('customer', 'Bob Smith')).toBe('<customer>Bob Smith</customer>');
                expect(tagMaker('customer', 'Sue Jones')).toBe('<customer>Sue Jones</customer>');
            });

            it('oop version', () => {
                class TagMaker {
                    private element: string;
                    constructor(element: string) {
                        this.element = element;
                    }
                    make(content: string) {
                        return `<${this.element}>${content}</${this.element}>`;
                    }
                }

                const customerMaker = new TagMaker('customer');
                expect(customerMaker.make('Bob Smith')).toBe('<customer>Bob Smith</customer>');
            });

            it('how a functional programmer would do it.', () => {
                function tagMaker(element: string) {
                    return (content: string) => `<${element}>${content}</${element}>`;
                }
                const customerMaker = tagMaker('customer');
                expect(customerMaker('Bob Smith')).toBe('<customer>Bob Smith</customer>');
            });

        });



    });
