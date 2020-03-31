var arr = [1,2,3,4,5];

function forEach(arr, cb){
    var copy = [];
    for(var i = 0; i < arr.length ; i++){
        copy.push(cb(arr[i]))
    }
    return copy
}

var output = forEach(arr, function(a){ return a})
console.log(output);


function map(arr, cb){
    var result = [];
    for(var i = 0; i < arr.length ; i++){
       result.push(cb(arr[i]));
    }
    return result
}


var output1 = map(arr, function(a){ return a **2 })
console.log(output1);


function filter(arr, cb){
    var result = [];
    for(var i = 0; i < arr.length; i++){
        if(cb(i) === true){
            result.push(arr[i])
        }
    }
    return result
}

var output2 = filter(arr, function(i){ return i > 1 })
console.log(output2);


function some(arr, cb){
    for(var i = 0; i < arr.length; i++){
        if(cb(i) === true){
            return true
        }
    }
    return false
}

var output3 = some(arr, function(i){ return i > 0})
console.log(output3);


function every(arr, cb){
    for(var i = 0; i < arr.length; i++){
        if(cb(arr[i])  === false){
            return false
        }
    }
    return true
}

var output4 = every(arr, function(a){ return a > 0})
console.log(output4);

var runner = {
    $$runnerId: null,
    $$tasks: [],
    setSpeed: function (speed) {
        this.stop();
        this.start(speed);
    },
    add: function (task) {
        this.$$tasks.push(task);
    },
    start: function (speed) {
        var _this = this;
        this.$$runnerId = setTimeout(function callback() {
            _this.$$tasks.forEach(function () {
                    console.log("Hello")
                    console.log("World")
            })
            _this.$$runnerId = setTimeout(callback, speed);
        }, speed);
    },
    stop: function () {
        clearTimeout(this.$$runnerId);
    }
}

console.log(runner.add());
console.log(runner.start(2000));
