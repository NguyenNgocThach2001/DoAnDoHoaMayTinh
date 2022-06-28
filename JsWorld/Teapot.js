export{createTeapot}
import { createCylinder } from './Cylinder.js';
import { createSphere } from './Sphere.js';
import { createCircleArray} from './CreateCircleArray.js';

function createTeapot(scale = 1){
    const body = createSphere(2, 70, 30, 18, 0, false, 0, 0, 0, true, 0xc4c4c4);
    const head = createSphere(1.8, 30, 30, 10, 0, false, 0, 0, 0.5, false, 0xd4d4d4);
    const tophead = createSphere(0.5, 30, 30, 15, 0, false, 0, 0, 2.3, false, 0xe4e4e4);
    const gun = createCylinder(1, 0,3.8,0, 0.5, 1, 50, false);
    var tailX = [1, 2, 4, 3];
    var tailY = [-3, 0, 2, -4];
    var gunnX = [0, 1, 3, 3];
    var gunnY = [0, 0, 0, 2.5];
    var group = new THREE.Object3D();
    const tail = createGun(0, 0.3, 0, 0, 0, false, 100, tailX, tailY, false);
    const gunn = createGun(0, 2.5, 0, 0, 0, false, 100, gunnX, gunnY, true);
    gunn.rotation.x = 1;
    gunn.rotation.y = 1.55;
    gunn.rotation.z += 6.6;
    gunn.position.y += 1;
    tail.position.y -= 5;
    tail.rotation.x += 1.55;
    tail.rotation.y += 1.55;
    tail.rotation.z += 1.55;
    tail.position.z -= 1.55;
    tail.scale.set(0.75, 0.75, 0.75);
    // mesh.add(gun);
    
    body.name = "Body";
    head.name = "Head";
    tophead.name = "TopHead";
    tail.name = "Tail"
    gunn.name = "Gunn";
    group.add(tail);
    group.add(gunn);
    group.add(body);
    group.add(head);
    group.add(tophead);
    group.rotation.set(Math.PI/2, Math.PI, Math.PI);
    group.scale.set(0.7, 0.8, 1);
    group.tick = () => 
        Rotate(group);
    return group;
}

function createGun(r1 = 0, r2 = 3, cx = 0, cy = 0, cz = 0, wireframe = true, step = 100, bezierX = [], bezierY = [], smaller = true, color = 0xd4d4d4){
    var xu = 0.0 , yu = 0.0 , u = 0.0 ;
    var pxu = 0.0, pxy = 0.0;
    var u = 0 ;
    const Gun = new THREE.BufferGeometry();
    const material = new THREE.MeshBasicMaterial({
        color:0xd4d4d4,
        side: THREE.DoubleSide,
        wireframe: wireframe,
    });
    var vertices = [];
    for(u = 1/step ; u <= 1.0 ; u += 1/step) {
        var ou = u - 1/step;
        pxu = Math.pow(1-ou,3)*bezierX[0]+3*ou*Math.pow(1-ou,2)*bezierX[1]+3*Math.pow(ou,2)*(1-ou)*bezierX[2] + Math.pow(ou,3)*bezierX[3];
        pxy = Math.pow(1-ou,3)*bezierY[0]+3*ou*Math.pow(1-ou,2)*bezierY[1]+3*Math.pow(ou,2)*(1-ou)*bezierY[2] + Math.pow(ou,3)*bezierY[3];
        xu =  Math.pow(1-u,3)*bezierX[0]+3*u*Math.pow(1-u,2)*bezierX[1]+3*Math.pow(u,2)*(1-u)*bezierX[2] + Math.pow(u,3)*bezierX[3];
        yu =  Math.pow(1-u,3)*bezierY[0]+3*u*Math.pow(1-u,2)*bezierY[1]+3*Math.pow(u,2)*(1-u)*bezierY[2] + Math.pow(u,3)*bezierY[3];
        var R1 = r2;
        if(smaller == true)
            R1 = Math.max(r2 / step * (100 - u * 100), r2/(step / 10));
        var R2 = r2;
        if(smaller == true)
            R2 = Math.max(r2 / step * (100 - ou * 100), r2/(step / 10));
        vertices.push.apply(vertices, createCircleArray(xu, yu, 0, R1, 100, pxu, pxy, 0, R2, 100));
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