'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function solveMeFirst(a: number, b: number): number {
    return a + b;
}

function main() {
    const a: number = parseInt(readLine(), 10);
    const b: number = parseInt(readLine(), 10);
    console.log(solveMeFirst(a, b));
}
