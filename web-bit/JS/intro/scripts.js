function navigatorProperties() {
    console.log(navigator.userAgent);
    console.log(navigator.appVersion);
    console.log(navigator.cookieEnabled);
    console.log(navigator.geolocation);
    console.log(navigator.onLine);
    console.log(navigator.platform);
    console.log(navigator.product);
}

function isOnline() {
    if (navigator.onLine) {
        console.log('online');
    } else {
        console.log('offline');
    }
}

function screenProperties() {
    console.log(screen.availHeight);
    console.log(screen.availWidth);
    console.log(screen.height);
    console.log(screen.width);
}

function locationProperties() {
    console.log(location.href);
    console.log(location.hostname);
    console.log(location.port);
    console.log(location.host);
    console.log(location.protocol);
    console.log(location.search);
}

function reloadPage() {
    location.reload();
}

function redirectPage(params) {
    location.replace(params);
}

function toLocalStorage(key, data) {
    localStorage.setItem(key, data);
}

function readLocalStorage(key) {
    var output = localStorage.getItem(key);
    if (!output) {
        console.log("There is no data.")
    } else {
        console.log(output);
    }
}

function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
}

function emptyLocalStorage() {
    localStorage.clear();
}

function moveHistory(string) {
    if (string === "forward") {
        history.go(2);
    } else if (string === "back") {
        history.go(-2);
    } else {
        console.log("Input must be \"forward\" or \"back\".");
    }
}

function interaction() {
    alert("Hello human!");
    var text = prompt("How are you?");
    if (text) {
        var answer = confirm("We will submit this answer now! " + text);
        if (answer) {
            alert("Success!");
        }
    }
}

function accessingDOMElements1() {
    document.getElementsByTagName("ul")[1].className = "second red";
}

function accessingDOMElements2() {
    var li = document.getElementsByTagName("li");
    for (var i = 0; i < li.length; i++) {
        var element = li[i];
        element.className = "green";
    }
}

function accessingDOMElements3() {
    var li = document.querySelectorAll("ul > li");
    li[6].className = "blueUppercase";
    li[7].className = "blueUppercase";
    li[8].className = "blueUppercase";
}

function traversingDom() {
    var li = document.querySelector(".active");
    li.className = "";
    li.parentNode.parentNode.previousSibling.previousSibling.firstChild.nextSibling.firstChild.nextSibling.className = "active";
}


function traversingDom2() {
    var initialElement = document.querySelector(".selected");
    var element = initialElement.parentElement.nextElementSibling.firstElementChild.nextElementSibling;
    initialElement.className = "";
    element.className = "selected";
}

function accessingTextContent() {
    var element = document.querySelectorAll("li")[0].textContent;
    alert(element);
}

function changingTextContent(text) {
    var element = document.querySelectorAll("li")[2].textContent = text;
}

function appendSelect(node, options) {
    var content = "<select>";
    for (var i = 0; i < options.length; i++) {
        var element = options[i];
        content += "<option>" + element + "</option>";
    }
    content += "</select>";
    node.innerHTML += content;
}

function appendSelectDOMManipulation(node, options) {
    var select = document.createElement("select");
    for (var i = 0; i < options.length; i++) {
        var element = options[i];
        var option = document.createElement("option");
        var text = document.createTextNode(element);
        option.appendChild(text);
        select.appendChild(option);
    }
    node.appendChild(select);
}

//var nodeArray = [document.querySelectorAll("div")[0], document.querySelectorAll("div")[1]];
//var optionsArray = [["prva", "druga", "treca"], ["1", "2", "3"]];

function appendSelectArrays(nodeArray, optionsArray) {
    var content1 = "<select>";
    for (var i = 0; i < optionsArray[0].length; i++) {
        var element = optionsArray[0][i];
        content1 += "<option>" + element + "</option>";
    }
    content1 += "</select>";
    var content2 = "<select>";
    for (var j = 0; j < optionsArray[1].length; j++) {
        var element = optionsArray[1][j];
        content2 += "<option>" + element + "</option>";
    }
    content2 += "</select>";
    nodeArray[0].innerHTML += content1;
    nodeArray[1].innerHTML += content2;
}

function appendSelectArraysDOMManipulation(nodeArray, optionsArray) {
    var select1 = document.createElement("select");
    var select2 = document.createElement("select");
    for (var i = 0; i < optionsArray[0].length; i++) {
        var element = optionsArray[0][i];
        var option = document.createElement("option");
        var text = document.createTextNode(element);
        option.appendChild(text);
        select1.appendChild(option);
    }
    for (var j = 0; j < optionsArray[1].length; j++) {
        var element1 = optionsArray[1][j];
        var option1 = document.createElement("option");
        var text1 = document.createTextNode(element1);
        option1.appendChild(text1);
        select2.appendChild(option1);
    }
    nodeArray[0].appendChild(select1);
    nodeArray[1].appendChild(select2);
}

function validate() {
    var inputElements = document.getElementsByTagName("input");
    for (var i = 0; i < inputElements.length; i++) {
        var input = inputElements[i];
        if (input.hasAttribute("required") && input.value === "") {
            input.classList.add("red-border");
        } else {
            input.classList.remove("red-border");
        }
    }
}

function toggleEvent() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.toggle("red");
}

var intervalControl;
function turnOnEventAuto() {
    intervalControl = setInterval(toggleEvent, 500);
}

function turnOff() {
    clearInterval(intervalControl);
}

function toggleEventAuto() {
    if (intervalControl) {
        clearInterval(intervalControl);
    } else {
        intervalControl = setInterval(toggleEvent, 500);
    }
}

function chat() {
    var div = document.getElementById("blank");
    var p = "<p>" + document.getElementById("chat").value + "</p>";
    div.innerHTML += p;
}