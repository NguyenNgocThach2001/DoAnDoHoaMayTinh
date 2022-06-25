export{createTeapot}
import { createCylinder } from './Cylinder.js';
import { createSphere } from './Sphere.js';

function createTeapot(scale = 1){
    const teapot = new THREE.BufferGeometry();
    const material = new THREE.MeshBasicMaterial({
        color:0xffffff,
        side: THREE.DoubleSide,
        wireframe: true,
        point:true
    });
    var vertices = [];
    const body = createSphere(2, 70, 30, 18, 0, false, 0, 0, 0, true, 0xc4c4c4);
    const head = createSphere(1.8, 30, 30, 10, 0, false, 0, 0, 0.5, false, 0xd4d4d4);
    const tophead = createSphere(0.5, 30, 30, 15, 0, false, 0, 0, 2.3, false, 0xe4e4e4);
    const gun = createCylinder(1, 0,3.8,0, 0.5, 1, 50, false);
    const tail = createSphere(1, 30, 30, 0, 0, false, 0, -5, 0, true, 0xc4c4c4);
    tail.scale.set(0.75, 0.75, 0.75);

    const b = vertices.map(function(x) {return x;});
    teapot.setAttribute("position", new THREE.Float32BufferAttribute(b, 3));
    const mesh = new THREE.Mesh(teapot, material);
    mesh.add(body);
    mesh.add(head);
    mesh.add(tophead);
    mesh.add(gun);
    mesh.add(tail);
    mesh.rotation.set(Math.PI/2, Math.PI, Math.PI);

    mesh.tick = () => 
        Rotate(mesh);
    return mesh;
}

function Rotate(mesh){
    mesh.rotation.x += 0.02;
    mesh.rotation.y += 0.02;
    mesh.rotation.z += 0.02;
}