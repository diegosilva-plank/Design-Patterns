import { TxtFile } from "./File"


export class Prototype {

    public static main = () => {
        
        const hello = new TxtFile({
            name: 'hello', 
            extension: 'c', 
            content: `
            #include <stdio.h>

            int main () {
                printf("Hello world\\n");
            }
            `
        })

        const new_hello = hello.makeCopy()
        new_hello.print()

        new_hello.setExtension('cpp')
        new_hello.setContent(`
            #include <iostream>

            using namespace std;

            int main () {
                cout << "Hello world" << endl;
            }
        `)

        new_hello.print()
        hello.print()
    }
}