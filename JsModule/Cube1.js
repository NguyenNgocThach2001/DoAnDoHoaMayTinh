const radiansPerSecond = THREE.MathUtils.degToRad(720);

let flippy = 1;
let flippx = 1;

function createCube1() {
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const material = new THREE.MeshPhongMaterial();

  const cube = new THREE.Mesh(geometry, material);
  cube.material.color.setHex( Math.random() * 0xffffff );
  cube.tick = (delta, flip) => {
      moveRightF(cube, delta);
  };
  return cube;
}

function moveRightF(cube, delta, centerCubeVector){
  
  cube.position.x += 50 * delta * flippx;
  cube.position.y -= 25 * delta * flippy;
  cube.rotation.z = (cube.rotation.z + radiansPerSecond * - delta) % (2 * Math.PI);

  if(cube.position.x > 50 && cube.position.y < -25) {
    flippy = -1;
  }
  if(cube.position.y > 0 && flippy == -1) {
    flippx = -1;
  }
  if(cube.position.x < 0 && flippx == -1){
    flippx = 1;
    flippy = -1;
  }
  if(cube.position.y > 25 && flippy == -1) {
    flippy = 1;
    
  }
  if(cube.position.y <= 0 && flippy == 1){
      flippy = 1;
      flippx = 1;
      cube.material.color.setHex( Math.random() * 0xffffff );
  }
}

export { createCube1 };

