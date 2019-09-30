// console.log('test');

// let test = [231, 72, 13, 60, 199, 56];
// let test2 = [231, 72, 13, 60, 199, 56];
// let test3 = [52, 12, 64, 32];

export const currentArray = (input, current) => {
    let indexes = [];
    input.forEach(el => {
        indexes.push(current.indexOf(el));
    });

    indexes.sort();

    for (let i = 0; i < input.length; i++) {
        current.splice(indexes[i], 1, input[i]);
    }
    return current;
};

// Recursive function

export const mergeSort = (array, half = array.length / 2) => {
    if (array.length < 2) {
        return array;
        // it means we no longer divide the array
        // into smaller chunks
    }

    const left = array.splice(0, half); //left part of  the array

    return merger(mergeSort(left), mergeSort(array));
};

export const merger = (left, right) => {
    const arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            //console.log(left[0]);
            arr.push(left.shift()); // remove from the left part and push into
            //the sorted array
        } else {
            //console.log(right[0]);
            arr.push(right.shift()); // remove from the right part and push into
            //the sorted array
        }
    }
    //console.log([...arr, ...left, ...right]);

    let result = [...arr, ...left, ...right];
    //console.log(currentArray(result, test2));
    return result;
};

// console.log(test);
// mergeSort(test);
