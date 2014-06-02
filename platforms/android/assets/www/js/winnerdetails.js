$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getwinner.php?id='+id, displayWinner);
});

function displayWinner(data) {
	var winner = data.item;
	// $('#winnerPic').attr('src', 'pics/' + winner.award_image);
	$('#award').append('<h2>'+winner.award+'</h2>');
	
	$('#winnerPic').attr('src', 'pics/winners/'+winner.award_image);

	$('#fullName').append('Awarded To: ' + winner.name);
	$('#winnerUni').append('University: ' + winner.university);
	$('#city').append('City: '+winner.city);

	$('#description').append('<p>'+winner.description+'</p>');

	// if email exists
	if (winner.email) {
		$('#actionList').append('<li><a href="mailto:' + winner.email + '"><h3>Email</h3>' +
				'<p>' + winner.email + '</p></a></li>');
	}
	// if office phone number exists
	if (winner.officePhone) {
		$('#actionList').append('<li><a href="tel:' + winner.officePhone + '"><h3>Call Office</h3>' +
				'<p>' + winner.officePhone + '</p></a></li>');
	}
	// if cell phone number exists
	if (winner.cellPhone) {
		$('#actionList').append('<li><a href="tel:' + winner.cellPhone + '"><h3>Call Cell</h3>' +
				'<p>' + winner.cellPhone + '</p></a></li>');
		$('#actionList').append('<li><a href="sms:' + winner.cellPhone + '"><h3>SMS</h3>' +
				'<p>' + winner.cellPhone + '</p></a></li>');
	}
	$('#actionList').listview('refresh');
	
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
