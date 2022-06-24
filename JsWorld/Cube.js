export{createCube}

function createCube(scale = 1) {
    const Cube = new THREE.BufferGeometry();
    const material = new THREE.MeshBasicMaterial({
        color:0xffffff,
        side: THREE.DoubleSide,
    });
    const vertices = [];
    vertices.push(0,0,0, 0,1,0 ,0,0,1);
    vertices.push(1,0,1, 0,0,1 ,1,0,0);
    vertices.push(1,1,0, 1,0,0 ,0,0,0);
    vertices.push(1,1,0, 1,1,1 ,1,0,1);
    vertices.push(0,0,1, 0,1,1 ,1,1,1);
    vertices.push(0,1,0, 1,1,0 ,0,1,1);
    vertices.push(0,1,0, 0,1,1 ,0,0,1);
    vertices.push(0,0,0, 0,0,1 ,1,0,0);
    vertices.push(1,1,0, 1,0,0 ,1,0,1);
    vertices.push(0,0,0, 1,1,0 ,0,1,0);
    vertices.push(1,0,1, 0,0,1 ,1,1,1);
    const b = vertices.map(function(x) {return x * scale;});
    Cube.setAttribute("position", new THREE.Float32BufferAttribute(b, 3));
    const mesh = new THREE.Mesh(Cube, material);
    return mesh;
}