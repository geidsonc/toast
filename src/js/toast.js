var toast = null;
$(function() {
	$.alert = toast = function(m, t) {

		t = t || 5000;
		var id = "toast-" + Date.now();

		$("#toast-container").show(0);

		var html = '<div id="' + id + '"class="toast">'+
				'<div class="toast-message">' + m + '</div>'+
				'<div class="toast-close">'+
					'<svg fill="#ffffff" height="22" viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">'+
						'<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>'+
						'<path d="M0 0h24v24H0z" fill="none"/>'+
					'</svg>'+
				'</div>'+
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
