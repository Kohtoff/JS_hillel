function isAnagram (wordA, wordB){
    if(wordA.length !== wordB.length){ return false }

    wordA = wordA.toLowerCase()
        .split('').sort().join('');

    wordB = wordB.toLowerCase()
        .split('').sort().join(''); 

    return wordA === wordB;
}

console.log(isAnagram('wowd', 'drow'));  //true
console.log(isAnagram('add', 'dad')); //true
console.log(isAnagram('world', 'drow')); //false
console.log(isAnagram(1, 'drow'));  //Error


