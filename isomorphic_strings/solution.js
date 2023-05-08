/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;
    const mapping = {}; 
    const mapping2 = {};
    for (let i = 0; i < s.length; i++) {
        if(mapping[s[i]]) {
            if(mapping[s[i]] !== t[i]) return false;
        } else mapping[s[i]] = t[i]
        if(mapping2[t[i]]) {
            if(mapping2[t[i]] !== s[i]) return false;
        } else mapping2[t[i]] = s[i]
    }
    return true;
};