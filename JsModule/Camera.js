function createCamera(FOV = 35, AS = 1, NEAR = 0.1, FAR = 2000) {
  const camera = new THREE.PerspectiveCamera(
    35, // fov = Field Of View
    1, // aspect ratio (dummy value)
    0.1, // near clipping plane
    2000, // far clipping plane
  );

  // move the camera back so we can view the scene
  camera.position.set(-33 , -1, 10);

  return camera;
}

export { createCamera };