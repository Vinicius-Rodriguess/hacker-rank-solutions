function chiefHopper(arr: number[]): number {
  // Write your code here

  let energia = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    energia = Math.ceil((energia + arr[i]) / 2);
  }

  return energia;
}

console.log(chiefHopper([3, 4, 3, 2, 4]));
