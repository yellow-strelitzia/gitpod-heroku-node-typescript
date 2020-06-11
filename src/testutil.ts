export namespace TestUtil {
    export class MainUtil {
        constructor() { }
        public static testMethod() : boolean {
            let intutil = new InternalUtil();
            return true;
        }
    }
    class InternalUtil {
        
    }

    const tslearn1 = () => {

        //primitives
        let num: number;
        let str: string;
        let bool: boolean;

        num = 123;
        num = 123.456;
        //num = '123'; // Error

        str = '123';
        //str = 123; // Error

        // array
        let boolArray: boolean[];

        boolArray = [true, false];
        console.log(boolArray[0]); // true
        console.log(boolArray.length); // 2
        boolArray[1] = true;
        boolArray = [false, false];

        // interface
        interface Name {
            first: string;
            second: string;
        }

        let name: Name;
        name = {
            first: 'John',
            second: 'Doe'
        };
        let name2: Name = {first: 'Mike', second: 'Weng'};

        //name2 = { first: 'John'};// Error : `second` is missing

        // inline
        let nameinline: {
            first: string;
            second: string;
        };
        nameinline = {
            first: 'John',
            second: 'Doe'
        };

        // any
        let power: any;

        // Takes any and all types
        power = '123';
        power = 123;

        // Is compatible with all types
        let num2: number;
        num2 = 1;
        power = num2;
        num2 = power;
        
        let num3: number;
        let str3: string;

        // These literals can be assigned to anything
        num3 = null;
        str3 = undefined;


        const log = (message: string): void => {
            console.log(message);
        }

        // generics

        //function reverse<T>(items: T[]): T[] {
        const reverse = <T>(items : T[]): T[] =>{
            let toreturn = [];
            for (let i = items.length - 1; i >= 0; i--) {
                toreturn.push(items[i]);
            }
            return toreturn;
        }

        var sample = [1, 2, 3];
        var reversed = reverse(sample);
        console.log(reversed); // 3,2,1

        // Safety!
        //reversed[0] = '1';     // Error!
        //reversed = ['1', '2']; // Error!

        reversed[0] = 1;       // Okay
        reversed = [1, 2];     // Okay        

        // union
        const formatCommandline = (command: string[]|string) => {
            let line = '';
            if (typeof command === 'string') {
                line = command.trim();
            } else {
                line = command.join(' ').trim();
            }

            // Do stuff with line: string
        }

        // tuple
        var nameNumber: [string, number];
        // Okay
        nameNumber = ['Jenny', 8675309];
        // Error!
        //nameNumber = ['Jenny', '867-5309'];

        // Alias
        type StrOrNum = string|number;

        // Usage: just like any other notation
        let aliasSample: StrOrNum;
        aliasSample = 123;
        aliasSample = '123';
        // Just checking
        //aliasSample = true; // Error!        

        type Text = string | { text: string };
        type Coordinates = [number, number];
        type Callback = (data: string) => void;

        // cheat sheet
        //https://hoomanb.com/cs/quickref/typescript_cheatsheet.pdf
    }
}

