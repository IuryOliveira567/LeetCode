function maxArea(height) {
  let area = 0;
  let i = 0;
  let j = height.length - 1;
  
  let b = height[i];
  let t = height[j];

  while(i != j && j - 1 >= 0) {
    b = b < height[i + 1] ? height[i + 1] : b;
    j = j < height[j - 1] ? height[j - 1] : j;

    i++;
    j--;
  }

  let smaller = b <= t ? b : t;
  
  return smaller ** 2;
}