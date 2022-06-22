const radiansPerSecond = THREE.MathUtils.degToRad(720);

THREE.Object3D.prototype.rotateAroundWorldAxis = function() {
    var q = new THREE.Quaternion();

    return function rotateAroundWorldAxis( point, axis, angle ) {

        q.setFromAxisAngle( axis, angle );

        this.applyQuaternion( q );

        this.position.sub( point );
        this.position.applyQuaternion( q );
        this.position.add( point );

        return this;

    }

}();

function createCube3() {
  const cubes = [];
  const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
  const material = new THREE.MeshBasicMaterial();

  for(let i = 0; i< 50; i++) {
    let px = Math.random() < 0.5 ? -1 : 1;
    let py = Math.random() < 0.5 ? -1 : 1;
    let pz = Math.random() < 0.5 ? -1 : 1;
    cubes.push(new THREE.Mesh(geometry, material));
    cubes[i].position.set((2 + Math.random() * 10) * px, (2 + Math.random() * 10) * py, (2 + Math.random() * 10) * pz);
    cubes[i].material.color.setHex( Math.random() * 0xffffff );
  }
  
  for (let i = 0; i < 50; i++)
    cubes[i].tick = (delta, flip, FLIPP, centerCubeVector) => 
        moveRightF(cubes[i], delta, flip, FLIPP, centerCubeVector);

  return cubes;
}

function moveRightF(cube, delta, flip, FLIPP, centerCubeVector){
    // var p = new THREE.Vector3(0, 0, 0);
    var p = centerCubeVector;
    let px = Math.random() < 0.5 ? -1 : 1;
    let py = Math.random() < 0.5 ? -1 : 1;
    let pz = Math.random() < 0.5 ? -1 : 1;
    var ax = new THREE.Vector3(0, 1, 0);
    var ay = new THREE.Vector3(1, 0, 0);
    var az = new THREE.Vector3(0, 0, 1);
    cube.rotation.y += (1 + Math.random() * 2 * px) * delta;
    cube.rotation.x += (1 + Math.random() * 2 * py) * delta;
    cube.rotation.z += (1 + Math.random() * 2 * pz) * delta;
    if(FLIPP == -1)
        cube.rotateAroundWorldAxis(p,ax, Math.random() * flip * delta ) ;
    if(FLIPP == 1)
        cube.rotateAroundWorldAxis(p,ay, Math.random() * flip * delta ) ;
    cube.rotateAroundWorldAxis(p,az, Math.random() * flip * delta ) ;
    if(Math.random() < 0.0001)
        cube.material.color.setHex( Math.random() * 0xffffff );
}   


export { createCube3 };

