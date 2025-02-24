function maxSlidingWindow(nums: number[], k: number): number[] {
  // Vamos usar uma fila dupla (Deque) para armazenar os índices dos elementos na janela
  // A fila vai armazenar os índices em ordem decrescente de valores, garantindo que o
  // maior valor da janela sempre estará no começo da fila.
  let deque: number[] = [];
  let result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    // Passo 1: Remover os elementos da fila que estão fora da janela
    // A janela se move à medida que i aumenta, então devemos garantir que a fila
    // só contenha elementos que estão dentro da janela atual.
    if (deque.length > 0 && deque[0] < i - k + 1) {
      deque.shift(); // Remove o índice que saiu da janela
    }

    // Passo 2: Remover elementos da fila enquanto o elemento atual for maior
    // do que os elementos no final da fila, pois esses elementos nunca serão a
    // resposta quando o número atual for maior.
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop(); // Remove os índices dos elementos menores que o atual
    }

    // Passo 3: Adicionar o índice do elemento atual na fila
    deque.push(i);

    // Passo 4: Se já passamos pelo índice k-1, adicionamos o valor máximo
    // da janela (no início da fila) ao resultado
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

// Exemplos de uso
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // Saída: [3, 3, 5, 5, 6, 7]
console.log(maxSlidingWindow([1], 1)); // Saída: [1]
