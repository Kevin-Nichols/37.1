// Try to convert an array of strings to array of numbers.
function convertNumbersArray(stringsArray) {
    let res = [];

    for(let i = 0; i < stringsArray.length; i++) {
        let convertedVal = Number(stringsArray[i]);

        if (Number.isNaN(convertedVal)) {
            return new Error(`Value '${stringsArray[i]}' is not a number.`);
        }
        res.push(convertedVal);
    }
    return res;
}

//Calculate the mean.
function calcMean(nums) {
    if(nums.length < 1) return 0;
    return nums.reduce((accum, curVal) => {
        return accum + curVal 
    }) / nums.length
}

//Calculate the median.
function calcMedian(nums) {
    let concat = nums.sort(function (a, b) { return a - b });

    let length = concat.length;

    if(length % 2 == 1) {
        return concat[(length / 2) - .5]
    } else {
        return (concat[length / 2] + concat[(length / 2) - 1]) / 2;
    }
}

//Count the objects in an array.
function makeCounter(arr) {
    return arr.reduce(function(accum, next) {
        accum[next] = (accum[next] || 0) + 1;
        return accum;
    }, {});
}

//Calculate the mode.
function calcMode(arr) {
    let counter = makeCounter(arr);
    let count = 0;
    let mode;

    for(let key in counter) {
        if(counter[key] > count) {
            mode = key;
            count = counter[key];
        }
    }
    return +mode;
}

module.exports = {
    convertNumbersArray,
    calcMean,
    calcMedian,
    makeCounter,
    calcMode
};