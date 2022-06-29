function createCamera(FOV = 35, AS = 1, NEAR = 0.1, FAR = 2000, cx = 0, cy = 0, cz = 0) {
  const camera = new THREE.PerspectiveCamera(
    35, // fov = Field Of View
    1, // aspect ratio (dummy value)
    0.1, // near clipping plane
    2000, // far clipping plane
  );

  // move the camera back so we can view the scene
  camera.position.set(cx, cy, cz);

  return camera;
}

export { createCamera };