function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;

  const numSet = new Set(nums);
  let longestStreak = 0;

  for (const num of numSet) {
    // iterar diretamente sobre o Set
    // verifica se é o inicio de uma sequencia
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;
      // continua contanto enquanto o proximo numero estiver no set
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([1, 0, 1, 2]));
