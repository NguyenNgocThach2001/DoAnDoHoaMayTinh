function createCircleArray(cx1=0,cy1=0,cz1=0, r1 = 10, step = 100, cx2 = 0, cy2 = 0, cz2 = 0, r2 = 10, step2 = 100) {
    const vertices = [];

    for (var i = 1; i <= step; i++){
        var nx1 = r1*Math.cos(i*2*Math.PI/step);
        var ny1 = r1*Math.sin(i*2*Math.PI/step);
        var ox1 = r1*Math.cos((i-1)*2*Math.PI/step);
        var oy1 = r1*Math.sin((i-1)*2*Math.PI/step);

        var nx2 = r2*Math.cos(i*2*Math.PI/step);
        var ny2 = r2*Math.sin(i*2*Math.PI/step);
        var ox2 = r2*Math.cos((i-1)*2*Math.PI/step);
        var oy2 = r2*Math.sin((i-1)*2*Math.PI/step);
        vertices.push(cx2+nx2,cy2+0,cz2+ny2,  cx1+nx1,cy1+0,cz1+ny1,  cx1+ox1,cy1,cz1+oy1);
        vertices.push(cx2+nx2,cy2+0,cz2+ny2,  cx1+ox1,cy1+0,cz1+oy1,  cx2+ox2,cy2,cz2+oy2);
        // vertices.push(cx1 + nx1, cy1 + ny1, 0,   cx1 + ox1, cy1 + oy1, 0,     cx2 + ox2, cy2 + oy2, 0);
        // vertices.push(cx1 + nx1, cy1 + ny1, 0,   cx2 + nx2, cy2 + ny2, 0,     cx2 + ox2, cy2 + oy2, 0);
    }

    return vertices;
}

export{createCircleArray};