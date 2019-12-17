
const isPalindrome = (word) => {
    if (word === word.split('').reverse().join('')){
        return true;
    } else {
        return false;
    }
}

module.exports = {isPalindrome};