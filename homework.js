// -------------1-------------

function moveCapitalLetters(word) {
    return word.replace(/[^A-Z]/g, '') + word.replace(/([^a-z])/g, '');
}

const word = "hApPy";
console.log(moveCapitalLetters(word));

//   --------------2-------------------
function sort(arr, str) {
    if (str === "Asc") {
        return arr.slice().sort((a, b) => a - b);
    } else if (str === "Des") {
        return arr.slice().sort((a, b) => b - a);
    } else if (str === "None") {
        return arr;
    }
}
const arr = [4, 3, 2, 1];
const type = "None";
console.log(sort(arr, type));
//   -----------------3-------------------
function times(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * i;
    }

    return sum;
}

const array = [1, 2, 3, 4, 5];
console.log(times(array));
//   ---------------4------------------




// --------------------5----------------
function cheke(isno) {
    return typeof isno === 'object' && isno !== null||typeof isno==='function'
}

console.log(cheke(function add(x, y) {
    return x + y
}));
console.log(cheke(null));

