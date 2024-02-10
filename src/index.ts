import { Engine } from "@babylonjs/core/Engines/engine";


import { WebXRExperienceHelper } from "@babylonjs/core/XR/webXRExperienceHelper";
import { createScene } from "./2.world/world";

// Get the canvas element from the DOM.

const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;

// Associate a Babylon Engine to it.
let engine;

if (canvas != null) {
    engine = new Engine(canvas as HTMLCanvasElement, false);
}

const scene = createScene(canvas, engine);


WebXRExperienceHelper.CreateAsync(scene).then((xrHelper) => {

}, (error) => {
  console.error(error);
})

// Render every frame
engine.runRenderLoop(() => {
  scene.render();
});