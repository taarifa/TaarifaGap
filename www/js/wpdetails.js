$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + '/'+id, displayWP);
});

function displayWP(data) {
	var wp = data;
	// $('#wpPic').attr('src', 'pics/' + wp.award_image);
	$('#name').append('<h2>'+wp.wpt_name+'</h2>');
	// console.log(wp.wpt_name);
	$.each(wp, function (key, val) {
		if (key == "status") {
			$('#description').append('<p>'+key+': <input type="text" id="'+key+'" value="'+val+'" class="required ui-input-text ui-body-null ui-corner-all ui-shadow-inset ui-body-c"/></p>');
		}
	});

	var datum = '{"service_code": "wps001","attribute": {"waterpoint_id":"0202309922WP34" , "status":"Functional"}}';
	$('#description').append('<form method="POST" action="http://pgntester.jango.me:5000/api/requests"><input type="submit" value="Update Status" /></form>');

	$.each(wp, function(key, val) {
		if (key != "latitude" && key != "longitude" && key != "_links" 
			&& key != "_updated" && key != "_created" && key != "date_recorded"
			&& key != "_id" && key != "_etag") {
			$('#description').append('<p>'+key+': '+val+'</p>');
		}
	});
	
	
	// $('#wpPic').attr('src', 'pics/wps/'+wp.award_image);

	// $('#fullName').append('Awarded To: ' + wp.name);
	// $('#wpUni').append('University: ' + wp.university);
	// $('#city').append('City: '+wp.city);

	// $('#description').append('<p>'+wp.description+'</p>');

	// if email exists
	// if (wp.email) {
	// 	$('#actionList').append('<li><a href="mailto:' + wp.email + '"><h3>Email</h3>' +
	// 			'<p>' + wp.email + '</p></a></li>');
	// }
	// // if office phone number exists
	// if (wp.officePhone) {
	// 	$('#actionList').append('<li><a href="tel:' + wp.officePhone + '"><h3>Call Office</h3>' +
	// 			'<p>' + wp.officePhone + '</p></a></li>');
	// }
	// // if cell phone number exists
	// if (wp.cellPhone) {
	// 	$('#actionList').append('<li><a href="tel:' + wp.cellPhone + '"><h3>Call Cell</h3>' +
	// 			'<p>' + wp.cellPhone + '</p></a></li>');
	// 	$('#actionList').append('<li><a href="sms:' + wp.cellPhone + '"><h3>SMS</h3>' +
	// 			'<p>' + wp.cellPhone + '</p></a></li>');
	// }
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
