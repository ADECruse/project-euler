var solution1 = function(input1) {
    var sum = 0;
    for(var i = 0; i < input1; i++) {
        if(i % 3 === 0) {
            sum += i;
        } else if(i % 5 === 0) {
            sum +=i
        }
    } return sum;
};

var input1 = 1000
var answer1 = solution1(input1) 
console.log(answer1)