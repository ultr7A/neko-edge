import { FreeCamera, Scene } from "@babylonjs/core";

type User = {
    camera: FreeCamera;
    keys: {};
}


export function createUser(camera: FreeCamera, scene: Scene): User {

    return {
        camera,
        keys: {},
    }
}