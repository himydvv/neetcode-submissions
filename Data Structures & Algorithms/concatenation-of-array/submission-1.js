class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    
    getConcatenation(nums) {
        let ans=[];
        for(let num of nums){
            ans= nums.concat(nums);

        }
        return ans;
    }
}
