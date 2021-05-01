//Render favorites tracks
for (i = 0; i < localStorage.length; i++) {
	const store_json = localStorage.getItem(localStorage.key(i))
	const store      = JSON.parse(store_json)
	const $fav       = $('#favorites')

	$fav.append(`
		<div class="fav"> 
			<a href="../pages/track.html?id=${store.id}">${store.title}</a> <span>(${store.artist} / ${store.album})</span>
			<button class="button-red shadow border p-m mb-25" onclick="removeFavorites(${store.id})">Retirer des favoris</button> <br>
		</div>
	`)
}

//Remove track from localStorage
function removeFavorites (id){
	localStorage.removeItem(id)
}

//Remove text instant
$('.fav').click(function(){
	$(this).html('')
})