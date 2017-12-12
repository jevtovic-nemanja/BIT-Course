// Write a program to find the most frequent item of an array.


function mostFrequentItem(array) {

    const countedItemsObj = array.reduce((items, item) => {
        if (item in items) {
            items[item]++;
        }
        else {
            items[item] = 1;
        }
        return items;
    }, {});

    const countedItemsArray = Object.entries(countedItemsObj);

    let maxCounter = 0;

    countedItemsArray.map(item => {
        if (item[1] > maxCounter) {
            maxCounter = item[1];
        }
    })

    const results = countedItemsArray
        .filter(item => item[1] === maxCounter)
        .map(item => item[0])
        .join(", ");

    return results;
}

console.log(mostFrequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 3]));