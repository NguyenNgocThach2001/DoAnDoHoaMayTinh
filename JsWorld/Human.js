function createHead(){
    const geometry = new THREE.BoxBufferGeometry(20, 12, 12);
    const material = new THREE.MeshLambertMaterial({color: 0xC68542});
    const Head = new THREE.Mesh(geometry, material);
    Head.position.set(0, 66, 0);
    return Head;
}

function createArm() {  
    const geometry = new THREE.BoxBufferGeometry(9, 22, 10);
    const material = new THREE.MeshLambertMaterial({color: 0xC68542});
    const Arm = new THREE.Mesh(geometry, material);
    return Arm;
}

function createUpper(){
    const Upper = new THREE.Group();
    const LeftArm = createArm();
    const RightArm = createArm();
    const geometry = new THREE.BoxBufferGeometry(20, 20, 10);
    const material = new THREE.MeshLambertMaterial({color: 0x006400});
    const UpperBody = new THREE.Mesh(geometry, material);
    RightArm.position.set(-14.5,-1,0);
    LeftArm.position.set(14.5,-1,0);
    Upper.position.set(0,50,0);
    Upper.add(LeftArm);
    Upper.add(RightArm);
    Upper.add(UpperBody);
    return Upper;
}

function createLeg(name) {
    const geometry = new THREE.BoxBufferGeometry(9.5, 17, 10);
    const material = new THREE.MeshLambertMaterial({color: 0xC68542});
    const Leg = new THREE.Mesh(geometry, material);
    Leg.name = name;
    return Leg;
}

function createLower(){
    const Lower = new THREE.Group();
    const LeftLeg = createLeg("LeftLeg");
    const RightLeg = createLeg("RightLeg");
    const geometry = new THREE.BoxBufferGeometry(20, 10, 11);
    const material = new THREE.MeshLambertMaterial({color: 0x00008B});
    const LowerBody = new THREE.Mesh(geometry, material);
    RightLeg.position.set(-5,21.5,0);
    LeftLeg.position.set(5,21.5,0);
    LowerBody.position.set(0,35,-0.5);
    Lower.add(LeftLeg);
    Lower.add(RightLeg);
    Lower.add(LowerBody);
    return Lower;
}

function createHuman() {
    const Human = new THREE.Group();
    const head = createHead();
    const Upper = createUpper();
    const Lower = createLower();
    Human.add(head);
    Human.add(Lower);
    Human.add(Upper);
    Human.tick = (delta, flip, FLIPP) => 
        Moving(Human, delta, flip, FLIPP);
    return Human;
}

function Moving(Human, delta, flip, FLIPP){
    
    Human.rotation.y += delta * 15.
    
}

export{createHuman}

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == 87) {
        cube.position.y += ySpeed;
    } else if (keyCode == 83) {
        cube.position.y -= ySpeed;
    } else if (keyCode == 65) {
        cube.position.x -= xSpeed;
    } else if (keyCode == 68) {
        cube.position.x += xSpeed;
    } else if (keyCode == 32) {
        cube.position.set(0, 0, 0);
    }
};

document.addEventListener("keyup", onDocumentKeyUp, false);
function onDocumentKeyUp(event) {
    var keyCode = event.which;
    if (keyCode == 87) {
        cube.position.y += ySpeed;
    } else if (keyCode == 83) {
        cube.position.y -= ySpeed;
    } else if (keyCode == 65) {
        cube.position.x -= xSpeed;
    } else if (keyCode == 68) {
        cube.position.x += xSpeed;
    } else if (keyCode == 32) {
        cube.position.set(0, 0, 0);
    }
};