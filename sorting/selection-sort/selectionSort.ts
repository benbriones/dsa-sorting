/** Sort in-place and return sorted array. */

function selectionSort(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    let low = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[low] > nums[j]) {
        low = j;
      }
    }
    if (i !== low) {
      [nums[i], nums[low]] = [nums[low], nums[i]];
    }
  }
  return nums;
}

export { selectionSort };
