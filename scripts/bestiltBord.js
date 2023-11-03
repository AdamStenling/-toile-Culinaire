let valgtDato = localStorage.getItem("valgtDato");
let valgtTid = localStorage.getItem("valgtTid");
let antallGjester = localStorage.getItem("antallGjester");
let valgtMåned = localStorage.getItem("valgtMåned");
let valgtÅr = localStorage.getItem("valgtÅr");
let valgtUkedagBokstaver = localStorage.getItem("valgtUkedagBokstaver")

document.querySelector('.js-valgt-ukedag').innerHTML = valgtUkedagBokstaver
document.querySelector('.js-valgt-dato').innerHTML = `${valgtDato}.`;
document.querySelector('.js-valgt-tid').innerHTML = valgtTid;
document.querySelector('.js-valgt-år').innerHTML = valgtÅr;

if (antallGjester > 1) {
    document.querySelector('.js-antall-gjester').innerHTML = `${antallGjester} gjester`;
} 
else {
    document.querySelector('.js-antall-gjester').innerHTML = `${antallGjester} gjest`;
}
document.querySelector('.js-valgt-måned').innerHTML = valgtMåned;

console.log(new Date())