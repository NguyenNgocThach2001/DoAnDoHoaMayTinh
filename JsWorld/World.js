import { createCamera } from '../JsModule/Camera.js';
import { createCube } from '../JsWorld/Cube.js';
import { createCylinder } from '../JsWorld/Cylinder.js';
import { createCone } from '../JsWorld/Cone.js';
import { createScene } from '../JsModule/Scene.js';
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
import { createRenderer } from '../JsModule/Renderer.js';
import { Resizer } from '../JsModule/Resizer.js';
import { createHuman} from './Human.js';
import { createPlane} from './Plane.js';
import { Loop} from '../JsModule/Loop.js';
import { OrbitControls } from 'https://unpkg.com/three@0.119.1/examples/jsm/controls/OrbitControls.js';

let camera;
let renderer;
let scene;
let loop;
let controls;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    controls = new OrbitControls(camera, renderer.domElement);
    controls.update();
    loop = new Loop(camera, scene, renderer, controls);
    container.append(renderer.domElement);

    const cube = createCube(5);
    const cone = createCone(5,0,0,0,5);
    const cylinder = createCylinder(5, 0, 0, 0 ,5);
    // const cube1 = createCube1();
    // const cube2 = createCube();
    // const cube3 = createCube2();
    // const cube4 = createCube3();
    // let human = createHuman();
    // human.scale.set(0.05, 0.05 , 0.05);
    // cube1.position.x += 2;
    // cube1.rotation.set(0, 0, 0);
    // cube2.rotation.set(0, 0, 0);
    // loop.updatables.push(cube1);
    // loop.updatables.push(cube2);
    // loop.updatables.push(human);
    // for(let i = 0; i < 4; i++) {
    //   loop.updatables.push(cube3[i]);
    //   scene.add(cube3[i]);
    // }

    // for(let i = 0; i < 50; i++) {
    //   loop.updatables.push(cube4[i]);
    //   scene.add(cube4[i]);
    // }


    // scene.add(cube1);
    // scene.add(cube2);
    // scene.add(human);

    // scene.add(cube);
    scene.add(cone);
    // scene.add(cylinder);
    const resizer = new Resizer(container, camera, renderer);
    resizer.onResize = () => {
      this.render();
    };
  }
  
  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }
  
  stop() {
    loop.stop();
  }

}

export { World };


