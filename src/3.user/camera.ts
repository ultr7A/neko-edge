import { FreeCamera, Vector3, KeyboardInfo, Scene } from "@babylonjs/core";
import { KeyboardEventTypes } from "@babylonjs/core";

export const keys = {};

export function createCamera(name: string, position: Vector3, scene: Scene, canvas: HTMLCanvasElement): FreeCamera {
    const camera = new FreeCamera(name, position, scene);

    scene.onKeyboardObservable.add((kbInfo) => {
        if (kbInfo.type === KeyboardEventTypes.KEYDOWN) {
            keys[kbInfo.event.key] = true;
        } else if (kbInfo.type === KeyboardEventTypes.KEYUP) {
            keys[kbInfo.event.key] = false;
        }
    });

    camera.attachControl(canvas, true);

    return camera;
}