"use strict";

// THIS FUNCTION CHECKS TO SEE IF BEERS ALREADY EXISTS IN LOCALSTORAGE, RETRIEVES IT IF SO, OR GENERATES A NEW ARRAY IF NOW

let beers = function () {
    if (window.localStorage.getItem("beers") === null) {
        return [
            {id: 1, name: "Nite Lite", style: "light", image: "./img/light.jpeg"},
            {id: 2, name: "Slightly Mighty", style: "light", image: "./img/light.jpeg"},
            {id: 3, name: "Bell\'s Light", style: "light", image: "./img/light.jpeg"},
            {id: 4, name: "Harpoon Rec.", style: "light", image: "./img/light.jpeg"},
            {id: 5, name: "Kona Blond", style: "light", image: "./img/light.jpeg"},
            {id: 6, name: "Omission Ultimate", style: "light", image: "./img/light.jpeg"},
            {id: 7, name: "Devil\'s Backbone", style: "cider", image: "./img/cider.jpeg"},
            {id: 8, name: "Dooryard", style: "cider", image: "./img/cider.jpeg"},
            {id: 9, name: "La Mûre", style: "cider", image: "./img/cider.jpeg"},
            {id: 10, name: "Woodchuck", style: "cider", image: "./img/cider.jpeg"},
            {id: 11, name: "Pommeau", style: "cider", image: "./img/cider.jpeg"},
            {id: 12, name: "Blueberry Spaceship", style: "cider", image: "./img/cider.jpeg"},
            {id: 13, name: "Sunset Skies", style: "amber", image: "./img/amber.jpeg"},
            {id: 14, name: "Alt-Eration", style: "amber", image: "./img/amber.jpeg"},
            {id: 15, name: "Balt Altbier", style: "amber", image: "./img/amber.jpeg"},
            {id: 16, name: "Double Nickel", style: "amber", image: "./img/amber.jpeg"},
            {id: 17, name: "Free Time", style: "amber", image: "./img/amber.jpeg"},
            {id: 18, name: "Grevensteiner", style: "amber", image: "./img/amber.jpeg"},
            {id: 19, name: "Polygamy Nitro", style: "dark", image: "./img/dark.jpeg"},
            {id: 20, name: "Cutthroat Porter", style: "dark", image: "./img/dark.jpeg"},
            {id: 21, name: "Old Fezziwig", style: "dark", image: "./img/dark.jpeg"},
            {id: 22, name: "Edmund Fitzgerald", style: "dark", image: "./img/dark.jpeg"},
            {id: 23, name: "La Trappe Dubbel", style: "dark", image: "./img/dark.jpeg"},
            {id: 24, name: "Shark Attack", style: "dark", image: "./img/dark.jpeg"}
        ]
    } else {
        return JSON.parse(window.localStorage.getItem("beers"));
    }
}();

// HERE IS THE ABOUT US CONTENT
let aboutUsContent = `<div class="container"><div class="row"><div class="col-md-12 col-lg-12 profiles"><div class="who-imgs">
       <img src="./img/nelsonprofile.jpg"></div><div><h3>Nelson Delpozo</h3><br>
                <p>Simplicity requires a two-step process. First, we must invest time and energy to discover what stirs us as human beings, what makes our hearts sing, and what brings us joy. Then, we must proceed to create the
                    life that reflects the unique people we truly are. This is the heart and soul of simplicity.</p></div></div> </div>
    <div class="row"><div class="col-md-12 col-lg-12 profiles"><div class="who-imgs"><img src="./img/codyprofile.jpg"></div>
            <div><h3>Cody Hodges</h3><br><p>Simplicity requires a two-step process. First, we must invest time and energy to discover what stirs us as
                    human beings, what makes our hearts sing, and what brings us joy. Then, we must proceed to create the life that reflects the unique people we truly are. This is the heart and soul of simplicity.</p>
            </div></div></div>
</div>` //back ticks for string literal//

// SUPPORTERS PAGE CONTENT
let supportersContent = `<div class="container"><div class="row"><div class="profiles"><div class="support-img"><img src="./img/codeup.jpg"></div><div><h3>CodeUp</h3>
                <br><p><a href="https://codeup.com/" target="_blank" rel="noopener norefferer">Codeup</a> has presented us with the information to make all of this possible. Our learning
                has led us down a path of exploration into the development of Beer Picker. We would like to extend many thanks to them for being our main supporter.</p></div></div></div><div class="row">
                <div class="profiles"><div class="support-img"><img src="./img/geekdom.jpg"></div><div><h3>Geekdom</h3><br>

                <p><a href="https://geekdom.com/" target="_blank" rel="noopener norefferer">Geekdom</a> has provided a clean and safe environment for extended learning and paired programming during this process.
                Having their facilities at our disposal has been beyond helpful.</p></div></div></div><div class="row"><div class="profiles"><div class="support-img">
                <img src="./img/flying.jpg"></div><div><h3>Flying Saucer Draught Emporium </h3><br>
                <p><a href="http://www.beerknurd.com/locations/san-antonio-flying-saucer" target="_blank" rel="noopener norefferer">Flying Saucer</a> has been a great venue for writing our code. The stress-free environment and GREAT drink options
                have led to many ideas that were implemented into the page you are currently reading. You can visit them <a href="https://www.google.com/maps/place/Flying+Saucer+Draught+Emporium/@29.5480708,-98.5796343,17z/data=!3m2!4b1!
                5s0x865c672e0ca79877:0xad0170a7940b5260!4m5!3m4!1s0x865c672dfa28a423:0xc8d8dd7d64fddc14!8m2!3d29.5480708!4d-98.5774456?hl=en" target="_blank" rel="noopener norefferrer">here</a>.</p></div></div></div><div class="row">
                <div class="profiles"><div class="support-img"><img src="./img/weathered.jpg"></div><div><h3>Weathered Souls Brewing Co.</h3><br>
                <p><a href="https://weatheredsouls.beer/" target="_blank" rel="noopener norefferer"> Weathered Souls</a> provided the space for the start of Beer Picker. All of the initial framework for this tool were designed
                right inside their doors. If you happen to stumble across them on a warmer day then we did, they also have a great outdoor
                seating area for ideas to come alive. Visit them yourself <a href="https://www.google.com/maps/place/Weathered+Souls+Brewing+Co./@29.5647601,-98.4919831,17z/data=!3m2!4b1!5s0x865c61d4a41a0a1d:0x3
                93d7d908e767e7d!4m5!3m4!1s0x865c61d4a5d38277:0xab0fa6bce1351b17!8m2!3d29.5647601!4d-98.4897944?hl=en" target="_blank" rel="noopener norefferrer">here</a>.</p></div></div></div></div>`

// THIS FUNCTION WRITES EACH LINE OF HTML AND RETURNS IT TO THE LOOP FUNCTION

function createHTML(beer) {

    let html = '<div class= "col-md-4 col-lg-3 beers"><div><img src="';
    html += beer.image + '"></div><div><h2>' + beer.name + '</h2></div><hr><div><h3>' + beer.style + '</h3></div></div>';

    return html;
}

// THIS LOOP FUNCTION RUNS EACH BEER THROUGH THE FIRST FUNCTION ABOVE AND RETURNS THE HTML


function createColumns(beers) {
    let html = '';
    for (let i = 0; i < beers.length; i++) {
        html += createHTML(beers[i]);
    }
    return html;
}

// THIS IS THE FILTERING FOR THE SELECT MENU

// THIS FUNCTION IS COMMENTED OUT BECAUSE IT'S BEEN REPLACED WITH selectFromDropdown '

// function updateBeers(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     let selectedBeer = beerSelection.value;
//     let filteredBeers = [];
//
//     if (beerSelection.value === 'all') {
//         contentArea.innerHTML = createColumns(beers);
//         return;
//     } else
//         beers.forEach(function (beer) {
//             if (beer.style === selectedBeer) {
//                 filteredBeers.push(beer);
//             }
//         });
//     contentArea.innerHTML = createColumns(filteredBeers);
// }

// THIS IS FOR WHEN YOU SELECT A BEER IN THE TEXT INPUT
// THIS FUNCTION HAS BEEN REPLACED WITH THE LIVE VERSION BELOW searchForABeer

// function selectBeer(e) {
//     e.preventDefault();
//     let chosenBeer = beerNameSelection.value;
//     let beerChoice = [];
//     beers.forEach(function (beer) {
//         if (beer.name.toLowerCase().replace(/\s+/g, '') === chosenBeer.toLowerCase().replace(/\s+/g, '')) {
//             beerChoice.push(beer);
//         }
//     });
//     contentArea.innerHTML = createColumns(beerChoice);
// }

// THIS NEW FUNCTION RUNS THE DROPDOWN MENU WITHOUT A BUTTON

function selectFromDropdown() {
    let selectedBeerStyle = document.getElementById('sel1').value;
    let selectedBeerList = [];
    if (selectedBeerStyle === 'all') {
        contentArea.innerHTML = createColumns(beers);
        return;
    } else
        beers.forEach(function (beer) {
            if (beer.style === selectedBeerStyle) {
                selectedBeerList.push(beer);
            }
        });
    contentArea.innerHTML = createColumns(selectedBeerList);
}

// THIS IS FOR SEARCHING ON KEYPRESS IN TEXT FIELD
function searchForABeer() {
    let desiredBeer = document.getElementById('beer-name').value;
    let beerChoice = [];

    beers.forEach(function (beer) {
        if (beer.name.toLowerCase().replace(/\s+/g, '').includes(desiredBeer)) {
            beerChoice.push(beer);
        }
    });
    contentArea.innerHTML = createColumns(beerChoice);
}


// FOOTER FUNCTION STARTS HERE
function newBeer(e) {
    // e.preventDefault();
    let newBeerSubmission = {};
    let newSubmissionName = capitalize((newBeerName.value).toLowerCase());
    let newSubmissionStyle = newBeerStyle.value;
    newBeerSubmission.id = beers.length + 1;
    newBeerSubmission.name = newSubmissionName;
    newBeerSubmission.style = newSubmissionStyle;

// THIS MAKES SURE THERE'S A NAME ENTERED'
    if (newSubmissionName === '') {
        dupeAlert.innerHTML = "It's gotta have a name dude"
        return;
    }

// THIS MAKES SURE A STYLE IS CHOSEN
    if (newSubmissionStyle === ''){
        dupeAlert.innerHTML = "It's gotta look like something"
        return;
    }

// THIS MAKES SURE IT DOESN'T ALREADY EXIST
    for (let i = 0; i < beers.length; i++) {
        if (newBeerName.value.toLowerCase().replace(/\s+/g, '') === beers[i].name.toLowerCase().replace(/\s+/g, '')) {
            dupeAlert.innerHTML = "That beer already exists bud";
            return;
            // THIS ADDS IMAGE TO THE NEW BEER OBJECT
        } else {
            newBeerSubmission.name = newSubmissionName;
            newBeerSubmission.style = newSubmissionStyle;
            dupeAlert.innerHTML = '';
            if (newSubmissionStyle === 'light') {
                newBeerSubmission.image = "./img/light.jpeg";
            } else if (newSubmissionStyle === 'amber') {
                newBeerSubmission.image = './img/amber.jpeg'
            } else if (newSubmissionStyle === 'dark') {
                newBeerSubmission.image = './img/dark.jpeg';
            } else
                newBeerSubmission.image = './img/cider.jpeg';
        }
    }
    beers.push(newBeerSubmission);
    console.log(beers);
    contentArea.innerHTML = createColumns(beers);
    window.localStorage.setItem('beers', JSON.stringify(beers));
    location.reload();
}

// THIS FUNCTION SHOWS THE ABOUT US CONTENT AS WELL AS THE RETURN HOME BUTTON, WHICH RELOADS THE PAGE
function showAbout() {
    aboutPage.innerHTML = aboutUsContent;
    homeBTN.innerHTML = `<a href="#" onclick="location.reload()">Return Home</a>`
}

// SHOW SUPPORTERS PAGE AND RELOAD BUTTON
function showSupporters() {
    supportersPage.innerHTML = supportersContent;
    homeBTN.innerHTML = `<a href="#" onclick="location.reload()">Return Home</a>`
}

// THIS REMOVES BEERS FROM LOCAL STORAGE- NEED TO FIGURE OUT HOW TO MAKE IT ALSO RELOAD THE PAGE
function resetArray() {
    window.localStorage.removeItem("beers");
}

function reloadPage() {
    location.reload();
}

// THIS BEAUTY WILL CAPITALIZE EVERY WORD OF AN ADDED BEER! IT GETS CALLED INSIDE THE ADD-A-BEER FUNCTION
function capitalize(input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i] === ' ') {
            let newInput = input[i + 1].toUpperCase();
            input = input[0].toUpperCase() + input.substring(1, i) + " " + newInput + input.substring(i + 2)
        }
    }
    return (input);
}

// FUNCTIONS GO ABOVE THIS LINE
// //////////////////////////////////////////


// THESE ARE THE EVENT LISTENERS AND QUERY SELECTORS

let newBeerName = document.querySelector('#added-beer-name');
let newBeerStyle = document.querySelector('#added-beer-style');
let dupeAlert = document.querySelector('#duplicate-beer');
let contentArea = document.querySelector('.row');
let submitBeer = document.querySelector('#contribute-beer')
let supportersBtn = document.querySelector('#supporters');
let supportersPage = document.querySelector('#main-page');
let aboutBTN = document.querySelector('#about');
let aboutPage = document.querySelector('#main-page');
let homeBTN = document.querySelector('#returnHome');
submitBeer.addEventListener('click', newBeer);
aboutBTN.addEventListener('click', showAbout);
supportersBtn.addEventListener('click', showSupporters);
// THIS LAUNCHES THE INITIAL LAYOUT WITH ALL BEERS SHOWING IN ORDER
contentArea.innerHTML = createColumns(beers);


