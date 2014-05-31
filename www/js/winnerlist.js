var serviceURL = "http://m.halloffametanzania.com/services/";

var winners;

$('#winnerListPage').bind('pageinit', function(event) {
	getWinnerList();
});

function getWinnerList() {
	$.getJSON(serviceURL + 'getwinners.php', function(data) {
		$('#winnerList li').remove();
		winners = data.items;
		$.each(winners, function(index, winner) {
			$('#winnerList').append('<li><a href="winnerdetails.html?id=' + winner.id + '">' +
					'<img src="pics/winners/' + winner.award_image + '" class="winnerListImage"/>' +
					'<h4>' + winner.name + '</h4>' +
					'<p>' + winner.award + '</p>' +
					'<span class="ui-li-count">' + winner.award_year + '</span></a></li>');
		});
		$('#winnerList').listview('refresh');
	});
}