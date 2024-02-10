import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { CreateGround } from "@babylonjs/core/Meshes/Builders/groundBuilder";
import { CreateSphere } from "@babylonjs/core/Meshes/Builders/sphereBuilder";
import { GridMaterial } from "@babylonjs/materials/grid/gridMaterial";

import { Scene } from "@babylonjs/core/scene";
import { Engine } from "@babylonjs/core/Engines/engine";


export function createScene(canvas: HTMLCanvasElement, engine: Engine): Scene {
    
    var scene = new Scene(engine);

    // This creates and positions a free camera (non-mesh)
    var camera = createCamera("camera1", new Vector3(0, 5, -10), scene, canvas);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);
        light.intensity = 0.7;

    // Create a grid material
    var material = new GridMaterial("grid", scene);

    // Our built-in 'sphere' shape.
    var sphere = CreateSphere("sphere1", { segments: 16, diameter: 2 }, scene);

    // Move the sphere upward 1/2 its height
    sphere.position.y = 2;
    sphere.material = material;

    // Our built-in 'ground' shape.
    var ground = CreateGround("ground1", { width: 6, height: 6, subdivisions: 2 }, scene);

    // Affect a material
    ground.material = material;

    return scene;

}