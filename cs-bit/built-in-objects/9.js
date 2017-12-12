// Write a function to hide email addresses to protect from unauthorized user.


function hideEmail(address) {
    var index = address.search("@");
    var result = "..." + address.slice(index, address.length);
    return result;
}

console.log(hideEmail("jevta993@gmail.com"));