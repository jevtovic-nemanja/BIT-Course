// Write an arrays of months in a year. Using console.log display June, October and January from array


var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    console.log(months[5], months[9], months[0]);


// Write an arrays of days in a week. Using console.log display Sunday from array


var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    console.log(days[6]);


/*- If the following array is given
[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
What is the index of 24?
Using console log:
    Display 3rd element of array
    Display 2nd element of 3rd element */


var arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
    console.log(arr[0][3]);
    console.log(arr[2]);
    console.log(arr[2][1]);


// Write new array containing January, June, October by referencing elements from the first array.


var months2 = [months[0], months[5], months[9]];
console.log(months2);