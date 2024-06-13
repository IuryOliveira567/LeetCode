function searchInsert(arr, target) {
  let x;

  for(x = 0; x < arr.length; x++) {
    if(arr[x] < target && arr[x + 1] > target) {
      return x + 1;
    } else if(arr[x] == target || arr[x] > target) {
      return x;
    }
  }

  return x;
}