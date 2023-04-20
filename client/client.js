/**
 * @type {HTMLButtonElement}
 */
const permissionButton = document.querySelector("#permissionButton");
/**
 * @type {HTMLSelectElement}
 */
const connectionTypeDropdown = document.querySelector("#connectionTypeSelect");
/**
 * @type {HTMLButtonElement}
 */
const connectButton = document.querySelector("#connectButton");
/**
 * @type {HTMLSpanElement}
 */
const gyroscopeDataSpan = document.querySelector("#gyroscopeData");

permissionButton.addEventListener("click", () => {

	DeviceOrientationEvent.requestPermission();
	document.body.innerHTML += "clicked";

});

connectButton.addEventListener("click", () => {

	if (connectionTypeDropdown.value == "steeringWheel") {



	}

});

addEventListener("deviceorientation", event => {

	document.body.innerHTML += "bruh";
	gyroscopeDataSpan.innerHTML = `Alpha: ${event.alpha}, Beta: ${event.beta}, Gamma: ${event.gamma}`;

});