function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const output = new Array(n).fill(1);

  let left = 1;
  for (let i = 0; i < n; i++) {
    output[i] *= left;
    left *= nums[i];
  }

  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= right;
    right *= nums[i];
  }

  return output;
}

console.log([1, 2, 3, 4]);
