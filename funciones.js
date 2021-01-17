function showBooks (name, author, year, link, image) {
    var divtag = document.createElement('div');
    divtag.setAttribute('class', 'divclass');

    var section1 = document.createElement('section');
    section1.setAttribute('id', 'sect1id');
    section1.setAttribute('class', 'sect1class');

    var img = document.createElement('img');
    img.setAttribute('src', image);
    img.setAttribute('alt', name);
    img.setAttribute('class', 'imgclass');

    var section2 =document.createElement('section');
    section2.setAttribute('id', 'sect2id');
    section2.setAttribute('class', 'sect2class');

    var h2elem = document.createElement('h2');
    var h2elemText = document.createTextNode(name);
    h2elem.setAttribute('class', 'h2class');

    var h3elem = document.createElement('h3');
    var h3elemText = document.createTextNode(author);
    h3elem.setAttribute('class', 'h3class');

    var pelem = document.createElement('p');
    var pelemText = document.createTextNode(year);
    pelem.setAttribute('class', 'pclass');

    var aElm = document.createElement('a');
    aElm.setAttribute('href', link);
    aElm.setAttribute('target', '_blank');
    aElm.setAttribute('class', 'aclass');
    var aText = document.createTextNode('Ver en Amazon');

    divtag.appendChild(section1);
    divtag.appendChild(section2);
    section1.appendChild(img);
    section2.appendChild(h2elem);
    h2elem.appendChild(h2elemText);
    section2.appendChild(h3elem);
    h3elem.appendChild(h3elemText);
    section2.appendChild(pelem);
    pelem.appendChild(pelemText);
    section2.appendChild(aElm);
    aElm.appendChild(aText);

    return divtag

}

//Ejemplo de uso de los callbacks en una función
// function createLink (texto, callback) {
//     var link = document.createElement('a');
//     link.setAttribute('href', '#');
//     link.addEventListener('click',function(e) {
//         e.preventDefault();
//         callback(e);
//     });
//     link.innerText = texto;
//     return link;
// }
// var myCallback = function(e){
//     console.log(e.target);
// };

// for (var movie of movies) {
//     var avengersMovieElement = createLink(movie.title, my callback);
//     document.getElementById('app').appendChild(avengersMovieElement);
// }
for (var libro of libros) {
    
    var loopBooks = showBooks (libro.name, libro.author, libro.year, libro.link, libro.image);
    document.getElementById('webapp').appendChild(loopBooks)    
}

