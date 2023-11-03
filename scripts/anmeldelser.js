// lager objekt for alle anmeldelsene. (anmeldelsene er generert av chatGPT)
const anmeldelser = {
    anmeldelse1: {
        anmeldelsetekst: 'Jeg hadde gleden av å besøke denne restauranten i går kveld, og opplevelsen var intet mindre enn fantastisk. Maten var en smaksopplevelse uten sidestykke. Biffen jeg bestilte var tilberedt til perfeksjon, saftig og full av smak. Personalet var vennlige og hjelpsomme, og atmosfæren var avslappende og koselig. Prisen var litt høyere enn gjennomsnittet, men kvaliteten på maten og tjenesten gjorde det absolutt verdt det. Jeg gleder meg allerede til mitt neste besøk!',
        stjerner: '★★★★★',
        navn: 'Grete Hansen',
    },
    anmeldelse2: {
        anmeldelsetekst: 'Jeg besøkte denne restauranten for første gang sist helg, og jeg må si at det var en eksepsjonell opplevelse. Maten var en nytelse for smaksløkene mine. Spesielt må jeg nevne den sprøstekte kyllingen, som var saftig på innsiden og sprø på utsiden. Servicen var upåklagelig, og personalet ga oss gode anbefalinger. Atmosfæren var avslappet og hyggelig, perfekt for en avslappende middag. Prisen var rimelig for kvaliteten på maten og opplevelsen. Jeg ser frem til å besøke igjen!',
        stjerner: '★★★★☆',
        navn: 'Gjørstein Johansen'
    },
    anmeldelse3: {
        anmeldelsetekst: 'Min siste middag på denne restauranten var virkelig minneverdig. Jeg bestilte en sjømatrett, og fisken var utrolig fersk og velsmakende. Personalet var oppmerksomme og vennlige, og de hadde god kunnskap om menyen. Atmosfæren var avslappende med dempet belysning og stille musikk i bakgrunnen. Prisene var rimelige for en restaurant av denne kvaliteten. Jeg kan trygt si at dette stedet er et must-besøk for de som elsker god mat og god service. Jeg gleder meg til neste besøk!',
        stjerner: '★★★★★',
        navn: 'Kari Olsen'
    },
    anmeldelse4: {
        anmeldelsetekst: 'Min nylige besøk på denne restauranten var en sann glede. Maten her var rett og slett fantastisk. Jeg bestilte deres signaturretter, og hvert eneste måltid på bordet vårt ble møtt med smil og nytelse. Hver bit var en eksploderende smaksopplevelse, og det var tydelig at kokken hadde en unik kreativitet i hvert eneste måltid. Jeg kunne ha spist her hver dag.',
        stjerner: '★★★★★',
        navn: 'Ole Pettersen'
    },
    anmeldelse5: {
        anmeldelsetekst: 'Vi hadde en fantastisk opplevelse på denne restauranten. Maten var enestående, med smaker som virkelig skilte seg ut. Vi prøvde flere retter, og hver eneste tallerken var perfekt tilberedt og presentert. Servicen var upåklagelig. Personalet var vennlige, imøtekommende og kunnskapsrike om menyen. De ga gode anbefalinger og sørget for at vi hadde en hyggelig opplevelse hele veien.',
        stjerner: '★★★★★',
        navn: 'Marte Jensen'
    },
    anmeldelse6: {
        anmeldelsetekst: 'Vår siste middag på denne restauranten var en ren glede fra start til slutt. Det er sjelden vi finner et sted som kan kombinere de tre viktige elementene - mat, service og atmosfære - på en så strålende måte. Maten her er en ekte kunstform. Hver bit var en smaksopplevelse som fikk smaksløkene våre til å danse av glede. Presentasjonen var også en fryd for øynene. Vi bestilte forskjellige retter, og alle var like imponerende. Ferske, lokale ingredienser og kreativitet går hånd i hånd på denne restauranten.',
        stjerner: '★★★★★',
        navn: 'Per Kristiansen'
    },
    anmeldelse7: {
        anmeldelsetekst: 'Dette er min favorittrestaurant i byen, og jeg blir aldri skuffet når jeg besøker. Maten er alltid deilig, og personalet er vennlige og imøtekommende. Atmosfæren er avslappende, og det er et flott sted for en romantisk middag. Jeg kan ikke få nok av deres signaturretter, spesielt sjokoladefondanten som er en himmelsk avslutning på måltidet.',
        stjerner: '★★★★☆',
        navn: 'Lena Andersen'
    }
}


// lager objekt for alle stjernene
const stjerneConvertering = {
    'fem': '★★★★★',
    '5': '★★★★★',
    'fire': '★★★★☆',
    '4': '★★★★☆',
    'tre': '★★★☆☆',
    '3': '★★★☆☆',
    'to': '★★☆☆☆',
    '2': '★★☆☆☆',
    'en': '★☆☆☆☆',
    '1': '★☆☆☆☆',
};


// Lager klasse for anmeldelser fordi da kan man gjennbruke mye av koden, uten å skrive på nytt.
class Anmeldelse {
    constructor(_anmeldelse, _knapp, _tekst) {
        this.anmeldelse = document.querySelector(_anmeldelse);
        this.knapp = document.querySelector(_knapp);
        this.tekst = _tekst;
        this.erÅpen = true;

        this.anmeldelse.innerHTML = this.tekst;
        this.knapp.innerHTML = 'Lukk anmeldelsen';
    }

    // oppretter metode for å lukke og åpne anmeldelsene 
    hvisAnmeldelse() {
        if (this.erÅpen) {
            this.anmeldelse.innerHTML = '';
            this.knapp.innerHTML = 'Les anmeldelsen';
            this.erÅpen = false;
        } else {
            this.anmeldelse.innerHTML = this.tekst;
            this.knapp.innerHTML = 'Lukk anmeldelsen';
            this.erÅpen = true;
        }
    }
}



// finner lengden på objektet med anmeldelsene så jeg vet hvor mange anmeldelser som skal genereres
let antallAnmeldelser = Object.keys(anmeldelser).length

// lager en løkke som lager anmeldelsene. Gjør at man enkelt kan legge inn enmeldelse tekst og slikt i objektet øverst. 
for (let i = 0; i < antallAnmeldelser; i++) {
    let runder = i + 1;
  
    // lager en variabel anmeldelse der jeg setter html-en til anmeldelseHTML
    let anmeldelse = document.createElement('js-anmeldelse');
    anmeldelse.innerHTML = `
        <div class="anmeldelse">
            <div class="profil">
                <img class="avatar" src="bilder/anmeldelseAvatar.png" alt="">
                <span class="navn">${anmeldelser['anmeldelse' + runder]['navn']}</span>
            </div>
            <span class="stjerner">${anmeldelser['anmeldelse' + runder]['stjerner']}</span>
            <span class="anmeldelseTekst js-anmeldelseTekst${runder}"></span>
            <button class="lesMer js-lesMer${runder}" onclick="myAnmeldelse${runder}.hvisAnmeldelse();">Les anmeldelsen</button>
        </div>`;

    // deklarerer alleAnmeldelser og legger til anmeldelse som et barn
    var alleAnmeldelser = document.querySelector('.js-alleAnmeldelser');
    alleAnmeldelser.appendChild(anmeldelse);

    // lager nytt objekt med klassen Anmeldelse, setter også inn verider som skal brukes i klassen 
    window['myAnmeldelse'+runder] = new Anmeldelse(`.js-anmeldelseTekst${runder}`, `.js-lesMer${runder}`, anmeldelser['anmeldelse' + runder]['anmeldelsetekst']);
}


// deklarerer nytt objekt med klassen anmeldelse slik at den blir global
let myAnmeldelseEgen;
let genereranmeldelseKnapp = document.querySelector('.js-generer-anmeldelse');
genereranmeldelseKnapp.addEventListener("click", genereranmeldelse);


// lager funksjon som skal kjøre når bruker trykker på kanpp som legger sin egen anmeldelse inn
function genereranmeldelse() {
    let navnInput = document.querySelector('.js-navn-input').value;
    let stjernerInput = document.querySelector('.js-stjerner-input').value.toLowerCase();
    let anmeldelseInput = document.querySelector('.js-anmeldelse-input').value;
    let slettet;

    if (navnInput !== '' && stjernerInput !== '' && anmeldelseInput !== '') {
        // sjekker om stjerneInput er en nøkkel i objektet stjerneConvertering, og sier da at stjerneInput er lik verdien til nøkkelen.
        if (stjernerInput in stjerneConvertering) {
            stjernerInput = stjerneConvertering[stjernerInput];
        } else {
            document.querySelector('.js-stjerner-input').classList.add('rød');
            return;
        }
        
        // setter variabel navn til "egenAnmeldelse" og setter innerHTML til html strengen over.
        let egenAnmeldelse = document.createElement('div');
        egenAnmeldelse.innerHTML = `
        <div class="anmeldelse fullstendig-egen-anmeldelse">
            <div class="profil">
                <img class="avatar" src="bilder/anmeldelseAvatar.png" alt="">
                <span class="navn">${navnInput}</span>
            </div>
            <span class="stjerner">${stjernerInput}</span>
            <span class="anmeldelseTekst js-anmeldelse-egen-tekst"></span>
            <button class="lesMer js-egen-lesMer" onclick="myAnmeldelseEgen.hvisAnmeldelse();">Les anmeldelsen</button>
        </div>`;

        // legger til egenAnmeldelse på alleAnmeldelser
        alleAnmeldelser.appendChild(egenAnmeldelse);

        // lager nytt objekt med Anmeldelse som klasse og diverse parametre
        myAnmeldelseEgen = new Anmeldelse(`.js-anmeldelse-egen-tekst`, `.js-egen-lesMer`, anmeldelseInput);

        // fjerner klassen egen-anmeldelse
        document.querySelector('.egen-anmeldelse').remove()
        document.querySelector('.js-alleAnmeldelser').classList.add('margin-alleAnmeldelser')
        slettet = true;
        
      // legger til klasse 'rød' hvis et input felt er tomt og fjerner klassen hvis feltet ikke lenger er tomt og inputboksene ikke er fjernet
    } if (navnInput === '') {
        document.querySelector('.js-navn-input').classList.add('rød');

    } if (stjernerInput === '') {
        document.querySelector('.js-stjerner-input').classList.add('rød');

    } if (anmeldelseInput === '') {
        document.querySelector('.js-anmeldelse-input').classList.add('rød');

    } if (navnInput !== '' && slettet !== true) {
        document.querySelector('.js-navn-input').classList.remove('rød');

    } if (stjernerInput !== '' && slettet !== true) {
        document.querySelector('.js-stjerner-input').classList.remove('rød');

    } if (anmeldelseInput !== '' && slettet !== true) {
        document.querySelector('.js-anmeldelse-input').classList.remove('rød');
    } 
}