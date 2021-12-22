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
let aboutUsContent = `If you really want to hear about it, the first thing you'll probably want to know is
where I was born, an what my lousy childhood was like, and how my parents were
occupied and all before they had me, and all that David Copperfield kind of crap, but I
don't feel like going into it, if you want to know the truth. In the first place, that stuff
bores me, and in the second place, my parents would have about two hemorrhages apiece
if I told anything pretty personal about them. They're quite touchy about anything like
that, especially my father. They're nice and all--I'm not saying that--but they're also
touchy as hell. Besides, I'm not going to tell you my whole goddam autobiography or
anything. I'll just tell you about this madman stuff that happened to me around last
Christmas just before I got pretty run-down and had to come out here and take it easy. I
mean that's all I told D.B. about, and he's my brother and all. He's in Hollywood. That
isn't too far from this crumby place, and he comes over and visits me practically every
week end. He's going to drive me home when I go home next month maybe. He just got a
Jaguar. One of those little English jobs that can do around two hundred miles an hour. It
cost him damn near four thousand bucks. He's got a lot of dough, now. He didn't use to.
    He used to be just a regular writer, when he was home. He wrote this terrific book of
short stories, The Secret Goldfish, in case you never heard of him. The best one in it was
"The Secret Goldfish." It was about this little kid that wouldn't let anybody look at his
goldfish because he'd bought it with his own money. It killed me. Now he's out in
Hollywood, D.B., being a prostitute. If there's one thing I hate, it's the movies. Don't even
mention them to me.
    Where I want to start telling is the day I left Pencey Prep. Pencey Prep is this
school that's in Agerstown, Pennsylvania. You probably heard of it. You've probably seen
the ads, anyway. They advertise in about a thousand magazines, always showing some
hotshot guy on a horse jumping over a fence. Like as if all you ever did at Pencey was
play polo all the time. I never even once saw a horse anywhere near the place. And
underneath the guy on the horse's picture, it always says: "Since 1888 we have been
molding boys into splendid, clear-thinking young men." Strictly for the birds. They don't
do any damn more molding at Pencey than they do at any other school. And I didn't know
anybody there that was splendid and clear-thinking and all. Maybe two guys. If that
many. And they probably came to Pencey that way.`

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
        if (beer.name.toLowerCase() === chosenBeer.toLowerCase()){
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
        if(newBeerName.value.toLowerCase() === beers[i].name.toLowerCase()){
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

let aboutBTN = document.querySelector('#about');
let aboutPage = document.querySelector('#main-page');
let homeBTN = document.querySelector('#returnHome');
aboutBTN.addEventListener('click', showAbout);