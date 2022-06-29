const radiansPerSecond = THREE.MathUtils.degToRad(180);

let moveLeft = 0;
let moveRight = 0;
let moveUp = 0;
let moveDown = 0;
let lastX = 0;
let lastZ = 0;

function createCube() {
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  geometry.faces = new THREE.Color(0x22FFFF);//Rear 2

  const material = new THREE.MeshPhongMaterial();

  const cube = new THREE.Mesh(geometry, material);
  cube.material.color.setHex( Math.random() * 0xffffff );
  // cube.tick = (delta, flip) => {
  //   if(moveRight == 1) 
  //     moveRightF(cube, delta);
  //   if(moveLeft == 1)
  //     moveLeftF(cube, delta);
  //   if(moveUp == 1)
  //     moveUpF(cube, delta);
  //   if(moveDown == 1)
  //     moveDownF(cube, delta);
  // };
  return cube;
}

function finalStep(val, last){
  const Val = Math.abs(val);
  const rotation = [0, THREE.MathUtils.degToRad(90), THREE.MathUtils.degToRad(180), THREE.MathUtils.degToRad(270)]
  for (let i = 0; i < 4; i++)
    console.log(i + ": " + rotation[i] + " " + val)
  if(Math.abs(rotation[(last + 1) % 4] - Math.abs(Val)) <= 0.7)
    return rotation[(last + 1) % 4];
  return val;  
}

function moveRightF(cube, delta){
  cube.position.x += 10 * delta;
  cube.rotation.z = (cube.rotation.z + radiansPerSecond * - delta) % (2 * Math.PI);
  const finalstep = finalStep(cube.rotation.z, lastZ);
  if(finalstep != cube.rotation.z) {
    cube.rotation.z = finalStep(cube.rotation.z, lastZ);
    lastZ= (lastZ + 1) % 4
    stopMoving();
  }
}

function moveLeftF(cube, delta){
  cube.position.x -= 10 * delta;
  cube.rotation.z = (cube.rotation.z + radiansPerSecond * delta)  % (2 * Math.PI);
}

function moveUpF(cube, delta){
  cube.position.y += 10 * delta;
  cube.rotation.x = (cube.rotation.x + radiansPerSecond * -delta) % (2 * Math.PI);
}

function moveDownF(cube, delta){
  cube.position.y -= 10 * delta;
  cube.rotation.x = (cube.rotation.x + radiansPerSecond * delta) % (2 * Math.PI)
}

function stopMoving(){
  moveRight = 0;
  moveLeft = 0;
  moveUp = 0;
  moveDown = 0;
}

document.addEventListener("keydown", onDocumentKeyUp, false);
  function onDocumentKeyUp(event) {
      const keyCode = event.which;
      if (keyCode == 87) {
          if(moveDown == 1) moveDown = 0;
          moveUp = 1;  
      } else if (keyCode == 83) {
          if(moveUp == 1) moveUp = 0;
          moveDown = 1;
      }else if (keyCode == 65) {
          if(moveRight == 1) moveRight = 0;
          moveLeft = 1;
      } else if (keyCode == 68) {
          if(moveLeft == 1) moveLeft = 0;
          moveRight = 1;
      } else if (keyCode == 32) {
          //Jump();
      }
  };

export { createCube };

