function receivesAFunction(fn) {
    console.log(fn());
}
receivesAFunction(function () {return "i am a callback function"})


function returnsANamedFunction() {
    return returnsANamedFunction
}
returnsANamedFunction();

function returnsAnAnonymousFunction() {
    return function () {};
}
returnsAnAnonymousFunction();