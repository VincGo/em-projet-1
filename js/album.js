//get parameter form URL
const searchParams = new URLSearchParams(window.location.search)
const param = searchParams.get('id')

$.ajax({
    url: `https://api.deezer.com/album/${param}`,
    method: 'GET',
    dataType: 'json',
    success: function (response) {
        $('#album').prepend(`
            <h1>Album: ${response.title}</h1>
            <h3>Artiste: 
            	   <a href="../pages/artist.html?id=${response.artist.id}"> ${response.artist.name} </a>
            </h3>
        `)

        $('#album div section')
            .prepend(`<img src="${response.cover_big}" alt="${response.title}">`)
            .append(`<button class="button-blue shadow border p-m "> <a class="color-white" href="${response.link}">Voir l'album sur Deezer</a> </button>`)

        for (data of response.tracks.data) {
            const duration = secondConvert(data.duration)
            $('#album div ul').append(`
                <li class="p-l">
                    <a href="../pages/track.html?id=${data.id}">${data.title_short} (${duration})</a>
                </li>
                <hr>
           `)
        }
    }
})