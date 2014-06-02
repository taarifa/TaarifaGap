document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	window.localStorage.setItem("key", "value");
	var keyname = window.localStorage.key(i);
	var value = window.localStorage.getItem("key");

	window.localStorage.removeItem("key");
	window.localStorage.setItem("key2", "value2");
	window.localStorage.clear();
	// localStorage is now empty
}