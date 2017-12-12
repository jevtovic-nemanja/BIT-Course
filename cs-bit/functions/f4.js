// Write a function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 -> 1st
// 11 -> 11th


function humanize(n) {
    var result = "";
    if ((typeof n) === "undefined") {
        return;
    }
    if ((n % 100) >= 11 && (n % 100) <= 13) {
        result = n + "th";
    } else if ((n % 10) === 1) {
        result = n + "st";
    } else if ((n % 10) === 2) {
        result = n + "nd";
    } else if ((n % 10) === 3) {
        result = n + "rd";
    } else {
        result = n + "th";
    }
    return result;
}


console.log(humanize(111));