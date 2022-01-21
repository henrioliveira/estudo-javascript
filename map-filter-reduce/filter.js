function filtraPares (arr){
    return arr.filter(callback);
}

function callback (item) {
    return item % 2 !== 0;
}

const nums = [11, 55, 98, 105, 200, 206];

console.log(filtraPares(nums))