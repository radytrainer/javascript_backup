var url = "https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=yellow+flowers&image_type=photo&pretty=true";

async function getData() {
    var response = await fetch(url);
    var data = await response.json();
    data.hits.forEach( el => {
        console.log(el);
    })
}
getData();