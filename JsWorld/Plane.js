
function createPlane(){
    const geometry = new THREE.PlaneGeometry( 500, 500 );
    const material = new THREE.MeshBasicMaterial( {color: 0x9b7653, side: THREE.DoubleSide} );
    const plane = new THREE.Mesh( geometry, material ); 
    plane.frustumCulled = false;
    plane.position.set( 0, -1, 0 );
    return plane
}

export{createPlane}