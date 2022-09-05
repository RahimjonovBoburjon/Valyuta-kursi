// SETUP 1
const inputs = document.querySelector(".inputs");
const equl = document.querySelector(".equl");
// SETUP 2
inputs.addEventListener("input", () => console.log(inputs.value));
// SETUP 3
const select = document.querySelector("#select");
select.addEventListener("change", () => console.log(select.value));
// SETUP 4
select.addEventListener("click", myCalc);
// SETUP 5
function myCalc() {
    if (select.value == 'dollor') {
        equl.value = (+inputs.value / 10920);
    } else if (select.value == 'evro') {
        equl.value = (+inputs.value / 11052);
    } else if (select.value == 'rubl') {
        equl.value = (+inputs.value / 177);
    } else if (select.value == 'yuan') {
        equl.value = (+inputs.value / 1628);
    } else {
        equl.value = (0);
    }
};