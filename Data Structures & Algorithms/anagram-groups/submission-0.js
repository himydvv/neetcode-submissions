class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
         const group = {};
    for(const str of strs){
     const key = str.split('').sort().join('');
     if(!group[key]){
        group[key] = [];
     }
     group[key].push(str);
    }
       return Object.values(group);
    }
}
