var url = "https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=yellow+flowers&image_type=photo&pretty=true";

fetch(url)
.then(response => response.json())
.then(data => {
    var result = document.querySelector('#result');
    data.hits.forEach( el=> {
        result.innerHTML +=`
            <img src="${el.largeImageURL}">
        `;
    } );
})
.catch( () => console.log("Cannot get data"))