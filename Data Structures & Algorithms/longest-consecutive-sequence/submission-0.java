class Solution {
    public int longestConsecutive(int[] nums) {
       HashSet<Integer> numset = new HashSet<>();
       for(int num : nums){
        numset.add(num);
        }
        int longest = 0;
        for(int num : numset){
            if(!numset.contains(num-1)){
                int current = num;
                int streak = 1;
                while(numset.contains(current+1)){
                    current++;
                    streak++;
                }
                longest = Math.max(longest , streak);
            }
        }
       
        return longest;
    }
}
