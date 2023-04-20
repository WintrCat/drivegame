/**
 * @type {HTMLButtonElement}
 */
const permissionButton = document.querySelector("#permissionButton");

permissionButton.addEventListener("click", () => {

	if (DeviceOrientationEvent.requestPermissions) {
		DeviceOrientationEvent.requestPermissions();
	}

});