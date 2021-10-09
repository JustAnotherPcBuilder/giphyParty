console.log("Let's get this party started!");
const $container = $('#container');


async function getRandomGif(){
    let searchTerm = `q=${$('#searchBar').val()}`;
    let  key = 'api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
    let query = searchTerm + '&' + key;
    let giphyLink = 'http://api.giphy.com/v1/gifs/search?' + query;
    const res = await axios.get(giphyLink);
    console.log(res);
    const gifs = res.data.data;
    appendRandomGif(gifs);

}

function appendRandomGif(gifArr){
    let size = gifArr.length;
    let rand = Math.floor(Math.random() * size);
    const $img = $('<img>');
    $img.attr('src', gifArr[rand].images.original.url);
    $container.append($img);
}

$('#delete').on('click', function(e){
    e.preventDefault();
    $('#container').html('');
});
$('#searchButton').on('click', function(e){
    e.preventDefault();
    getRandomGif();
});