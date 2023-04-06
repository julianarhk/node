function firstFunction() {
    console.log('First function called.');
}

function secondFunction() {
    console.log('Second function called.');
}

setTimeout(firstFunction, 0);
setImmediate(secondFunction);
