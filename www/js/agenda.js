// var serviceURL = "services/";
var serviceURL = "http://m.halloffametanzania.com/services/";

var agendas;

$('#agendaListPage').bind('pageinit', function(event) {
    getAgendaList();
});

function getAgendaList() {
    $.getJSON(serviceURL + 'agenda.php', function(data) {
        $('#agendaList li').remove();
        
        agendas = data.items;

        $.each(agendas, function(index, agenda) {
            $('#agendaList').append('<li>' +
                    // '<img class="pic" src="' + agenda.FB_Pic + '"/>' +
                    '<h6>' + agenda.day + '</h6>' +
                    '<p>' + agenda.event_description + '</p>' +
                    '<p>' + agenda.event_start_time + ' - ' + agenda.event_end_time + '</p>' +
                    '<p><strong>Event Date</strong>: ' + agenda.event_date + '</p>' +
                    '<p><strong>Venue</strong>: ' + agenda.venue + '</p>' +
                    '</li>');
                    // '<span class="ui-li-count">' + agenda.event_date + '</span></li>');
        });
        
        $('#agendaList').listview('refresh');
    });
}