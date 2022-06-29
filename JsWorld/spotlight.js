export{createSpotLight}

function createSpotLight(cx=0, cy=20, cz=0, dt = 0, angle = 1, penumbra = 0.4, shadow = true, color = 0xeeeeee){
    const spotLight = new THREE.SpotLight(color);
    spotLight.position.set(cx, cy, cz);
    spotLight.distance = dt; // 0 là vô hạn
    spotLight.angle = Math.PI * angle;
    spotLight.castShadow = shadow;
    spotLight.penumbra = penumbra;
    spotLight.tick = (delta, flip, FLIPP, centerCubeVector) => 
        moveRightF(spotLight, delta, flip, FLIPP, centerCubeVector);
    return spotLight;
}

function moveRightF(spotLight, delta, flip, FLIPP, centerCubeVector){
    spotLight.position.x += 200 * delta * FLIPP;
}   