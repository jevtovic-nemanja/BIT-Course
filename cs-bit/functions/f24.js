// Write a program to find the most frequent item of an array.


function mostFrequentItem(array) {
    let mostFrequent = 1;

    const countedObj = array.reduce((acc, cur) => {
        cur in acc
            ? (acc[cur]++, mostFrequent = Math.max(mostFrequent, acc[cur]))
            : acc[cur] = 1;
        return acc;
    }, {});

    
    const results = [];

    for (const prop in countedObj) {
        if (countedObj[prop] === mostFrequent) {
            results.push(prop);
        }
    }

    return results;
}

console.log(mostFrequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 3]));