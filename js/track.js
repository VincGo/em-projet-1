//get parameter form URL
const searchParams = new URLSearchParams(window.location.search)
const param = searchParams.get('id')

$.ajax({
    url: `https://api.deezer.com/track/${param}`,
    method: 'GET',
    dataType: 'json',
    success: function (response) {
        console.log(response)
        //converting time
        const duration = secondConvert(response.duration)
        //render track
        $('#track').append(`
            <h2>Titre: ${response.title_short}</h2>
            <section> 
                <div> 
                    <img src="${response.album.cover}" alt="${response.album.title}">
                    <p>Album: <a href="../pages/album.html?id=${response.album.id}"> ${response.album.title} </a> </p>
                </div>
                <div> 
                    <img src="${response.artist.picture}" alt="${response.artist.name}">
                    <p>Artiste: <a href="../pages/artist.html?id=${response.artist.id}"> ${response.artist.name} </a> </p>
                </div>
            </section> 
            <p>Durée: ${duration}</p>
            <p>Date de parution: ${response.release_date}</p>
            <figure>
            <figcaption>Ecouter un extrait: </figcaption>
               <audio controls src="${response.preview}">Your browser does not support the
               <code>audio</code> element.</audio>
            </figure>
            <button class="button-blue p-l border shadow"><a href="${response.link}" class="color-white">Voir le titre sur Deezer</a></button>
            <button class="button-red border shadow p-l favorites" onclick="addFavorites(${response.id}, '${response.title}', '${response.artist.name}', '${response.album.title}')">Ajouter aux favoris</button>
        `)

        //change text of fav button
        $('.favorites').click(changeText)

        renderFavButton(response.id)
    }
})