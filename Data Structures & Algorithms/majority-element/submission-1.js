class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
         let majorityCount = Math.floor(nums.length / 2);
       
        for (let i =0; i<nums.length;i++){
             let count = 0;
          for(let j=1;j<nums.length;j++){
            if(nums[i]===nums[j]){
                count++

            }

          }
          if(count>majorityCount){
            return nums[i];
          }
        }
    }
}
