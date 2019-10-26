import { DemoManager } from "three-demo";
import { WebGLRenderer } from "three";

import { OctreeDemo } from "./demos/OctreeDemo.js";

/**
 * A demo manager.
 *
 * @type {DemoManager}
 * @private
 */

let manager;

/**
 * The main render loop.
 *
 * @private
 * @param {DOMHighResTimeStamp} now - The current time.
 */

function render(now) {

	requestAnimationFrame(render);
	manager.render(now);

}

/**
 * Handles demo change events.
 *
 * @private
 * @param {Event} event - An event.
 */

function onChange(event) {

	document.getElementById("viewport").children[0].style.display = "initial";

}

/**
 * Handles demo load events.
 *
 * @private
 * @param {Event} event - An event.
 */

function onLoad(event) {

	document.getElementById("viewport").children[0].style.display = "none";

}

/**
 * Starts the program.
 *
 * @private
 * @param {Event} event - An event.
 */

window.addEventListener("load", function main(event) {

	const viewport = document.getElementById("viewport");

	// Create a custom renderer.
	const renderer = new WebGLRenderer({ antialias: true });
	renderer.setSize(viewport.clientWidth, viewport.clientHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setClearColor(0x000000);

	// Initialize the demo manager.
	manager = new DemoManager(viewport, {
		aside: document.getElementById("aside"),
		renderer: renderer
	});

	// Setup demo switch and load event handlers.
	manager.addEventListener("change", onChange);
	manager.addEventListener("load", onLoad);

	// Register demos.
	const demo = new OctreeDemo();

	if(demo.id !== window.location.hash.slice(1)) {

		window.location.hash = "";

	}

	manager.addDemo(demo);

	// Start rendering.
	render();

});

/**
 * Handles browser resizing.
 *
 * @private
 * @param {Event} event - An event.
 */

window.addEventListener("resize", (function() {

	let timeoutId = 0;

	function handleResize(event) {

		const width = event.target.innerWidth;
		const height = event.target.innerHeight;

		manager.setSize(width, height);

		timeoutId = 0;

	}

	return function onResize(event) {

		if(timeoutId === 0) {

			timeoutId = setTimeout(handleResize, 66, event);

		}

	};

}()));

/**
 * Toggles the visibility of the interface on Alt key press.
 *
 * @private
 * @param {Event} event - An event.
 */

document.addEventListener("keydown", function onKeyDown(event) {

	const aside = this.getElementById("aside");

	if(event.altKey && aside !== null) {

		event.preventDefault();
		aside.style.visibility = (aside.style.visibility === "hidden") ? "visible" : "hidden";

	}

});
