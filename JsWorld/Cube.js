export{createCube}

function createCube(scale = 1, cx, cy, cz) {
    const Cube = new THREE.BufferGeometry();
    const material = new THREE.MeshBasicMaterial({
        color:0xffffff,
        side: THREE.DoubleSide,
    });
    const vertices = [];
    vertices.push(cx + 0, cy + 0, cz + 0, cx + 0, cy + 1, cz + 0 ,cx + 0, cy + 0, cz + 1);
    vertices.push(cx + 1, cy + 0, cz + 1, cx + 0, cy + 0, cz + 1 ,cx + 1, cy + 0, cz + 0);
    vertices.push(cx + 1, cy + 1, cz + 0, cx + 1, cy + 0, cz + 0 ,cx + 0, cy + 0, cz + 0);
    vertices.push(cx + 1, cy + 1, cz + 0, cx + 1, cy + 1, cz + 1 ,cx + 1, cy + 0, cz + 1);
    vertices.push(cx + 0, cy + 0, cz + 1, cx + 0, cy + 1, cz + 1 ,cx + 1, cy + 1, cz + 1);
    vertices.push(cx + 0, cy + 1, cz + 0, cx + 1, cy + 1, cz + 0 ,cx + 0, cy + 1, cz + 1);
    vertices.push(cx + 0, cy + 1, cz + 0, cx + 0, cy + 1, cz + 1 ,cx + 0, cy + 0, cz + 1);
    vertices.push(cx + 0, cy + 0, cz + 0, cx + 0, cy + 0, cz + 1 ,cx + 1, cy + 0, cz + 0);
    vertices.push(cx + 1, cy + 1, cz + 0, cx + 1, cy + 0, cz + 0 ,cx + 1, cy + 0, cz + 1);
    vertices.push(cx + 0, cy + 0, cz + 0, cx + 1, cy + 1, cz + 0 ,cx + 0, cy + 1, cz + 0);
    vertices.push(cx + 1, cy + 0, cz + 1, cx + 0, cy + 0, cz + 1 ,cx + 1, cy + 1, cz + 1);
    const b = vertices.map(function(x) {return x * scale;});
    Cube.setAttribute("position", new THREE.Float32BufferAttribute(b, 3));
    const mesh = new THREE.Mesh(Cube, material);
    return mesh;
}