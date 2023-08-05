const express = require('express');
const ExpressError = require('./expressError')
const {
    convertNumbersArray,
    calcMean,
    calcMedian,
    calcMode
} = require('./functions');

const app = express();

app.use(express.json());

app.get('/mean', function mean(req, res, next) {
    if(!req.query.nums) {
        throw new ExpressError('A comma-separated list of numbers with the query key of nums is required.', 400)
    }

    let numStrings = req.query.nums.split(',');
    let nums = convertNumbersArray(numStrings);

    if(nums instanceof Error) {
        throw new ExpressError(nums.message, 400);
    }

    let output = {
        operation: "mean",
        value: calcMean(nums)
    }
    return res.send(output);
});

app.get('/median', function median(req, res, next) {
    if(!req.query.nums) {
        throw new ExpressError('A comma-separated list of numbers with the query key of nums is required.', 400)
    }

    let numStrings = req.query.nums.split(',');
    let nums = convertNumbersArray(numStrings);

    if(nums instanceof Error) {
        throw new ExpressError(nums.message, 400);
    }

    let output = {
        operation: "median",
        value: calcMedian(nums)
    }
    return res.send(output);
});

app.get('/mode', function mode(req, res, next) {
    if(!req.query.nums) {
        throw new ExpressError('A comma-separated list of numbers with the query key of nums is required.', 400)
    }

    let numStrings = req.query.nums.split(',');
    let nums = convertNumbersArray(numStrings);

    if(nums instanceof Error) {
        throw new ExpressError(nums.message, 400);
    }

    let output = {
        operation: "mode",
        value: calcMode(nums)
    }
    return res.send(output);
});

app.use((req, res, next) => {
    const e = new ExpressError("Page Not Found", 404)
    next(e)
})

app.use((error, req, res, next) => {
    let status = error.status || 500;
    let msg = error.msg;

    return res.status(status).json({
        error: {msg, status}
    });
});

app.listen(3000, function() {
    console.log('App running on port 3000');
})