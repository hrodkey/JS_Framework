// Query API Function

function queryAPI(type, method, data, callback) {
	$.ajax({
		type: type,
		url: "api.irisdispatch.com/restmobile/" + method,
		data: data,
		complete: function(eventHandle) {
			callback(eventHandle);
		}
	});
}

// Session Validation

function validateSession() {
	if (sessionStorage.user_id) {
		return true;
	} else if (localStorage.user_id) {
		return true;
	} else {
		return false;
	}
}

// login Function for API

function apiLogin(username, password, callback) {
	var form_data = {
		username: username,
		password: password
	};
	
	queryAPI("POST", "login", form_data, callback);
}

// Sign-out Function without API

function apiSignOut() {
	if (sessionStorage.user_id) {
		sessionStorage.removeItem("user_id");
		sessionStorage.removeItem("userkey");
	} else if (localStorage.user_id) {
		localStorage.removeItem("user_id");
		localStorage.removeItem("userkey");
	}
	
	window.location.reload();
}

// registerTrial Function without API

function apiRegisterTrial(email, firstname, lastname, password, phone, timezone, organization) {
	var form_data = {
		email: email,
		firstname: firstname,
		lastname: lastname,
		password: password,
		phone: phone,
		timezone: timezone,
		organization: organization
	};
	
	if (sessionStorage.user_id) {
		form_data.user_id = sessionStorage.user_id;
		form_data.userkey = sessionStorage.userkey;
	} else if (localStorage.user_id) {
		form_data.user_id = localStorage.user_id;
		form_data.userkey = localStorage.userkey;
	} else {
		console.log("Invalid session!");
	}
	
	queryAPI("POST", "registerTrial", form_data, callback);
}

// getCategories Function for API

function apiGetCategories(callback) {
	var form_data = {
		user_id: "",
		userkey: ""
	};
	
	if (sessionStorage.user_id) {
		form_data.user_id = sessionStorage.user_id;
		form_data.userkey = sessionStorage.userkey;
	} else if (localStorage.user_id) {
		form_data.user_id = localStorage.user_id;
		form_data.userkey = localStorage.userkey;
	} else {
		console.log("Invalid session!");
	}
	
	queryAPI("GET", "getCategories", form_data, callback);
}

// getDegreesList Function for API

function apiGetDegreesList(callback) {
	var form_data = {
		user_id: "",
		userkey: ""
	};
	
	if (sessionStorage.user_id) {
		form_data.user_id = sessionStorage.user_id;
		form_data.userkey = sessionStorage.userkey;
	} else if (localStorage.user_id) {
		form_data.user_id = localStorage.user_id;
		form_data.userkey = localStorage.userkey;
	} else {
		console.log("Invalid session!");
	}
	
	queryAPI("GET", "getDegreesList", form_data, callback);
}

// sendLoginInfo Function for API

function apiResetPassword(email, callback) {
	var form_data = {
		email: email
	};
	
	queryAPI("POST", "sendLoginInfo", form_data, callback);
}

// recordMessage Function for API

function apiRecordMessage(phonenumber, callback) {
	var form_data = {
		user_id: "",
		userkey: "",
		phonenumber: ""
	};
	
	if (sessionStorage.user_id) {
		form_data.user_id = sessionStorage.user_id;
		form_data.userkey = sessionStorage.userkey;
	} else if (localStorage.user_id) {
		form_data.user_id = localStorage.user_id;
		form_data.userkey = localStorage.userkey;
	} else {
		console.log("Invalid session!");
	}
	
	queryAPI("POST", "recordMessage", form_data, callback);
}

// getRecordedMessage Function for API

function apiGetRecordedMessage(messageID, callback) {
	var form_data = {
		user_id: "",
		userkey: "",
		messageID: messageID
	};
	
	if (sessionStorage.user_id) {
		form_data.user_id = sessionStorage.user_id;
		form_data.userkey = sessionStorage.userkey;
	} else if (localStorage.user_id) {
		form_data.user_id = localStorage.user_id;
		form_data.userkey = localStorage.userkey;
	} else {
		console.log("Invalid session!");
	}
	
	queryAPI("GET", "getRecordedMessage", form_data, callback);
}

// generateTTS Function for API

function apiGenerateTTS(message, callback) {
	var form_data = {
		user_id: "",
		userkey: "",
		message: message
	};
	
	if (sessionStorage.user_id) {
		form_data.user_id = sessionStorage.user_id;
		form_data.userkey = sessionStorage.userkey;
	} else if (localStorage.user_id) {
		form_data.user_id = localStorage.user_id;
		form_data.userkey = localStorage.userkey;
	} else {
		console.log("Invalid session!");
	}
	
	queryAPI("POST", "generateTTS", form_data, callback);
}

// sendAlert Function for API

//Explanation:
//- alertDegree = Red, Yellow, Green.
//- alertTitle = Title of your alert being sent.
//- alertCategory = Category of your alert being sent. (Sent as categoryID)
//- groupID = Group ID of the group that the alert is being broadcasted to.
//- alertType = The kind of alert that you are broadcasting. ("tts" or "voice")
//- savedAlert = Saved Alert? (0 or 1)
//- ttsMessage = Content of the alert, if being sent as text-to-speech.
//- preRecordedMessageURL = The URL of the message that you recorded, when you were called on the phone.

function apiSendAlert(alertDegree, alertTitle, alertCategory, groupID, alertType, savedAlert, ttsMessage, preRecordedMessageURL) {
	var form_data = {
		user_id: "",
		userkey: "",
		alertDegree: alertDegree,
		alertTitle: alertTitle,
		alertCategory: alertCategory,
		groupID: groupID,
		savedAlert: savedAlert,
		ttsMessage: "",
		preRecordedMessageURL: "",
	};
	
	if (sessionStorage.user_id) {
		form_data.user_id = sessionStorage.user_id;
		form_data.userkey = sessionStorage.userkey;
	} else if (localStorage.user_id) {
		form_data.user_id = localStorage.user_id;
		form_data.userkey = localStorage.userkey;
	} else {
		console.log("Invalid session!");
	}
	
	if (alertType === "tts") {
		form_data.ttsMessage = ttsMessage;
	} else if (alertType === "voice") {
		form_data.preRecordedMessageURL = preRecordedMessageURL;
	} else {
		return false;
	}
	
	queryAPI("POST", "sendAlert", form_data, callback);
}

// getAlertSummary Function for API

function apiGetAlertSummary(alert_ID, callback) {
	var form_data = {
		user_id: "",
		userkey: "",
		alert_ID: alert_ID
	};
	
	if (sessionStorage.user_id) {
		form_data.user_id = sessionStorage.user_id;
		form_data.userkey = sessionStorage.userkey;
	} else if (localStorage.user_id) {
		form_data.user_id = localStorage.user_id;
		form_data.userkey = localStorage.userkey;
	} else {
		console.log("Invalid session!");
	}
	
	queryAPI("GET", "getAlertSummary", data_form, callback);
}

// getAlerts Function for API

function apiGetAlerts(type, callback) {
	var form_data = {
		user_id: "",
		userkey: "",
		type: type
	};
	
	if (sessionStorage.user_id) {
		form_data.user_id = sessionStorage.user_id;
		form_data.userkey = sessionStorage.userkey;
	} else if (localStorage.user_id) {
		form_data.user_id = localStorage.user_id;
		form_data.userkey = localStorage.userkey;
	} else {
		console.log("Invalid session!");
	}
	
	queryAPI("GET", "getAlerts", form_data, callback);
}

// getSavedAlerts Function for API

function apiGetSavedAlerts(callback) {
	var form_data = {
		user_id: "",
		userkey: ""
	};
	
	if (sessionStorage.user_id) {
		form_data.user_id = sessionStorage.user_id;
		form_data.userkey = sessionStorage.userkey;
	} else if (localStorage.user_id) {
		form_data.user_id = localStorage.user_id;
		form_data.userkey = localStorage.userkey;
	} else {
		console.log("Invalid session!");
	}
	
	queryAPI("GET", "getSavedAlerts", form_data, callback);
}

// registerLocation Function for API

function apiRegisterLocation(latitude, longitude, alertID, assistance, callback) {
	var form_data = {
		user_id: "",
		userkey: "",
		latitude: latitude,
		longitude: longitude,
		alertID: alertID,
		assistance: assistance
	};
	
	if (sessionStorage.user_id) {
		form_data.user_id = sessionStorage.user_id;
		form_data.userkey = sessionStorage.userkey;
	} else if (localStorage.user_id) {
		form_data.user_id = localStorage.user_id;
		form_data.userkey = localStorage.userkey;
	} else {
		console.log("Invalid session!");
	}
	
	queryAPI("POST", "registerLocation", form_data, callback);
}

// registerIncident Function for API

function apiRegisterIncident(subject, description, latitude, longitude, filename, callback) {
	var form_data = {
		user_id: "",
		userkey: "",
		subject: subject,
		description: description,
		latitude: latitude,
		longitude: longitude,
		filename: filename
	};
	
	if (sessionStorage.user_id) {
		form_data.user_id = sessionStorage.user_id;
		form_data.userkey = sessionStorage.userkey;
	} else if (localStorage.user_id) {
		form_data.user_id = localStorage.user_id;
		form_data.userkey = localStorage.userkey;
	} else {
		console.log("Invalid session!");
	}
}