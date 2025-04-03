"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

/*
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function extraLongFactorials(n: number): bigint {
  if (n === 1) return BigInt(1);

  return BigInt(n) * extraLongFactorials(n - 1);
}

function main() {
  const n: number = parseInt(readLine().trim(), 10);

  console.log(extraLongFactorials(n).toString());
}
