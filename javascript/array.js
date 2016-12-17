function listNames(array, arrow) {
  for (index = 0; index < array.length; index++){
    console.log(index + arrow + array[index]);
  }
}

listNames(["James", "Jill", "Jane"], "=>")