// First Solution 88ms !!
// const singleNumber = (nums) => {
//     let memory = new Set();
//     for (const num of nums) {
//         if (memory.has(num)) {
//             memory.delete(num)
//         } else {
//             memory.add(num)
//         }
//     };
//     return [...memory][0]
// }

// singleNumber([4, 1, 2, 1, 2]);


// Second Solution 1024 ms :(
// const singleNumber = (nums) => {
//     let everyCheck = [];
//     let value = 0;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if (j != i) {
//                 if (nums[i] == nums[j]) everyCheck.push(nums[i]);
//             }
//         }
//         if (!everyCheck.includes(nums[i])) {
//             value = nums[i];
//         }
//     };
//     return value;
// };
// singleNumber([4, 1, 2, 1, 2]);