function searchRange(nums, target) {
  let positions = [-1, -1];
  let i = 0;
  let j = nums.length - 1;

  while(i < j) {
    let iN = nums[i];
    let jN = nums[j];

    if(iN >= target) {
      if(iN == target && positions[0] == -1) {
        positions[0] = i;
      }
    }

    if(jN == target && positions[1] == -1) {
      positions[1] = j;
    }

    j = positions[1] != -1 ? j : j - 1;
    i++;
  }

  return positions;
}