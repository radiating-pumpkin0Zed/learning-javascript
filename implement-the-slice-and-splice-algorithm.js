function frankenSplice(arr1, arr2, idx) {
  let new_arr = arr2.slice()
  new_arr.splice(idx, 0, ...arr1)
  return new_arr
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));  // [4, 1, 2, 3, 5, 6] 
console.log(frankenSplice([1, 2], ["a", "b"], 1));  // ["a", 1, 2, "b"]
console.log(frankenSplice([], ["a", "b"], 1));  // ["a", "b"]
console.log(frankenSplice([1, 2, 3], [], 0)); // [1, 2, 3]