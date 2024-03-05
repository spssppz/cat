fetch("noindex/games.html")
	.then(response => {
		return response.text()
	})
	.then(data => {
		document.querySelector(".dlc-games-grid__list-a").innerHTML = data;
	});