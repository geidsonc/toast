var toast = null;
$(function() {
	$.alert = toast = function(m, t) {

		t = t || 5000;
		var id = "toast-" + Date.now();

		$("#toast-container").show(0);

		var html = '<div id="' + id + '" class="toast-alert toast flexbox z-depth-1">'+
				'<div class="box flex-grow-2 toast-message">' + m + '</div>'+
				'<div class="box toast-close" hidden><i class="material-icons">&#xE5CD</i></div>'+
			'</div>';

		$("#toast-container").append(html);
		id = '#'+id;

		$(id).addClass("toast-show");
		$(".toast-close", id).click(function() {
			var toast = $(this).closest(".toast");
			$(toast).removeClass("toast-show");
			setTimeout(function(toast) {
				$(toast).remove();
			}, 300, toast);
		});

		if ( t > 0 ) {
			setTimeout(function(id) {
				$(".toast-close", id).click();
			}, t, id);
		}

		return id;
	};
	$('body').append($('<div>', { 'id': 'toast-container' }));
});
