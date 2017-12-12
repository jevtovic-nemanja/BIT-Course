const buttonL = document.querySelector("#buttonL");
const buttonS = document.querySelector("#buttonS");

buttonL.addEventListener("click", () => {
    let countL = localStorage.getItem("count");
    if (!countL) {
        countL = 0;
    }
    countL++;
    localStorage.setItem("count", countL);
    buttonL.textContent = countL;
})

buttonS.addEventListener("click", () => {
    let countS = sessionStorage.getItem("count");
    if (!countS) {
        countS = 0;
    }
    countS++;
    sessionStorage.setItem("count", countS);
    buttonS.textContent = countS;
})