function findCommomPrefix(arr) {
  let arrSize = arr.length;
  let prefix = "";
  
  let i = 0; j = 0;
  let item = arr[i][j];
  let eq;


  while(item != undefined) {
    while(i < arrSize - 1) {
      eq = arr[i + 1][j] == item ? true : false;

      if(!eq)
        break;

      i++;
    }

    if(eq) {
      prefix += item;
    }

    i = 0;
    j++;

    item = arr[i][j];
  }

  return prefix;
}