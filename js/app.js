//Convert seconde in minute and seconde
function secondConvert (duration) {
	const minutes = Math.floor(duration / 60)
	const secondes = duration % 60
	const seconde = secondes < 10 ? '0'+secondes : secondes

	return minutes + ' m ' + seconde + ' s'
}

//Add track in localStorage
function addFavorites(id, title, artist, album) {
	const data = {
		id: id,
		title: title,
		artist: artist,
		album: album
	}
	const dataJson = JSON.stringify(data)
	const firstArray = localStorage.length
	localStorage.setItem(data.id, dataJson)
	const secondArray = localStorage.length

	if (firstArray === secondArray) {
		localStorage.removeItem(data.id)
	}
}

//Change text of favorite button
function changeText (){
	const favoritesClass = $(this).html()
	if(favoritesClass === 'Ajouter aux favoris'){
		$(this).html('Retirer des favoris')
	}
	else {
		$(this).html('Ajouter aux favoris')
	}
}

function renderFavButton(id){
	for (i = 0; i < localStorage.length; i++) {
		const store_json = localStorage.getItem(localStorage.key(i))
		const store = JSON.parse(store_json)
		if (store.id === id) $('.favorites').html('Retirer des favoris')
	}
}