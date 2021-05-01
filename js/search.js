$('#searchButton').click(function () {
    const searchValue = $('#search').val()
    const orderValue = $("#order").val()

    $('#listAlbum').html('')

    $.ajax({
        url: `https://api.deezer.com/search?q=${searchValue}&order=${orderValue}`,
        method: 'GET',
        dataType: 'json',
        success: function (response) {
            //render search result
            for (data of response.data) {
                const duration = secondConvert(data.duration)
                const title = data.title
                const newTitle = title.includes("'") ? title.replace("'", "") : title

                $('#listAlbum').append(`
                    <div class="shadow border"> 
                        <img src="${data.album.cover_medium}" alt="${data.album.title}">
                        <h3>${data.title}</h3>
                        <p>${data.artist.name} / ${data.album.title}</p>
                        <p>${duration}</p>
                        <button class="button-blue shadow border p-m"> <a class="color-white" href="pages/track.html?id=${data.id}">Ecouter un extrait </a></button>
                        <button class="button-light-blue shadow border p-m"> <a class="color-white" href="pages/album.html?id=${data.album.id}">Consulter l'album </a></button>
                        <button class="button-white shadow border p-m"> <a href="pages/artist.html?id=${data.artist.id}">Voir la fiche de l'artiste </a> </button>
                        <button class="button-red favorites shadow border p-m" onclick="addFavorites(${data.id}, '${newTitle}', '${data.artist.name}', '${data.album.title}')">Ajouter aux favoris</button>
                    </div>
                `)
                renderFavButton(data.id)
            }
            $('.favorites').click(changeText)
        }
    })
})