"use strict";

// HERE IS THE BEERS ARRAY
let beers = [
    {id: 1, name: "Nite Lite", style: "light", image: "./img/light.jpeg"},
    {id: 2, name: "Slightly Mighty", style: "light", image: "./img/light.jpeg"},
    {id: 3, name: "Bell’s Light", style: "light", image: "./img/light.jpeg"},
    {id: 4, name: "Harpoon Rec.", style: "light", image: "./img/light.jpeg"},
    {id: 5, name: "Kona Blond", style: "light", image: "./img/light.jpeg"},
    {id: 6, name: "Omission Ultimate", style: "light", image: "./img/light.jpeg"},
    {id: 7, name: "Devils Backbone", style: "cider", image: "./img/cider.jpeg"},
    {id: 8, name: "Dooryard", style: "cider", image: "./img/cider.jpeg"},
    {id: 9, name: "La Mûre", style: "cider", image: "./img/cider.jpeg"},
    {id: 10, name: "Woodchuck", style: "cider", image: "./img/cider.jpeg"},
    {id: 11, name: "Pommeau", style: "cider",image: "./img/cider.jpeg"},
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

// HERE IS THE ABOUT US CONTENT
let aboutUsContent = `<div class="container"><div class="row"><div class="col-md-12 col-lg-12 profiles"><div class="who-imgs">
       <img src="./img/nelsonprofile.jpg"></div><div><h3>Nelson Delpozo</h3><br>
                <p>Simplicity requires a two-step process. First, we must invest time and energy to discover what stirsus as human beings, what makes our hearts sing, and what brings us joy. Then, we must proceed to create the
                    life that reflects the unique people we truly are. This is the heart and soul of simplicity.</p></div></div> </div>
    <div class="row"><div class="col-md-12 col-lg-12 profiles"><div class="who-imgs"><img src="./img/codyprofile.jpg"></div>
            <div><h3>Cody Hodges</h3><br><p>Simplicity requires a two-step process. First, we must invest time and energy to discover what stirs us as
                    human beings, what makes our hearts sing, and what brings us joy. Then, we must proceed to create the life that reflects the unique people we truly are. This is the heart and soul of simplicity.</p>
            </div></div></div>
</div>` //back ticks for string literal//

let supportersContent = ``

// THIS FUNCTION WRITES EACH LINE OF HTML AND RETURNS IT TO THE LOOP FUNCTION

function createHTML(beer){

    let html = '<div class= "col-md-4 col-lg-3 beers"><div><img src="';
    html += beer.image + '"></div><div><h2>' + beer.name + '</h2></div><hr><div><h3>' + beer.style + '</h3></div></div>';

    return html;
}

// THIS LOOP FUNCTION RUNS EACH BEER THROUGH THE FIRST FUNCTION ABOVE AND RETURNS THE HTML


function createColumns(beers){
    let html = '';
    for(let i = 0; i < beers.length; i++){
        html += createHTML(beers[i]);
    }
    return html;
}

// THIS IS THE FILTERING FOR THE SELECT MENU

function updateBeers(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedBeer = beerSelection.value;
    let filteredBeers = [];

    if(beerSelection.value === 'all'){
        contentArea.innerHTML = createColumns(beers);
        return;
    }else
    beers.forEach(function(beer) {
        if (beer.style === selectedBeer) {
            filteredBeers.push(beer);
        }
    });
    contentArea.innerHTML = createColumns(filteredBeers);
}

// THIS IS FOR WHEN YOU SELECT A BEER IN THE TEXT INPUT

function selectBeer(e){
    e.preventDefault();
    let chosenBeer = beerNameSelection.value;
    let beerChoice = [];
    beers.forEach(function(beer){
        if (beer.name.toLowerCase().replace(/\s+/g, '') === chosenBeer.toLowerCase().replace(/\s+/g, '')){
            beerChoice.push(beer);
        }
    });
    contentArea.innerHTML = createColumns(beerChoice);
}


// FOOTER FUNCTION STARTS HERE
function newBeer(e) {
    e.preventDefault();
    let newBeerSubmission = {};
    let newSubmissionName = newBeerName.value;
    let newSubmissionStyle = newBeerStyle.value;
    newBeerSubmission.id = beers.length + 1;
    newBeerSubmission.name = newSubmissionName;
    newBeerSubmission.style = newSubmissionStyle;
// THIS MAKES SURE THERE'S A NAME ENTERED'
    if(newSubmissionName === ''){
        dupeAlert.innerHTML = "It's gotta have a name dude"
        return;
    }
// THIS MAKES SURE IT DOESN'T ALREADY EXIST'
    for(let i = 0; i < beers.length; i++){
        if(newBeerName.value.toLowerCase().replace(/\s+/g, '') === beers[i].name.toLowerCase().replace(/\s+/g, '')){
        dupeAlert.innerHTML = "That beer already exists bud";
        return;

// THIS ADDS IMAGE TO THE NEW BEER OBJECT
        }else{
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
}

// THIS FUNCTION SHOWS THE ABOUT US CONTENT AS WELL AS THE RETURN HOME BUTTON, WHICH RELOADS THE PAGE
function showAbout(){
    aboutPage.innerHTML = aboutUsContent;
    homeBTN.innerHTML = `<a href="#" onclick="location.reload()">Return Home</a>`
}

function showSupporters() {
    supportersPage.innerHTML = supportersContent;
    homeBTN.innerHTML = `<a href="#" onclick="location.reload()">Return Home</a>`
}


// FUNCTIONS GO ABOVE THIS LINE
// //////////////////////////////////////////
// THIS ONE DECLARES THE CONTENT AREAS
let dupeAlert = document.querySelector('#duplicate-beer');
let contentArea = document.querySelector('.row');

// THESE ARE THE DROPDOWNS AND INPUT FIELDS
let submitButton = document.querySelector('#selection');
let beerSelection = document.querySelector('#sel1');
let newBeerName = document.querySelector('#added-beer-name');
let newBeerStyle = document.querySelector('#added-beer-style');

// THE SEARCH BY NAME BOX STARTS HERE
let chooseABeerButton = document.querySelector('#choose');
let beerNameSelection = document.querySelector('#beer-name');
let submitBeer = document.querySelector('#contribute-beer')

// THIS LAUNCHES THE INITIAL LAYOUT WITH ALL BEERS SHOWING IN ORDER

contentArea.innerHTML = createColumns(beers);

// THESE ARE THE EVENT LISTENERS
submitButton.addEventListener('click', updateBeers);
chooseABeerButton.addEventListener('click', selectBeer);
submitBeer.addEventListener('click', newBeer);

// EXPERIMENTING

let supportersBtn = document.querySelector('#supporters')
let supportersPage = document.querySelector('#main-page');
let aboutBTN = document.querySelector('#about');
let aboutPage = document.querySelector('#main-page');
let homeBTN = document.querySelector('#returnHome');
aboutBTN.addEventListener('click', showAbout);
supportersBtn.addEventListener('click', showSupporters);