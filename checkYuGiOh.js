function checkYuGiOh(num) {
  let nums = Array.from({ length: num }, (_, i) => i + 1);
  let results = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0 && nums[i] % 3 === 0 && nums[i] % 5 === 0) {
      results.push("yu-gi-oh");
    } else if (nums[i] % 2 === 0 && nums[i] % 3 === 0) {
      results.push("yu-gi");
    } else if (nums[i] % 2 === 0 && nums[i] % 5 === 0) {
      results.push("yu-oh");
    } else if (nums[i] % 3 === 0 && nums[i] % 5 === 0) {
      results.push("gi-oh");
    } else if (nums[i] % 2 === 0) {
      results.push("yu");
    } else if (nums[i] % 3 === 0) {
      results.push("gi");
    } else if (nums[i] % 5 === 0) {
      results.push("oh");
    } else {
      results.push(nums[i]);
    }
  }

  return results;
}

checkYuGiOh(10);
