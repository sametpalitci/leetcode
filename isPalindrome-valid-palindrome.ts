function isPalindrome(s: string): boolean {
    const text = s.split('').filter((val)=>val !== ' ' && (val.toLowerCase() !== val.toUpperCase() || Number.isInteger(Number(val)))).join("").toLowerCase();
    let right = text.length - 1;
    let left = 0;
  
    while(left < right){
      if(text[left] !== text[right]){
        return false;
      }
      ++left;
      --right
    }
    
    return true
  };