
function createPlane(cx = 0, cy = 0, cz = 0, xx = 1000, yy = 1000, rtx = 0, rty = 0, rtz = 0){
    const geometry = new THREE.PlaneGeometry( xx, yy );
    geometry.receiveShadow = true;
    const material = new THREE.MeshPhongMaterial( {color: 0x9b7653, side: THREE.DoubleSide} );
    const plane = new THREE.Mesh( geometry, material ); 
    plane.frustumCulled = false;
    plane.position.set( cx, cy, cz );
    plane.rotation.set( rtx, rty, rtz);
    
    geometry.computeFaceNormals();
    geometry.computeVertexNormals();
    return plane
}

export{createPlane}