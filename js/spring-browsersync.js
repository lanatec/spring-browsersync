$(document).ready(function() {
	// check
	var socket = new SockJS('/wsdevtools');
	var stompClient = Stomp.over(socket);
	stompClient.debug = null;
	stompClient.connect({}, function(frame) {
		stompClient.subscribe('/wsdevtools/filesync', function(event) {
			location.reload();
		});
	});
});
