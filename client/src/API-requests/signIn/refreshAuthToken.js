import axios from "axios";

function refreshAuthToken() {
	axios({
		method: "get",
		url: "/api/user/refresh-auth-token",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((response) => {
			//alert("refreshed");
		})
		.catch((err) => {
			if (err.response) {
				//alert(err.response.data);
			} else {
				alert("Request falied");
			}
		});
}

export default refreshAuthToken;
