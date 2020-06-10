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

    case 'directional': {
      const { args: { color = 0xffffff, intensity = 1, castShadow = true } = {} } = lights;
      const { temps: { position, scale } = {} } = lights;
      const light = new THREE.DirectionalLight(color, intensity);
      light.castShadow = castShadow;
      light.position.set(position.x, position.y, position.z);
      light.scale.set(scale.x, scale.y, scale.z);
      return light;
    }

    case 'hemisphere': {
      const { args: { color = 0xffffff, intensity = 1, skyColor = 0xffffff, groundColor = 0x080820 } = {} } = lights;
      const { temps: { position, scale } = {} } = lights;
      const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
      light.color.set(color);
      light.position.set(position.x, position.y, position.z);
      light.scale.set(scale.x, scale.y, scale.z);
      return light;
    }

    case 'point': {
      const { args: { color = 0xffffff, intensity = 1, distance = 100, decay = 2, power = (Math.PI * 4), castShadow = true } = {} } = lights;
      const { temps: { position, scale } = {} } = lights;
      const light = new THREE.PointLight(color, intensity, distance, decay);
      light.power = power;
      light.castShadow = castShadow;
      light.position.set(position.x, position.y, position.z);
      light.scale.set(scale.x, scale.y, scale.z);
      return light;
    }

    case 'rectarea': {
      const { args: { color = 0xffffff, intensity = 1, width = 100, height = 100 } = {} } = lights;
      const { temps: { position, scale } = {} } = lights;
      const light = new THREE.RectAreaLight(color, intensity, width, height);
      light.position.set(position.x, position.y, position.z);
      light.scale.set(scale.x, scale.y, scale.z);
      return light;
    }

    case 'spot': {
      const { args: { color = 0xffffff, intensity = 1, distance = 100, angle = (Math.PI / 2), penumbra = 0, decay = 2, castShadow = true, power = Math.PI } = {} } = lights;
      const { temps: { position, scale } = {} } = lights;
      const light = new THREE.SpotLight(color, intensity, distance, angle, penumbra, decay);
      light.power = power;
      light.castShadow = castShadow;
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