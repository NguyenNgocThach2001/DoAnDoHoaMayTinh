export{createSphere}

function createSphere(r=1, cx=0, cy=0, cz=0, step = 100){
    const geometry = new THREE.SphereGeometry( 10, 20, 20 );
    const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    const sphere = new THREE.Mesh( geometry, material );
    return sphere;
}