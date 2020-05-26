import * as THREE from 'three';

const addCameras = (cameras) => {
  switch (cameras.type) {
    case 'perspective': {
      const { args: { fov = 75, width = 300, height = 300, near = 0.1, far = 1000 } = {} } = cameras;
      const { temps: { position, scale } = {} } = cameras;
      const camera = new THREE.PerspectiveCamera(fov, width / height, near, far);
      camera.position.set(position.x, position.y, position.z);
      camera.scale.set(scale.x, scale.y, scale.z);
      return camera;
    }

    case 'orthographic': {
      const { args: { left = -2, right = 2, top = 2, bottom = -2, near = 0.1, far = 1000 } = {} } = cameras;
      const { temps: { position, scale } = {} } = cameras;
      const camera = new THREE.OrthographicCamera(left, right, top, bottom, near, far);
      camera.position.set(position.x, position.y, position.z);
      camera.scale.set(scale.x, scale.y, scale.z);
      return camera;
    }

    default: {
      const camera = new THREE.PerspectiveCamera(75, 300 / 300, 0.1, 1000);
      camera.position.z = 5;
      return camera;
    }
  }
}

export {
  addCameras
};