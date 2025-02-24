// nums = [1,3,4,2,2]
// output: 2

function findDuplicate(nums: number[]): number {
  // encontrando o ponto de interseção no ciclo
  let slow = nums[0];
  let fast = nums[0];

  // o laço vai continuar até que o slow e fast se encontre,
  while (true) {
    slow = nums[slow]; // slow move um passo de cada vez
    fast = nums[nums[fast]]; // fast move dois passos de cada vez

    if (slow === fast) break; // quando se encontrare, há um ciclo
  }

  // encontrando a entrada do ciclo (numero duplicado)
  slow = nums[0]; // reset o slow para o inicio do array

  while (slow !== fast) {
    slow = nums[slow]; // amnos os ponteiros se move a um passo de cada vez
    fast = nums[fast];
  }

  return slow; // o ponto de encontro é o numero duplicado
}

console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2]));
console.log(findDuplicate([3, 3, 3, 3, 3]));
