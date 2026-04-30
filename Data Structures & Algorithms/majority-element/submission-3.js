class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
         let majorityCount = Math.floor(nums.length / 2);
       let counts = {};
        for (let i =0; i<nums.length;i++){
           let num = nums[i];
           counts[num] = (counts[num] || 0)+1;


           if(counts[num]>majorityCount){
            return num;
           }
         

            

        }
    }
}
