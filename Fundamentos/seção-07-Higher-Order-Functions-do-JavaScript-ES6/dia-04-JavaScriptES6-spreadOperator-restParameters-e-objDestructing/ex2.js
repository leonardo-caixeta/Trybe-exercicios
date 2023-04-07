const sum = (...number) => number.reduce((total, currNum) => total += currNum, 0);


console.log(sum(4, 5, 6));