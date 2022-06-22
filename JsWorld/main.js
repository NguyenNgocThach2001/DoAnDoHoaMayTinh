import { World } from './World.js';

function main() {
    const container = document.querySelector('#scene-container');
  
    const world = new World(container);
  
    world.start();
  }
main();



// const container = document.querySelector('#scene-container');
// const scene = new THREE.Scene();
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
// scene.add(ambientLight);

// const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
// directionalLight.position.set(200, 500, 300);
// scene.add(directionalLight);  

// const aspectRatio = window.innerWidth / window.innerHeight;
// const cameraWidth = 150;
// const cameraHeight = cameraWidth / aspectRatio;

// const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );

// camera.position.set(200, 100, 200);

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(container.offsetWidth, container.offsetHeight);
// renderer.render(scene, camera);
// document.body.appendChild(container);
// container.appendChild(renderer.domElement); 

// const controls = new THREE.OrbitControls( camera, renderer.domElement );
// controls.update();

// const human = new Human();
// const xSpeed = 5;
// const zSpeed = 5;

// const plane = new Plane();
// plane.instance.rotation.x = Math.PI / 2;
// scene.add(human.instance);
// scene.add(plane.instance);

// function animate() {
//     requestAnimationFrame(animate);
//     controls.update();
//     renderer.render(scene, camera);
// }

// document.addEventListener("keydown", onDocumentKeyDown, false);
//     function onDocumentKeyDown(event) {
//         const keyCode = event.which;
//         if (keyCode == 87) {
//             human.instance.position.z -= zSpeed;
//             human.MovingForward();
//         } else if (keyCode == 83) {
//             human.instance.position.z += zSpeed;
//         } else if (keyCode == 65) {
//             human.instance.position.x -= xSpeed;
//         } else if (keyCode == 68) {
//             human.instance.position.x += xSpeed;
//         } else if (keyCode == 32) {
//             //Jump();
//         }
//     };
// animate();
