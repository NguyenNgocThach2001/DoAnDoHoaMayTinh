export{createTeapot}
import { createCylinder } from './Cylinder.js';
import { createSphere } from './Sphere.js';
import { createCircleArray} from './CreateCircleArray.js';

function createTeapot(scale = 1){
    const teapot = new THREE.BufferGeometry();
    const material = new THREE.MeshBasicMaterial({
        color:0xffffff,
        side: THREE.DoubleSide,
        wireframe: true,
        point:true
    });
    const body = createSphere(2, 70, 30, 18, 0, false, 0, 0, 0, true, 0xc4c4c4);
    const head = createSphere(1.8, 30, 30, 10, 0, false, 0, 0, 0.5, false, 0xd4d4d4);
    const tophead = createSphere(0.5, 30, 30, 15, 0, false, 0, 0, 2.3, false, 0xe4e4e4);
    const gun = createCylinder(1, 0,3.8,0, 0.5, 1, 50, false);
    const tail = createSphere(1, 30, 30, 0, 0, false, 0, -5, 0, true, 0xc4c4c4);
    const gunn = createGun(0, 3, 0, 0, 0);
    tail.scale.set(0.75, 0.75, 0.75);

    const mesh = new THREE.Mesh(teapot, material);
    mesh.add(body);
    mesh.add(head);
    mesh.add(tophead);
    mesh.add(gun);
    mesh.add(tail);
    mesh.add(gunn);
    mesh.rotation.set(Math.PI/2, Math.PI, Math.PI);

    mesh.tick = () => 
        Rotate(mesh);
    return mesh;
}

function createGun(r1 = 0, r2 = 3, cx = 0, cy = 0, cz = 0, wireframe = false, step = 100){
    var bezierX = [0, 0, 15, 15];
    var bezierY = [0, -20, 0, 20];
    var xu = 0.0 , yu = 0.0 , u = 0.0 ;
    var u = 0 ;
    const Gun = new THREE.BufferGeometry();
    const material = new THREE.MeshBasicMaterial({
        color:0xffffff,
        side: THREE.DoubleSide,
        wireframe: wireframe,
    });
    var vertices = [];
    for(u = 0.0 ; u <= 1.0 ; u += 1/step) {
        xu = Math.pow(1-u,3)*bezierX[0]+3*u*Math.pow(1-u,2)*bezierX[1]+3*Math.pow(u,2)*(1-u)*bezierX[2] + Math.pow(u,3)*bezierX[3];
        yu = Math.pow(1-u,3)*bezierY[0]+3*u*Math.pow(1-u,2)*bezierY[1]+3*Math.pow(u,2)*(1-u)*bezierY[2] + Math.pow(u,3)*bezierY[3];
        vertices.push.apply(vertices, createCircleArray(xu, yu, 0, 5, 100));
    }
    Gun.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    const mesh = new THREE.Mesh(Gun, material);
    console.log(vertices);
    return mesh;
}

function Rotate(mesh){
    mesh.rotation.x += 0.02;
    mesh.rotation.y += 0.02;
    mesh.rotation.z += 0.02;
}