function createCircleArray(cx=0,cy=0,cz=0, r = 10, step = 100) {
    const vertices = [];

    for (var i = 0; i <= step; i++){
        var nx = r*Math.cos(i*2*Math.PI/step);
        var ny = r*Math.sin(i*2*Math.PI/step);
        var ox = r*Math.cos((i-1)*2*Math.PI/step);
        var oy = r*Math.sin((i-1)*2*Math.PI/step);
        var oz = 0;
        vertices.push(cx,cy,cz, cx + nx,cy +0, cz+ ny, cx + ox, cy + oz, cz+ oy);
    }
    return vertices;
}

export{createCircleArray};