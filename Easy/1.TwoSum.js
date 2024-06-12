function twoSum(nums, target) {
  for(let pos = 0; pos < nums.length; pos++) {
    let currPos = pos + 1;
    
    while(currPos < nums.length) {
      let sum = nums[pos] + nums[currPos];
      
      if(sum == target) {
        return [pos, currPos];
      }

      currPos++;
    }
  }
}