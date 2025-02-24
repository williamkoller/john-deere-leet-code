function minWindow(s: string, t: string): string {
  if (s.length < t.length) return ''; // Se s for menor que t, não há como encontrar a substring

  const tCount: Record<string, number> = {}; // Contador das ocorrências dos caracteres de t
  const windowCount: Record<string, number> = {}; // Contador das ocorrências dos caracteres da janela atual
  let required = 0; // Número de caracteres únicos de t necessários
  let formed = 0; // Número de caracteres necessários que estão sendo atendidos na janela
  let left = 0; // Posição da extremidade esquerda da janela
  let right = 0; // Posição da extremidade direita da janela
  let ans = [-1, 0, 0]; // [tamanho da janela, início da janela, fim da janela]

  // Preenche o contador de caracteres de t
  for (let char of t) {
    tCount[char] = (tCount[char] || 0) + 1;
  }

  required = Object.keys(tCount).length; // Número de caracteres únicos que precisamos formar

  // Expansão da janela à direita
  while (right < s.length) {
    const char = s[right];
    windowCount[char] = (windowCount[char] || 0) + 1;

    // Se a quantidade de um caractere na janela é igual à que temos em t, incrementamos 'formed'
    if (windowCount[char] === tCount[char]) {
      formed++;
    }

    // Contração da janela à esquerda se todos os caracteres de t foram encontrados
    while (left <= right && formed === required) {
      const [minLen, minStart, minEnd] = ans;

      // Se encontramos uma janela menor que a anterior, atualizamos a resposta
      if (right - left + 1 < minLen || minLen === -1) {
        ans = [right - left + 1, left, right];
      }

      // Tenta contrair a janela movendo o índice 'left' para a direita
      const charToRemove = s[left];
      windowCount[charToRemove]--;
      if (windowCount[charToRemove] < tCount[charToRemove]) {
        formed--; // Perdemos a necessidade de um caractere
      }
      left++; // Mover para a direita
    }

    // Expande a janela à direita
    right++;
  }

  // Se a resposta foi atualizada, retornamos a substring, caso contrário, retornamos ""
  const [len, start, end] = ans;
  return len === -1 ? '' : s.slice(start, end + 1);
}

// Exemplos de teste:
console.log(minWindow('ADOBECODEBANC', 'ABC')); // Saída: "BANC"
console.log(minWindow('a', 'a')); // Saída: "a"
console.log(minWindow('a', 'aa')); // Saída: ""
