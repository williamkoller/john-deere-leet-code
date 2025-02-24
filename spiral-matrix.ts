function spiralOrder(matrix: number[][]): number[] {
  if (!matrix.length || !matrix[0].length) return [];

  const result: number[] = [];
  let top = 0,
    bottom = matrix.length - 1,
    left = 0,
    right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // Percorre a linha superior
    for (let i = left; i <= right; i++) result.push(matrix[top][i]);
    top++;

    // Percorre a coluna direita
    for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
    right--;

    // Percorre a linha inferior (se ainda houver)
    if (top <= bottom) {
      for (let i = right; i >= left; i--) result.push(matrix[bottom][i]);
      bottom--;
    }

    // Percorre a coluna esquerda (se ainda houver)
    if (left <= right) {
      for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);
      left++;
    }
  }

  return result;
}

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
