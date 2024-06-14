function removeDuplicate(nums) { 
  let i = 0;
  let j = i + 1;

  while(nums[i] == nums[j] || j < nums.length - 1) {
    if(nums[i] == nums[j]) {
      nums.splice(j, 1);
    } else {
      j++;
      i++;
    }
  }

  return nums.length;
}