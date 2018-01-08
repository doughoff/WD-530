let nums: number[] = [1, 2, 3, 4, 5, 6, 7];
for (const key in nums) {
    console.log(nums[key]);
}
nums.forEach(element => {
    console.log(element);
});