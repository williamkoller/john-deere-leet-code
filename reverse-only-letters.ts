function reverseOnlyLetters(s: string): string {
  const arr = s.split('');
  let left = 0;
  let right = arr.length - 1;

  // Usar dois ponteiros para reverter as letras
  while (left < right) {
    // Verificar se ambos os ponteiros apontam para letras
    if (isLetter(arr[left]) && isLetter(arr[right])) {
      // Trocar as letras
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    } else {
      // Se algum dos ponteiros não for uma letra, mover o ponteiro correspondente
      if (!isLetter(arr[left])) left++;
      if (!isLetter(arr[right])) right--;
    }
  }

  return arr.join('');
}

// Função auxiliar para verificar se o caractere é uma letra
function isLetter(char: string): boolean {
  return /^[a-zA-Z]$/.test(char);
}

// Exemplo de uso:
const s = 'ab-cd';
console.log(reverseOnlyLetters(s)); // Saída: "dc-ba"
