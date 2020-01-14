describe('describing varialbes ', () => {
    it('an example', () => {
        const name = 'Bob';
        expect(name).toBe('Bob');
    });
    it('what happened above?', () => {
        const name = 'Carl';
    });
    it('declaring a variable with let', () => {
        let age: number | string;
        age = 50;
        age = 51;
        age = 'old';

        let x: any;
        x = 10;
        x = 'dog';
        x = [];
        // any will not be in complain by compiler
        function add(a: any, b: any) {
            return a + b;
        }
    });
    it('initiating a variable defines (infers) the type', () => {
        let name = 'Bob';
        name = 'Steve';
        name = 'Kara';
        // name = 1138; // Error it is inferred to be a string because we created it that way.

    });
    describe('a bit about strings', () => {
        it('can be delimited with single or double', () => {
            const name = 'Bob';
            // tslint:disable-next-line: quotemark
            expect(name).toBe('Bob');

            const story = 'she said "Hello! How is your day going ?" on the way out the door.';
            // tslint:disable-next-line: quotemark
            const author = "Flannery O'Connor";
            const author2 = 'Flannery O\'Conner';

        });
        it('string literals - interpreted strings', () => {
            const name = `Bob`;
            expect(name).toBe('Bob');
            const story = `Chapter 1
            it is was a dark and story night.
            the End`;
            const age = 27;
            const message = 'The name is ' + name + ' and the age is ' + age + '.';
            const message2 = `The name is ${name} and the age is ${age}.`;
            expect(message).toBe(message2);


            const newElement = `<dive>
            <h2>${name} is ${age}</h2>
            <dive>`;
            // string thing = $"the name is {name} and the age is {age}";




        });
    });
    it('const - be careful', () => {
        // always assign a value to the const
        const x = 14;
        // x = 12;
        const favoriteNumbers = [2, 4, 9, 10];
        favoriteNumbers[2] = 10;

        const movie = {
            title: 'the Rie of skywalker',
            yearReleased: 2020
        };
        movie.yearReleased = 2019;



    });

    describe('various types', () => {
        it('number literals', () => {
            const bigNumber = 123_456_789.30;
            const color = 0xFF;
            const permission = 0o33;
            const binary = 0b1010101;

        });
        describe('array destructuring and tuples', () => {
            it('array destructuring ', () => {
                const freinds = ['David', 'Sean', 'Amy'];
                const first = freinds[0];
                const last = freinds[2];
                expect(first).toBe('David');
                expect(last).toBe('Amy');

                const [first2, , last2] = freinds;
                expect(first2).toBe('David');
                expect(last2).toBe('Amy');


            });

            it('using destructing with rest', () => {
                const todos = ['Clean Garage', 'Fix tire', 'mop Floors'];
                const [next, ...others] = todos;
                expect(next).toBe('Clean Garage');
                expect(others).toEqual(['Fix tire', 'mop Floors']);
            });

            it('tuples - basic example', () => {
                let stuff: [boolean, number];
                stuff = [true, 140];
            });

            it('type aliases', () => {
                type ThingsWithLetterAndJunk = string;
                let name: ThingsWithLetterAndJunk;

                type ArtistNameAndAge = [string, string, number];
                let warren: ArtistNameAndAge;
                warren = ['Warren', 'Ellis', 53];
            });

            it('an oop example', () => {
                interface NameResult { fullName: string; length: number; }
                function formatName(first: string, last: string): NameResult {
                    const fullName = `${last}, ${first}`;
                    return {
                        fullName,
                        length: fullName.length
                    };
                }

                const answer = formatName('Han', 'Solo');
                expect(answer.fullName).toBe('Solo, Han');
                expect(answer.length).toBe(9);

            });

            it('a tuple exmaple', () => {
                type NameResult = [string, number];
                function formatName(first: string, last: string): NameResult {
                    const fn = `${last}, ${first}`;
                    return [fn, fn.length];
                }
                const [fullName, length] = formatName('Luke', 'Skywalker');
                expect(fullName).toBe('Skywalker, Luke');
                expect(length).toBe(15);

            });

        });
    });
    describe('enums and union constants', () => {
        enum SeatType { window, aisle, middle }
        function getSeatForticket(ticketNumber: number): SeatType {
            if (ticketNumber % 2 === 0) {
                return SeatType.window;
            } else {
                return SeatType.aisle;
            }
        }
        it('a truth table', () => {
            expect(true).toBeTruthy();
            expect(false).toBeFalsy();
            expect('').toBeFalsy();
            expect(' ').toBeTruthy();
            expect(undefined).toBeFalsy();
            expect(null).toBeFalsy();
            expect(0).toBeFalsy();
            expect(1).toBeTruthy();
            // this means if you use one of these as a predicate in an if statement, you will get either true or false.
            // e.g.
            if ('tacos') {
                // it is true!
            }

        });
        it('using enums', () => {
            const getMySeat = getSeatForticket(108);
            let cost = 0;
            switch (getMySeat) {
                case SeatType.window: {
                    cost = 100;
                    break;
                }
                case SeatType.aisle: {
                    cost = 150;
                    break;
                }
                case SeatType.middle: {
                    cost = 75;
                    break;
                }
                default: {
                    // some other thing
                }
            }
            expect(cost).toBe(100);
        });
    });

});
