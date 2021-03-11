module.exports = function toReadable (number) {
    const numArr = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(' ');
    const tensArr = "twenty thirty forty fifty sixty seventy eighty ninety".split(' ');
    if (number < 20) return numArr[number];
    let remainder  = number % 10;
    if (number < 100) return tensArr[Math.floor(number/10)-2] + (remainder > 0 ? " " + numArr[remainder] : ""); 
    if (number < 1000) return numArr[Math.floor(number/100)] +" hundred" + (number % 100 === 0 ? "" : " " + toReadable(number % 100));
    return toReadable(Math.floor(number/1000)) + " thousand" + (number % 1000 !== 0 ? " " + toReadable(number % 1000): "");
}


