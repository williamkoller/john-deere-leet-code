function gameOfLife(board: number[][]): void {
  if (!board || !board[0]) return;

  const m = board.length;
  const n = board[0].length;

  const countLiveNeighbors = (i: number, j: number): number => {
    const directions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];
    let count = 0;
    for (const [di, dj] of directions) {
      const ni = i + di,
        nj = j + dj;
      if (
        ni >= 0 &&
        ni < m &&
        nj >= 0 &&
        nj < n &&
        Math.abs(board[ni][nj]) === 1
      ) {
        count++;
      }
    }
    return count;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const liveNeighbors = countLiveNeighbors(i, j);
      if (board[i][j] === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
        board[i][j] = -1;
      }
      if (board[i][j] === 0 && liveNeighbors === 3) {
        board[i][j] = 2;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === -1) {
        board[i][j] = 0;
      } else if (board[i][j] === 2) {
        board[i][j] = 1;
      }
    }
  }
}

const board = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
];

gameOfLife(board);
console.log(board);