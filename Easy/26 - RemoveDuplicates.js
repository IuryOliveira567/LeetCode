let list = [2, 4, 5, 7, 11, 2, 5, 21];

function removeDuplicate(nums) {
  let j = 1;
  let length = nums.length;

  for(let i = 0; i < nums.length; i++) {
    while(j < length) {
      let d = nums[j];

      if(i != j && nums[i] == nums[j]) {
        nums.splice(j, 1);
      } else {
        j++;
      }
    }

    j = 0;
  }

  return nums.length;
}

function removeDuplicate2(nums) { 
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