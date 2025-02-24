function firstMissingPositive(nums: number[]): number {
  const n = nums.length;

  // passo 1: colocar cada numero em seu devido lugar se possivel
  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]]; // swap
    }
  }

  // passo 2: encontrar o primeiro fora do lugar

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  // caso contrario, o proximo numero disponivel é n + 1
  return n + 1;
}

console.log(firstMissingPositive([1, 2, 0]));
console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([7, 8, 9, 11, 12]));
