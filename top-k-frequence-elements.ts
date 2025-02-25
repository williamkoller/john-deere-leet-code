function topKFrequent(nums: number[], k: number): number[] {
  const freqMap: Map<number, number> = new Map();

  // Contar as frequências dos números
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Ordenar os números com base nas suas frequências em ordem decrescente
  const sortedByFrequency = Array.from(freqMap.entries()).sort(
    (a, b) => b[1] - a[1]
  );

  // Retornar os K elementos mais frequentes
  return sortedByFrequency.slice(0, k).map((entry) => entry[0]);
}

// Exemplo de uso:
const nums = [1, 1, 1, 2, 2, 3];
const k = 2;
console.log(topKFrequent(nums, k)); // Saída: [1, 2]
