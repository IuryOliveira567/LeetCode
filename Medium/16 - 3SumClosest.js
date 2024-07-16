function threeSumClosest(nums, target) {

  let closestSum = [Infinity, Infinity];
  let sum = Infinity;
  let modDistance;

  let i = 0;
  let j = i + 1;
  let k = j + 1;
  
  while(i < nums.length - 2) {
    sum = nums[i] + nums[j] +  nums[k];
    modDistance = Math.abs(target - sum);
   
    if(modDistance < closestSum[1]) {
      closestSum[0] = sum;
      closestSum[1] = modDistance;
    }

    if(k >= nums.length - 1) {
      j++;
      k = j + 1;
    } else if(j >= nums.length) {
      i++;
      j = i + 1;
      k = j + 1;
    } else {
      k++;
    }

    if(j >= nums.length - 1 && k >= nums.length) {
      i++;
      j = i + 1;
      k = j + 1;
    }
  }

  return closestSum[0];
}