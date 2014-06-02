// var serviceURL = "http://localhost:5000/api/waterpoints";
var serviceURL = "http://dashboard.taarifa.org/api/waterpoints";

var waterpoints;

// alert('wplist');

$('#viewWPPage').bind('pageinit', function(event) {
	getWPList();
});

function getWPList() {
	$.getJSON(serviceURL, function(data) {
		$('#wpList li').remove();
		waterpoints = data._items;
		console.log(waterpoints);
		$.each(waterpoints, function(index, wp) {
			$('#wpList').append('<li><a href="wpdetails.html?id=' + wp._id + '">' +
					// '<img src="pics/waterpoints/' + wp.award_image + '" class="wpListImage"/>' +
					'<h4>' + wp.wpt_name + '</h4>' +
					'<p>' + wp.district +', '+ wp.region + '</p>' +
					'<span class="ui-li-count">' + wp.status + '</span></a></li>');
		});
		$('#wpList').listview('refresh');
	});
}