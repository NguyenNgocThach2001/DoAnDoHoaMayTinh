export{createCylinder}

function createCylinder(scale = 1, cx=0,cy=0,cz=0, r = 10, h = 10, step = 100) {
    const Cylinder = new THREE.BufferGeometry();
    const material = new THREE.MeshBasicMaterial({
        color:0xffffff,
        side: THREE.DoubleSide,
        // wireframe: true,
    });
    const vertices = [];
    for (var i = 0; i <= step; i++){
        var nx = r*Math.cos(i*2*Math.PI/step);
        var ny = r*Math.sin(i*2*Math.PI/step);
        var ox = r*Math.cos((i-1)*2*Math.PI/step);
        var oy = r*Math.sin((i-1)*2*Math.PI/step);
        var oz = 0;
        vertices.push(0,0,0, nx,0,ny, ox, oz, oy);
    }
    for (var i = 0; i <= step; i++){
        var nx = r*Math.cos(i*2*Math.PI/step);
        var ny = r*Math.sin(i*2*Math.PI/step);
        var ox = r*Math.cos((i-1)*2*Math.PI/step);
        var oy = r*Math.sin((i-1)*2*Math.PI/step);
        var oz = h;
        vertices.push(0,h,0, nx,h,ny, ox, oz, oy);
    }
    for (var i = 0; i <= step; i++){
        var nx = r*Math.cos(i*2*Math.PI/step);
        var ny = r*Math.sin(i*2*Math.PI/step);
        var ox = r*Math.cos((i-1)*2*Math.PI/step);
        var oy = r*Math.sin((i-1)*2*Math.PI/step);
        var oz = 0;
        vertices.push(nx,0,ny, nx,h,ny, ox, oz, oy);
        if(i == step){
            var nnx = r*Math.cos(0*2*Math.PI/step);
            var nny = r*Math.sin(0*2*Math.PI/step);
            vertices.push(0,0,0, nx,h,ny, nnx, 0, nny);
        }
    }
    for (var i = 0; i <= step; i++){
        var nx = r*Math.cos(i*2*Math.PI/step);
        var ny = r*Math.sin(i*2*Math.PI/step);
        var ox = r*Math.cos((i-1)*2*Math.PI/step);
        var oy = r*Math.sin((i-1)*2*Math.PI/step);
        var oz = h;
        vertices.push(0,h,0, nx,0,ny, ox, oz, oy);
        if(i == step){
            var nnx = r*Math.cos(0*2*Math.PI/step);
            var nny = r*Math.sin(0*2*Math.PI/step);
            vertices.push(0,h,0, nx,0,ny, nnx, h, nny);
        }
    }
    const b = vertices.map(function(x) {return x * scale;});
    Cylinder.setAttribute("position", new THREE.Float32BufferAttribute(b, 3));
    const mesh = new THREE.Mesh(Cylinder, material);
    return mesh;
}