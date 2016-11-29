$(document).on('ready', function(){ 

	$('button').on('click', function(event){
		event.preventDefault();
		console.log("--->")
		var nameArtist = $('.name').val();
		var searchUrl = "https://api.spotify.com/v1/search?type=artist&query=" + nameArtist;
		
		$.ajax({
			type: "GET",
			url: searchUrl,
	        success: showArtist,
			error: handleError

		});


	});
});

	

function showArtist (response){
	console.log(response)
	var nameArtist = response;
	nameArtist.artists.items.forEach(function (theName){
		var images = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"

		if (theName.images.length > 0){
		 images = theName.images[0].url}
		var html = "<li>" + theName.name + "</li>" + "<img src=" + images + ">";
		$('.ArtistList').append(html);

	});
};

function handleError (error) {
	console.log("Error!");
	console.log(error.responseText);

};



