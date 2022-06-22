const radiansPerSecond = THREE.MathUtils.degToRad(720);

let flippy = 1;
let flippx = 1;
let flippz = 1;

function createCube2() {
  const cubes = [];
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial();
  for(let i = 0; i< 4; i++) {
    cubes.push(new THREE.Mesh(geometry, material));
    cubes[i].material.color.setHex( Math.random() * 0xffffff );
  }
  for (let i = 0; i < 4; i++)
    cubes[i].tick = (delta, flip) => {
        if(i > 1)
            moveRightF(cubes[i], delta, flip);
        else 
            moveRightF(cubes[i], delta, -flip);
    }

  return cubes;
}

function moveRightF(cube, delta, flip){
  cube.position.x += 50 * delta * flippx;
  cube.position.y -= 25 * delta * flippy;
  cube.position.z += 25 * delta * flip * flippz;
  cube.rotation.z = (cube.rotation.z + THREE.MathUtils.degToRad(720) * - delta) % (2 * Math.PI);
  cube.rotation.y = (cube.rotation.y + THREE.MathUtils.degToRad(1080) * - delta) % (2 * Math.PI);
  cube.rotation.x = (cube.rotation.x + THREE.MathUtils.degToRad(360) * - delta) % (2 * Math.PI);
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
  }
  if(cube.position.z > 25 || cube.position.z < -25)
    flippz = - flippz
}

export { createCube2 };

