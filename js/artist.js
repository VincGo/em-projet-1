//get parameter form URL
const searchParams = new URLSearchParams(window.location.search)
const param = searchParams.get('id')

$.ajax({
    url: `https://api.deezer.com/artist/${param}`,
    method: 'GET',
    dataType: 'json',
    success: function (response) {
        const newFormatNbr = new Intl.NumberFormat().format(response.nb_fan)
        const nbrToString = newFormatNbr.toString()
        const nbrLength = nbrToString.length
        const shortNbr = nbrToString.slice(0, 4)
        const newNbr = shortNbr.replace(/\s/g, ",")
        const nbrfan = nbrLength !== 10 ? newFormatNbr : newNbr + 'M'

        $('#artist').append(`
            <h1>${response.name}</h1>
           	<img src="${response.picture_big}" alt="${response.name}">
           	<h4>Nombre d'album: ${response.nb_album}</h4>
            <h4>Nombre fan: ${nbrfan}</h4>
            <button class="button-blue border shadow p-l "> <a href="${response.share}" class="color-white">Voir l'artiste sur Deezer</a> </button>
        `)
    }
})