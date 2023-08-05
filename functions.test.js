const {
    convertNumbersArray,
    calcMean,
    calcMedian,
    calcMode
} = require('./functions');

describe("Test calcMean", function () {
    it("Calculates the mean if array is 0.", function () { 
      expect(calcMean(0)).toEqual(0)
    })
    it("Calculates the mean of an array", function () { 
      expect(calcMean([3,5,8,12])).toEqual(7)
    })
});

describe("Test calcMedian", function() {
    it("Calculates the median of an even array", function() { 
        expect(findMedian([3,5,8,12])).toEqual(6.5)
    })
    it("Calculates the median of an odd array", function () { 
      expect(findMedian([5,3,8])).toEqual(5)
    })
});

describe("Test calcMode", function () {
    it("Calculates the mode of an array", function () { 
      expect(findMode([3,3,3,5,8,12])).toEqual(3)
    })
});