console.log(
    " %c Welcome Master!!",
    "color: green; font-family:monospace; font-size: 20px"
);

const bands = [
    "The Plot in You",
    "The Devil Wears Prada",
    "Pierce the Veil",
    "Norma Jean",
    "The Bled",
    "Say Anything",
    "The Midway State",
    "We Came as Romans",
    "Counterparts",
    "Oh, Sleeper",
    "A Skylit Drive",
    "Anywhere But Here",
    "An Old Dog",
];
//Trying my own algo...
// const articleWords = bands.filter(band => band.split(" ")[0].length>3).filter(Boolean)
// console.log(articleWords)

// trying a copy - paste...
function getRidOfArticle( bandName ) {
    return bandName.replace( /^(a | the | an)/i, '' ).trim();
}

const sortedBands = bands.sort( ( a, b ) => getRidOfArticle( a ) > getRidOfArticle( b ) ? 1 : -1);

document.querySelector( '#bands' ).innerHTML = sortedBands.map( ( b ) => `<li>${b}</li>` ).join('');


