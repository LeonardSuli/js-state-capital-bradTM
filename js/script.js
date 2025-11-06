const search = document.getElementById('search');
const output = document.getElementById('output');
let statesData = [];

// fetch call one time
fetch('../data/states.json')

    .then((response) => response.json())

    .then((data) => statesData = data)


// event listener on search
search.addEventListener('keyup', () => {

    console.log(search.value);

    // when delete all letters the output become empty
    if (search.value === '') {

        output.innerHTML = '';

        // il return evita di fare una richiesta inutile al file states.json se non c'è nulla da cercare
        return;
    }

    // every fetch call the output is emptied...
    output.innerHTML = '';

    let resultFound = false;

    // ...e poi si riempie
    statesData.forEach((state) => {

        if (state.name.toLowerCase().startsWith(search.value.toLowerCase()) ||
            state.abbr.toLowerCase().startsWith(search.value.toLowerCase())) {

            const markup = `<div class='text-center'>${state.name} <span>(${state.abbr})</span></div>`

            output.innerHTML += markup;

            // if there are results it's ok
            resultFound = true;
        }

    })

    // if there isn't result appears 'nessun risultato'
    if (!resultFound) {

        output.innerHTML = `<div class='text-center text-danger fw-bold'> Nessun risultato trovato </div>`;
    }


})

