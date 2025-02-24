function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number {
  const map = new Map<number, number>();

  for (const n1 of nums1) {
    for (const n2 of nums2) {
      map.set(n1 + n2, (map.get(n1 + n2) || 0) + 1);
    }
  }

  let count = 0;
  for (const n3 of nums3) {
    for (const n4 of nums4) {
      count += map.get(-n3 - n4) || 0;
    }
  }

  return count;
}

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]));