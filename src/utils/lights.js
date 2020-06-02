import * as THREE from 'three';

const addLights = (lights) => {
  console.log(lights);
  switch (lights.type) {
    case 'ambient': {
      const { args: { color = 0xffffff, intensity = 1 } = {} } = lights;
      const { temps: { position, scale } = {} } = lights;
      const light = new THREE.AmbientLight(color, intensity);
      light.position.set(position.x, position.y, position.z);
      light.scale.set(scale.x, scale.y, scale.z);
      return light;
    }

    default: {
      const light = new THREE.AmbientLight();
      return light;
    }
  }
}

export { addLights };