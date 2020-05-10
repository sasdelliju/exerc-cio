const initialize = {

	start: function () {

		$.ajax({
			url: 'https://api.exchangeratesapi.io/',
			type: "GET",
			dataType: "json",
			success: function (data) {
				console.log(data);
			},
			error: function (error) {
				console.log(`Error ${error}`);
			}
		});

	}
};

window.onload = function () {
	initialize.start();
}