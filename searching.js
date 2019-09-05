//1. 
function binarySearch(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
};

// [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]

//8
//1st: value = 8, start = 0, end = 10, index = 5, item = 12, 12 > 8, then recurse
//2nd: value = 8, start = 0, end = 4, index = 2, item = 6, 6 < 8, then recurse
//3rd: value = 8, start = 3, end = 4, index = 3 item = 8 = item == value, return 8 from base case

//16
//1st: value = 16, start = 0, end = 10, index = 5, item = 12, 12 < 16, then recurse
//2nd: value = 16, start = 6, end = 10, index = 8, item = 17, 17 > 16, then recurse
//3rd: value = 16, start = 6, end = 7, index = 6, item = 14, 14 < 16, then recurse
//4th: value = 16, start = 7, end = 7, index = 7, item = 15, 15 < 16, then recurse
//5th: value = 16, start = 8, end = 7 -> base case hit and -1 returned 