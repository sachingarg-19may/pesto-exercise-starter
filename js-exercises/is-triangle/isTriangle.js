function isTriangle(...args) {
  var nums = args.sort().map(c => c * c);
  return nums[2] === (nums[1] + nums[0]);
}

export {
  isTriangle,
};
