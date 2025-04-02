"use strict";

import { WriteStream, createWriteStream } from "fs";
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
 * Complete the 'encryption' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function encryption(s: string): string {
  // Write your code here
  
  const charsArray = s.replace(/\s/g, "").split("");

  let rows = Math.floor(Math.sqrt(charsArray.length));
  const cols = Math.ceil(Math.sqrt(charsArray.length));

  if (rows * cols < charsArray.length) rows++;

  const grid = [];

  for (let i = 0; i < rows; i++) {
    const rowArray = [];

    for (let j = 0; j < cols; j++) {
      if (charsArray.length > 0) rowArray.push(charsArray.shift());
    }

    grid.push(rowArray);
  }

  let encryptedText = "";

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[j][i]) encryptedText += grid[j][i];
    }

    encryptedText += " ";
  }

  return encryptedText;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const s: string = readLine();

  const result: string = encryption(s);

  ws.write(result + "\n");

  ws.end();
}
