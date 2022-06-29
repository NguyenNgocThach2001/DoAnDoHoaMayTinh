export{createWheel}

function createWheel(r=10, cx=0, cy=0, cz=0, wireframe = false, step = 100, l = 3, r1 = 7, r2 = 6, r3 = 1, d = 3, d1 = 3){
    const Cone = new THREE.BufferGeometry();
    Cone.receiveShadow = true;
    const material = new THREE.MeshPhongMaterial({
        color:0xffffff,
        side: THREE.DoubleSide,
        wireframe: wireframe,
    });
    const vertices = [];
    
    // Vẽ đường tròn ngoài bên trái
    for (var i = 0; i <= step; i++){
        var nx1 = r1*Math.cos(i*2*Math.PI/step);
        var ny1 = r1*Math.sin(i*2*Math.PI/step);
        var ox1 = r1*Math.cos((i-1)*2*Math.PI/step);
        var oy1 = r1*Math.sin((i-1)*2*Math.PI/step);
        var nx2 = r2*Math.cos(i*2*Math.PI/step);
        var ny2 = r2*Math.sin(i*2*Math.PI/step);
        var ox2 = r2*Math.cos((i-1)*2*Math.PI/step);
        var oy2 = r2*Math.sin((i-1)*2*Math.PI/step);
        var oz = 0;
        vertices.push(ox1, oz, oy1,   nx1, oz, ny1,    ox2, oz, oy2);
        vertices.push(ox2, oz, oy2,   nx2, oz, ny2,    nx1, oz, ny1);
    }

    // Vẽ đường tròn trong bên phải
    for (var i = 0; i <= step; i++){
        var nx1 = r1*Math.cos(i*2*Math.PI/step);
        var ny1 = r1*Math.sin(i*2*Math.PI/step);
        var ox1 = r1*Math.cos((i-1)*2*Math.PI/step);
        var oy1 = r1*Math.sin((i-1)*2*Math.PI/step);
        var nx2 = r2*Math.cos(i*2*Math.PI/step);
        var ny2 = r2*Math.sin(i*2*Math.PI/step);
        var ox2 = r2*Math.cos((i-1)*2*Math.PI/step);
        var oy2 = r2*Math.sin((i-1)*2*Math.PI/step);
        var oz = d;
        vertices.push(ox1, oz, oy1,   nx1, oz, ny1,    ox2, oz, oy2);
        vertices.push(ox2, oz, oy2,   nx2, oz, ny2,    nx1, oz, ny1);
    }

    // Nối 2 đường tròn lại
    for (var i = 0; i <= step; i++){
        var nx1 = r1*Math.cos(i*2*Math.PI/step);
        var ny1 = r1*Math.sin(i*2*Math.PI/step);
        var ox1 = r1*Math.cos((i-1)*2*Math.PI/step);
        var oy1 = r1*Math.sin((i-1)*2*Math.PI/step);
        var nx2 = r2*Math.cos(i*2*Math.PI/step);
        var ny2 = r2*Math.sin(i*2*Math.PI/step);
        var ox2 = r2*Math.cos((i-1)*2*Math.PI/step);
        var oy2 = r2*Math.sin((i-1)*2*Math.PI/step);
        vertices.push(ox1, 0, oy1,   nx1, 0, ny1,    ox1, l, oy1);
        vertices.push(ox1, d, oy1,   nx1, 0, ny1,    nx1, d, ny1);
        vertices.push(ox2, 0, oy2,   nx2, 0, ny2,    ox2, l, oy2);
        vertices.push(ox2, d, oy2,   nx2, 0, ny2,    nx2, d, ny2);
    }

    // Vẽ lõi trái
    for (var i = 0; i <= step; i++){
        var nx = r3*Math.cos(i*2*Math.PI/step);
        var ny = r3*Math.sin(i*2*Math.PI/step);
        var ox = r3*Math.cos((i-1)*2*Math.PI/step);
        var oy = r3*Math.sin((i-1)*2*Math.PI/step);
        var oz = 0;
        vertices.push(ox, 0, oy,   nx, 0, ny,  0,0,0);
    }
    // Vẽ lõi phải
    for (var i = 0; i <= step; i++){
        var nx = r3*Math.cos(i*2*Math.PI/step);
        var ny = r3*Math.sin(i*2*Math.PI/step);
        var ox = r3*Math.cos((i-1)*2*Math.PI/step);
        var oy = r3*Math.sin((i-1)*2*Math.PI/step);
        var oz = d;
        vertices.push(ox, d, oy,   nx, d, ny, 0, d, 0);
    }

    // Nối 2 vòng tròn lõi
    for (var i = 0; i <= step; i++){
        var nx = r3*Math.cos(i*2*Math.PI/step);
        var ny = r3*Math.sin(i*2*Math.PI/step);
        var ox = r3*Math.cos((i-1)*2*Math.PI/step);
        var oy = r3*Math.sin((i-1)*2*Math.PI/step);
        vertices.push(ox, 0, oy,   nx, 0, ny,  ox,d,oy);
    }
    for (var i = 0; i <= step; i++){
        var nx = r3*Math.cos(i*2*Math.PI/step);
        var ny = r3*Math.sin(i*2*Math.PI/step);
        var ox = r3*Math.cos((i-1)*2*Math.PI/step);
        var oy = r3*Math.sin((i-1)*2*Math.PI/step);
        vertices.push(ox, d, oy,   nx, d, ny,  nx,0,ny);
    }

    // Nối lõi và vòng ngoài
    var angleStep = Math.PI / step;
    var stepPerPlank = d1 / angleStep;
    var stepBetweenPlank = (step - (3 * d1) / angleStep)/3;
    var plankIndex = 0;
    for (var i = 0; i <= 2; i++){
        var nx2 = r2*Math.cos(plankIndex*2*Math.PI/step);
        var ny2 = r2*Math.sin(plankIndex*2*Math.PI/step);
        var ox2 = r2*Math.cos((plankIndex+stepPerPlank)*2*Math.PI/step);
        var oy2 = r2*Math.sin((plankIndex+stepPerPlank)*2*Math.PI/step);
        var nx3 = r3*Math.cos(plankIndex*2*Math.PI/step);
        var ny3 = r3*Math.sin(plankIndex*2*Math.PI/step);
        var ox3 = r3*Math.cos((plankIndex-stepPerPlank)*2*Math.PI/step);
        var oy3 = r3*Math.sin((plankIndex-stepPerPlank)*2*Math.PI/step);
        vertices.push(nx2, l/2 - l/4, ny2,  ox2, l/2- l/4, oy2,  ox3,l/2- l/4,oy3);
        vertices.push(nx3, l/2- l/4, ny3,   ox3, l/2- l/4, oy3,  ox2,l/2- l/4,oy2);
        plankIndex += stepBetweenPlank + stepPerPlank;
    }

    plankIndex = 0;
    for (var i = 0; i <= 2; i++){
        var nx2 = r2*Math.cos(plankIndex*2*Math.PI/step);
        var ny2 = r2*Math.sin(plankIndex*2*Math.PI/step);
        var ox2 = r2*Math.cos((plankIndex+stepPerPlank)*2*Math.PI/step);
        var oy2 = r2*Math.sin((plankIndex+stepPerPlank)*2*Math.PI/step);
        var nx3 = r3*Math.cos(plankIndex*2*Math.PI/step);
        var ny3 = r3*Math.sin(plankIndex*2*Math.PI/step);
        var ox3 = r3*Math.cos((plankIndex-stepPerPlank)*2*Math.PI/step);
        var oy3 = r3*Math.sin((plankIndex-stepPerPlank)*2*Math.PI/step);
        vertices.push(nx2, l/2 + l/4, ny2,   ox2, l/2 + l/4, oy2,  ox3,l/2 + l/4,oy3);
        vertices.push(nx3, l/2 + l/4, ny3,   ox3, l/2 + l/4, oy3,  ox2,l/2 + l/4,oy2);
        plankIndex += stepBetweenPlank + stepPerPlank;
    }

    // Nối thêm lõi và ngoài
    plankIndex = 0;
    for (var i = 0; i <= 2; i++){
        var nx2 = r2*Math.cos(plankIndex*2*Math.PI/step);
        var ny2 = r2*Math.sin(plankIndex*2*Math.PI/step);
        var ox2 = r2*Math.cos((plankIndex+stepPerPlank)*2*Math.PI/step);
        var oy2 = r2*Math.sin((plankIndex+stepPerPlank)*2*Math.PI/step);
        var nx3 = r3*Math.cos(plankIndex*2*Math.PI/step);
        var ny3 = r3*Math.sin(plankIndex*2*Math.PI/step);
        var ox3 = r3*Math.cos((plankIndex-stepPerPlank)*2*Math.PI/step);
        var oy3 = r3*Math.sin((plankIndex-stepPerPlank)*2*Math.PI/step);
        vertices.push(nx2, l/4, ny2,   nx3, l/4, ny3,  nx2,l/4 + l/2,ny2);
        vertices.push(nx2, l/4 + l/2, ny2,   nx3, l/4 + l/2, ny3,  nx3,l/4,ny3);
        vertices.push(ox2, l/4, oy2,   ox3, l/4, oy3,  ox2,l/4 + l/2,oy2);
        vertices.push(ox2, l/4 + l/2, oy2,   ox3, l/4 + l/2, oy3,  ox3,l/4,oy3);
        plankIndex += stepBetweenPlank + stepPerPlank;
    }

    const b = vertices.map(function(x) {return x;});
    Cone.setAttribute("position", new THREE.Float32BufferAttribute(b, 3));
    const mesh = new THREE.Mesh(Cone, material);
    mesh.position.set(cx, cy, cz);
    mesh.geometry.computeFaceNormals();
    mesh.geometry.computeVertexNormals();
    return mesh;
}