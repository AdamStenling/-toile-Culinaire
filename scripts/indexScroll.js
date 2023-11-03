// lager variabel hovedfane og setter den lik classen på header. Dette gjør at man kan endre på html elementet i javascript.
const hovedfane = document.querySelector('.js-hovedfane');
// sier at når event onscroll er active skall denne funksjonen brukes.
window.onscroll = function () { 
    // if statment som  bruker window objektet. Her sier man at denne skal brukes hvis man har scrollet mer eller lik så og så mange piksler
    if (window.scrollY >= 10) {
        // legger til en klasse slik at man kan endre bakgrunnsfargen på fanen
        hovedfane.classList.add("bakgrunnsfarge-hovedfane");
        document.querySelector('#pil').classList.add('pil-usynlig');
    }
    if (window.scrollY < 10) {
        document.querySelector('#pil').classList.remove('pil-usynlig');
        // fjerner klassen hvis man ikke scroller, slik at primær stilen brukes
        hovedfane.classList.remove("bakgrunnsfarge-hovedfane");
    } else if (window.scrollY > 3850) {
        hovedfane.classList.remove('bakgrunnsfarge-hovedfane')
    }
}