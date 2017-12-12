// Write a function to hide email address.

// "myemailaddress@bgit.rs" -> "myemail...@bgit.rs"


function hideEmailAddress(address) {
    var domain = "";
    var hiddenAdress = "";
    for (var i = 0; i < address.length; i++) {
        if (address[i] === "@") {
            for (var j = i + 1; j < address.length; j++) {
                domain += address[j];
            }
        }
    }
    hiddenAdress = "myemail...@" + domain;
    return hiddenAdress;
}


console.log(hideEmailAddress("nemanja.jevtovic@gmail.com"));


function hideEmailAddress1(address) {
    var index = address.search("@");
    var result = "myemail..." + address.slice(index, address.length);
    return result;
}


console.log(hideEmailAddress1("nemanja.jevtovic@gmail.com"));