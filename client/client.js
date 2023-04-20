console.log = msg => {
	document.body.innerHTML += msg;
};

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
/**
 * @type {HTMLImageElement}
 */
const steeringWheelImage = document.querySelector("#steeringWheel");

let gyroscope = {
	alpha: 0,
	beta: 0,
	gamma: 0
};

permissionButton.addEventListener("click", () => {

	DeviceOrientationEvent.requestPermission();

});

connectButton.addEventListener("click", () => {

	if (connectionTypeDropdown.value == "steeringWheel") {
		
		setInterval(() => {
			
			fetch("/orientation", {
				"method": "POST",
				"headers": {
					"Content-Type": "application/json"	
				},
				"body": JSON.stringify({
					"alpha": gyroscope.alpha,
					"beta": gyroscope.beta,
					"gamma": gyroscope.gamma
				})
			});
			
		}, 100);

		steeringWheelImage.style.display = "block";
		
	}
	
});

addEventListener("deviceorientation", event => {

	gyroscopeDataSpan.innerHTML = `Alpha: ${event.alpha}<br>Beta: ${event.beta}<br>Gamma: ${event.gamma}`;

	gyroscope.alpha = event.alpha;
	gyroscope.beta = event.beta;
	gyroscope.gamma = event.gamma;

});