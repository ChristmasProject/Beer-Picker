"use strict";

let beers = [
    {id: 1, name: "Nite Lite", style: "light", image: "/img/light.jpeg"},
    {id: 2, name: "Slightly Mighty", style: "light", image: "/img/light.jpeg"},
    {id: 3, name: "Bell’s Light", style: "light", image: "/img/light.jpeg"},
    {id: 4, name: "Harpoon Rec.", style: "light", image: "/img/light.jpeg"},
    {id: 5, name: "Kona Blond", style: "light", image: "/img/light.jpeg"},
    {id: 6, name: "Omission Ultimate", style: "light", image: "/img/light.jpeg"},
    {id: 7, name: "Polygamy Nitro", style: "dark", image: "/img/dark.jpeg"},
    {id: 8, name: "Cutthroat Porter", style: "dark", image: "/img/dark.jpeg"},
    {id: 9, name: "Old Fezziwig", style: "dark", image: "/img/dark.jpeg"},
    {id: 10, name: "Edmund Fitzgerald", style: "dark", image: "/img/dark.jpeg"},
    {id: 11, name: "La Trappe Dubbel", style: "dark", image: "/img/dark.jpeg"},
    {id: 12, name: "Shark Attack", style: "dark", image: "/img/dark.jpeg"},
    {id: 13, name: "Devils Backbone", style: "cider", image: "/img/cider.jpeg"},
    {id: 14, name: "Dooryard", style: "cider", image: "/img/cider.jpeg"},
    {id: 15, name: "La Mûre", style: "cider", image: "/img/cider.jpeg"},
    {id: 16, name: "Woodchuck", style: "cider", image: "/img/cider.jpeg"},
    {id: 17, name: "Pommeau", style: "cider",image: "/img/cider.jpeg"},
    {id: 18, name: "Blueberry Spaceship", style: "cider", image: "/img/cider.jpeg"},
    {id: 19, name: "Sunset Skies", style: "amber", image: "/img/amber.jpeg"},
    {id: 20, name: "Alt-Eration", style: "amber", image: "/img/amber.jpeg"},
    {id: 21, name: "Balt Altbier", style: "amber", image: "/img/amber.jpeg"},
    {id: 22, name: "Double Nickel", style: "amber", image: "/img/amber.jpeg"},
    {id: 23, name: "Free Time", style: "amber", image: "/img/amber.jpeg"},
    {id: 24, name: "Grevensteiner", style: "amber", image: "/img/amber.jpeg"},
]

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


// THIS SELECTS THE ROW DIV AS CONTENT AREA, THEN ADDS THE NEW HTML STRING TO ITS INNER HTML

let contentArea = document.querySelector('.row');
contentArea.innerHTML = createColumns(beers);


// console.log(createColumns(beers));
// console.log(typeof createColumns(beers));