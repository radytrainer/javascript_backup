var url = "https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=yellow+flowers&image_type=photo&pretty=true";
var xml = new XMLHttpRequest();
xml.open("GET", url, true);
xml.onload = () => {
    var data = JSON.parse(xml.response);
    data.hits.forEach( item => {
        console.log(item);
    })
}
xml.send();
