// Write a program to find the most frequent item of an array.


function mostFrequentItem(array) {
    let maxFrequency = 1;

    const countedItemsObj = array.reduce((items, item) => {
        if (item in items) {
            items[item]++;
            maxFrequency = items[item] > maxFrequency ? items[item] : maxFrequency;
        }
        else {
            items[item] = 1;
        }
        return items;
    }, {});
    
    let results = [];

    for (const prop in countedItemsObj) {
        if (countedItemsObj[prop] === maxFrequency) {
            results.push(prop);
        }
    }

    return results;
}

console.log(mostFrequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 3]));