import PinchZoom from "pinch-zoom-js"

document.addEventListener("DOMContentLoaded", function() {
	const sceneEl = document.querySelector('a-scene');
	let pz = new PinchZoom(sceneEl);

	/*
	const arSystem = sceneEl.systems["mindar-image-system"];
	const exampleTarget = document.querySelector('#example-target');
	const exampleTargetLink = document.querySelector('#example-target-link');
	var socrates = document.querySelector('#socratesa');
    
	// detect target found
	exampleTarget.addEventListener("targetFound", event => {
	  console.log("target found");
	});
	// detect target lost
	exampleTarget.addEventListener("targetLost", event => {
	  console.log("target lost");
	});
    // detect click event
	exampleTargetLink.addEventListener("click", event => {
		console.log("CLICK");
        socrates.object3D.visible = !socrates.object3D.visible;
    });*/
	
});
//    <a-text id="text" value="Text" color="black" align="center" width="2" position="0 0 0" geometry="primitive:plane; height: 0.1; width: 2;" material="opacity: 0.5" text="Text"></a-text>
      