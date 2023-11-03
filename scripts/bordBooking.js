// diverse elementer
const plussGjesterBtn = document.querySelector('.js-pluss-gjester');
const minusGjesterBtn = document.querySelector('.js-minus-gjester');
const gjestTekst = document.querySelector('.js-gjester');
const visValgtDato = document.querySelector('.js-vis-valgt-dato');
const månedTekst = document.querySelector('.js-måned');
const månedPlussKnapp = document.querySelector('.js-måned-pluss-knapp');
const månedMinusKnapp = document.querySelector('.js-måned-minus-knapp');
const alleDatoer = document.querySelector('.js-alle-datoer');
const tidspunktContainer = document.querySelector('.section-tid');
const submitKnapp = document.querySelector('.js-bestill-bord-knapp');

let antallGjester = 2;
// kode for å skjule minus og pluss knapp for gjester
function velgAntallGjester() {
    let antallGjesterElement = document.querySelector('.js-antall-gjester');
    antallGjesterElement.innerHTML = antallGjester;
    if (antallGjester < 2) {
        minusGjesterBtn.classList.add('skjult');
        gjestTekst.innerHTML = 'Gjest';
    }
    if (antallGjester > 7) {
        plussGjesterBtn.classList.add('skjult');
    }
}

// eventlistener for pluss kanpp for antall gjester
plussGjesterBtn.addEventListener('click', () => {
    if (antallGjester < 2) {
        minusGjesterBtn.classList.remove('skjult');
        gjestTekst.innerHTML = 'Gjester';
    }
    if (antallGjester < 8) {
        antallGjester++;
        velgAntallGjester();
    }
});

// eventlistener for minus kanpp for antall gjester
minusGjesterBtn.addEventListener('click', () => {
    if (antallGjester > 7) {
        plussGjesterBtn.classList.remove('skjult');
    }
    if (antallGjester > 1) {
        antallGjester--;
        velgAntallGjester();
    }
});

// finner antall dager i måneden
function dagerIMåneden(måned, år) {
    return new Date(år, måned + 1, 0).getDate();
}

// lager mange variabler for å vite år, måned og dag, samt dagens dato.
let dagsDato = new Date();
let måned = dagsDato.getMonth();
let år = dagsDato.getFullYear();
let dag = dagsDato.getDate();

// lager array for de forskjellige månedene fordi getMonth() returnerer tallet for måneden og ikke ordet.
const måneder = ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"];

// finner riktig månede i array.
let månedBokstaver = måneder[måned];

// oppdaterer hvilken måned som skal stå over dato knappene.
månedTekst.innerHTML = månedBokstaver;

// oppdaterer dato som vises valgt.
visValgtDato.innerHTML = `${dag} ${månedBokstaver} ${år}`;

// lager diverse variabler som er viktige for velging av knapper.
let valgtDato;
let valgtTid;
let valgtTidKnapp;
let valgtMåned;
let valgtMånedTall;
let valgtÅr = år;
let vistMåned = måned;
let vistÅr = år;
let ukeDag;
let valgtUkedag;
let valgtUkedagBokstaver;
const ukedager = ["mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag", "søndag"];

// funksjon med løkke som lager riktig antall dager i gitt måned. Legger til knappene som barn av alleDatoer div-en.
function lagDatoknapper() {
    for (let i = 1; i <= dagerIMåneden(vistMåned, vistÅr); i++) {
        if (i === 1) {
            // ukedager blir litt rart nummerert fordi i usa starter de på søndag, derfor er 0 søndag. Jeg gjør om på dette.
            ukeDag = new Date(vistÅr, vistMåned, 1).getDay();
            if (ukeDag === 0) {
                ukeDag = 7;
            }
            for (let i = 0; i < ukeDag - 1; i++) {
                let hvitLuft = document.createElement('button');
                hvitLuft.className = 'hvit-luft';
                alleDatoer.appendChild(hvitLuft);
            }
        }
        let datoKnapp = document.createElement('button');
        datoKnapp.className = 'dato';
        datoKnapp.textContent = i;
        alleDatoer.appendChild(datoKnapp);
        if (i == valgtDato && måneder[valgtMånedTall] === månedBokstaver && vistÅr === valgtÅr) {
            datoKnapp.classList.add('valgt');
        }
        if (vistMåned === måned & i <= dag && vistÅr === år) {
            datoKnapp.classList.add('for-sent');
        }
    }
} lagDatoknapper();


// finner valgt dato.
function sjekkerValgtDato() {
    const datofeltene = document.querySelectorAll('.dato');
    datofeltene.forEach(dato => {
        dato.addEventListener('click', () => {
            if (dato.textContent <= dag && vistMåned <= måned && vistÅr <= år) {
                return
            } 
            else {
                dato.classList.remove('valgt');
            }
            datofeltene.forEach(dato => {
                dato.classList.remove('valgt');
            });
            if (dato.textContent <= dag && vistMåned <= måned && vistÅr <= år) {
                return
            }
            else {
                dato.classList.add('valgt');
                valgtDato = dato.textContent;
                valgtÅr = vistÅr;
                visValgtDato.innerHTML = `${valgtDato} ${månedBokstaver} ${valgtÅr}`;
                valgtMåned = månedBokstaver;
                valgtMånedTall = vistMåned;
                valgtUkedag = new Date(valgtÅr, valgtMånedTall, valgtDato).getDay();
                if (valgtUkedag === 0) {
                    valgtUkedag = 7;
                }
                valgtUkedagBokstaver = ukedager[valgtUkedag - 1];
            }
        });
    });
} sjekkerValgtDato();

let månederFramover = 0;
månedMinusKnapp.classList.add('skjult');

// eventlistener som sjekker om pluss knapp trykkes. Fjerner først dager fra tidligere måned. 
// legger til en i måned variablen (setter måneden til neste i rekke).
// sjekker om måneden er siste da starter man på Januar.
// lager nye knapper for måneden og endrer tittelen.
// kaller også funksjonen som sjekker hvilken knapp som er valgt.
månedPlussKnapp.addEventListener('click', () => {
    if (månederFramover < 10) {
        månedMinusKnapp.classList.remove('skjult')
        while (alleDatoer.firstChild) {
            alleDatoer.removeChild(alleDatoer.firstChild);
        }
        vistMåned++;
        if (vistMåned > 11) {
            vistMåned = 0;
            vistÅr++;
        }
        månedBokstaver = måneder[vistMåned];
        månedTekst.innerHTML = månedBokstaver;
        lagDatoknapper();
        sjekkerValgtDato();
        månederFramover++;
    }
    if (månederFramover === 10) {
        månedPlussKnapp.classList.add('skjult')
    }
});

// identisk som knappen over, bare at det er for å bla neddover.
månedMinusKnapp.addEventListener('click', () => {
    if (vistMåned > måned || vistÅr > år) {
        månedPlussKnapp.classList.remove('skjult')
        while (alleDatoer.firstChild) {
            alleDatoer.removeChild(alleDatoer.firstChild);
        }
        vistMåned--;
        if (vistMåned < 0) { 
            vistMåned = 11;
            vistÅr--;
        }
        månedBokstaver = måneder[vistMåned];
        månedTekst.innerHTML = månedBokstaver;
        lagDatoknapper();
        sjekkerValgtDato();
        månederFramover--;
    }
    if (vistMåned === måned && vistÅr === år){
        månedMinusKnapp.classList.add('skjult')
    }
});

// sjekker valgt tid
tidspunktContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('js-tidpunkt')) {
        if (valgtTidKnapp) {
            valgtTidKnapp.classList.remove('valgt-tid');
        }
        valgtTidKnapp = event.target;
        valgtTid = event.target.textContent;
        valgtTidKnapp.classList.add('valgt-tid');
    }
});

// eventlistener for sumbit knapp. Sjekker at dato og tid er valgt, og legger de i local storage
// hvis dato og tid ikke er valgt legges en animasjon klasse til knappen.
submitKnapp.addEventListener('click', () => {
    if (valgtTid !== undefined && valgtDato !== undefined) {
        window.location = "bestilt-bord.html"
        localStorage.setItem("valgtDato", valgtDato);
        localStorage.setItem("valgtTid", valgtTid);
        localStorage.setItem("antallGjester", antallGjester);
        localStorage.setItem("valgtMåned", valgtMåned);
        localStorage.setItem("valgtÅr", valgtÅr);
        localStorage.setItem("valgtUkedagBokstaver", valgtUkedagBokstaver);
    } 
    else {
        console.log('mangler info!');
        submitKnapp.classList.add('mangler-info');
        setTimeout(() => {
            submitKnapp.classList.remove('mangler-info');
            }, 1500);
        
    }
});


