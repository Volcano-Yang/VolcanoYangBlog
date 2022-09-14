/**
 * @param {number[]} nums
 * @return {number}
 */
 let removeDuplicates = function(nums:number[]) {
    if(nums.length === 0)
    return 0;

    let slow = 0;

    for(let fast = 0; fast < nums.length; fast++){
        if(nums[slow] !== nums[fast]){
            slow++;
            nums[slow] = nums[fast];
        }
    }

    return slow+1;   
};


removeDuplicates([0,0,1,1,1,2,2,3,3,4])